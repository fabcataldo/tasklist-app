import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import { useForm } from "../../hooks/useForm"
import { useNavigate } from "react-router-dom";
import Input from '../../components/Input/Input'
import { commonStringValues } from "../../utils/commonStringValues";
import { login } from '../../store/slices/auth'

const LoginPage = () => {
    const {auth} = useSelector(state => state)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { email, password, onInputChange } = useForm({
        password: '1234',
        email: 'pepe@gmail.com'
    })

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(login({
            type: '[Auth] Login',
            payload: {
                email,
                password
            }
        }))
        if (auth.autenticated === true) {
            navigate('/')
        }
    }

    return (
        <div>
            <div>Welcome to TaskList App!</div>
            <form>
                <div>
                    <Input
                        value={email}
                        setValue={onInputChange}
                        placeholder={commonStringValues.form.emailPlaceholder}
                        name='email'
                        onChange={onInputChange}
                    ></Input>
                </div>
                <div>
                    <Input
                        value={password}
                        setValue={onInputChange}
                        placeholder={commonStringValues.form.passswordPlaceholder}
                        name='password'
                        onChange={onInputChange}
                    ></Input>
                </div>
                <div>
                    <Button handleClick={onSubmit} label='Login'></Button>
                </div>
            </form>
        </div>


    )
}

export default LoginPage