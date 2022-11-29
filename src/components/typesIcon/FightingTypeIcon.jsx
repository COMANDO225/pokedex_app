const FightingTypeIcon = (props) => {
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
                d="M4.3 2.1C4.6.9 5.7 0 7 0c1 0 1.8.5 2.3 1.2h.8c.5-.5 1.2-.8 2-.8 1.1 0 2.1.7 2.5 1.7h.7c.4-.3.9-.4 1.5-.4 1.1 0 2.1.7 2.5 1.7h2.1c1.5 0 2.8 1.2 2.8 2.8v8.6C24 20.4 18.8 25 12.5 25 6.1 25 .8 20.2.8 14.4.8 11.5 2.1 9 4 7.1c0 2.8 0 5.6.3 5.6.6-.2.1-8.8 0-10.6z"
            />
        </svg>
    );
}

export default FightingTypeIcon;