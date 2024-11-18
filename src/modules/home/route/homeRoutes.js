import React from "react";
import { Route } from "react-router-dom";
import Home from "../views/Home";
import Layout from "../../../common/components/Layout";

const homeRoutes = [
  <Route
    key="home"
    path="/"
    element={
      <Layout>
        <Home />
      </Layout>
    }
  />,
];

export default homeRoutes;