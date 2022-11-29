const RockTypeIcon = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25"
            xmlSpace="preserve"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="currentColor"
                d="m19.3 12 1.6-9.3h.5L25 14l-2.6 2.1-3.1-4.1zM0 18.1l5.5 1.8 12.2-8.4L19 2.7H8.2L0 12.6v5.5zm7.7 2.3 6 2 7.1-5.1-2.7-4-10.4 7.1z"
            />
        </svg>
    );
}

export default RockTypeIcon;