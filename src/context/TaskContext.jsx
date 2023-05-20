import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { tasksJSON } from "../data/tasks";
export const TaskContext = createContext();

const TaskContextProvider = (props) => {
  let x = 20;
  const [tasks, setTasks] = useState([]);

  const createTask = (titleTask, desTask) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        title: titleTask,
        description: desTask,
      },
    ]);
  };

  const deleteTasks = (idTask) => {
    setTasks(tasks.filter((task) => task.id !== idTask));
  };

  useEffect(() => {
    setTasks(tasksJSON);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTasks,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

TaskContextProvider.propTypes = {
  props: PropTypes.object,
};

export default TaskContextProvider;
