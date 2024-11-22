import React from "react";
import { Route } from "react-router-dom";
import Transactions from "../views//Transactions";
import Layout from "../../../common/components/Layout";

const transactionRoutes = [
  <Route
    key="transactions"
    path="/transactions"
    element={
      <Layout>
        <Transactions />
      </Layout>
    }
  />,
];

export default transactionRoutes;