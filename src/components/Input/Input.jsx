import styles from './Input.module.scss'

const Input = ({value, onChange, placeholder}) => {
    return (
        <>
            <div className={styles.containerInput}>
                <input type='text' value={value} onChange={onChange} placeholder={placeholder}></input>
            </div>
        </>
    )
}

export default Input