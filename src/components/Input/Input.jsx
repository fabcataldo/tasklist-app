import styles from './Input.module.scss'

const Input = ({value, onChange, placeholder, name}) => {
    return (
        <>
            <div className={styles.containerInput}>
                <input
                    type='text'
                    value={value}
                    onChange={event => onChange(event)}
                    placeholder={placeholder}
                    name={name}>
                </input>
            </div>
        </>
    )
}

export default Input