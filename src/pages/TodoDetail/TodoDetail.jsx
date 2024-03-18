import { useLocation } from 'react-router';
import { todoItemDateFormatter } from '../../utils/todoItemDateFormatter'
import styles from './TodoDetail.module.scss'
import commonStyles from '../../styles/CommonStyles.module.scss'

const TodoDetail = () => {
    const location = useLocation();
    const todo = location.state.todo;

    return (
        <div className={`${styles.container} ${commonStyles.flexCenterCenter} ${commonStyles.flexColumn}`}>
            <div className={styles.fieldTitle}>
                <span className={styles.fieldData}>Title</span>:
                {todo.title}
            </div>
            <div className={styles.fieldTitle}>
                <span className={styles.fieldData}>Description</span>:
                {todo.description}
            </div>
            <div className={styles.fieldTitle}>
                <span className={styles.fieldData}>Due date</span>:
                <span className={styles.dueDate}>{todoItemDateFormatter(todo.dueDate)}</span>
            </div>
            <div className={styles.fieldTitle}>
                <span className={styles.fieldData}>Status</span>:
                {todo.completed ? 'Completed' : 'Incompleted'}
            </div>
        </div>
    )
}

export default TodoDetail