// Importing projects json
import projects from "../../lib/projects.json";
import React from "react";

// Exporting functionable component
export default function Project(){
    // Mapping over projects
    const result = projects.map((project) => (
      <section key={project.id} className="projects col-6 col-md-4">
        <div className="projectBox">
        <img className="projectImage"src={project.image} alt={project.title} />
        <h4 className="hfour"><a href={project.deployed} target="_blank">{project.title}</a></h4>
        <a href={project.github} target="_blank"><img className="githubIcon" src="/images/github.png" alt="github icon" /></a>
        </div>
      </section>
    ));

  return (
    <>
      {result};
    </>
  )
};