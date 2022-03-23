import React from 'react'
import './ProjectCard.css';

const ProjectCard = ({ image, title, description, links = [] }) => {
    let [github, youtube] = links;

    return (
        <div className="project-card">
            <img src={ image } width="100%"/>
            <div className="body">
                <h4>{ title }</h4>
                <p>{ description }</p>
                
                <div className="btn-container">
                    <button className="btn-github" onClick={ () => window.open(github) }>
                        <i className="fa-brands fa-github"></i>Github
                    </button>
                    <button className="btn-youtube" onClick={ () => window.open(youtube) }>
                        <i className="fa-brands fa-youtube"></i>Output
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard