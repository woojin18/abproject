import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import homeRoutes from "./modules/home/route/homeRoutes";
import transactionRoutes from "./modules/transaction/route/transactionRoutes";
import statisticsRoutes from "./modules/statistics/route/statisticsRoutes";

function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* 홈 라우트 */}
        {homeRoutes}
        
        {/* 트랜잭션 라우트 */}
        {transactionRoutes}
        
        {/* 통계 라우트 */}
        {statisticsRoutes}
      </Routes>
    </Router>
  );
}

export default AppRouter;