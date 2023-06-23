import React from "react";
import css from "./About.module.scss";
import { motion } from "framer-motion";
import {
    fadeIn,
    staggerChildren,
    textVariant,
    textVariant2,
    zoomIn,
} from "../../utils/motion";
import { briefMe, educationExp, projectExperience } from "../../utils/data";

const About = () => {
    return (
        <motion.section
            variants={staggerChildren}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.25 }}
            className={`${css.wrapper}`}
        >
            <a className="anchor" id="about"></a>
            <div className={`paddings innerWidth ${css.container}`}>
                <motion.div className={css.leftSide} variants={textVariant(0)}>
                    <div className={`${css.aboutme}`}>
                        <span className="primaryText">About Me</span>
                        {briefMe.map((para, i) => {
                            return (
                                <span className="secondaryText" key={i}>
                                    {para}
                                </span>
                            );
                        })}
                    </div>
                    <div className={`${css.projects}`}>
                        {projectExperience.map((exp, i) => {
                            return (
                                <motion.div
                                    className={css.exp}
                                    key={i}
                                    variants={fadeIn(
                                        "up",
                                        "tween",
                                        (i + 2) * 0.2,
                                        1
                                    )}
                                >
                                    <div
                                        className="flexCenter"
                                        style={{ background: exp.bg }}
                                    >
                                        <exp.icon size={25} color="white" />
                                    </div>
                                    <div>
                                        <span>{exp.name}</span>
                                        <span className="secondaryText">
                                            {exp.projects} Projects
                                        </span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                    <div
                        className={`innerWidth topPaddings ${css.educateContainer}`}
                    >
                        <span className="primaryText ">Education</span>
                        <div className={css.educateExp}>
                            {educationExp.map((edu, i) => {
                                return (
                                    <motion.div
                                        className={`flexCenter ${css.educ}`}
                                        key={i}
                                        variants={textVariant2}
                                    >
                                        <div className={css.post}>
                                            <h1>{edu.place}</h1>
                                            <p>{edu.tenure}</p>
                                        </div>
                                        <div className={css.role}>
                                            <h1>{edu.major}</h1>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
                <div className={css.rightSide}>
                    <img
                        src="./Dipper-Pines-PNG-Pic.png"
                        alt=""
                        className={css.stickyImage}
                    />
                </div>
            </div>
        </motion.section>
    );
};

export default About;
