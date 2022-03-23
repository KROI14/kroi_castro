import React from 'react'
import './Projects.css';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';

const Projects = () => {
    return (
        <div className="projects container">
            {projectsData.map((val, idx) => {
                return(
                    <ProjectCard
                        title={val.title}
                        key={idx}
                        description={val.description}
                        image={require('../images/img_projects/' + val.image)}
                        links={val.links}/>
                )
            })}
        </div>
    )
}

export default Projects