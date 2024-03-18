import styles from './FormMsgError.module.scss'
import commonStyles from '../../styles/CommonStyles.module.scss'

const FormMsgError = ({msg}) => {
    return (
        <div className={styles.container}>
            <div className={commonStyles.textOnly}>
                {msg}
            </div>
        </div>
    )
}

export default FormMsgError