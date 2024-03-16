import styles from './NoData.module.scss'

const NoData = () => {
    return (
        <>
            <div className={styles.msg}>No todos found. Create a new one!</div>
        </>
    )
}

export default NoData