import React from 'react';

import { getImageUrl } from '../../utils';

import styles from "./About.module.css";

export const About = () => {
	return (
	<section className={styles.container} id='about'>
		<h1 className={styles.title}>About Me</h1>
		<div className={styles.content}>
			<ul className={styles.aboutItems}>
				<li className={styles.aboutItem}>
					<img src={getImageUrl("about/icons8-google-code-48.png")} alt="frontend icon" />
					<div className={styles.aboutIconText}>
						<h3>Front-end Developer</h3>
						<p>My journey as a frontend developer is a testament to my passion, perseverance, and continuous learning. Starting as a self-taught developer, I've honed my skills in HTML, CSS, JavaScript, and React, crafting responsive and user-friendly web applications that meet the highest standards of functionality and design. My growing interest in blockchain technology adds a new dimension to my work, as I actively explore ways to integrate decentralized solutions into the frontend. <br></br>
						<br></br>
						Clients and companies can expect forward-thinking solutions that not only meet their current needs but also position them for future growth. By blending traditional web development expertise with a deep curiosity for blockchain, I deliver digital experiences that are secure, transparent, and engaging. My commitment is to stay ahead of the curve, ensuring that the solutions I provide are both innovative and impactful, helping businesses lead in their industries.</p>
					</div>
				</li>
				<li className={styles.aboutItem}>
					<img src={getImageUrl("about/icons8-writer-male-50.png")} alt="writer icon" />
					<div className={styles.aboutIconText}>
						<h3>Technical Writer</h3>
						<p>As a technical writer specializing in frontend development and Web3 technologies, I craft content that bridges the gap between cutting-edge innovation and practical application. With a deep understanding of blockchain, decentralized systems, and modern web technologies, I deliver clear, engaging, and technically accurate content tailored to the needs of forward-thinking clients. My writing not only educates but also empowers businesses to harness the potential of Web3 and advanced frontend solutions, driving growth and staying ahead in a rapidly evolving digital landscape. By aligning my content with industry trends, I help companies communicate complex ideas effectively and position themselves as leaders in the tech space.</p>
					</div>
				</li>
				<li className={styles.aboutItem}>
					<img src={getImageUrl("about/icons8-education-50.png")} alt="Education icon" />
					<div className={styles.aboutIconText}>
						<h3>Education</h3>
						<p>I hold a Diploma in Frontend Development from Alison, where I gained a solid foundation in modern web technologies, best practices, and industry-standard tools. This education, combined with my hands-on experience, equips me to design and develop high-quality web applications that meet the evolving needs of users and businesses. My commitment to continuous learning ensures that I stay current with the latest advancements, enabling me to deliver innovative solutions that drive results.</p>
					</div>
				</li>
			</ul>
		</div>
	</section>
	)
}