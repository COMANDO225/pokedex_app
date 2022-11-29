import { red, Text } from "@nextui-org/react";
import styles from "../../../styles/components/Slides/AboutSlide.module.css";
import SkeletonUi from "../../Loaders/SkeletonUi";

const AboutSlide = ({ pokeAbout, pokemonData, loading }) => {
	const porcentajeDeCaptura = (pokeAbout?.capture_rate / 255) * 100;
	// const refactGrowthRate = pokeAbout?.growth_rate.name.replace("-", " ");
	const infoList = [
		{
			label: "Altura",
			value: `${pokemonData.height / 10} m`,
		},
		{
			label: "Peso",
			value: `${pokemonData.weight / 10} kg`,
		},
		{
			label: "Experiencia base",
			value: pokemonData.baseExperience,
		},
		{
			label: "% de captura",
			value: porcentajeDeCaptura.toFixed(2) + "%" || "No disponible",
		},
	];

	const growthTranslate = {
		slow: "Lento como Almeyda",
		medium: "Medio medio es :v",
		"medium-slow": "Medio lento el causa",
		"medium-fast": "Medio rápido el causa",
		fast: "Rápido mi causa",
		erratic: "Errático :v",
	};

	// funcion para traducir growth rate
	const growthRateTranslate = (growthRate) => {
		return growthTranslate[growthRate];
	};

	// console.log(pokemonData);
	// console.log(pokeAbout);

	const Valor = ({ children, valuecss, css }) => {
		return (
			<div className={styles.valor} style={css}>
				<SkeletonUi height={28} width={"100%"} loading={loading}>
					<Text className={styles.valorText} css={valuecss}>
						{children}
					</Text>
				</SkeletonUi>
			</div>
		);
	};

	const InfoItem = ({ label = "Altura", valor = "1.71 m", valuecss }) => {
		return (
			<div className={styles.infoItem}>
				<Text className={styles.label} color={"currentColor"} h2>
					{label}
				</Text>
				<Valor valuecss={valuecss}>{valor}</Valor>
			</div>
		);
	};

	const HabilidadGrid = ({ children }) => {
		return <div className={styles.habilidadGrid}>{children}</div>;
	};

	return (
		<div>
			{pokeAbout && pokemonData && !loading && (
				<>
					<SkeletonUi height={48} width={"100%"} loading={loading}>
						<Text className={styles.desc}>{pokeAbout.desc}</Text>
					</SkeletonUi>
					{/* <div className={styles.habilidades}>
                        <Text className={styles.label}>Habilidades</Text>
                        <HabilidadGrid>
                            {pokemonData.abilities.map((habilidad, index) => {
                                const color = pokemonData.types[0].type.name;
                                const length = pokemonData.abilities.length;
                                const cant = 100 / length;

                                return (
                                    <Valor
                                        key={index}
                                        css={{
                                            // width: `${cant}%`,
                                            padding: "2px 12px",
                                            backgroundColor: "transparent",
                                            border: `2px solid var(--${color})`,
                                        }}
                                        valuecss={{ color: `var(--${color})` }}
                                    >
                                        {habilidad.ability.name.replace(
                                            "-",
                                            " "
                                        )}
                                    </Valor>
                                );
                            })}
                        </HabilidadGrid>
                    </div> */}
					<div className={styles.info}>
						{infoList.map((item, index) => (
							<InfoItem
								key={index}
								label={item.label}
								valor={item.value}
							/>
						))}
					</div>
					<InfoItem
						label={"indice de crecimiento"}
						valor={growthRateTranslate(pokeAbout.growth_rate.name)}
						// valuecss={{ textTransform: "capitalize" }}
					/>
				</>
			)}
		</div>
	);
};

export default AboutSlide;
