import { createSlice } from '@reduxjs/toolkit'
import { todos } from '../../../dummy-values/todos'

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: todos,
        currentTodo: null,
        loading: false,
        error: null
    },
    reducers: {
        setTodos: (state, action) => {
            state.todos = action.payload.todos
            state.currentTodo = action.payload.currentTodo
            state.loading = action.payload.loading
            state.error = action.payload.error
        },
        setTodo: (state, action) => {
            state.currentTodo = action.payload
        },
        startTodoRequest: (state) => {
            state.loading = true;
        },
    },
})

export const { setTodos, startTodoRequest, setTodo } = todosSlice.actions
