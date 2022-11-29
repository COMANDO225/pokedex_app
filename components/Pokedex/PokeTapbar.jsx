import { Text } from "@nextui-org/react";
import styles from "../../styles/components/Tapbar.module.css";
import { useState, useEffect, useRef } from "react";
import { useAtom } from "jotai";
import { AnimatePresence, motion } from "framer-motion";
import { tapbarActiveAtom } from "../../atoms/pokemonesAtom";
import PokeBall from "../icons/PokeBall";
import TypePokemonTag from "../TypePokemonTag";
import api from "../../services/api";
import PokemonInfoSwiper from "../Swiper/PokemonInfoSwiper";
import { useRouter } from "next/router";
import HeaderPokedex from "./components/HeaderPokedex";

const PokeTapbar = ({ pokemonData }) => {
	// const {
	// 	query: { pokemon },
	// } = useRouter();
	const [active, setActive] = useAtom(tapbarActiveAtom);
	const [pokeAbout, setPokeAbout] = useState(null);
	const [cargando, setCargando] = useState(true);

	const getPokemonAbout = async () => {
		if (pokemonData && pokemonData.id) {
			const res = await api.get(
				`/pokemon-species/${pokemonData.species}`
			);
			const {
				genera,
				flavor_text_entries,
				base_happiness,
				is_legendary,
				is_mythical,
				growth_rate,
				capture_rate,
			} = res.data;
			const desc = flavor_text_entries.find(
				(f) => f.language.name === "es"
			);
			setPokeAbout({
				genera: genera[5].genus,
				desc: desc.flavor_text,
				base_happiness,
				isLegendary: is_legendary,
				isMythical: is_mythical,
				growth_rate,
				capture_rate,
			});
			setCargando(false);
		}
	};

	useEffect(() => {
		getPokemonAbout();
		if (pokemonData && pokemonData.id) {
			setActive(true);
		}
	}, [pokemonData]);

	const abrirTapbar = () => {
		setActive(!active);
	};
	// const { id, name, types, sprites, abilities } = pokemonData || {};

	// const sprite = sprites?.other["official-artwork"].front_default;
	// const nameCapitalize = name?.[0].toUpperCase() + name?.slice(1);
	// const hashId = id?.toString().padStart(3, 0);

	return (
		<div className={styles.tapbar}>
			<div className={styles.tapbar_head_wrapper}>
				<div className={styles.tapbar_head} onClick={abrirTapbar}>
					<Text className={styles.tapbar_title}>Pokedex®</Text>
				</div>
			</div>
			<AnimatePresence>
				{active && (
					<motion.div
						className={styles.tapbarBody}
						animate={{ height: "auto" }}
						initial={{ height: 0 }}
						exit={{ height: 0 }}
					>
						<div className={styles.tapbarBody_content}>
							{pokemonData ? (
								<>
									<HeaderPokedex
										pokemonData={pokemonData}
										pokeAbout={pokeAbout}
									/>
									<PokemonInfoSwiper
										pokemonData={pokemonData}
										pokeAbout={pokeAbout}
										loading={cargando}
									/>
								</>
							) : (
								<HeaderPokedex />
							)}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			<div className={styles.tapbar_foot}>
				<div className={`${styles.cacho}`}></div>
				<div className={`${styles.cacho} ${styles.cacho2}`}></div>
			</div>
		</div>
	);
};

export default PokeTapbar;
