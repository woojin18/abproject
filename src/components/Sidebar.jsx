// src/components/Sidebar.jsx
import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

function Sidebar({ isDrawerOpen, toggleDrawer }) {
    return (
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
            <List>
                <ListItem button component={Link} to="/" onClick={toggleDrawer}>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component={Link} to="/transactions" onClick={toggleDrawer}>
                    <ListItemText primary="Transactions" />
                </ListItem>
                <ListItem button component={Link} to="/statistics" onClick={toggleDrawer}>
                    <ListItemText primary="Statistics" />
                </ListItem>
                <ListItem button component={Link} to="/settings" onClick={toggleDrawer}>
                    <ListItemText primary="Settings" />
                </ListItem>
            </List>
        </Drawer>
    );
}

export default Sidebar;
