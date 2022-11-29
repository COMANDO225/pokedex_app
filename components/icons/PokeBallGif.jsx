const PokeBallGif = (props) => {
	return (
		<svg
			viewBox='0 0 100 100'
			width={150}
			height={150}
			className='ballanim'
			{...props}
		>
			<g className='gravity'>
				<g className='ball'>
					<path
						fill='#fff'
						stroke='#303030'
						strokeWidth={4}
						d='M12 50a38 38 0 0 0 76 0z'
						className='bottom'
					/>
					<g className='top'>
						<path fill='#f15d5f' d='M12 50a38 38 0 0 1 76 0' />
						<path
							fill='none'
							stroke='#fff'
							strokeWidth={4}
							strokeLinecap='round'
							strokeDasharray='0 12 7.2 7.2 16 80'
							d='M19.6 50a30.4 30.4 0 0 1 60.8 0'
						/>
						<path
							fill='none'
							stroke='#303030'
							strokeWidth={4}
							d='M12 50a38 38 0 0 1 76 0z'
						/>
					</g>
					<g
						className='open'
						fill='#303030'
						stroke='#303030'
						strokeWidth={5}
						strokeLinejoin='round'
					>
						<path
							d='M12 42a152 152 0 0 1 76 0 152 152 0 0 1-76 0'
							strokeWidth={4}
						/>
						<path
							d='M12 54a128 128 0 0 0 76 0 144 144 0 0 0-76 0'
							strokeWidth={4}
						/>
					</g>
					<g
						className='center'
						fill='#fff'
						stroke='#303030'
						transform='matrix(.8 0 0 .8 50 50)'
					>
						<circle strokeWidth={5} r={12} />
						<circle strokeWidth={3} r={6} />
					</g>
				</g>
			</g>
		</svg>
	);
};

export default PokeBallGif;
