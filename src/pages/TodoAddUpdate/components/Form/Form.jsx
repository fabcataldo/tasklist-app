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
registerLocale("es", es);

const Form = ({ todo, onSubmit }) => {
    const { onInputChange, formState } = useForm({
        uuid: todo ? todo.uuid : uuidv4(),
        description: todo ? todo.description : '',
        dueDate: todo ? todo.dueDate : new Date().toISOString().slice(0,9),
        completed: todo ? todo.completed : '',
        photo: todo ? todo.photo : ''
    })

    return (
        <>
            <div className={commonStyles.flexCenterCenter}>
                <div className={formStyles.containerInput}>
                    <DatePicker
                        locale="es"
                        selected={new Date(formState.dueDate.slice(0,10))}
                        onChange={(value) => {
                            onInputChange({
                                target: {
                                    name: 'dueDate', 
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
                        name='description'
                        onChange={onInputChange}
                    ></Input>
                </div>
                <div className={formStyles.containerInput}>
                    <SwitchSlider
                        value={formState.completed}
                        label='Completed'
                        setValue={(value) => {
                            onInputChange({
                                target: {
                                    name: 'completed', 
                                    value: value
                                }
                            })
                        }}
                    ></SwitchSlider>
                </div>
                <div>
                    <Button type='primary' handleClick={() => onSubmit(formState)} label='Save'></Button>
                </div>
            </div>

        </>
    )
}

export default Form