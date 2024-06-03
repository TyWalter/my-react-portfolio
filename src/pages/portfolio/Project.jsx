// Importing projects json
import projects from "../../lib/projects.json";
import React from "react";

// Exporting functionable component
export default function Project(){
    // Mapping over projects
    const result = projects.map((project) => (
      <section key={project.id} className="projects col-4">
        <div className="projectBox">
        <img src={project.image} alt={project.title} />
        <h4 className="hfour">{project.title}</h4>
        </div>
      </section>
    ));

  return (
    <>
      {result};
    </>
  )
};