import styles from './Button.module.scss'

const Button = ({handleClick, label, type}) => {
    return (
        <>
            <div>
                <button
                    className={`${styles.button}
                        ${type === 'primary'
                            ? styles.btnPrimary
                            : styles.btnSecondary
                        }
                        `}
                    onClick={handleClick}>{label}</button>
            </div>
        </>
    )
}

export default Button