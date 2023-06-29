import React from "react";
import css from "./Contact.module.scss";
import { aboutMe, socials } from "../../utils/data";
import { FaFacebookF, FaGithubSquare, FaLinkedinIn } from "react-icons/fa";

const ContactCard = () => {
    return (
        <div className={`${css.cardWrapper}`}>
            <div className={`${css.container}`}>
                <div className={`${css.header}`}>
                    <img src="./shake_hand_cartoon.png" />
                </div>
                <div className={`${css.body}`}>
                    <h1>Inquiries:</h1>
                    <p>
                        Please fill out the form on the right or email us
                        directly at{" "}
                        <a href={`mailto:${aboutMe.email}`}>here</a>
                    </p>
                    <p>*** Please check Spam folders for our response.</p>
                </div>
                <div className={`${css.foot}`}>
                    <h2>Find me in</h2>

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
            </div>
        </div>
    );
};

export default ContactCard;
