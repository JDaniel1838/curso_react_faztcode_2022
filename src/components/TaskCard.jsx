import { useContext } from "react";
import PropTypes from "prop-types";
import { TaskContext } from "../context/TaskContext";

const TaskCard = ({ id, title, description }) => {
  const { deleteTasks } = useContext(TaskContext);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md " key={id}>
      <h2 className="text-xl font-bold capitalize">{title}</h2>
      <p className="text-gray-500 text-sm">{description}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => deleteTasks(id)}
      >
        Eliminar Tarea
      </button>
    </div>
  );
};

TaskCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TaskCard;
