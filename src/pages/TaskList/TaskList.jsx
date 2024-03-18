import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './TaskList.module.scss'
import List from './components/List/List'
import Filters from './filters/Filters';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import commonStyles from '../../styles/CommonStyles.module.scss'
import { commonStringValues } from '../../utils/commonStringValues';
import { setPageTitle } from '../../store/slices/app/appSlice';

const TaskList = () => {
    const { todos } = useSelector((state) => state.todos)
    const [currentTodos, setCurrentTodos] = useState(todos)
    const navigate = useNavigate();
    const [showOrderersFilters, setShowOrderersFilters] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        setCurrentTodos(todos)
    }, [todos])

    const goToNewTask = () => {
        dispatch(setPageTitle({title: commonStringValues.title.addNewTaskPage}))
        navigate('/add-update-todo')
    }

    return (
        <div>
            <div className={`${commonStyles.flexCenterCenter} ${styles.additionalBtn}`}>
                <Button type={commonStringValues.btn.type.secondary} handleClick={() => goToNewTask()} label={commonStringValues.btn.addNewTask}></Button>
            </div>
            <div className={`${commonStyles.flexCenterCenter} ${styles.additionalBtn}`}>
                <Button
                    type={commonStringValues.btn.type.secondary}
                    handleClick={() => { setShowOrderersFilters(!showOrderersFilters) }}
                    label={
                        showOrderersFilters
                            ? commonStringValues.btn.filtersOrderers.hideFilterOrder
                            : commonStringValues.btn.filtersOrderers.showFilterOrder
                    }>
                </Button>
            </div>
            {
                showOrderersFilters
                && <div className={styles.filtersOrderersContainer}>
                    <Filters
                        setCurrentTodos={setCurrentTodos}
                        currentTodos={currentTodos}
                        origTodos={todos}>
                    </Filters>
                </div>
            }
            <div>
                <List items={currentTodos}></List>
            </div>
        </div>
    )
}

export default TaskList