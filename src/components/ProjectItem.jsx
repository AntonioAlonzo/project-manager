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

export default function ProjectItem({
  project,
  onProjectClickHandle,
  onDeleteProject,
}) {
  const [isHovered, setIsHovered] = useState(false);

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
              onDeleteProject(project.id);
            }}
          >
            Delete
          </MenuItem>
        </MenuList>
      </Menu>
    );
  }

  return (
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
  );
}
