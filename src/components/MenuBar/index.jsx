import Container from "../Container";
import styles from "../../styles/components/MenuBar.module.css";
import { Button } from "@nextui-org/react";
import PokeBall from "../icons/PokeBall";
import { useRef, useState, useEffect } from "react";
import { useAtom } from "jotai";
import { pokemonesAtom } from "../../atoms/pokemonesAtom";

const MenuBar = ({
	setPokemonBuscado,
	escribiendo,
	setEscribiendo,
	borrarBusqueda,
	setSeEncontro,
}) => {
	const debounceRef = useRef(null);
	const deleteRef = useRef(null);

	const onQueryChange = (e) => {
		const value = e.target.value;
		setEscribiendo(value);
		if (debounceRef.current) {
			clearTimeout(debounceRef.current);
		}
		debounceRef.current = setTimeout(() => {
			setPokemonBuscado(value);
		}, 800);
	};

	const onDeleteQuery = () => {
		deleteRef.current.value = "";
		setEscribiendo("");
		setPokemonBuscado("");
		setSeEncontro(null);
	};

	useEffect(() => {
		onDeleteQuery();
	}, [borrarBusqueda]);

	return (
		<div className={styles.menuBar}>
			<div className={styles.searchContainer}>
				<input
					ref={deleteRef}
					type='text'
					className={styles.search}
					placeholder='Busca a tu causa...'
					onChange={onQueryChange}
				/>
				<Button
					shadow={escribiendo ? true : false}
					auto
					color='error'
					className={styles.sPokeBtn}
				>
					<PokeBall size={18} />
				</Button>
			</div>
		</div>
	);
};

export default MenuBar;
