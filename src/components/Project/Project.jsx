import { staggerChildren } from "../../utils/motion";
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
            <a className="anchor" id="projects"></a>
            <motion.div className={`yPaddings innerWidth ${css.container}`}>
                <div className={`flexCenter ${css.heading}`}>
                    <span className="primaryText">My Projects</span>
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
