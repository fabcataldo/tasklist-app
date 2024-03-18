import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import { useForm } from "../../hooks/useForm"
import Input from '../../components/Input/Input'
import { commonStringValues } from "../../utils/commonStringValues";
import { login } from '../../store/slices/auth'
import commonStyles from '../../styles/CommonStyles.module.scss'
import { useEffect, useState } from "react";
import formStyles from '../../styles/forms.module.scss';
import FormMsgError from "../../components/FormMsgError/FormMsgError";
import { setPageTitle } from "../../store/slices/app/appSlice";

const LoginPage = () => {
    const { auth } = useSelector(state => state)
    const dispatch = useDispatch();
    const [activeToastLoginError, setActiveToastLoginError] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setActiveToastLoginError(false)
        }, 100000)
    }, [activeToastLoginError])

    const { email, password, onInputChange } = useForm({
        password: '1234',
        email: 'pepe@gmail.com'
    })

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(setPageTitle({title: commonStringValues.title.app}))
        dispatch(login({
            payload: {
                email,
                password
            }
        }))
        
        if (!auth.autenticated) {
            setActiveToastLoginError(true)
        }
    }

    return (
        <>
            {
                activeToastLoginError &&
                <FormMsgError msg={auth.error}></FormMsgError>
            }
            <div className={`${commonStyles.flexCenterCenter} ${commonStyles.flexColumn} ${commonStyles.fullPage}`}>
                <div className={commonStyles.title}>{commonStringValues.title.loginWelcome}</div>
                <div>
                    <div className={formStyles.containerInput}>
                        <Input
                            value={email}
                            placeholder={commonStringValues.form.emailPlaceholder}
                            name={commonStringValues.user.data.email}
                            onChange={onInputChange}
                        ></Input>
                    </div>
                    <div className={formStyles.containerInput}>
                        <Input
                            value={password}
                            placeholder={commonStringValues.form.passswordPlaceholder}
                            name={commonStringValues.user.data.password}
                            onChange={onInputChange}
                        ></Input>
                    </div>
                    <div>
                        <Button type={commonStringValues.btn.type.primary} handleClick={onSubmit} label={commonStringValues.btn.login}></Button>
                    </div>
                </div>
            </div>

        </>


    )
}

export default LoginPage