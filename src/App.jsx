import React from "react";
import css from "./styles/app.module.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

const App = () => {
    return (
        <div className={`bg-primary ${css.container}`}>
            <Header/>
            <Home/>
        </div>
    );
};

export default App;
