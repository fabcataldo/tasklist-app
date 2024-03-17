import { DummyRepository } from "../../../dummy-repository/DummyRepository"
import { setUserLogged, startLogin } from "./authSlice"

export const login = (action) => {
    return (dispatch, getState) => {
        dispatch(startLogin())
        DummyRepository.login(action.payload).then((responseLogin) => {
            dispatch(setUserLogged({
                loading: false,
                autenticated: responseLogin.ok,
                user: {
                    name: responseLogin.data.name,
                    surname: responseLogin.data.surname,
                    email: responseLogin.data.email
                },
                error: responseLogin.error
            }))
        }).catch(resError => {
            dispatch(setUserLogged({
                loading: false,
                autenticated: false,
                user: {
                    name: null,
                    surname: null,
                    email: null
                },
                error: resError.error
            }))
        })
        
    }
}