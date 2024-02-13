import { createContext, useReducer } from "react";

export const ProjectsContext = createContext({
  projects: [],
  addProject: () => {},
  deleteProject: () => {},
});

function projectsReducer(state, action) {
  if (action.type === "ADD_PROJECT") {
    return { projects: [...state.projects, action.payload] };
  }

  if (action.type === "DELETE_PROJECT") {
    const updatedProjects = [...state.projects];
    const deletedProjectId = updatedProjects.findIndex(
      (x) => x.id == action.payload.projectId
    );
    updatedProjects.splice(deletedProjectId, 1);

    return { projects: updatedProjects };
  }

  if (action.type === "ADD_TASK") {
    const updatedProjects = [...state.projects];
    const updatedProjectId = updatedProjects.findIndex(
      (x) => x.id == action.payload.projectId
    );

    const updatedTasks = [
      ...updatedProjects[updatedProjectId].tasks,
      action.payload.task,
    ];
    updatedProjects[updatedProjectId] = {
      ...updatedProjects[updatedProjectId],
      tasks: updatedTasks,
    };

    return { projects: updatedProjects };
  }

  if (action.type === "DELETE_TASK") {
    const updatedProjects = [...state.projects];
    const updatedProjectId = updatedProjects.findIndex(
      (x) => x.id == action.payload.projectId
    );
    const updatedTasks = [
      ...updatedProjects[updatedProjectId].tasks.slice(
        0,
        action.payload.taskIndex
      ),
      ...updatedProjects[updatedProjectId].tasks.slice(
        action.payload.taskIndex + 1
      ),
    ];

    updatedProjects[updatedProjectId] = {
      ...updatedProjects[updatedProjectId],
      tasks: updatedTasks,
    };

    return { projects: updatedProjects };
  }
}

export default function ProjectContextProvider({ children }) {
  const [projectsState, dispatch] = useReducer(projectsReducer, {
    projects: [
      {
        id: 1,
        title: "Project 1",
        description: "Description for project 1",
        tasks: [],
        dueDate: new Date(2010, 3, 4),
      },
      {
        id: 2,
        title: "Project 2",
        description: "Description for project 2",
        tasks: [
          {
            id: 423,
            title: "Cortar papas",
            completed: false,
          },
          {
            id: 424,
            title: "Cortar zanahorias",
            completed: false,
          },
        ],
        dueDate: new Date(2016, 2, 1),
      },
      {
        id: 3,
        title: "Project 3",
        description: "Description for project 3",
        tasks: [],
        dueDate: new Date(2014, 2, 22),
      },
    ],
  });

  function addProjectHandle(project) {
    dispatch({
      type: "ADD_PROJECT",
      payload: project,
    });
  }

  function deleteProjectHandle(projectId) {
    dispatch({
      type: "DELETE_PROJECT",
      payload: projectId,
    });
  }

  function addTaskHandle(projectId, task) {
    dispatch({
      type: "ADD_TASK",
      payload: {
        projectId,
        task,
      },
    });
  }

  function deleteTaskHandle(projectId, taskIndex) {
    dispatch({
      type: "DELETE_TASK",
      payload: {
        projectId,
        taskIndex,
      },
    });
  }

  const contextValue = {
    projects: projectsState.projects,
    addProject: addProjectHandle,
    deleteProject: deleteProjectHandle,
    addTask: addTaskHandle,
    deleteTask: deleteTaskHandle,
  };

  return (
    <ProjectsContext.Provider value={contextValue}>
      {children}
    </ProjectsContext.Provider>
  );
}
