import React from "react";
import css from "./styles/app.module.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skill from "./components/Skill/Skill";

const App = () => {
    return (
        <div className={`bg-primary ${css.container}`}>
            <Header/>
            <Home/>
            <About/>
            <Skill/>
        </div>
    );
};

export default App;
