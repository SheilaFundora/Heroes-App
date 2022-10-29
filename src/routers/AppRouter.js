import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginPage from "../components/login/LoginPage";
import DashboardRouter from "./DashboardRouter";


const AppRouter = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path = "/Heroes-App/login" element = { <LoginPage />} />
                    <Route path = "*" element = { <DashboardRouter />} />
                </Routes>
            </div>

        </Router>
    );
};

export default AppRouter;