import ButtonDefault from "./ButtonDefault";
import ProjectItem from "./ProjectItem";
import User from "./User";
import { Card, Typography, List, ListItem } from "@material-tailwind/react";
import { useContext } from "react";
import { ProjectsContext } from "../store/projects-context";

function Sidebar({
  onProjectClickHandle,
  onCreateProjectClick,
  onDeleteProject,
}) {
  const projectContext = useContext(ProjectsContext);

  return (
    <Card className="h-[calc(100vh)] w-full p-4 shadow-xl rounded-none shadow-blue-gray-900/5 bg-blue-gray-100">
      <User></User>
      <div className="mt-2 mb-1 p-2">
        <Typography variant="h6" color="blue-gray">
          My Projects
        </Typography>
      </div>

      <List className="p-0">
        {projectContext.projects.map((project) => (
          <ProjectItem
            key={project.id}
            project={project}
            onProjectClickHandle={onProjectClickHandle}
            onDeleteProject={onDeleteProject}
          ></ProjectItem>
        ))}
      </List>

      <ButtonDefault className="mt-5" onClick={() => onCreateProjectClick()}>
        Create Project
      </ButtonDefault>
    </Card>
  );
}

export default Sidebar;
