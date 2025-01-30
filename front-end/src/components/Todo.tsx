import {
  Box,
  Checkbox,
  Typography,
  Modal,
  List,
  ListItemButton,
  Fade,
  Backdrop,
} from "@mui/material";
import { generalTodos } from "../dummyTodos";
import { TodoType } from "../types/TodoType";
import { useState } from "react";

const modalBoxStyle = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: "15px",
  boxShadow: 24,
  p: 2,
};

export default function Todo() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<TodoType | null>(null);
  const handleOpen = (todo: TodoType) => {
    setSelectedTodo(todo);
    setOpenModal(true);
  };
  const handleModalClose = () => setOpenModal(false);

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        borderRadius: 5,
        boxShadow: 2,
        overflow: "hidden",
      }}
    >
      <List
        sx={{
          maxWidth: "800px",
          minWidth: "500px",
        }}
      >
        {generalTodos.map((todo: TodoType) => (
          <ListItemButton
            key={todo.id}
            className="todo-item"
            onClick={() => handleOpen(todo)}
          >
            <Checkbox checked={todo.completed} />
            <Typography
              sx={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
              className="todo-text"
            >
              {todo.name}
            </Typography>
          </ListItemButton>
        ))}
      </List>
      <Modal
        open={openModal}
        onClose={handleModalClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModal}>
          <Box sx={modalBoxStyle}>
            <Typography variant="h6" component="h2">
              <Checkbox checked={selectedTodo?.completed} />{" "}
              {selectedTodo?.name}
            </Typography>
            <Typography>{selectedTodo?.comment}</Typography>
            <Typography>{selectedTodo?.date.format()}</Typography>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}
