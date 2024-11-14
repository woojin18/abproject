// src/Router.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Transactions from './pages/Transactions';
import Statistics from './pages/Statistics';
import Layout from './components/Layout';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout><Home /></Layout>} />
                <Route path="/transactions" element={<Layout><Transactions /></Layout>} />
                <Route path="/statistics" element={<Layout><Statistics /></Layout>} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
