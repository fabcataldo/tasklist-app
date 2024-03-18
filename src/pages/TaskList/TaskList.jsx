import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './TaskList.module.scss'
import List from './components/List/List'
import Filters from './filters/Filters';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import commonStyles from '../../styles/CommonStyles.module.scss'
import { commonStringValues } from '../../utils/commonStringValues';

const TaskList = () => {
    const { todos } = useSelector((state) => state.todos)
    const [currentTodos, setCurrentTodos] = useState(todos)
    const navigate = useNavigate();

    useEffect(()=> {
        setCurrentTodos(todos)

        console.log('todos')
        console.log(todos)
    }, [todos])

    const goToNewTask = () => {
        navigate('/add-update-todo')
    }

    return (
        <div>
            <div className={`${commonStyles.flexCenterCenter} ${styles.addButtonContainer}`}>
                <Button type={commonStringValues.btn.type.secondary} handleClick={() => goToNewTask()} label={commonStringValues.btn.addNewTask}></Button>
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

export default TaskList