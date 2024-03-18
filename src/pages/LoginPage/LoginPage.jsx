import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import { useForm } from "../../hooks/useForm"
import { useNavigate } from "react-router-dom";
import Input from '../../components/Input/Input'
import { commonStringValues } from "../../utils/commonStringValues";
import { login } from '../../store/slices/auth'
import commonStyles from '../../styles/CommonStyles.module.scss'
import { useEffect, useState } from "react";
import ToastBootstrap from "../../components/ToastBootstrap/ToastBootstrap";
import formStyles from '../../styles/forms.module.scss';

const LoginPage = () => {
    const { auth } = useSelector(state => state)
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
        dispatch(login({
            payload: {
                email,
                password
            }
        }))
        if (auth.autenticated === true) {
            navigate('/')
        } else {
            setActiveToastLoginError(true)
        }
    }

    return (
        <>
            <ToastBootstrap
                background='danger'
                title='Error'
                msg={auth.error}
                active={activeToastLoginError}>
            </ToastBootstrap>
            <div className={`${commonStyles.flexCenterCenter} ${commonStyles.fullPage}`}>
                <div className={commonStyles.title}>{commonStringValues.title.loginWelcome}</div>
                <div>
                    <div className={formStyles.containerInput}>
                        <Input
                            value={email}
                            placeholder={commonStringValues.form.emailPlaceholder}
                            name='email'
                            onChange={onInputChange}
                        ></Input>
                    </div>
                    <div className={formStyles.containerInput}>
                        <Input
                            value={password}
                            placeholder={commonStringValues.form.passswordPlaceholder}
                            name='password'
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