import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import api from "../../services/api";

const PokemonPage = () => {
	const {
		query: { pokemon },
	} = useRouter();
	const router = useRouter();

	const [pokemonData, setPokemonData] = useState({});
	const [pokeSpecie, setPokeSpecie] = useState({});

	const getPokemonData = async () => {
		try {
			if (pokemon) {
				const res = await api.get(`/pokemon/${pokemon}`);
				const {
					id,
					name,
					height,
					weight,
					types,
					sprites,
					abilities,
					species,
					base_experience,
					stats,
				} = res.data;

				setPokemonData({
					id,
					name,
					hashId: `#${id.toString().padStart(3, "0")}`,
					height,
					weight,
					types,
					baseExperience: base_experience,
					stats,
					image:
						sprites.other["official-artwork"].front_default ||
						sprites.front_default,
					abilities,
					species: species.name,
				});
			}
		} catch (error) {
			router.push("/");
		}
	};

	useEffect(() => {
		getPokemonData();
	}, [pokemon]);

	// if (errorPeticion) {
	// 	return <ErrorPageMasna />;
	// }

	return <MainLayout pokemonData={pokemonData} />;
};

export default PokemonPage;
