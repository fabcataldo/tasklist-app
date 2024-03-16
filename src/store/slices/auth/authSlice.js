import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        autenticated: false,
        user: {
            name: null,
            surname: null,
            email: null
        },
        error: null
    },
    reducers: {
        startLogin: (state) => {
            state.loading = true;
        },
        setUserLogged: (state, action) => {
            console.log('acton')
            console.log(action)
            state.user = action.payload.user
            state.autenticated = action.payload.autenticated
            state.loading = action.payload.loading
            state.error = action.payload.error
        }
    },
})

export const { setUserLogged, startLogin } = authSlice.actions