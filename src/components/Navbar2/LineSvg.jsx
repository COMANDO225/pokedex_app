const LineSvg = (props) => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 28.81 178.44"
            width="100%"
            height="100%"
            {...props}
        >
            <g data-name="Capa 2">
            <path
                d="M23.73 2.41v75.27l.73-1.76L8 92.39c-2.33 2.33-4.76 4.6-7 7-1.18 1.27-.9 3-.9 4.61v54.11c0 5.86-.18 11.76 0 17.62v.27c0 3.22 5 3.23 5 0v-74.67l-.73 1.77 16.54-16.56c2.31-2.31 4.73-4.55 7-7 1.17-1.26.87-3.07.87-4.66V20.47c0-5.92.17-11.86 0-17.78v-.28c0-3.21-5-3.22-5 0Z"
                
                fill={props.fill}
                data-name="Capa 4"
            />
            </g>
        </svg>
    );
}

LineSvg.defaultProps = {
    fill: "#611216",
}

export default LineSvg;