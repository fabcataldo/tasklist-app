import { useState } from 'react'
import {container} from './Form.module.scss'
import {v4 as uuidv4} from 'uuid'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Input from '../Input/Input'
import { commonStringValues } from '../../utils/commonStringValues';
import SwitchSlider from '../SwitchSlider/SwitchSlider'

const Form = ({currentValue, setValue}) => {
    const [formValue, setFormValue] = useState({
        uuid: uuidv4(),
        description: '',
        dueDate: new Date().toLocaleString(),
        completed: false
    })

    const setDescriptionValue = (value) => {
        setFormValue({...formValue, description: value})
    }

    const setDueDateValue = (value) => {
        setFormValue({...formValue, dueDate: value.toLocaleString()})
    }

    const setCompletedValue = (value) => {
        setFormValue({...formValue, completed: value})
    }

    return (
        <>
            <div className={container}>
                    <DatePicker
                        selected={new Date(formValue.dueDate)}
                        onChange={setDueDateValue}
                        showTimeSelect
                    />
                <div>
                    <Input
                        value={formValue.description}
                        setValue={setDescriptionValue}
                        placeholder={commonStringValues.form.descriptionPlaceholder}
                    ></Input>
                </div>
                <div>
                    <SwitchSlider
                        setValue={setCompletedValue}
                        value={formValue.completed}
                    ></SwitchSlider>
                </div>
            </div>
            
        </>
    )
}

export default Form