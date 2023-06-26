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
                <motion.div className={css.leftSide} variants={textVariant(0.5)}>
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
                    <div className={`bottomPaddings ${css.projects}`}>
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
                    <motion.div variants={textVariant(1)}>
                        <span className="primaryText ">Education</span>

                    </motion.div>
                    <div
                        className={`innerWidth topPaddings flexContainer ${css.educateContainer}`}
                    >
                        <div className={`flexCenter ${css.educateExp}`}>
                            {educationExp.map((edu, i) => {
                                return (
                                    <motion.div
                                        className={`flexCenter ${css.educ}`}
                                        key={i}
                                        variants={textVariant(1)}
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
                        <motion.div
                            variants={zoomIn(1, 1)}
                            className={css.progressbar}
                        >
                            <motion.div
                                className={css.line}
                                variants={fadeIn("down", "tween", 2, 1.5)}
                            ></motion.div>
                            <div>
                                <div
                                    className={css.circle}
                                    style={{ background: "#286F6C" }}
                                ></div>
                            </div>
                            <div>
                                <div
                                    className={css.circle}
                                    style={{ background: "#F2704E" }}
                                ></div>
                            </div>
                        </motion.div>
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
