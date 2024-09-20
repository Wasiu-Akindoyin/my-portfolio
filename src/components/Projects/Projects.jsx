import React from 'react';
import styles from './Projects.module.css';
import projects from '../../data/projects.json';

// Importing all images
import WeatherImage from "../../assets/projects/Weather.png";
import PingPongImage from "../../assets/projects/Ping-pong.png";
import LagosImage from "../../assets/projects/Lagos-image.png";
import BlockchainImage from "../../assets/projects/Blockchain-app.png";
import PeopleCounterImage from "../../assets/projects/People-counter.png";

const imageMap = {
  "Weather Forecast Application": WeatherImage,
  "Ping Pong Game Application": PingPongImage,
  "Lagos State Image Gallery": LagosImage,
  "Blockchain Quiz Application": BlockchainImage,
  "People Counter Application": PeopleCounterImage
};

export const Projects = () => {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.containers}>
        <h1 className={styles.header}>Projects</h1>
        <div className={styles.projects}>
          <div>
            {projects.map((project, id) => (
              <div key={id} className={styles.container}>
                <div>
                  {/* Dynamically assign the image based on the project title */}
                  <img className={styles.image} src={imageMap[project.title]} alt={project.title} />
                </div>
                <div className={styles.writeUps}>
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>
                  <div className={styles.githubInfo}>
                    <a className={styles.link} href={project.demo}>Demo</a>
                    <a className={styles.link} href={project.source}>Source Code</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
