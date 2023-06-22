import React from "react";
import css from "./Home.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren, zoomIn } from "../../utils/motion";

const Home = () => {
    const name = "Panat Siriwongtrakool";
    return (
        <section className={`${css.wrapper}`}>
            <motion.div
                className={`innerWidth flexCenter ${css.container}`}
                variants={staggerChildren}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{ once: false, amount: 0.25 }}
            >
                <motion.div className={`${css.left}`} variants={fadeIn("left", "tween", 0.2, 1)}>
                    <motion.div
                        className={css.person}
                        variants={fadeIn("left", "tween", 0.4, 1)}
                    >
                        <img
                            src="./Dipper-Pines-PNG-Isolated-Image.png"
                            alt=""
                        />
                    </motion.div>
                </motion.div>
                <div className={`${css.right}`}>
                    <motion.h1 variants={fadeIn("right", "tween", 0.2, 1)}>
                        <span>
                            Hello!
                            <br />
                        </span>
                    </motion.h1>
                    <motion.h1 variants={fadeIn("right", "tween", 0.4, 1)}>
                        My Name is
                        <br />
                    </motion.h1>
                    <motion.h1 variants={fadeIn("right", "tween", 0.6, 1)}>
                        <span>{name}</span>
                    </motion.h1>
                    <motion.h3 variants={fadeIn("down", "tween", 1, 1)}>
                        <div>I want to be a Developer</div>
                    </motion.h3>
                </div>
            </motion.div>
        </section>
    );
};

export default Home;
