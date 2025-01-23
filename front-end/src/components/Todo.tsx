import { Box, Checkbox, Typography, Modal } from "@mui/material";
import { generalTodos } from "../dummyTodos";
import { TodoType } from "../types/TodoType";
import "./Todo.css";
import { useState } from "react";

export default function Todo() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<TodoType | null>(null);
  const handleOpen = (todo: TodoType) => {
    setSelectedTodo(todo);
    setOpenModal(true);
  };
  const handleModalClose = () => setOpenModal(false);

  return (
    <Box>
      <Box className="todo-container">
        {generalTodos.map((todo: TodoType) => (
          <Box
            key={todo.id}
            className="todo-item"
            onClick={() => handleOpen(todo)}
          >
            <Checkbox checked={todo.completed} />
            <Typography className="todo-text">{todo.name}</Typography>
          </Box>
        ))}
      </Box>
      <Modal open={openModal} onClose={handleModalClose}>
        <Box className="modal-box">
          <Typography variant="h6" component="h2">
            <Checkbox checked={selectedTodo?.completed} /> {selectedTodo?.name}
          </Typography>
          <Typography>{selectedTodo?.comment}</Typography>
          <Typography>{selectedTodo?.date.format()}</Typography>
        </Box>
      </Modal>
    </Box>
  );
}
