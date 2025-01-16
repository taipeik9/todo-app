import { todos } from "../todos";
import { todoType } from "../types/TodoType";
import "./Todo.css";

export default function Todo() {
  return (
    <div>
      {todos.map((todo: todoType) => (
        <div className="todo-item">
          <div>ID: {todo.id}</div>
          <div>Name: {todo.name}</div>
          <div>CreatedAt: {todo.date.format()}</div>
          <div>Completed: {todo.completed.toString()}</div>
          <div>Comment: {todo.comment}</div>
        </div>
      ))}
    </div>
  );
}
