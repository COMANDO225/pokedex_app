import Image from "next/image";
import styles from "../../styles/components/Navbar.module.css";
import LineSvg from "./LineSvg";
import Link from "next/link";
import Lucesita from "./Lucesita";

const Navbar = () => {
	return (
		<nav className={styles.nav_wrapper}>
			<div className={styles.line_container_left}>
				<LineSvg />
			</div>
			<div className={styles.line_container_right}>
				<LineSvg />
			</div>
			<div className={styles.navbar}>
				<div className={styles.left_nav}>
					<div className={styles.circle_container}>
						<div className={styles.circle}></div>
					</div>
				</div>
				<div className={styles.center_nav}>
					<div className={styles.lucesitas}>
						<Lucesita />
						<Lucesita
							lightColor={"#FBB51E"}
							darkColor={"#dca21a"}
						/>
						<Lucesita
							lightColor={"#E91E35"}
							darkColor={"#DF2337"}
						/>
					</div>
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
				<div className={styles.right_nav}>
					<div className={styles.cooler_border}>
						<div className={styles.cooler}></div>
					</div>
					<div className={styles.cooler_border}>
						<div className={styles.cooler}></div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
