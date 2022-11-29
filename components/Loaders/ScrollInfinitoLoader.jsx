import { Loading, Text } from "@nextui-org/react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const ScrollInfinitoLoader = ({ cargarMasPokemones }) => {
	const ref = useRef(null);
	const isInView = useInView(ref);

	const containerStyle = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		gap: "0.5rem",
		padding: "1rem 0",
	};

	useEffect(() => {
		if (isInView) {
			cargarMasPokemones();
		}
	}, [isInView]);

	return (
		<div ref={ref} style={containerStyle}>
			<Loading type='points' color='currentColor' size='sm' />
			<Text weight={"medium"}>Espera pe mano</Text>
		</div>
	);
};

export default ScrollInfinitoLoader;
