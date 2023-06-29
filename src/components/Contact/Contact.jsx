import React, { useEffect, useState } from "react";
import css from "./Contact.module.scss";
import { motion } from "framer-motion";
import { staggerChildren } from "../../utils/motion";
import ContactCard from "./ContactCard";

const Contact = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const emailValidation = () => {
        return String(email)
            .toLocaleLowerCase()
            .match(
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            );
    };
    const handleSend = (e) => {
        e.preventDefault();
        if (username === "") {
            setErrMsg("Username is required!");
        } else if (email === "") {
            setErrMsg("Please give your Email!");
        } else if (!emailValidation(email)) {
            setErrMsg("Give a valid Email!");
        } else if (subject === "") {
            setErrMsg("Plese give your Subject!");
        } else if (message === "") {
            setErrMsg("Message is required!");
        } else {
            setSuccessMsg(
                `Your Messages has been sent Successfully!`
            );
            setErrMsg("");
            setUsername("");
            setEmail("");
            setSubject("");
            setMessage("");
        }
    };

    useEffect(() => {
        if (successMsg !== "") {
            const timeout = setTimeout(() => {
                setSuccessMsg("");
            }, 5000);

            return () => clearTimeout(timeout);
        }
    }, [successMsg]);

    return (
        <motion.section
            className={`${css.wrapper}`}
            variants={staggerChildren}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.25 }}
        >
            <a className="anchor" id="contact"></a>
            <div className={`yPaddings innerWidth ${css.container}`}>
                <div className={`flexCenter ${css.heading}`}>
                    <span className="primaryText">Contact Me</span>
                    <span className="secondaryText">
                        Get in touch. Let's work together.
                    </span>
                </div>
                <div className={`yPaddings ${css.body}`}>
                    <div className={`${css.left}`}>
                        <ContactCard />
                    </div>
                    <div className={`${css.right}`}>
                        <form className={`${css.formWrapper}`}>
                            {errMsg && (
                                <div className={css.errMsg}>
                                    <p>{errMsg}</p>
                                </div>
                            )}
                            {successMsg && (
                                <div className={css.successMsg}>
                                    <p>{successMsg}</p>
                                </div>
                            )}
                            <div className={css.formContainer}>
                                <div className={css.form_field}>
                                    <label className={css.form_label}>
                                        Name:
                                    </label>
                                    <input
                                        className={`${css.form_input} ${
                                            errMsg ===
                                                "Username is required!" &&
                                            css.error
                                        }`}
                                        type="text"
                                        placeholder="Your name"
                                        onChange={(e) =>
                                            setUsername(e.target.value)
                                        }
                                        value={username}
                                    />
                                </div>
                                <div className={css.form_field}>
                                    <label className={`${css.form_label}`}>
                                        Email Address:
                                    </label>
                                    <input
                                        className={`${css.form_input} ${
                                            (errMsg ===
                                                "Please give your Email!" ||
                                                errMsg ===
                                                    "Give a valid Email!") &&
                                            css.error
                                        }`}
                                        type="text"
                                        placeholder="Your Email"
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        value={email}
                                    />
                                </div>
                                <div className={css.form_field}>
                                    <label className={`${css.form_label}`}>
                                        Subject:
                                    </label>
                                    <input
                                        className={`${css.form_input} ${
                                            errMsg ===
                                                "Plese give your Subject!" &&
                                            css.error
                                        }`}
                                        type="text"
                                        placeholder="Your subject"
                                        onChange={(e) =>
                                            setSubject(e.target.value)
                                        }
                                        value={subject}
                                    />
                                </div>
                                <div className={css.form_field}>
                                    <label className={`${css.form_label}`}>
                                        Message:
                                    </label>
                                    <textarea
                                        className={`${css.form_textarea} ${
                                            errMsg === "Message is required!" &&
                                            css.error
                                        }`}
                                        type="text"
                                        placeholder="Your message"
                                        onChange={(e) =>
                                            setMessage(e.target.value)
                                        }
                                        value={message}
                                    />
                                </div>
                                {errMsg && (
                                    <div className={css.errMsg}>
                                        <p>{errMsg}</p>
                                    </div>
                                )}
                                {successMsg && (
                                    <div className={css.successMsg}>
                                        <p>{successMsg}</p>
                                    </div>
                                )}
                                <div className={css.button}>
                                    <button onClick={handleSend}>
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
