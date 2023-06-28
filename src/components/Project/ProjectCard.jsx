import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import css from "./Project.module.scss";

const ProjectCard = ({ title, des, src, github, website }) => {
    return (
        <div className={`${css.cardContainer}`}>
            <div className={css.image}>
                <img src={src} alt="" />
            </div>
            <div className={css.body}>
                <div>
                    <span className="secondaryText">{title}</span>
                    <div className={css.icons}>
                        {github && (
                            <a href={github}>
                                <BsGithub />
                            </a>
                        )}
                        {website && (
                            <a href={website}>
                                <FaGlobe />
                            </a>
                        )}
                    </div>
                </div>
                <div className={css.line}></div>
                <p>{des}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
