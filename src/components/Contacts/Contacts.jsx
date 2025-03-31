import React from 'react';
// import { getImageUrl } from '../../utils';
import styles from "./Contacts.module.css";

import GitHubImg from '../../assets/contact/GitHub-Icon.png';
import LinkedInImg from '../../assets/contact/LinkedIn-Icon.png';
import MediumImg from '../../assets/contact/Medium-Icon.png';
import TwitterImg from '../../assets/contact/Twitter-Icon.png';


export const Contacts = () => {
	return (
		<footer id='contacts' className={styles.footers}>
			<div className={styles.container}>
				<div className={styles.icons}>
					<ul className={styles.links}>
						<li className={styles.link}>
							<a href="https://github.com/Wasiu-Akindoyin"><img src={GitHubImg} alt="GitHub Image" /></a>
						</li>

						<li className={styles.link}>
							<a href="https://www.linkedin.com/in/wasiu-akindoyin-4814591a6/"><img src={LinkedInImg} alt="LinkedIn Image" /></a>
						</li>

						<li className={styles.link}>
							<a href="https://medium.com/@wasiuwazzy"><img src={MediumImg} alt="Medium Image" /></a>
						</li>

						<li className={styles.link}>
							<a href="https://x.com/AkindoyinWasiu"><img src={TwitterImg} alt="Writer Image" /></a>
						</li>
					</ul>
				</div>

				<div className={styles.contactItem}>
					<p>Email:</p>
					<p>wasiuwazzy@gmail.com</p>
				</div>

				<div className={styles.contactItem}>
					<p>Phone:</p>
					<span>+234</span>
					<p>8143857836</p>
				</div>

				<div className={styles.contactItem}>
					<p>Address:</p>
					<p>Lagos, Nigeria</p>
				</div>

				<div className={styles.bottom}>
					<p>&copy; Wasiu Akindoyin 2024. All Rights Reserved.</p>
				</div>
			</div>
		</footer>
	);
}