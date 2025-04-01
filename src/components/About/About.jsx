import React from 'react';

import { getImageUrl } from '../../utils';

import styles from "./About.module.css";

import WriterImg from '../../assets/about/Writer-Icon.png';
import CodeImg from '../../assets/about/Code-Icon.png';
import EducationImg from '../../assets/about/Education-Icon.png';


export const About = () => {
	return (
	<section className={styles.container} id='about'>
		<h1 className={styles.title}>About Me</h1>
		<div className={styles.content}>
			<ul className={styles.aboutItems}>
				<li className={styles.aboutItem}>
					<img src={WriterImg} alt="Writer Image" />
					<div className={styles.aboutIconText}>
						<h3>Web3 Technical Writer</h3>
						<p>I am a Web3 Technical Writer deeply invested in Web3 education, making blockchain concepts accessible through clear and engaging documentation. With experience writing for Velas Blockchain and Sei Network, I specialize in API docs, developer guides, and explainers on blockchain infrastructure, DeFi, NFTs, and smart contracts. My work enhances developer adoption, speeds up onboarding, and boosts organic traffic through clear, impactful content.</p>
					</div>
				</li>
				<li className={styles.aboutItem}>
					<img src={CodeImg} alt="Code Image" />
					<div className={styles.aboutIconText}>
						<h3>Front-End Developer</h3>
						<p>As a self-taught front-end developer, I specialize in building dynamic and responsive web applications using React, JavaScript, HTML, and CSS. My experience includes working with JSON data structures, implementing animations, and optimizing UI/UX for seamless user experiences. I’ve built projects ranging from interactive web applications to real-world blockchain-based interfaces. With a strong technical writing background, I also create developer-friendly documentation, ensuring smooth collaboration between engineers and end users. I’m passionate about crafting efficient, scalable, and visually appealing frontend solutions.</p>
					</div>
				</li>
				<li className={styles.aboutItem}>
					<img src={EducationImg} alt="Education Image" />
					<div className={styles.aboutIconText}>
						<h3>Education</h3>
						<p>I hold a Diploma in Front-end Development and a Technical Writing Essentials Certificate from Alison. This combination equips me with the skills to build user-friendly web applications while creating clear and concise technical documentation.</p>
					</div>
				</li>
			</ul>
		</div>
	</section>
	)
}