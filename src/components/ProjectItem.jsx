import { ListItem } from "@material-tailwind/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
  Typography,
  ListItemPrefix,
} from "@material-tailwind/react";
import ProjectDeleteDialog from "./ProjectDeleteDialog";
import { useContext } from "react";
import { ProjectsContext } from "../store/projects-context";

export default function ProjectItem({
  project,
  onProjectClickHandle,
  onDeleteProject,
}) {
  const projectContext = useContext(ProjectsContext);
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onDialogOpenHandler = (e) => {
    setIsOpen(!isOpen);
    e.stopPropagation();
  };

  const onConfirmDeleteHandler = (e) => {
    projectContext.deleteProject(project.id);
    setIsOpen(!isOpen);
    onDeleteProject();
    e.stopPropagation();
  };

  let content = project.tasks.length ? (
    <Typography className="opacity-50">{project.tasks.length}</Typography>
  ) : (
    ""
  );
  if (isHovered) {
    content = (
      <Menu>
        <MenuHandler className="p-0">
          <IconButton variant="text" size="sm" className="p-0">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </IconButton>
        </MenuHandler>
        <MenuList>
          <MenuItem
            className="text-red-700"
            onClick={(e) => {
              e.stopPropagation();
              onDialogOpenHandler(project.id);
            }}
          >
            Delete
          </MenuItem>
        </MenuList>
      </Menu>
    );
  }

  return (
    <>
      <ListItem
        key={project.id}
        onClick={() => onProjectClickHandle(project.id)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="p-2"
      >
        <ListItemPrefix>#</ListItemPrefix>
        <div className="flex flex-row w-full items-center">
          <div className="flex-1">{project.title}</div>

          <div className="flex-1 text-right">{content}</div>
        </div>
      </ListItem>
      <ProjectDeleteDialog
        open={isOpen}
        handler={onDialogOpenHandler}
        projectTitle={project.title}
        confirmDelete={onConfirmDeleteHandler}
      ></ProjectDeleteDialog>
    </>
  );
}
