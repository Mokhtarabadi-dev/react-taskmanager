import TaskItem from "../../TaskManager/TaskItem";
import "../../Sass/styles.css";

const Todo = ({ tasksArray, startTask, completeTask, deleteTask }) => {
  return tasksArray
    .filter((task) => task.taskStatus === "todo")
    .map((task) => {
      return (
        <TaskItem
          key={task.id}
          taskId={task.id}
          title={task.title}
          taskStatus={task.taskStatus}
          startTask={startTask}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      );
    });
};

export default Todo;
