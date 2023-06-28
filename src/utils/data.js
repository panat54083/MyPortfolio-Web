import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import {
    DiJavascript1,
    DiNodejs,
    DiNodejsSmall,
    DiPython,
    DiReact,
} from "react-icons/di";
export const projectExperience = [
    {
        name: "Website",
        projects: 1,
        icon: HiOutlineDesktopComputer,
        bg: "#286F6C",
    },
    {
        name: "Mobile App",
        projects: 1,
        icon: CiMobile1,
        bg: "#EEC048",
    },
];

export const briefMe = [
    "I'm a fresh graduate. I am interested in being a Website / Mobile developer.",
    "I have experience designing and developing mobile applications. I can work well as a team and am responsible for all my work.",
];

export const aboutMe = {
    name: "Panat Siriwongtrakool",
    nickname: "Por",
    age: 23,
    phone: "+984396379",
    email: "panat.siriwong@gmail.com"
};

export const educationExp = [
    {
        major: "Bachelor of Computer Engineering",
        place: "King Mongkut 's University of Technology North Bangkok",
        tenure: "2019 - Present",
    },
    {
        major: "Science Mathematics and English Program",
        place: "Suratpittaya school",
        tenure: "2013 - 2018",
    },
];

export const skills = [
    {
        name: "JavaScript",
        level: "Intermediate",
        percent: "60",
        src: "./Skill Icons/js.png",
    },
    {
        name: "TypeScript",
        level: "Beginner",
        percent: "30",
        src: "./Skill Icons/typescript.png",
    },
    {
        name: "Python",
        level: "Intermediate",
        percent: "50",
        src: "./Skill Icons/python.png",
    },
    {
        name: "React/React Native",
        level: "Intermediate",
        percent: "40",
        src: "./Skill Icons/react.png",
    },
    {
        name: "Node.JS",
        level: "Intermediate",
        percent: "60",
        src: "./Skill Icons/node-js.png",
    },
    {
        name: "MongoDB",
        level: "Beginner",
        percent: "40",
        src: "./Skill Icons/mongodb.png",
    },
];
export const projects = [
    {
        name: "Lang Mor App",
        description:
            "The application is for KMUTNB community. Allow users to order food from restaurants located behind KMUTNB, post or find lost items, and buy or sell used items.",
        img: "./Projects/lang_mor_app.jpg",
        github: "https://github.com/panat54083/LangMor-App",
        website: null
    },
    {
        name: "Portfolio-Web",
        description:"This is My portfolio website. It shows my introduction, education and projects",
        img: "./Projects/portfolio_web.jpg",
        github: "https://github.com/panat54083/MyPortfolio-Web",
        website: "https://github.com/panat54083/MyPortfolio-Web"
    },
    // {
    //     name: "Lang Mor App",
    //     description:
    //         "The application is for KMUTNB community. Allow users to order food from restaurants located behind KMUTNB, post or find lost items, and buy or sell used items.",
    //     img: "./Projects/lang_mor_app.jpg",
    // },
    // {
    //     name: "Lang Mor App",
    //     description:
    //         "The application is for KMUTNB community. Allow users to order food from restaurants located behind KMUTNB, post or find lost items, and buy or sell used items.",
    //     img: "./Projects/lang_mor_app.jpg",
    // },
];
export const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    touchMove: true,
    useCSS: true,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};
