import { useState, useContext } from "react";
import { Input, Button, Typography } from "@material-tailwind/react";
import { ProjectsContext } from "../store/projects-context";

export default function ProjectForm({ onNewProject }) {
  const projectContext = useContext(ProjectsContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const titleChangeHandle = (event) => {
    setTitle(event.target.value);
  };

  const descriptionChangeHandle = (event) => {
    setDescription(event.target.value);
  };

  const dueDateChangeHandle = (event) => {
    setDueDate(event.target.value);
  };

  const submitHandle = (event) => {
    event.preventDefault();
    projectContext.addProject({
      id: Math.random(),
      title: title,
      description: description,
      tasks: [],
      dueDate: new Date(dueDate),
    });
  };

  return (
    <>
      <Typography variant="h1">Create Project</Typography>
      <form
        className="flex flex-col w-[60rem] gap-6 mt-8"
        onSubmit={submitHandle}
      >
        <Input
          type="text"
          onChange={titleChangeHandle}
          placeholder="Title"
          variant="outlined"
          label="Title"
          value={title}
        />

        <Input
          type="textarea"
          onChange={descriptionChangeHandle}
          placeholder="Description"
          label="Description"
          variant="outlined"
          value={description}
        />

        <Input
          type="date"
          onChange={dueDateChangeHandle}
          variant="outlined"
          placeholder="Due Date"
          label="Due Date"
          value={dueDate}
        />

        <Button type="submit" fullWidth>
          Create Project
        </Button>
      </form>
    </>
  );
}
