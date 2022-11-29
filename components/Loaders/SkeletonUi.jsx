import styles from '../../styles/components/Skeleton.module.css'

const SkeletonUi = ({css, width, height, loading=true, children}) => {

    const sizeStyle = {
        width: width,
        height: height,
        ...css
    }

    return (
        <>
        {loading ?
            (
                <div className={styles.skeleton} style={sizeStyle}>
                </div>
            ) :
            (
                children
            )
        }
        </>
    )
}

export default SkeletonUi