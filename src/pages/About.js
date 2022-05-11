import React from 'react';
import './About.css';
import me from '../images/img_me.png';
import achievements from '../data/achievements.json';
import seminars from '../data/seminars.json';
import techStacks from '../data/tech_stacks.json';

const About = () => {
    return (
        <div className="about container">
            <div className="name-profile">
                <div className="img-container">
                    <img src={me} width="100%"/>
                </div>
                <div>
                    <h1>Kevin Roi B. Castro</h1>
                    <h5>Computer Science Student</h5>
                </div>
            </div>
            
            <div className="about-card">
                <h4 className="title">CAREER OBJECTIVE</h4>
                <p>Seeking a position in the field of Computer Science where I can capitalize my
                    skills and improve my personal and professional growth while also contributing
                    to the orgainzation's success.</p>
            </div>
            
            <main>
                <div className="about-card">
                    <h4 className="title">EDUCATION</h4>
                    <div className="first-heading">
                        <div className="list-item">
                            <div className="circle"></div>
                            <span>Tertiary (2018 - Waiting for graduation)</span>
                        </div>
                        <div className="second-heading">
                            <div className="vertical"></div>
                            <ul>
                                <li className="highlight">Bachelor of Science in Computer Science</li>
                                <li>Arellano University Pasig</li>
                                <li>239 Pag asa st. Caniogan, Pasig City</li>
                            </ul>
                        </div>
                    </div>
                    <div className="first-heading">
                        <div className="list-item">
                            <div className="circle"></div>
                            <span>Senior High School (2016 - 2018)</span>
                        </div>
                        <div className="second-heading">
                            <div className="vertical"></div>
                            <ul>
                                <li className="highlight">Information Communication Technology (TECH-VOC)</li>
                                <li>Arellano University Pasig</li>
                                <li>239 Pag asa st. Caniogan, Pasig City</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="about-card">
                    <h4 className="title">ACHIEVEMENTS</h4>
                    {achievements.map((val, idx) => {
                        return (
                            <div key={idx} className="first-heading">
                                <div className="list-item">
                                    <div className="circle"></div>
                                    <span>{val.date}</span>
                                </div>
                                <div className="second-heading">
                                    <div className="vertical"></div>
                                    <div>
                                        {val.awards.map((award, idx) => {
                                            return (
                                                <ul key={idx}>
                                                    <li className="highlight">{award.type}</li>
                                                    <li className="highlight">{award.title}</li>
                                                    <li>{award.location}</li>
                                                </ul>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>)
                    })}
                </div>
                
                <div className="about-card">
                    <h4 className="title">SEMINARS</h4>
                    {seminars.map((val, idx) => {
                        return (
                            <div key={idx} className="first-heading">
                                <div className="list-item">
                                    <div className="circle"></div>
                                    <span>{val.date}</span>
                                </div>
                                <div className="second-heading">
                                    <div className="vertical"></div>
                                    {val.certs.map((cert, idx) => {
                                        return(
                                            <ul key={idx}>
                                                <li className="highlight">{cert.type}</li>
                                                <li className="highlight">{cert.title}</li>
                                                <li>{cert.location}</li>
                                            </ul>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            
                <div className="about-card">
                    <h4 className="title">Tech Stacks</h4>
                    
                    <div className="tech-stacks-con">
                        {techStacks.map((val, idx) => 
                            <div key={ idx } className="tech-con">
                                <img src={ require(`../images/img_tech_stacks/${val.logo}`) } width="45px"/>
                                <h2>{ val.stack }</h2>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default About