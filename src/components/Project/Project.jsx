import { staggerChildren, wipeMotion } from "../../utils/motion";
import css from "./Project.module.scss";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { projects, sliderSettings } from "../../utils/data";
import ProjectCard from "./ProjectCard";
const Project = () => {
    return (
        <motion.section
            className={`${css.wrapper}`}
            variants={staggerChildren}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.25 }}
        >
            <motion.div
                className={`${css.line}`}
                variants={wipeMotion("left", 0, 2)}
            ></motion.div>
            <a className="anchor" id="projects"></a>
            <motion.div className={`yPaddings innerWidth ${css.container}`}>
                <div className={`flexCenter ${css.heading}`}>
                    <span className="primaryText">
                        <span style={{ color: "#ff5f15" }}>My</span> Projects
                    </span>
                    <span className="secondaryText">
                        All of these are my proud projects.
                    </span>
                    <span className="secondaryText">
                        Count: {projects.length}
                    </span>
                </div>
                <div className={`yPaddings ${css.projects}`}>
                    <Slider {...sliderSettings} className={css.slider}>
                        {projects.map((p, i) => {
                            return (
                                <div className={`${css.project}`} key={i}>
                                    {/* <img src={p.img} alt="" />
                                    <p>{p.description}</p>
                                    <span>{p.name}</span> */}
                                    <ProjectCard
                                        title={p.name}
                                        des={p.description}
                                        src={p.img}
                                        github={p.github}
                                        website={p.website}
                                    />
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Project;
