import { useSelector } from 'react-redux';
import styles from './TodoList.module.scss'
import List from './components/List/List'
import Sidebar from '../../components/layout/Sidebar';

const TodoList = () => {
    const { todos } = useSelector((state) => state.todos)

    return (
        <div className={styles.container}>
            <Sidebar></Sidebar>
            <div>
                <main>
                    <List items={todos}></List>
                </main>
            </div>

        </div>
    )
}

export default TodoList