import { Typography, Progress } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

import TasksList from "./TasksList";
import TaskForm from "./TaskForm";

import { useContext } from "react";
import { ProjectsContext } from "../store/projects-context";

function ProjectDetails({ project, onDeleteProject }) {
  const projectContext = useContext(ProjectsContext);
  const month = project.dueDate.toLocaleString("en-US", { month: "long" });
  const day = project.dueDate.toLocaleString("en-US", { day: "2-digit" });
  const year = project.dueDate.getFullYear();

  return (
    <div>
      <div className="flex flex-row w-full">
        <div className="flex flex-col">
          <Typography className="" variant="h1">
            {project.title}
          </Typography>
          <Typography className="text-green-800">
            <FontAwesomeIcon icon={faCalendar} className="mr-1" />
            {`${month} ${day}, ${year}`}
          </Typography>
        </div>

        <button
          className="flex-1 text-right"
          type="button"
          onClick={() => onDeleteProject(project.id)}
        >
          Delete
        </button>
      </div>

      <Typography className="mt-3 mb-5" variant="paragraph">
        {project.description}
      </Typography>
      <hr />
      <Typography variant="h2" className="pt-4">
        Tasks
      </Typography>
      <div className="flex w-[15rem] flex-col gap-4">
        <Progress value={50} variant="gradient" />
      </div>
      <TaskForm projectId={project.id}></TaskForm>
      <TasksList tasks={project.tasks} projectId={project.id}></TasksList>
    </div>
  );
}

export default ProjectDetails;
