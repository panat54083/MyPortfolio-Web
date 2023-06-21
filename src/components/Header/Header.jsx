import React, { useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiMenu } from "react-icons/bi";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import { motion } from "framer-motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const headerShadow = useHeaderShadow();
    const menuRef = useRef();
    useOutsideAlerter({
        menuRef,
        setMenuOpened,
    });

    return (
        <motion.div
            variants={headerVariants}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: true, amount: 0.25 }}
            className={`bg-primary paddings ${css.wrapper}`}
            style={{ boxShadow: headerShadow }}
        >
            <div className={`flexCenter innerWidth ${css.container}`}>
                <div className={css.name}>Panat</div>
                <ul
                    ref={menuRef}
                    className={`flexCenter ${css.menu}`}
                    style={getMenuStyles(menuOpened)}
                >
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
                {/* for medium and small screen */}
                <div
                    className={css.menuIcon}
                    onClick={() => setMenuOpened((prev) => !prev)}
                >
                    <BiMenu size={30} />
                </div>
            </div>
        </motion.div>
    );
};

export default Header;
