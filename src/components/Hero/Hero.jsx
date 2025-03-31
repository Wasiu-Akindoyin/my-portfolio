import React from 'react';

import { getImageUrl } from '../../utils';

import styles from "./Hero.module.css";

import heroImg from '../../assets/hero/X-DP.jpeg';

export const Hero = () => {
	return (
	<section className={styles.containers}>
			<div className={styles.container}>
				{/* <img src={getImageUrl("hero/X-DP.jpeg")} alt="Hero Image" className={styles.heroImg}/> */}
				<img src={heroImg} alt="Hero Image" className={styles.heroImg}/>
			<div className={styles.contents}>
				<p className={styles.title}>Hello, I am</p>
				<h1 className={styles.name}>Wasiu Web3</h1>
				<p className={styles.description}>A Web3 Technical Writer & Software Developer</p>
				<div className={styles.btnsContainer}>
					<a href="/Wasiu-Akindoyin_Resume-2025.pdf" target="_blank" rel="noopener noreferrer" className={styles.resumeBtn}>Download Resume</a>
					<a href="mailto:wasiuwazzy@gmail.com" className={styles.contactBtn}>Get in Touch</a>
				</div>
			</div>
		</div>
	</section>
)
}