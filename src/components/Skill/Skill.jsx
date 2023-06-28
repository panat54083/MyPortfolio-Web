import React from "react";
import css from "./Skill.module.scss";
import { skills } from "../../utils/data";
import { motion } from "framer-motion";
import {
    fadeIn,
    staggerChildren,
    textVariant,
    wipeMotion,
} from "../../utils/motion";

const Skill = () => {
    return (
        <motion.section
            className={`${css.wrapper}`}
            variants={staggerChildren}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.25 }}
        >
            <a className="anchor" id="skills"></a>
            <div className={`paddings innerWidth ${css.container}`}>
                <motion.div className={`${css.header}`} variants={textVariant}>
                    <span className="primaryText">My Skill</span>
                    <span className="secondaryText">
                        All of these are the skills I believe I can use
                        productively. The level is rated by confidence in use.
                    </span>
                </motion.div>
                <div className={`flexCenter ${css.skillContainer}`}>
                    {skills.map((_s, i) => {
                        return (
                            <motion.div
                                className={`secondaryText ${css.skill}`}
                                key={i}
                                variants={fadeIn(
                                    "down",
                                    "tween",
                                    (i + 2) * 0.2,
                                    1
                                )}
                            >
                                <img src={_s.src} alt="" />
                                <span>{_s.name}</span>
                                <span>{_s.level}</span>
                                <div className={css.progress}>
                                    <motion.div
                                        style={{
                                            width: `${_s.percent}%`,
                                        }}
                                        variants={wipeMotion(
                                            "left",
                                            (i + 2) * 0.2,
                                            1
                                        )}
                                    ></motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </motion.section>
    );
};

export default Skill;
