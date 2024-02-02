import Sidebar from "./components/Sidebar";
import ProjectDetails from "./components/ProjectDetails";
import ProjectForm from "./components/ProjectForm";
import { useState, useContext } from "react";
import { Alert } from "@material-tailwind/react";

import { ProjectsContext } from "./store/projects-context.jsx";

function App() {
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const projectContext = useContext(ProjectsContext);

  function projectClickHandle(projectId) {
    setSelectedProjectId(projectId);
    setShowProjectForm(false);
  }

  function createProjectHandle() {
    setShowProjectForm(true);
    setSelectedProjectId(null);
  }

  // Necesito llamar al contexto de Project porque despues de eliminar, tengo que mostrar el formulario de crear proyecto y quitar el proyecto seleccionado
  function deleteProjectHandle(projectId) {
    projectContext.deleteProject(projectId);
    setShowProjectForm(true);
    setSelectedProjectId(null);
  }

  let content = <p>No project selected</p>;

  if (selectedProjectId) {
    content = (
      <ProjectDetails
        project={projectContext.projects.find(
          (project) => project.id == selectedProjectId
        )}
        onDeleteProject={deleteProjectHandle}
      />
    );
  } else if (showProjectForm) {
    content = <ProjectForm onNewProject={newProjectHandle}></ProjectForm>;
  }

  return (
    <div className="grid grid-cols-[1fr_6fr]">
      <Sidebar
        onProjectClickHandle={projectClickHandle}
        onCreateProjectClick={createProjectHandle}
        onDeleteProject={deleteProjectHandle}
        projects={projectContext.projects}
      />
      <div className={"p-10"}>{content}</div>

      <Alert open={open} onClose={() => setOpen(false)}>
        A dismissible alert for showing message.
      </Alert>
    </div>
  );
}

export default App;
