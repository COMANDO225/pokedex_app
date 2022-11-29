import Container from "../Container";
import styles from "../../styles/components/Header.module.css";
import { useState, useEffect } from "react";
import MenuBar from "../MenuBar";
import logo from "/public/assets/images/pokelogo.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
	const [scrollY, setScrollY] = useState(null);
	const [scrollDirection, setScrollDirection] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const actualScrollY = window.scrollY;
			if (actualScrollY > scrollY) {
				setScrollDirection(false);
			} else {
				setScrollDirection(true);
			}
			setScrollY(actualScrollY);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [scrollY]);

	// useEffect(() => {
	// 	console.log(scrollDirection);
	// }, [scrollDirection]);

	return (
		<header className={styles.header}>
			<nav className={styles.navbarContainer}>
				<div className={styles.navLeft}></div>

				<div className={styles.navCenter}>
					<Link href='/' className={styles.logo}>
						<Image
							src='/assets/images/pokelogo.png'
							alt='logo'
							fill
							quality={100}
							draggable={false}
							style={{ userSelect: "none" }}
							priority
							sizes='100vh'
						/>
					</Link>
				</div>
				<div className={styles.navRight}></div>
			</nav>
		</header>
	);
};

export default Header;
