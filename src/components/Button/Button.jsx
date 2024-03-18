import styles from './Button.module.scss'
import commonStyles from '../../styles/CommonStyles.module.scss'

const Button = ({handleClick, label, type}) => {
    return (
        <>
            <div>
                <button
                    className={`${styles.button}
                        ${type === 'primary'  
                            ? commonStyles.btnPrimary
                            : commonStyles.btnSecondary
                        }
                        `}
                    onClick={handleClick}>{label}</button>
            </div>
        </>
    )
}

export default Button