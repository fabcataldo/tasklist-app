import commonStyles from '../../../../styles/CommonStyles.module.scss'
import formStyles from '../../../../styles/forms.module.scss'
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from '../../../../hooks/useForm';
import Button from '../../../../components/Button/Button';
import SwitchSlider from '../../../../components/SwitchSlider/SwitchSlider';
import { commonStringValues } from '../../../../utils/commonStringValues';
import Input from '../../../../components/Input/Input';
import { v4 as uuidv4 } from 'uuid';
import FormMsgError from '../../../../components/FormMsgError/FormMsgError';
import { useState } from 'react';
registerLocale("es", es);

const Form = ({ todo, onSubmit }) => {
    const { onInputChange, formState } = useForm({
        uuid: todo ? todo.uuid : uuidv4(),
        description: todo ? todo.description : '',
        dueDate: todo ? todo.dueDate : new Date().toISOString(),
        completed: todo ? todo.completed : false
    })

    const [isMandatoryFieldEmpty, setIsMandatoryFieldEmpty] = useState(false)

    const onSubmitting = () => {
        setIsMandatoryFieldEmpty(!formState.description)

        if (!isMandatoryFieldEmpty && formState.description){
            onSubmit(formState)
        }
    }

    return (
        <>
            <div className={`${commonStyles.flexCenterCenter} ${commonStyles.flexColumn}`}>
                <div className={formStyles.containerInput}>
                    <DatePicker
                        locale="es"
                        selected={new Date(formState.dueDate.slice(0,10))}
                        onChange={(value) => {
                            onInputChange({
                                target: {
                                    name: commonStringValues.todo.data.dueDate, 
                                    value: new Date(value).toISOString().slice(0,10)
                                }
                            })
                        }}
                        showTimeSelect
                    />
                </div>

                <div className={formStyles.containerInput}>
                    <Input
                        value={formState.description}
                        placeholder={commonStringValues.form.descriptionPlaceholder}
                        name={commonStringValues.todo.data.description}
                        onChange={onInputChange}
                    ></Input>
                    <div>
                        {
                            !formState.description && isMandatoryFieldEmpty &&
                            <FormMsgError msg={commonStringValues.msg.error}></FormMsgError>
                        }
                    </div>
                </div>
                <div className={formStyles.containerInput}>
                    <SwitchSlider
                        value={formState.completed}
                        label={commonStringValues.todo.label.state}
                        setValue={(value) => {
                            onInputChange({
                                target: {
                                    name: commonStringValues.todo.data.state, 
                                    value: value
                                }
                            })
                        }}
                    ></SwitchSlider>
                </div>
                <div>
                    <Button
                        type='primary'
                        handleClick={onSubmitting} label='Save'>
                    </Button>
                </div>
            </div>

        </>
    )
}

export default Form