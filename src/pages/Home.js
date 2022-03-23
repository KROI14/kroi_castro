import React from 'react'
import Navigation from '../components/Navigation';
import "./Home.css";

const Home = () => {
    return (
        <div className="home-container">
            <Navigation addedContent={
                <div className="home">
                    <p>A <span className="highlight-text">Computer Science Student</span> in Arellano University Pasig</p>
                    <div className="icons">
                        <a href="https://web.facebook.com/kevinroi.castro/" target="_blank">
                            <img src={require("../images/ic_facebook.png")} />
                        </a>
                        <a href="https://github.com/KROI14" target="_blank">
                            <img src={require("../images/ic_github.png")} />
                        </a>
                        <a href="https://www.instagram.com/kevinroi_castro/" target="_blank">
                            <img src={require("../images/ic_instagram.png")} />
                        </a>
                        <a href="https://twitter.com/KevinRoi14" target="_blank">
                            <img src={require("../images/ic_twitter.PNG")} />
                        </a>
                    </div>
                </div>
            }/>
        </div>
    )
}

export default Home