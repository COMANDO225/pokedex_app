import { Text } from "@nextui-org/react";
import typesIcon from "./typesIcon";
import styles from '../styles/components/TypePokemonTag.module.css';

const TypePokemonTag = (props) => {

    const { type, tag, icon, size } = props;

    const { name } = type || {};

    const iconType = typesIcon[name];

    return (
        <div title={'tipo: '+name} className={styles.tipo_container}
            style={{
                minWidth: !tag ? 'fit-content' : 'calc(var(--size) * 2)',
                '--size': size === 'sm' ? '28px' : size === 'md' ? '32px' : '36px',
            }}
        >
            <span className={styles.bgText} style={{pointerEvents: 'none',background: `var(--${type.name})`,}} />
            {
                icon && (
                    <div className={styles.pokeTipo} style={{background: `var(--${type.name})`,}}>
                        {iconType}
                    </div>
                )
            }
            {
                tag && (
                    <Text className={styles.pokeTipo_text} style={{
                            color: `var(--${type.name})`,
                            padding: !icon && '0',
                        }}>
                        {name}
                    </Text>
                )
            }
        </div>
    );
}

TypePokemonTag.defaultProps = {
    tag: false,
    icon: true,
    size: 'md',
}

export default TypePokemonTag;