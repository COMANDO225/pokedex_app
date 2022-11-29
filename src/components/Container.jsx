const Container = ({ children, css, className }) => {
	return (
		<div
			style={{
				margin: "0 auto",
				width: "95%",
				maxWidth: 1200,
				...css,
			}}
			className={className}
		>
			{children}
		</div>
	);
};

export default Container;
