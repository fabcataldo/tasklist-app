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
            state.user = action.payload.user
            state.autenticated = action.payload.autenticated
            state.loading = action.payload.loading
            state.error = action.payload.error
        },
        logout: (state) => {
            state.loading = false
            state.autenticated = false
            state.user.name = null
            state.user.surname = null
            state.user.email = null
            state.error = null
        }
    },
})

export const { setUserLogged, startLogin, logout } = authSlice.actions