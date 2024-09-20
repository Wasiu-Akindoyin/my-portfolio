import React from 'react';

import { getImageUrl } from '../../utils';

import styles from "./Hero.module.css";

export const Hero = () => {
	return (
	<section className={styles.containers}>
			<div className={styles.container}>
				<img src={getImageUrl("hero/Profile-pic.png")} alt="Hero Image" className={styles.heroImg}/>
			<div className={styles.contents}>
				<p className={styles.title}>Hello, I am</p>
				<h1 className={styles.name}>Wasiu Akindoyin</h1>
				<p className={styles.description}>A Front-end Developer and Technical Writer</p>
				<div className={styles.btnsContainer}>
					<a href="/Akindoyin_Writing_Resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.resumeBtn}>Download Resume</a>
					<a href="mailto:wasiuwazzy@gmail.com" className={styles.contactBtn}>Get in Touch</a>
				</div>
			</div>
		</div>
	</section>
)
}