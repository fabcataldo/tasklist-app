import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './TodoList.module.scss'
import List from './components/List/List'
import Filters from './filters/Filters';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import commonStyles from '../../styles/CommonStyles.module.scss'

const TodoList = () => {
    const { todos } = useSelector((state) => state.todos)
    const [currentTodos, setCurrentTodos] = useState(todos)
    const navigate = useNavigate();

    const goToNewTask = () => {
        navigate('/add-update-todo')
    }

    return (
        <div>
            <div className={commonStyles.flexCenterCenter}>
                <Button type='secondary' handleClick={() => goToNewTask()} label='Add new task'></Button>
            </div>
            <div>
                <Filters 
                    setCurrentTodos={setCurrentTodos}
                    currentTodos={currentTodos}
                    origTodos={todos}>
                </Filters>
                <main>
                    <List items={currentTodos}></List>
                </main>
            </div>

        </div>
    )
}

export default TodoList