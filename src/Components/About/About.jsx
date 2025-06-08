import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const About = () => {
  return (
    <div id='about' className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-para">
          <p>I'm a computer engineering student and a passionate learner who loves building web solutions and solving problems.</p>
          <p>Always exploring new technologies to grow and improve.</p>
        </div>
        <div className="about-skills">
          <div className="about-skill">
            <p>HTML, CSS & Javascript</p> <hr style={{width:'70%'}}/>
          </div>
          <div className="about-skill">
            <p>React JS</p> <hr style={{width:'50%'}}/>
          </div>
          <div className="about-skill">
            <p>C, Java, Python</p> <hr style={{width:'60%'}}/>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>HACKATHONS PARTICIPATED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>2</h1>
          <p>INTERNSHIPS</p>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default About
