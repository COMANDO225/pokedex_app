import { NextUIProvider } from "@nextui-org/react";
import "../styles/globals.css";
import "../styles/progress.css";
import { Provider as AtomsProvider } from "jotai";
import NProgress from "nprogress";
import Router from "next/router";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
	Router.events.on("routeChangeStart", (url) => {
		// console.log(`Router is changing... ${url}`);
		NProgress.start();
	});

	Router.events.on("routeChangeComplete", (url) => {
		// console.log(`Router has changed ${url}`);
		NProgress.done();
	});

	return (
		<AtomsProvider>
			<NextUIProvider>
				<Toaster
					position='bottom-center'
					toastOptions={{
						style: {
							background: "#333",
							color: "#fff",
							marginBottom: ".5rem",
						},
					}}
				/>
				<Component {...pageProps} />
			</NextUIProvider>
		</AtomsProvider>
	);
}

export default MyApp;
