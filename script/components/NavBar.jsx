import React, { useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Layout } from 'antd';

export default function NavBar(){
    const location = useLocation();
    return(
        <Layout>
            <div className="nav-bar">
                <NavLink className="nav-link" to="/about">About</NavLink>
                <NavLink className="nav-link" to="/progress">Progress</NavLink>
                <NavLink className="nav-link" to="/prototype">Prototype</NavLink>
                <NavLink className="nav-link" to="/summary">Summary</NavLink>
            </div>
        </Layout>
    )

};