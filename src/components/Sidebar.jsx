// src/components/Sidebar.jsx
import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Typography,
  Box,
} from "@mui/material";
import { Home, Receipt, BarChart, Settings } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Sidebar({ isDrawerOpen, toggleDrawer }) {
  return (
    <Drawer
      anchor="left"
      open={isDrawerOpen}
      onClose={toggleDrawer}
      sx={{
        "& .MuiDrawer-paper": {
          width: 240, // 폭을 넓혀 240px로 설정
          backgroundColor: "#f4f4f4", // 사이드바 배경색 설정
          color: "#333", // 기본 텍스트 색상
        },
      }}
    >
      <Box
        sx={{
          padding: "16px",
          textAlign: "center",
          backgroundColor: "#1976d2",
          color: "white",
        }}
      >
        <Typography variant="h6">Budget App</Typography>
      </Box>
      <Divider />

      <List>
        <ListItem button component={Link} to="/" onClick={toggleDrawer}>
          <ListItemIcon>
            <Home sx={{ color: "#1976d2" }} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/transactions"
          onClick={toggleDrawer}
        >
          <ListItemIcon>
            <Receipt sx={{ color: "#1976d2" }} />
          </ListItemIcon>
          <ListItemText primary="Transactions" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/statistics"
          onClick={toggleDrawer}
        >
          <ListItemIcon>
            <BarChart sx={{ color: "#1976d2" }} />
          </ListItemIcon>
          <ListItemText primary="Statistics" />
        </ListItem>
        <ListItem button component={Link} to="/settings" onClick={toggleDrawer}>
          <ListItemIcon>
            <Settings sx={{ color: "#1976d2" }} />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;
