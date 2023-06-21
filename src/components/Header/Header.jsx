import React, { useState } from "react";
import css from "./Header.module.scss";
import { BiMenu } from "react-icons/bi";

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    return (
        <div className={`bg-primary paddings ${css.wrapper}`}>
            <div className={`flexCenter innerWidth ${css.container}`}>
                <div className={css.name}>Panat</div>
                <ul className={`flexCenter ${css.menu}`} >
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
        </div>
    );
};

export default Header;
