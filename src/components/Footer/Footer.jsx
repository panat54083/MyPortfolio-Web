import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
import { FaFacebookF, FaGithubSquare, FaLinkedinIn } from "react-icons/fa";
import { aboutMe, socials } from "../../utils/data";
const Footer = () => {
    return (
        <motion.section
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`xPaddings ${css.wrapper}`}
        >
            <motion.div
                variants={footerVariants}
                className={`innerWidth flexCenter yPaddings ${css.container}`}
            >
                <div className={css.left}>
                    <span className="primaryText">
                        I Hope You Have A <span>Great Day</span>
                    </span>
                </div>

                <div className={css.right}>
                    <div className={css.info}>
                        <span className="secondaryText">Contact</span>
                    </div>
                    <div className={`${css.icons}`}>
                        <span>Phone: {aboutMe.phone}</span>
                        <span>Email: {aboutMe.email}</span>
                    </div>
                    <div className={css.info}>
                        <span className="secondaryText">Social</span>
                    </div>
                    <div className={`${css.icons}`}>
                        <a className={css.icon} href={socials.facebook}>
                            <FaFacebookF />
                        </a>
                        <a className={css.icon} href={socials.linkedin}>
                            <FaLinkedinIn />
                        </a>
                        <a className={css.icon} href={socials.github}>
                            <FaGithubSquare />
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Footer;
