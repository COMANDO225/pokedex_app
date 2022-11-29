import { Text } from "@nextui-org/react";
import styles from "../../styles/components/Card.module.css";
import Link from "next/link";
import { useAtom } from "jotai";
import TypePokemonTag from "../TypePokemonTag";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import SkeletonUi from "../Loaders/SkeletonUi";
import PokeBall from "../icons/PokeBall";
import api from "../../services/api";
import { tapbarActiveAtom } from "../../atoms/pokemonesAtom";

const Card = ({ name }) => {
	const ref = useRef();
	const isInView = useInView(ref);
	const [pokemon, setPokemon] = useState({});

	const [, setActive] = useAtom(tapbarActiveAtom);
	const [yaCargo, setYaCargo] = useState(false);

	// const image = sprites.other["official-artwork"].front_default;
	// const gif =
	// 	sprites?.versions["generation-v"]["black-white"].animated.front_default;

	useEffect(() => {
		if (isInView) {
			setTimeout(() => {
				setYaCargo(true);
			}, 800);
		}
	}, [isInView]);

	const getPokemonData = async () => {
		const res = await api.get(`/pokemon/${name}`);
		const { id, types, sprites } = res.data;

		setPokemon({
			id,
			image: sprites.other["official-artwork"].front_default,
			gif:
				sprites?.versions["generation-v"]["black-white"].animated
					.front_default || sprites.front_default,
			types,
		});
	};

	useEffect(() => {
		if (name) {
			getPokemonData();
		}
	}, [name]);

	return (
		<>
			{yaCargo ? (
				<Link href={`/${name}`} scroll={false}>
					<motion.div
						// layoutId={`card-${name}`}
						className={styles.pokeCard}
						ref={ref}
					>
						<Text className={styles.subtext} color={"$gray500"}>
							#{pokemon.id?.toString().padStart(3, "0")}
						</Text>
						<Text className={styles.pokeNombre}>{name}</Text>
						<div className={styles.tipos}>
							{pokemon.types ? (
								pokemon.types.map(({ type }, i) => (
									<TypePokemonTag
										key={i}
										type={type}
										icon={true}
										size={"sm"}
									/>
								))
							) : (
								<p>cargando...</p>
							)}
						</div>
						{pokemon.gif || pokemon.image ? (
							<div className={styles.pokeImgContainer}>
								<img
									className={styles.pokeImg}
									src={pokemon.gif || pokemon.image}
									alt={`Imagen de ${name}`}
								/>
							</div>
						) : (
							<div className={styles.pokeLoading}>
								<PokeBall fill={"#dddddd"} size='100%' />
							</div>
						)}
					</motion.div>
				</Link>
			) : (
				<motion.div
					className={`${styles.pokeCard} ${styles.noHover}`}
					ref={ref}
				>
					<SkeletonUi width={"2rem"} height={"14px"} />
					<SkeletonUi
						width={"50%"}
						css={{
							margin: ".5rem 0",
						}}
						height={"1.15rem"}
					/>
					<div
						style={{
							marginTop: ".4rem",
						}}
						className={styles.tipos}
					>
						<SkeletonUi width={"26px"} height={"26px"} />
						<SkeletonUi width={"26px"} height={"26px"} />
					</div>
					<div className={styles.pokeLoading}>
						<PokeBall fill={"#dddddd"} size='100%' />
					</div>
				</motion.div>
			)}
		</>
	);
};

export default Card;
