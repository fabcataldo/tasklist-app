import styles from './SwitchSlider.module.scss'
import commonStyles from '../../styles/CommonStyles.module.scss'

const SwitchSlider = ({ value, setValue, label }) => {
    return (
        <div className={`${commonStyles.flexCenterCenter} ${commonStyles.flexColumn}`}>
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