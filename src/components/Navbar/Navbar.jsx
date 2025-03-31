import React, { useState } from 'react';

import styles from "./Navbar.module.css";


import menuIcon from "../../assets/nav/menu_FILL0_wght400_GRAD0_opsz24.svg";
import closeIcon from "../../assets/nav/close_FILL0_wght400_GRAD0_opsz24.svg";

export const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);


	return (
		<nav className={styles.navbar}>
			<div className={styles.container}>
				<a className={styles.title} href="/">Wasiu Web3</a>
				<div className={styles.menu}>
					<img className={styles.menuBtn} 
     src={menuOpen ? closeIcon : menuIcon} 
     alt="menuIcon" 
     onClick={() => setMenuOpen(!menuOpen)} />
					<ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
						<li><a href="#about">About</a></li>
						<li><a href="#skills">Skills</a></li>
						<li><a href="#projects">Projects</a></li>
						<li><a href="#blogs">Blogs</a></li>
						<li><a href="#contacts">Contacts</a></li>
					</ul>
				</div>
			</div>
		</nav>
	)
}