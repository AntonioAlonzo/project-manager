import { Input, Button } from "@material-tailwind/react";
import { useState, useContext } from "react";
import { ProjectsContext } from "../store/projects-context.jsx";

export default function TaskForm({ projectId }) {
  const projectContext = useContext(ProjectsContext);
  const [taskTitle, setTaskTitle] = useState("");

  function submitHandle(event) {
    event.preventDefault();
    projectContext.addTask(projectId, {
      id: Math.random(),
      title: taskTitle,
      completed: false,
    });
    clearFields();
  }

  function titleChangeHandle(event) {
    setTaskTitle(event.target.value);
  }

  function clearFields() {
    setTaskTitle("");
  }

  return (
    <form onSubmit={submitHandle}>
      <div className="mt-5 relative flex w-full max-w-[24rem]">
        <Input
          type="text"
          label="Title"
          onChange={titleChangeHandle}
          value={taskTitle}
          className="pr-20"
          containerProps={{
            className: "min-w-0",
          }}
        />

        <Button
          size="sm"
          color={taskTitle ? "gray" : "blue-gray"}
          disabled={!taskTitle}
          type="submit"
          className="!absolute right-1 top-1 rounded"
        >
          Create Task
        </Button>
      </div>
    </form>
  );
}
