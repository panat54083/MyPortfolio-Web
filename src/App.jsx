import React from "react";
import css from "./styles/app.module.scss";

const App = () => {
    return (
        <div className={`bg-primary ${css.container}`}>
            <div>Hello World</div>
        </div>
    );
};

export default App;
