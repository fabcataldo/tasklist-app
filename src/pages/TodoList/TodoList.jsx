import { useSelector } from 'react-redux';
import styles from './TodoList.module.scss'
import List from './components/List/List'

const TodoList = () => {
    const { todos } = useSelector((state) => state.todos)
    return (
        <div className={styles.container}>
            <List items={todos}></List>
        </div>
    )
}

export default TodoList