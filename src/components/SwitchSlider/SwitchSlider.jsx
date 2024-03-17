import styles from './SwitchSlider.module.scss'

const SwitchSlider = ({ value, setValue, label }) => {
    return (
        <div>
            <div>
                {label}
            </div>
            <label className={styles.switchSlider}>
                <input type="checkbox" defaultChecked={value} onClick={event => setValue(event.target.checked)}></input>
                <span className={`${styles.slider} ${styles.round}`}></span>
            </label >
        </div>
    )
}

export default SwitchSlider