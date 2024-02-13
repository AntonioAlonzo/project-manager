import Task from "./Task";
import {
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function TasksList({ tasks, index, projectId }) {
  return (
    <>
      {
        <div className="mt-5">
          <List className="pl-0">
            {tasks.length > 0 &&
              tasks.map((task, index) => (
                <Task
                  key={index}
                  index={index}
                  task={task}
                  projectId={projectId}
                ></Task>
              ))}
            <ListItem>
              <ListItemPrefix>
                <FontAwesomeIcon
                  className="text-red-800"
                  icon={faPlus}
                ></FontAwesomeIcon>
              </ListItemPrefix>
              <Typography className="text-blue-gray-400">Add task</Typography>
            </ListItem>
          </List>
        </div>
      }
    </>
  );
}
