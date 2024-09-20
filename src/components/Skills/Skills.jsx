import React from 'react';

import styles from "./Skills.module.css";

export const Skills = () => {
	return <section className={styles.containers} id='skills'>
		<h1 className={styles.title}>Skills</h1>
		<div className={styles.container}>
			<div className={styles.languages}>
				<h2>Languages</h2>
				<ul>
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
				</ul>
			</div>
			<div className={styles.libraries}>
				<h2>Libraries</h2>
				<ul>
					<li>React</li>
					<li>Anime.js</li>
				</ul>
			</div>
			<div className={styles.frameworks}>
				<h2>Frameworks</h2>
				<ul>
					<li>Tailwind</li>
				</ul>
			</div>
			<div className={styles.tools}>
				<h2>Tools & Systems</h2>
				<ul>
					<li>Git</li>
					<li>NPM</li>
					<li>VSCODE</li>
				</ul>
			</div>
			<div className={styles.resume}>
				<a href="/Akindoyin_Writing_Resume.pdf" target="_blank" rel="noopener noreferrer" >Download Resume</a>
			</div>
		</div>
	</section>
}