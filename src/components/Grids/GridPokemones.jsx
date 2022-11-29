import styles from "../../styles/components/GridPokemones.module.css";
import Card from "../Card";
import { motion } from "framer-motion";

const GridPokemones = ({ pokemones }) => {
	return (
		<motion.ul className={styles.grid}>
			{pokemones.map((pokemon) => {
				return (
					<motion.li
						key={pokemon.name}
						className={styles.cardWrapper}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						transition={{
							duration: 0.3,
						}}
						variants={{
							hidden: { opacity: 1, scale: 0 },
							visible: { opacity: 1, scale: 1 },
						}}
					>
						<Card name={pokemon.name} />
					</motion.li>
				);
			})}
		</motion.ul>
	);
};

export default GridPokemones;
