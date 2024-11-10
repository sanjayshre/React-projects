import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

// outlet act as a variable 
export default function Layout() {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
       </>
    )
}
