import SwitchSlider from '../../../../../components/SwitchSlider/SwitchSlider'
import { todoItemDateFormatter } from '../../../../../utils/todoItemDateFormatter'
import styles from './Item.module.scss'
import { useDispatch } from "react-redux";
import { updateStateTodo } from "../../../../../store/slices/todos/thunks";
import Button from '../../../../../components/Button/Button';
import { useNavigate } from "react-router-dom";

const ListItem = ({ item }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeTodoState = (todoUuid, newTodoState) => {
        dispatch(updateStateTodo({payload: {uuid: todoUuid, completed: newTodoState}}))
    }

    const handleClick = (todo) => {
        navigate('/todo', { state: { todo }})
    }

    return (
        <>
            {
                item &&
                <div className={`${styles.container} ${styles.customShadow}`}>
                    <div>
                        <div className={styles.description}>
                            {item.description}
                        </div>
                        <div className={styles.dueDate}>
                            Due date: <span className={styles.dueDate}>{todoItemDateFormatter(item.dueDate)}</span>
                        </div>
                        <div className={styles.completed}>
                            {item.completed}
                        </div>
                    </div>
                    
                    <div>
                        <Button handleClick={() => handleClick(item)} label='See detail'></Button>
                    </div>
                    <div>
                        <SwitchSlider
                            value={item.completed}
                            label='Completed'
                            setValue={
                                (value) => {
                                    console.log('value')
                                    console.log(value)
                                    changeTodoState(item.uuid, value)
                                }
                            }>
                        </SwitchSlider>
                    </div>
                </div>
            }
        </>
    )
}

export default ListItem