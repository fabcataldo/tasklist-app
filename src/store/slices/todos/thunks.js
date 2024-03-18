import { DummyRepository } from "../../../dummy-repository/DummyRepository"
import { setTodos, startTodoRequest } from "./todosSlice"

export const addTodo = (action) => {
    return async (dispatch, getState) => {
        dispatch(startTodoRequest())
        const response = await DummyRepository.addTodo(action.payload)
        console.log('response')
        console.log(response)
        dispatch(setTodos({
            todos: [...response.data],
            currentTodo: null,
            loading: false,
            error: response.error
        }))
    }
}

export const updateTodo = (action) => {
    return async (dispatch, getState) => {
        dispatch(startTodoRequest())
        const currentTodosList = getState().todos.todos
        const response = await DummyRepository.updateTodo(action.payload)
        dispatch(setTodos({
            todos: currentTodosList.map(todo => {
                if(todo.uuid === response.data.uuid) {
                    return {
                        ...todo,
                        completed: response.data.completed,
                        description:  response.data.description,
                        photo: response.data.photo,
                        dueDate: response.data.dueDate
                    }
                } else {
                    return todo
                }
            }),
            currentTodo: null,
            loading: false,
            error: response.error
        }))
    }
}

export const updateStateTodo = (action) => {
    return async (dispatch, getState) => {
        const currentTodosList = getState().todos.todos
        dispatch(startTodoRequest())
        const response = await DummyRepository.updateStateTodo(action.payload.uuid, action.payload.completed)
        dispatch(setTodos({
            todos: currentTodosList.map(todo => {
                if(todo.uuid === response.data.uuid) {
                    return {
                        ...todo,
                        completed: response.data.completed
                    }
                } else {
                    return todo
                }
            }),
            currentTodo: null,
            loading: false,
            error: response.error
        }))
    }
}



export const deleteTodo = (action) => {
    return async (dispatch, getState) => {
        dispatch(startTodoRequest())
        const response = await DummyRepository.deleteTodo(action.payload.uuid)
        dispatch(setTodos({
            todos: [...response.data],
            currentTodo: null,
            loading: false,
            error: response.error
        }))
    }
}
