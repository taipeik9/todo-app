import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import Layout from "./pages/Layout";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

export default function App() {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };
  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  return (
    <Layout
      openDrawer={openDrawer}
      handleOpenDrawer={handleOpenDrawer}
      handleCloseDrawer={handleCloseDrawer}
    >
      <Todo />
    </Layout>
  );
}
