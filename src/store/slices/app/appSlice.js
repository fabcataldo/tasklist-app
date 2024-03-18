import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        pageTitle: ''
    },
    reducers: {
        setPageTitle: (state, action) => {
            state.pageTitle = action.payload.title
        },
    },
})

export const { setPageTitle } = appSlice.actions