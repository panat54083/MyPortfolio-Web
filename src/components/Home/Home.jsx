import React from "react";
import css from "./Home.module.scss";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <section className={`${css.wrapper}`}>
            <div
                className={`innerWidth flexCenter paddings ${css.container}`}
            >
                <div className={`${css.left}`}>
                    <img src="./Dipper-Pines-PNG-Isolated-Image.png" alt="" />
                </div>
                <div className={`${css.right}`}>
                    <h1>
                        <span>
                            Hello!
                            <br />
                        </span>
                            My Name is{" "} 
                        <span>Panat Siriwongtrakool</span>
                    </h1>
                    <h3>
                        <div>I want to be a Developer</div>
                    </h3>
                </div>
            </div>
        </section>
    );
};

export default Home;
