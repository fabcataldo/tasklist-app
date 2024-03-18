import { configureStore } from '@reduxjs/toolkit'
import { todosSlice } from './slices/todos'
import { authSlice } from './slices/auth'
import { appSlice } from './slices/app'

export const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
    auth: authSlice.reducer,
    app: appSlice.reducer
  },
})
