import React from "react";
import css from "./About.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren, textVariant } from "../../utils/motion";
import { briefMe, projectExperience } from "../../utils/data";

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
            <div className={`paddings flexCenter innerWidth ${css.container}`}>
                <motion.div
                    className={css.leftSide}
                    variants={textVariant(0.5)}
                >
                    <span className="primaryText">About Me</span>
                    {briefMe.map((para, i) => {
                        return (
                            <span className="secondaryText" key={i}>
                                {para}
                            </span>
                        );
                    })}
                    <div className={`${css.projects}`}>
                        {projectExperience.map((exp, i) => {
                            return (
                                <motion.div className={css.exp} key={i} variants={fadeIn("up", "tween",(i+2)*0.2, 1)}>
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
                </motion.div>
                <div className={css.rightSide}>
                    <img src="./Dipper-Pines-PNG-Pic.png" alt="" />
                </div>
            </div>
        </motion.section>
    );
};

export default About;
