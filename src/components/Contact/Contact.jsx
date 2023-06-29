import React, { useEffect, useRef, useState } from "react";
import css from "./Contact.module.scss";
import { motion } from "framer-motion";
import { staggerChildren } from "../../utils/motion";
import ContactCard from "./ContactCard";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errMsg, setErrMsg] = useState("");

    const YOUR_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const YOUR_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const YOUR_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const notifySuccessfully = () =>
        toast.success("Send message successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    const notifyError = (errMsg) =>
        toast.error(`${errMsg}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    const form = useRef();
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
            //send by using EmailJS
            emailjs
                .sendForm(
                    YOUR_SERVICE_ID,
                    YOUR_TEMPLATE_ID,
                    form.current,
                    YOUR_PUBLIC_KEY
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        if (result.text === "OK") {
                            notifySuccessfully();
                            setErrMsg("");
                            setUsername("");
                            setEmail("");
                            setSubject("");
                            setMessage("");
                        }
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        }
    };

    useEffect(() => {
        if (errMsg) {
            console.log(errMsg)
            notifyError(errMsg);
        }
    }, [errMsg]);
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
                        <form ref={form} className={`${css.formWrapper}`}>
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
                                        name="user_name"
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
                                        type="email"
                                        placeholder="Your Email"
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        value={email}
                                        name="user_email"
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
                                        name="user_subject"
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
                                        name="user_message"
                                    />
                                </div>
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
            <ToastContainer />
        </motion.section>
    );
};

export default Contact;
