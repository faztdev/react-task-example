import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext(); //TaskContext (nombre del contexto) almacena los datos

export function TaskContextProvider(props) {
  // TaskContextProvider es el componente que almacena los datos
  // props = propiedades
  const [tasks, setTasks] = useState([]);

  function createTask(task) {

    setTasks([...tasks, 
      {title: task.title,
      id: tasks.length,
      description: task.description}
    ]);
  }

  function deleteTask(taskId){
    setTasks(tasks.filter(task => task.id !== taskId))
    // console.log(tasks)
    // console.log(taskId)
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider value={{
        // tasks: tasks,
        // deleteTask: deleteTask,
        // createTask: createTask
        tasks,
        deleteTask,
        createTask
    }}>
      {" "}
      {/* creacion del componente */}
      {props.children}
    </TaskContext.Provider>
  );
}
