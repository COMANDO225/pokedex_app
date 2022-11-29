import { Text } from "@nextui-org/react";
import styles from "../../../styles/components/Slides/StatsSlide.module.css";
import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const StatsSlide = ({ pokemonData, loading }) => {
	const StatMasna = ({ name, stat, color }) => {
		const [valor, setValor] = useState(0);
		const ref = useRef();
		const isInView = useInView(ref);

		// bars
		const [normalBarra, setNormalBarra] = useState(false);
		const [specialBarra, setSpecialBarra] = useState(false);
		const [superBarra, setSuperBarra] = useState(false);

		const viewBarra = (valor) => {
			if (valor <= 100) {
				setNormalBarra(true);
			} else if (valor > 100 && valor <= 200) {
				setSpecialBarra(true);
			} else if (valor > 200) {
				setSuperBarra(true);
			}
		};

		const backgroundBarra = (valor) => {
			if (valor > 1 && valor <= 25) {
				return "#e81319";
			}
			if (valor > 25 && valor <= 45) {
				return "#FD7D24";
			}
			if (valor > 45 && valor <= 60) {
				return "#f9be00";
			}
			if (valor > 60 && valor <= 75) {
				return "#96d242";
			}
			if (valor > 75 && valor <= 100) {
				return "#48cd36";
			}
		};

		const backgroundBarraPro = (valor) => {
			if (valor > 100 && valor <= 200) {
				return "linear-gradient(90deg, #00bee0 0%, #0081f2 100%)";
			} else if (valor > 200) {
				return "linear-gradient(90deg, #8914e2 0%, #4f15e2 100%)";
			}
		};

		const specialBarraWidth = (valor) => {
			if (valor > 100 && valor <= 200) {
				return valor - 100;
			} else if (valor > 200) {
				return 100;
			}
		};

		const superBarraWidth = (valor) => {
			if (valor > 200) {
				return valor - 200;
			}
		};

		useEffect(() => {
			setTimeout(() => {
				setValor(stat);
				viewBarra(stat);
			}, 280);
		}, [isInView]);

		const refactName = {
			hp: {
				label: "HP",
				color: "#e81319",
			},
			attack: {
				label: "ATK",
				color: "#FD7D24",
			},
			defense: {
				label: "DEF",
				color: "#f9be00",
			},
			"special-attack": {
				label: "SpA",
				color: "#43ccff",
			},
			"special-defense": {
				label: "SpD",
				color: "#aedf78",
			},
			speed: {
				label: "Spe",
				color: "#0F6AC0",
			},
		};

		return (
			<motion.div
				className={styles.statsMasna}
				style={{ "--color": refactName[name].color }}
				ref={ref}
			>
				<div className={styles.statsInfo}>
					<div className={styles.statsName}>
						<Text className={styles.name}>
							{refactName[name].label}
						</Text>
					</div>
					<div className={styles.statsNumber}>
						<Text className={styles.number}>
							{valor.toString().padStart(3, "0")}
						</Text>
					</div>
				</div>
				<div className={styles.barContainer}>
					{normalBarra && (
						<motion.div
							className={`${styles.bar} ${styles.normalBar}`}
							initial='hidden'
							animate='visible'
							transition={{
								type: "spring",
								stiffness: 300,
								damping: 20,
							}}
							variants={{
								hidden: {
									width: 0,
									background: backgroundBarra(valor),
								},
								visible: {
									width: `${valor}%`,
									background: backgroundBarra(valor),
								},
							}}
						/>
					)}
					{specialBarra && (
						<motion.div
							className={`${styles.bar} ${styles.especialBar}`}
							initial='hidden'
							animate='visible'
							transition={{
								type: "spring",
								stiffness: 300,
								damping: 20,
							}}
							variants={{
								hidden: {
									width: 0,
									background: backgroundBarraPro(valor),
								},
								visible: {
									width: `${specialBarraWidth(valor)}%`,
									background: backgroundBarraPro(valor),
								},
							}}
						></motion.div>
					)}
					{superBarra && (
						<motion.div
							className={`${styles.bar} ${styles.superBar}`}
							initial='hidden'
							animate='visible'
							transition={{
								type: "spring",
								stiffness: 300,
								damping: 20,
							}}
							variants={{
								hidden: {
									width: 0,
									background: backgroundBarraPro(valor),
								},
								visible: {
									width: `${superBarraWidth(valor)}%`,
									background: backgroundBarraPro(valor),
								},
							}}
						></motion.div>
					)}
				</div>
			</motion.div>
		);
	};

	return (
		<div className={styles.container}>
			{pokemonData?.stats?.map((stat, i) => (
				<StatMasna key={i} stat={stat.base_stat} name={stat.stat.name}>
					estos son los stats
				</StatMasna>
			))}
		</div>
	);
};

export default StatsSlide;
