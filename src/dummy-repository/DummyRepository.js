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
    addTodo: (todo) => {
        return new Promise((resolve, reject) => {
            todos.data.push(todo)
            resolve({
                ok: true,
                data: todos,
                error: null
            })
        })
    },
    updateStateTodo: (uuid, newState) => {
        return new Promise((resolve, reject) => {
            const todoInTodosIdx = todos.data.findIndex(todo => todo.uuid === uuid)
            if (todoInTodosIdx !== -1) {
                const todoInTodos = {...todos.data[todoInTodosIdx]}
                console.log('todos[todoInTodos]')
                console.log(todoInTodos)
                console.log(todos)
                console.log(newState)

                todoInTodos.completed = newState
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
    updateTodo: (todoUpdated) => {
        return new Promise((resolve, reject) => {
            const todoInTodosIdx = todos.data.findIndex(todo => todo.uuid === todoUpdated.uuid)
            if (todoInTodosIdx !== -1) {
                const todoInTodos = todos.data[todoInTodosIdx]
                todoInTodos.description = todoUpdated.description
                todoInTodos.photo = todoUpdated.photo
                todoInTodos.dueDate = todoUpdated.dueDate
                todoInTodos.completed = todoUpdated.completed
                resolve({
                    ok: true,
                    data: todos,
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
    deleteTodo: (uuid) => {
        return new Promise((resolve, reject) => {
            const todoInTodosIdx = todos.data.findIndex(todo => todo.uuid === uuid)
            if (todoInTodosIdx !== -1) {
                todos.data.splice(todoInTodosIdx, 1)
                resolve({
                    ok: true,
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