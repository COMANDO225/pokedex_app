const ChevromIcon = (props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={3}
			stroke='currentColor'
			className='w-6 h-6'
			width={props.size}
			height={props.size}
			{...props}
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='m19.5 8.25-7.5 7.5-7.5-7.5'
			/>
		</svg>
	);
};

ChevromIcon.defaultProps = {
	size: 16,
};

export default ChevromIcon;
