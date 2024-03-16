import styles from './Button.module.scss'

const Button = ({handleClick, label}) => {
    return (
        <>
            <div className={styles.container}>
                <button onClick={handleClick}>{label}</button>
            </div>
        </>
    )
}

export default Button