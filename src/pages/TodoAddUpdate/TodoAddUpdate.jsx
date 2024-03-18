import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { addTodo, updateTodo } from '../../store/slices/todos/thunks';
import Form from './components/Form/Form';
import ToastBootstrap from '../../components/ToastBootstrap/ToastBootstrap';

const TodoAddUpdate = () => {
    const { todos } = useSelector(state => state)
    const dispatch = useDispatch();
    const [activeToastLoginError, setActiveToastLoginError] = useState(false)
    let location = useLocation();
    const [currentTodo] = useState(location.state ? location.state.todo : null)
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setActiveToastLoginError(false)
        }, 100000)
    }, [activeToastLoginError])


    const onSubmit = (form) => {
        const payload = {
            payload: {
                uuid: form.uuid,
                description: form.description,
                dueDate: form.dueDate,
                completed: form.completed
            }
        }
        if (currentTodo !== null) {
            dispatch(updateTodo(payload))
        } else {
            dispatch(addTodo(payload))
        }
        
        if (todos.error === null) {
            navigate('/todos')
        } else {
            setActiveToastLoginError(true)
        }
    }

    return (
        <>
            <ToastBootstrap
                background='danger'
                title='Error'
                msg={todos.error}
                active={activeToastLoginError}>
            </ToastBootstrap>
            <Form onSubmit={onSubmit} todo={currentTodo}></Form>
        </>

    )
}

export default TodoAddUpdate