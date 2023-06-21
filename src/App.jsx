import React from "react";
import css from "./styles/app.module.scss";
import Header from "./components/Header/Header";

const App = () => {
    return (
        <div className={`bg-primary ${css.container}`}>
            <Header/>
        </div>
    );
};

export default App;
