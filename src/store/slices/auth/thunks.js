import { DummyRepository } from "../../../dummy-repository/DummyRepository"
import { setUserLogged, startLogin } from "./authSlice"

export const login = (action) => {
    return async (dispatch, getState) => {
        dispatch(startLogin())
        const responseLogin = await DummyRepository.login(action.payload)
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
    }
}