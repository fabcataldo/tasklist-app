import { useLocation } from 'react-router';
import { todoItemDateFormatter } from '../../utils/todoItemDateFormatter'
import styles from './TodoDetail.module.scss'
import commonStyles from '../../styles/CommonStyles.module.scss'

const TodoDetail = () => {
    let location = useLocation();
    const todo = location.state.todo;

    return (
        <div className={`${commonStyles.flexCenterCenter} ${styles.container}`}>
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