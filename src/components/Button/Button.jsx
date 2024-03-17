import styles from './Button.module.scss'
import commonStyles from '../../styles/CommonStyles.module.scss'

const Button = ({handleClick, label}) => {
    return (
        <>
            <div className={styles.container}>
                <button onClick={handleClick} className={commonStyles.generalText}>{label}</button>
            </div>
        </>
    )
}

export default Button