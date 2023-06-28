import React, { useState } from "react";
import css from "./Contact.module.scss";
import { motion } from "framer-motion";
import { staggerChildren } from "../../utils/motion";
import ContactCard from "./ContactCard";

const Contact = () => {
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const emailValidation = () => {
        return String(email)
            .toLocaleLowerCase()
            .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    };
    const handleSend = (e) => {
        e.preventDefault();
        if (username === "") {
            setErrMsg("Username is required!");
        } else if (phoneNumber === "") {
            setErrMsg("Phone number is required!");
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
                `Thank you dear ${username}, Your Messages has been sent Successfully!`
            );
            setErrMsg("");
            setUsername("");
            setPhoneNumber("");
            setEmail("");
            setSubject("");
            setMessage("");
        }
    };

    return (
        <motion.section
            className={`${css.wrapper}`}
            variants={staggerChildren}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.25 }}
        >
            <div className={`yPaddings innerWidth ${css.container}`}>
                <div className={`flexCenter ${css.heading}`}>
                    <span className="primaryText">Contact Me</span>
                </div>
                <div className={`yPaddings ${css.body}`}>
                    <div className={`${css.left}`}>
                        <ContactCard />
                    </div>
                    <div className={`${css.right}`}>
                        <form className={`${css.formWrapper}`}>
                            {errMsg && <p className={css.errMsg}>{errMsg}</p>}
                            {successMsg && (
                                <p className={css.successMsg}>{successMsg}</p>
                            )}
                            <div className={css.formContainer}>
                                <div>
                                    <label className={css.form_label}>
                                        Your Name
                                    </label>
                                    <input
                                        className={`${css.form_input}`}
                                        type="text"
                                    />
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
