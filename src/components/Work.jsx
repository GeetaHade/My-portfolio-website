import React from "react";
import ProjectCard from "./ProjectCard";

const works = [
  // {
  //   imgSrc: "/images/project1.jpg",
  //   title: "Healthcare AI Assistant",
  //   tags: ["Flutter", "Python", "Autogen"],
  //   projectLink: "https://github.com/nishant-k02/HealthCareAIAssistant.git",
  // },
  {
    imgSrc: "/images/project2.jpg",
    title: "Car Damage Detection",
    tags: ["Python", "Django", "Tensorflow"],
    projectLink: "https://github.com/GeetaHade/BE-Project.git",
  },
  {
    imgSrc: "/images/project3.jpeg",
    title: "Smart Homes Web App",
    tags: ["React", "MongoDB", "MySQL"],
    projectLink: "https://github.com/GeetaHade/Online-Retailer.git",
  },
  {
    imgSrc: "/images/chat.jpg",
    title: "Chat Application",
    tags: ["Java", "API", "Server"],
    projectLink: "https://github.com/GeetaHade/Chat_application.git",
  },
  {
    imgSrc: "/images/project6.jpg",
    title: "Weather App",
    tags : ["React", "Bootstrap", "Axios", "SQLite", "HTML", "CSS", "JS", "Express", "Node.js", "REST-API"],
    projectLink: "https://github.com/GeetaHade/Weather-App.git",
  },
  {
    imgSrc: "/images/project5.jpg",
    title: "ThinkShare",
    tags:["React", "Node.js", "Express", "Material-UI", "Elasticsearch", "OpenAI API", "REST API", "JS"],
    projectLink: "https://github.com/GeetaHade/School-Blogging-Platform.git",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">My Portfolio Highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
