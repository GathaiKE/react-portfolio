import "./skills.css";
import angularImg from "../../../assets/skills/angular.png";
import mongoImg from "../../../assets/skills/mongodb.png";
import postgresImg from "../../../assets/skills/postgresql.png";
import reactImg from "../../../assets/skills/react.png";
import djangoImg from "../../../assets/skills/django.png";
import mySqlImg from "../../../assets/skills/mysql.png";
import nodeImg from "../../../assets/skills/node.png";
import figmaImg from "../../../assets/skills/figma.png";
import { useState } from "react";
import { Skill } from "../../../interfaces/interfaces";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const imagesArray: Skill[] = [
    {
        name: "Figma",
        src: figmaImg,
        color: "#0ACF83",
        bgColor: "rgba(10, 207, 131, 0.1)",
    },
    {
        name: "Angular",
        src: angularImg,
        color: "#DC087D",
        bgColor: "rgba(220, 8, 125, 0.1)",
    },
    {
        name: "React",
        src: reactImg,
        color: "#61DAFB",
        bgColor: "rgba(97, 218, 251, 0.1)",
    },
    {
        name: "Django",
        src: djangoImg,
        color: "#44B78B",
        bgColor: "rgba(68, 183, 139, 0.1)",
    },
    {
        name: "Node",
        src: nodeImg,
        color: "#83CD29",
        bgColor: "rgba(131, 205, 41, 0.1)",
    },
    {
        name: "Mongo",
        src: mongoImg,
        color: "#01EC64",
        bgColor: "rgba(1, 236, 100, 0.1)",
    },
    {
        name: "Postgres",
        src: postgresImg,
        color: "#336791",
        bgColor: "rgba(51, 103, 145, 0.1)",
    },
    {
        name: "My Sql",
        src: mySqlImg,
        color: "#00758F",
        bgColor: "rgba(0, 117, 143, 0.1)",
    },
]

const images:Skill[] = [...imagesArray, ...imagesArray,...imagesArray,...imagesArray]

const Skills: React.FC = () => {
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);

    const imageElements = images.map((image, index) => {
        const labelStyles: React.CSSProperties = {
            color: image.color,
        };

        const imageStyles: React.CSSProperties = {
            backgroundColor: hoverIndex === index ? image.bgColor : "transparent",
            padding: "10px",
            borderRadius: "10px",
            transition: "background-color 0.3s ease",
        };

        return (
            <div
                key={index}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
            >
                
                <img src={image.src} alt={image.name} style={imageStyles} className="skill-image"/>
                <label style={labelStyles}>{image.name}</label>
                
            </div>
        );
    });

    return (
        <section className="skills-section">
            {imageElements}
        </section>
    );
};

export default Skills;
