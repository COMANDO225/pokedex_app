import styles from '../../styles/components/Navbar.module.css'

const Lucesita = ({lightColor, darkColor}) => {

    return (
        <div 
            style={{
                background: `radial-gradient(circle, ${lightColor} 20%, ${darkColor} 90%)`
            }}
            className={styles.lucesita} 
        />
    );
}

Lucesita.defaultProps = {
    lightColor: '#26b44c',
    darkColor: '#1b7a35'
}

export default Lucesita;