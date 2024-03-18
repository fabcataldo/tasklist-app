import { todos } from "../dummy-values/todos"
import { users } from "../dummy-values/users"

export const DummyRepository = {
    login: (user) => {
        return new Promise((resolve, reject) => {
            const userInUsers = users.find(u => u.email === user.email && u.password === user.password)
            if (userInUsers != null) {
                resolve({
                    ok: true,
                    data: {
                        name: userInUsers.name,
                        surname: userInUsers.surname,
                        email: userInUsers.email
                    },
                    error: null
                })
            } else {
                reject({
                    ok: false,
                    data: null,
                    error: 'User not found'
                })
            }
        })
    },
    addTodo: (currentTodos, todo) => {
        return new Promise((resolve, reject) => {
            const todosTmp = [...currentTodos]
            todosTmp.push(todo)
            resolve({
                ok: true,
                data: todosTmp,
                error: null
            })
        })
    },
    updateStateTodo: (currentTodos, payload) => {
        return new Promise((resolve, reject) => {
            const todoInTodosIdx = currentTodos.findIndex(todo => todo.uuid === payload.uuid)
            if (todoInTodosIdx !== -1) {
                const todoInTodos = {...currentTodos[todoInTodosIdx]}
                todoInTodos.completed = payload.newState
                resolve({
                    ok: true,
                    data: currentTodos,
                    error: null
                })
            } else {
                reject({
                    ok: false,
                    data: null,
                    error: 'Could not update todo'
                })
            }
        })
    },
    updateTodo: (currentTodos, todoUpdated) => {
        return new Promise((resolve, reject) => {
            const todoInTodosIdx = currentTodos.findIndex(todo => todo.uuid === todoUpdated.uuid)
            if (todoInTodosIdx !== -1) {
                const todoInTodos = {...currentTodos[todoInTodosIdx]}
                todoInTodos.description = todoUpdated.description
                todoInTodos.dueDate = todoUpdated.dueDate
                todoInTodos.completed = todoUpdated.completed

                resolve({
                    ok: true,
                    data: todoInTodos,
                    error: null
                })
            } else {
                reject({
                    ok: false,
                    data: null,
                    error: 'Could not update todo'
                })
            }
        })
    },
    deleteTodo: (currentTodos, uuid) => {
        return new Promise((resolve, reject) => {
            const todoInTodosIdx = currentTodos.findIndex(todo => todo.uuid === uuid)
            if (todoInTodosIdx !== -1) {
                const todosTmp = [...currentTodos]
                todosTmp.splice(todoInTodosIdx, 1)
                resolve({
                    ok: true,
                    data: todosTmp,
                    error: null
                })
            } else {
                reject({
                    ok: false,
                    error: 'Could not delete todo'
                })
            }
        })
    }
}