import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Contacts.module.css";

export const Contacts = () => {
	return (
		<footer id='contacts' className={styles.footers}>
			<div className={styles.container}>
				<div className={styles.icons}>
					<ul className={styles.links}>
						<li className={styles.link}>
							<a href="https://github.com/Wasiu-Akindoyin"><img src={getImageUrl("contact/icons8-github-50.png")} alt="github icon" /></a>
						</li>

						<li className={styles.link}>
							<a href="https://www.linkedin.com/in/wasiu-akindoyin-4814591a6/"><img src={getImageUrl("contact/icons8-linkedin-24 (1).png")} alt="linkedin icon" /></a>
						</li>

						<li className={styles.link}>
							<a href="https://medium.com/@wasiuwazzy"><img src={getImageUrl("contact/icons8-medium-50.png")} alt="medium icon" /></a>
						</li>

						<li className={styles.link}>
							<a href="https://x.com/AkindoyinWasiu"><img src={getImageUrl("contact/icons8-twitter-50.png")} alt="twitter icon" /></a>
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