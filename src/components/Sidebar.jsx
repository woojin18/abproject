import React from "react";
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Divider, Typography, Box, ListItemButton } from "@mui/material";

import { Home, Receipt, BarChart, Settings } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Sidebar({ isDrawerOpen, toggleDrawer }) {
  return (
    <Drawer
      anchor="left"
      open={isDrawerOpen}
      onClose={toggleDrawer}
      sx={{ "& .MuiDrawer-paper": { width: 240, backgroundColor: "#f4f4f4", color: "#333" } }}
    >
      <Box sx={{ padding: "16px", textAlign: "center", backgroundColor: "#1976d2", color: "white" }}>
        <Typography variant="h6">Budget App</Typography>
      </Box>
      <Divider />

      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/" onClick={toggleDrawer}>
            <ListItemIcon>
              <Home sx={{ color: "#1976d2" }} />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/transactions" onClick={toggleDrawer}>
            <ListItemIcon>
              <Receipt sx={{ color: "#1976d2" }} />
            </ListItemIcon>
            <ListItemText primary="Transactions" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/statistics" onClick={toggleDrawer}>
            <ListItemIcon>
              <BarChart sx={{ color: "#1976d2" }} />
            </ListItemIcon>
            <ListItemText primary="Statistics" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/settings" onClick={toggleDrawer}>
            <ListItemIcon>
              <Settings sx={{ color: "#1976d2" }} />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;
