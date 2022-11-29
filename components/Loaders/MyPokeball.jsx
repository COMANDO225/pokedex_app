import styles from "../../styles/components/Loaders/MyPokeball.module.css";

const MyPokeball = ({ size, css }) => {
	return (
		<div
			style={{
				"--size": size ? size : "80px",
				...css,
			}}
			className={styles.pokeball_wrapper}
		>
			<div className={styles.pokeball}>
				<div className={styles.pokeTop}></div>
				<div className={styles.pokeBot}></div>
				{/* <div className={styles.sombra}></div> */}
			</div>
			<div className={styles.pokeButton}></div>
		</div>
	);
};

export default MyPokeball;
