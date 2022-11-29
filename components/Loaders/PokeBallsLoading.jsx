import styles from "../../styles/components/Loaders/PokeBallsLoading.module.css";

const PokeBallsLoading = ({ css }) => {
	return (
		<div
			className={styles.loading}
			style={{
				...css,
			}}
		>
			<div className={`${styles.pokeball} ${styles.normal}`} />
			<div className={`${styles.pokeball} ${styles.great}`} />
			<div className={`${styles.pokeball} ${styles.ultra}`} />
			<div className={`${styles.pokeball} ${styles.master}`} />
			<div className={`${styles.pokeball} ${styles.safari}`} />
		</div>
	);
};

export default PokeBallsLoading;
