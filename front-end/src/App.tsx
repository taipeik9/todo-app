import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import Layout from "./pages/Layout";

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
