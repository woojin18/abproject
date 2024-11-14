// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Sidebar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        Budget Application
                    </Typography>
                </Toolbar>
            </AppBar>
            
            <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
                <List>
                    <ListItem button onClick={toggleDrawer}>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button onClick={toggleDrawer}>
                        <ListItemText primary="Transactions" />
                    </ListItem>
                    <ListItem button onClick={toggleDrawer}>
                        <ListItemText primary="Statistics" />
                    </ListItem>
                    <ListItem button onClick={toggleDrawer}>
                        <ListItemText primary="Settings" />
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
}

export default Sidebar;
