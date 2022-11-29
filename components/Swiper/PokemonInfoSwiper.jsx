import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import styles from "../../styles/components/PokemonInfoSwiper.module.css";
import { motion } from "framer-motion";
import { Button, Text } from "@nextui-org/react";
import AboutSlide from "./Slides/AboutSlide";
import StatsSlide from "./Slides/StatsSlide";

const PokemonInfoSwiper = ({ pokemonData, pokeAbout, loading }) => {
	const [mySwiper, setMySwiper] = useState(null);
	const [indexSlide, setIndexSlide] = useState(0);

	const { types } = pokemonData || {};
	const primerTipo = types?.[0].type.name;

	const [ejemplo, setEjemplo] = useState(true);

	// useEffect(() => {
	//     console.log(indexSlide);
	// }, [indexSlide]);

	// useEffect(() => {
	//     console.log(pokemonData);
	//     console.log(pokeAbout);
	// }, []);

	const buttons = [
		{
			name: "Info",
			onClick: () => {
				mySwiper.slideTo(0);
				setIndexSlide(0);
			},
			css: {
				borderRadius: "8px 0 0 0",
			},
		},
		{
			name: "Stats",
			onClick: () => {
				mySwiper.slideTo(1);
				setIndexSlide(1);
			},
			css: {
				borderRadius: "0",
			},
		},
		{
			name: "Evoluciones",
			onClick: () => {
				mySwiper.slideTo(2);
				setIndexSlide(2);
			},
			css: {
				borderRadius: "0 8px 0 0",
			},
		},
	];

	const spring = {
		type: "spring",
		// stiffness: 200,
		// damping: 20
	};

	return (
		<>
			<div className={styles.gridTabs}>
				{buttons.map((button, index) => (
					<div className={styles.tabItem} key={index}>
						<Button
							auto
							light
							css={button.css}
							color={"#fff"}
							weight={indexSlide === index ? "bold" : "regular"}
							onPress={button.onClick}
							className={
								indexSlide === index
									? `${styles.tab} ${styles.active}`
									: `${styles.tab}`
							}
						>
							<Text
								css={{
									fontWeight:
										indexSlide === index
											? "bold"
											: "normal",
									color:
										indexSlide === index
											? `var(--${primerTipo})`
											: "#ddd",
									fontWeight: "bold",
								}}
							>
								{button.name}
							</Text>
						</Button>
						{indexSlide === index && (
							<motion.div
								layoutId='tabIndicator'
								style={{
									backgroundColor: `var(--${primerTipo})`,
								}}
								className={styles.tabIndicator}
							/>
						)}
					</div>
				))}
			</div>
			<Swiper
				// modules={[Pagination]}
				// pagination={{ clickable: true }}
				onSlideChange={(swiper) => {
					setIndexSlide(swiper.realIndex);
				}}
				onSwiper={(swiper) => {
					setMySwiper(swiper);
					// console.log(swiper)
				}}
				// onChanges={(swiper) => console.log(swiper)}
			>
				<SwiperSlide>
					<AboutSlide
						pokeAbout={pokeAbout}
						pokemonData={pokemonData}
						loading={loading}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<StatsSlide pokemonData={pokemonData} loading={loading} />
				</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
			</Swiper>

			{/* <button onClick={() => mySwiper.slideNext()}>Next slide</button>
            <button onClick={() => mySwiper.slidePrev()}>Prev slide</button> */}
		</>
	);
};

export default PokemonInfoSwiper;
