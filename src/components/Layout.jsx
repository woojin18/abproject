// src/components/Layout.jsx
import React, { useState } from "react";
import { Container } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Header onMenuClick={toggleDrawer} />
      <Sidebar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <Container>{children}</Container>
    </>
  );
}

export default Layout;
