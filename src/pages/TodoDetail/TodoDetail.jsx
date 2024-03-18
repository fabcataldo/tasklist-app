import { useLocation } from 'react-router';
import { todoItemDateFormatter } from '../../utils/todoItemDateFormatter'
import styles from './TodoDetail.module.scss'

const TodoDetail = () => {
    let location = useLocation();
    const todo = location.state.todo;

    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <span className={styles.fieldData}>Description</span>:
                {todo.description}
            </div>
            <div className={styles.dueDate}>
                <span className={styles.fieldData}>Due date</span>:
                <span className={styles.dueDate}>{todoItemDateFormatter(todo.dueDate)}</span>
            </div>
            <div className={styles.completed}>
                <span className={styles.fieldData}>Completed</span>:
                {todo.completed}
            </div>
        </div>
    )
}

export default TodoDetail