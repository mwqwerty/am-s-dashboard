import "../mainContainer/mainContainer.css";
import {useState} from "react";
// import axios from "axios";

import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import MainContainer from "../mainContainer/mainContainer";
import {BrowserRouter} from "react-router-dom";

const Main = () => {
    const [sidebar, setsiderbar] = useState(false);

    const openSidebar = () => {
        console.log("opensidebar");
        setsiderbar(true);
    }

    const closeSidebar = () => {
        setsiderbar(false);
    }
    return (
        <BrowserRouter>
            <div className="container">
                <Navbar sidebar={sidebar} openSidebar={openSidebar}/>
                <MainContainer/>
                <Sidebar sidebar={sidebar} closeSidebar={closeSidebar}/>
            </div>
        </BrowserRouter>
    );
}

export default Main;