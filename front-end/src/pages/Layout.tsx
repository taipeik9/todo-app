import type { ReactNode } from "react";
import "./Layout.css";
import {
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { ProjectType } from "../types/TodoType";
import { projects } from "../dummyProjects";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";

export default function Layout({
  openDrawer,
  handleOpenDrawer,
  handleCloseDrawer,
  children,
}: {
  openDrawer: boolean;
  handleOpenDrawer: () => void;
  handleCloseDrawer: () => void;
  children: ReactNode;
}) {
  return (
    <Container>
      <Drawer open={openDrawer} onClose={handleCloseDrawer}>
        <List>
          <ListItem>
            <Box display="flex" width="100%" justifyContent="end">
              <IconButton onClick={handleCloseDrawer}>
                <MenuOpenIcon />
              </IconButton>
            </Box>
          </ListItem>
          {projects.map((project: ProjectType) => {
            return (
              <ListItemButton>
                <ListItem key={project.id}>
                  <ListItemText primary={project.name} />
                </ListItem>
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>
      {children}
      <IconButton className="menu-button" onClick={handleOpenDrawer}>
        <MenuIcon />
      </IconButton>
    </Container>
  );
}
