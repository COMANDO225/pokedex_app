const ShareIcon = (props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={props.size}
			height={props.size}
			viewBox='0 0 24 24'
			style={{
				fill: "currentColor",
				transform: "scaleX(-1)",
				msfilter:
					"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)",
			}}
			{...props}
		>
			<path d='M11 6.914V2.586L6.293 7.293l-3.774 3.774 3.841 3.201L11 18.135V13.9c8.146-.614 11 4.1 11 4.1 0-2.937-.242-5.985-2.551-8.293C16.765 7.022 12.878 6.832 11 6.914z' />
		</svg>
	);
};

ShareIcon.defaultProps = {
	size: 24,
	fill: "#000",
};

export default ShareIcon;
