import { useLocation } from 'react-router';
import { todoItemDateFormatter } from '../../utils/todoItemDateFormatter'
import styles from './TodoDetail.module.scss'

const TodoDetail = () => {
    let location = useLocation();
    console.log('location')
    console.log(location)
    const todo = location.state.todo;

    return (
        <div>
            <div>
                <img src={todo.photo} alt='charging icon todo...'></img>
            </div>
            <div className={styles.description}>
                {todo.description}
            </div>
            <div className={styles.dueDate}>
                Due date: <span className={styles.dueDate}>{todoItemDateFormatter(todo.dueDate)}</span>
            </div>
            <div className={styles.completed}>
                {todo.completed}
            </div>
        </div>
    )
}

export default TodoDetail