import styles from './NoData.module.scss'
import commonStyles from '../../styles/CommonStyles.module.scss'

const NoData = () => {
    return (
        <>
            <div className={`${commonStyles.flexCenterCenter} ${styles.msg}`} >No todos found. Create a new one!</div>
        </>
    )
}

export default NoData