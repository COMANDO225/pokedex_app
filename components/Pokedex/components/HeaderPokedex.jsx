import { Button, Text, Tooltip, Popover, Loading } from "@nextui-org/react";
import styles from "../../../styles/components/HeaderPokedex.module.css";
import PokeBall from "../../icons/PokeBall";
import TypePokemonTag from "../../TypePokemonTag";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ShareIcon from "../../icons/ShareIcon";
import HeartIcon from "../../icons/HeartIcon";
import LinkIcon from "../../icons/LinkIcon";
import WhatsAppIcon from "../../icons/WhatsAppIcon";
import FacebookIcon from "../../icons/FacebookIcon";
import TwitterIcon from "../../icons/TwitterIcon";
import TelegramIcon from "../../icons/TelegramIcon";
import MessengerIcon from "../../icons/MessengerIcon";
import LinkedinIcon from "../../icons/LinkedinIcon";
import RedditIcon from "../../icons/RedditIcon";
import ChevromIcon from "../../icons/ChevromIcon";
import { toast } from "react-hot-toast";
import CheckIcon from "../../icons/CheckIcon";
import MyPokeball from "../../Loaders/MyPokeball";

const HeaderPokedex = ({ pokemonData, pokeAbout }) => {
	const [urlMasna, setUrlMasna] = useState("");
	const [itemsVisible, setItemsVisible] = useState(3);
	const [isVisible, setIsVisible] = useState(false);
	const [linkCopiado, setLinkCopiado] = useState(false);

	const pokeballStyles = {
		position: "absolute",
		top: "0",
		left: "0",
		zIndex: "-1",
		width: "100%",
		height: "100%",
	};

	const Texto = () => {
		return (
			<>
				Selecciona un <br /> Pokemon
			</>
		);
	};

	useEffect(() => {
		const actualUrl = window.location.href;
		setUrlMasna(actualUrl);
	}, []);

	useEffect(() => {
		if (linkCopiado) {
			setTimeout(() => {
				setLinkCopiado(false);
			}, 4500);
		}
	}, [linkCopiado]);

	// useEffect(() => {
	// 	console.log(pokeAbout);
	// 	console.log(pokemonData);
	// }, [pokeAbout, pokemonData]);

	const copyLink = () => {
		if (navigator.clipboard) {
			if (!linkCopiado) {
				navigator.clipboard.writeText(urlMasna);
				setLinkCopiado(true);
				toast.success("PokeLink copiado mi Rey");
			}
		} else {
			toast.error("No se pudo copiar el link");
		}
	};

	const CircleButton = ({ children, onClick, onMouseEnter }) => {
		return (
			<Button
				onPress={onClick}
				onMouseEnter={onMouseEnter}
				className={styles.circleButton}
			>
				{children}
			</Button>
		);
	};

	const shareLinks = [
		{
			name: "facebook",
			icon: <FacebookIcon size={22} fill='#0075fa' />,
			backgroundColor: "#fff",
			url: `https://www.facebook.com/sharer/sharer.php?u=${urlMasna}`,
		},
		{
			name: "whatsapp",
			icon: <WhatsAppIcon />,
			backgroundColor: "#25d366",
			url: `https://api.whatsapp.com/send?text=Causa mira este pokemon ${urlMasna}!`,
		},
		{
			name: "twitter",
			icon: <TwitterIcon size={14} />,
			backgroundColor: "#1da1f2",
			url: `https://twitter.com/intent/tweet?text=Causa mira este pokemon ${urlMasna}!`,
		},
		{
			name: "telegram",
			icon: <TelegramIcon size={22} fill='#0088cc' />,
			backgroundColor: "#fff",
			url: `https://t.me/share/url?url=${urlMasna}&text=Causa mira este pokemon ${urlMasna}!`,
		},
		// {
		// 	name: "messenger",
		// 	icon: <MessengerIcon size={24} fill='url(#0088cc)' />,
		// 	url: `fb-messenger://share/?link=${urlMasna}`,
		// },
		{
			name: "linkedin",
			icon: <LinkedinIcon size={20} fill='#0A66C2' />,
			backgroundColor: "transparent",
			url: `https://www.linkedin.com/shareArticle?mini=true&url=${urlMasna}&title=Causa mira este pokemon ${urlMasna}!&summary=&source=`,
		},
		{
			name: "reddit",
			icon: <RedditIcon size={22} fill='#FF4500' />,
			backgroundColor: "transparent",
			url: `https://www.reddit.com/submit?url=${urlMasna}&title=Causa mira este pokemon ${urlMasna}!`,
		},
	];

	const vermasCausa = () => {
		setItemsVisible(7);
	};

	const ShareContent = () => {
		return (
			<div className={styles.shareContainer}>
				{shareLinks.slice(0, itemsVisible).map((link, i) => (
					<a key={i} href={link.url} target='_blank' rel='noreferrer'>
						<div className={styles.item}>
							<div
								className={styles.item_icon}
								style={{
									backgroundColor: link.backgroundColor,
								}}
							>
								{link.icon}
							</div>
							<Text className={styles.item_text}>
								Compartir en {link.name}
							</Text>
						</div>
					</a>
				))}
				{itemsVisible === 3 && (
					<div
						onClick={vermasCausa}
						className={styles.item}
						style={{ justifyContent: "center", padding: "2px 0" }}
					>
						<ChevromIcon />
					</div>
				)}
			</div>
		);
	};

	return (
		<motion.div layout className={styles.body_header}>
			<div className={styles.head_right}>
				<div className={styles.head_right_wrapper}>
					<div className={styles.head_right_content}>
						<Tooltip
							content={
								linkCopiado
									? "Pokelink copiado bb"
									: "Copiar Pokelink"
							}
							placement='leftStart'
							hideArrow
						>
							<CircleButton onClick={copyLink}>
								{linkCopiado ? (
									<CheckIcon size={25} fill={"#61D245"} />
								) : (
									<LinkIcon size={28} />
								)}
							</CircleButton>
						</Tooltip>
						<Tooltip
							content='Muy pronto, mi chamo...'
							placement='leftStart'
							hideArrow
						>
							<CircleButton>
								<HeartIcon size={28} />
							</CircleButton>
						</Tooltip>
						<Tooltip
							hideArrow
							content={<ShareContent />}
							placement='leftStart'
							onVisibleChange={(visible) => {
								if (!visible) {
									setIsVisible(false);
									setTimeout(() => {
										setItemsVisible(3);
									}, 200);
								}
							}}
							trigger='click'
							visible={isVisible}
						>
							<CircleButton
								onClick={() => {
									setIsVisible(!isVisible);
								}}
								// onMouseEnter={() => {
								// 	setIsVisible(true);
								// }}
							>
								<ShareIcon size={28} />
							</CircleButton>
						</Tooltip>
					</div>
				</div>
			</div>
			<div className={styles.head_main}>
				<figure className={styles.image_container}>
					{pokemonData?.image && pokemonData.name ? (
						<>
							<img
								src={pokemonData.image}
								alt={pokemonData.name}
							/>
							<PokeBall
								fill='rgba(115, 119, 125, 0.5)'
								style={pokeballStyles}
							/>
						</>
					) : (
						<div
							style={{
								height: "100%",
								display: "flex",
								alignItems: "center",
							}}
						>
							<MyPokeball size={"150px"} />
						</div>
					)}
				</figure>
				<div className={styles.pokeDni}>
					<Text className={styles.pokeName} h1>
						{pokemonData ? pokemonData.name : <Texto />}
					</Text>
					{pokeAbout && (
						<>
							<Text className={styles.pokeSubname}>
								({pokeAbout?.genera})
							</Text>
							<div className={styles.pokeTipos}>
								{pokemonData.types?.map(({ type }, i) => (
									<TypePokemonTag
										key={i}
										type={type}
										icon={true}
										tag={true}
										size={"lg"}
									/>
								))}
							</div>
						</>
					)}
				</div>
			</div>
			<div className={styles.head_left}>
				<Text className={styles.idNumber}>{pokemonData?.hashId}</Text>
			</div>
		</motion.div>
	);
};

export default HeaderPokedex;
