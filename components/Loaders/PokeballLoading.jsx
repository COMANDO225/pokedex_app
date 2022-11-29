import styles from "../../styles/components/Loaders/PokeballLoading.module.css";

const PokeballLoading = ({ width, height, size, css }) => {
	return (
		<div
			className={styles.pokeball}
			style={{
				width: width,
				height: height,
				"--size": size ? `${size}px` : "60px",
				...css,
			}}
		/>
	);
};

export default PokeballLoading;
