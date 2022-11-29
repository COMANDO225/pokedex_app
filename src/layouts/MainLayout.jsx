import { useAtom } from "jotai";
import Head from "next/head";
import { pokemonAtom, pokemonesAtom } from "../atoms/pokemonesAtom";
import Footer from "../components/Footer";
import { GridPokemones } from "../components/Grids";
import Navbar from "../components/Navbar2/index2";
import PokeTapbar from "../components/Pokedex/PokeTapbar";
import useMediaQuery from "../hooks/useMediaQuery";
import { useState, useEffect, useCallback } from "react";
import styles from "../styles/layouts/MainLayout.module.css";
import api from "../services/api";
import ScrollInfinitoLoader from "../components/Loaders/ScrollInfinitoLoader";
import MenuBar from "../components/MenuBar";
import Header from "../components/Header";
import { toast } from "react-hot-toast";
import { Loading, Text } from "@nextui-org/react";
import Container from "../components/Container";
import CloseIcon from "../components/icons/CloseIcon";
import PokeBallsLoading from "../components/Loaders/PokeBallsLoading";
import MyPokeball from "../components/Loaders/MyPokeball";

const MainLayout = ({ pokemonData }) => {
	const NUMERO_POKEMONES = 50;
	const NUMERO_MAXIMO_POKEMONES = 929;

	const [pokemon, setPokemon] = useAtom(pokemonAtom);
	const [pokemones, setPokemones] = useAtom(pokemonesAtom);
	const [tipos, setTipos] = useState([]);

	// estados de la busqueda
	const [pokemonBuscado, setPokemonBuscado] = useState("");
	const [escribiendo, setEscribiendo] = useState("");
	const [borrarBusqueda, setBorrarBusqueda] = useState(false);
	const [seEncontro, setSeEncontro] = useState(null);

	const [pokemonesCargados, setPokemonesCargados] =
		useState(NUMERO_POKEMONES);
	const [cargando, setCargando] = useState(false);
	const [pokemonPorTipo, setPokemonPorTipo] = useState([]);
	const [generacion, setGeneracion] = useState({});

	// mejorando el codigo, muy lento las consultas
	const getPokemones = useCallback(async () => {
		setCargando(true);
		const res = await api.get(`/pokemon?limit=${NUMERO_POKEMONES}`);
		setPokemones(res.data.results);
		setCargando(false);
	}, []);

	const buscarPokemones = useCallback(async () => {
		try {
			if (/\d/.test(pokemonBuscado)) {
				const res = await api.get(`/pokemon/${pokemonBuscado}`);
				setPokemones([res.data]);
			} else {
				const res = await api.get(
					`/pokemon?limit=${NUMERO_MAXIMO_POKEMONES}`
				);

				setPokemonBuscado(pokemonBuscado.toLowerCase().trim());
				const pokemonEncontrado = res.data.results.filter(({ name }) =>
					name.includes(pokemonBuscado)
				);
				if (pokemonEncontrado.length === 0) {
					setSeEncontro(false);
				} else {
					setPokemones(pokemonEncontrado);
					setSeEncontro(true);
				}
			}
		} catch (error) {
			setSeEncontro(false);
		}
	}, [pokemonBuscado]);

	const getTipos = async () => {
		const res = await api.get("/type");
		setTipos(res.data.results);
	};

	const cargarMasPokemones = async () => {
		setTimeout(async () => {
			if (pokemonesCargados < NUMERO_MAXIMO_POKEMONES) {
				setCargando(true);
				const res = await api.get(
					`/pokemon?limit=${NUMERO_POKEMONES}&offset=${pokemonesCargados}`
				);
				const { results } = res.data;

				const pokemones = await Promise.all(
					results.map(async (pokemon) => {
						const res = await api.get(`/pokemon/${pokemon.name}`);
						const { data } = res;
						return data;
					})
				);
				setPokemones((listaActual) => [...listaActual, ...pokemones]);
				setPokemonesCargados(pokemonesCargados + NUMERO_POKEMONES);
				setCargando(false);
			}
		}, 850);
	};

	useEffect(() => {
		getTipos();
		// console.log(tipos);
	}, []);

	useEffect(() => {
		console.log(tipos);
	}, [tipos]);

	useEffect(() => {
		pokemonBuscado !== "" && buscarPokemones();
	}, [pokemonBuscado]);

	useEffect(() => {
		escribiendo === "" ? getPokemones() : setPokemones([]);
	}, [escribiendo]);

	useEffect(() => {
		console.log(pokemones);
	}, [pokemones]);

	const TagName = ({ children }) => {
		return (
			<div
				style={{
					display: "flex",
					alignItems: "center",
					gap: "0.5rem",
				}}
			>
				Buscando a:
				<div
					className={styles.tag}
					onClick={() => setBorrarBusqueda(!borrarBusqueda)}
				>
					<Text className={styles.tagText}>{children}</Text>
					<div className={styles.close}>
						<CloseIcon style={{ opacity: ".4" }} />
					</div>
				</div>
			</div>
		);
	};

	const DontResult = () => {
		return (
			<>
				<Container
					css={{
						display: "flex",
						justifyContent: "center",
						textAlign: "center",
						alignItems: "center",
						gap: ".75rem",
					}}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: ".75rem",
						}}
					>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: ".1rem",
							}}
						>
							<Text className={styles.nohay}>N</Text>
							<MyPokeball
								css={{ marginBottom: "-.14rem" }}
								size={"32px"}
							/>
						</div>
						<Text className={styles.nohay}>hay</Text>
					</div>
					<Text className={styles.nohay}>causa</Text>
				</Container>
			</>
		);
	};

	return (
		<>
			<Head>
				<title>Pokedex | by Almeyda</title>
				<meta name='description' content='Pokedex' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<MenuBar
				{...{
					setPokemonBuscado,
					escribiendo,
					setEscribiendo,
					borrarBusqueda,
					setBorrarBusqueda,
					setSeEncontro,
				}}
			/>
			<main className='__almeyda'>
				<div className={styles.container}>
					{escribiendo !== "" && (
						<Container
							css={{
								display: "flex",
								flexWrap: "wrap",
								justifyContent: "space-between",
								alignItems: "center",
								marginTop: ".25rem",
							}}
						>
							<Text h3 size='$xl'>
								{escribiendo === "" ? (
									"Todos los pokemones"
								) : (
									<TagName>{escribiendo}</TagName>
								)}
							</Text>
							{escribiendo !== "" && (
								<Text weight='light' size='$md' h3>
									{pokemones.length === 1 ? (
										<>{pokemones.length} causa</>
									) : pokemones.length > 1 ? (
										<>{pokemones.length} causas</>
									) : (
										""
									)}
								</Text>
							)}
						</Container>
					)}
					<GridPokemones pokemones={pokemones} />
					<div>
						{pokemones.length > 0 && !escribiendo && (
							<ScrollInfinitoLoader
								cargarMasPokemones={cargarMasPokemones}
							/>
						)}
					</div>
					{pokemones.length === 0 && escribiendo && seEncontro && (
						<Container
							css={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexDirection: "column",
								margin: "2rem auto",
							}}
						>
							<Text h3 size='$xl'>
								Cargando...
							</Text>
							<PokeBallsLoading
								css={{
									transform: "scale(0.8)",
								}}
							/>
						</Container>
					)}
					{pokemonBuscado !== "" && !seEncontro && <DontResult />}
				</div>
			</main>
			<PokeTapbar pokemonData={pokemonData} />
		</>
	);
};
export default MainLayout;
