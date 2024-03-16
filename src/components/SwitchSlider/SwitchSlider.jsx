import {switchSlider, slider, round } from './SwitchSlider.module.scss'

const SwitchSlider = ({value, setValue}) => {
    return (
        <>
            <label className={switchSlider}>
                <input type="checkbox" value={value} onClick={setValue}></input>
                <span className={slider} {...round}></span>
            </label>

        </>
    )
}

export default SwitchSlider