import React from "react";
import { Route } from "react-router-dom";
import Statistics from "../views/Statistics";
import Layout from "../../../common/components/Layout";

const statisticsRoutes = [
  <Route
    key="statistics"
    path="/statistics"
    element={
      <Layout>
        <Statistics />
      </Layout>
    }
  />,
];

export default statisticsRoutes;