import React from "react";
import css from "./styles/app.module.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skill from "./components/Skill/Skill";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div className={`bg-primary ${css.container}`}>
            <Header/>
            <Home/>
            <About/>
            <Skill/>
            <Project/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default App;
