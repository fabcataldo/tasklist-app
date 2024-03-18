import { DummyRepository } from "../../../dummy-repository/DummyRepository"
import { setTodos, startTodoRequest } from "./todosSlice"

export const addTodo = (action) => {
    return async (dispatch, getState) => {
        dispatch(startTodoRequest())
        const currentTodosList = getState().todos.todos
        const response = await DummyRepository.addTodo(currentTodosList, action.payload)
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
        const response = await DummyRepository.updateTodo(currentTodosList, action.payload)
        dispatch(setTodos({
            todos: currentTodosList.map(todo => {
                if(todo.uuid === response.data.uuid) {
                    todo = response.data;
                }
                return todo;
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
        const response = await DummyRepository.updateStateTodo(
            currentTodosList,
            {
                uuid: action.payload.uuid,
                newState: action.payload.completed
            }
        )
        dispatch(setTodos({
            todos: currentTodosList.map(todo => {
                if(todo.uuid === response.data.uuid) {
                    todo = response.data;
                }
                return todo;
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
        const currentTodosList = getState().todos.todos
        const response = await DummyRepository.deleteTodo(currentTodosList, action.payload.uuid)
        dispatch(setTodos({
            todos: [...response.data],
            currentTodo: null,
            loading: false,
            error: response.error
        }))
    }
}
