import React from "react";
import css from "./Contact.module.scss";
import { aboutMe } from "../../utils/data";
import { FaFacebookF, FaGithubSquare, FaLinkedinIn } from "react-icons/fa";

const ContactCard = () => {
    return (
        <div className={`${css.cardWrapper}`}>
            <div className={`${css.container}`}>
                <div className={`${css.header}`}>
                    <img src="./shake_hand_cartoon.png" />
                </div>
                <div className={`${css.body}`}>
                    <h1>{aboutMe.name}</h1>
                    <p>
                        Phone: <span>{aboutMe.phone}</span>
                    </p>
                    <p>
                        Email: <span>{aboutMe.email}</span>
                    </p>
                </div>
                <div className={`${css.foot}`}>
                    <h2>Find me in</h2>

                    <div className={`${css.icons}`}>
                        <a className={css.icon}>
                            <FaFacebookF />
                        </a>
                        <a className={css.icon}>
                            <FaLinkedinIn />
                        </a>
                        <a className={css.icon}>
                            <FaGithubSquare />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;
