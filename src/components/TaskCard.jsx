import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  // function mostrarAlerta() {
  //   alert(task.id);
  // }

  const { deleteTask } = useContext(TaskContext);
  // console.log(valor)

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      {/* <button onClick={deleteTask()}> executes for each refresh */}
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4  hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        {" "}
        {/*only executed on click*/}
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
