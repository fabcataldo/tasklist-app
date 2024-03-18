import SwitchSlider from '../../../../../components/SwitchSlider/SwitchSlider'
import { todoItemDateFormatter } from '../../../../../utils/todoItemDateFormatter'
import styles from './Item.module.scss'
import { useDispatch } from "react-redux";
import { deleteTodo, updateStateTodo } from "../../../../../store/slices/todos/thunks";
import { useNavigate } from "react-router-dom";
import commonStyles from '../../../../../styles/CommonStyles.module.scss';
import deleteIcon from '../../../../../assets/imgs/delete.png';
import editIcon from '../../../../../assets/imgs/edit.png';
import Button from '../../../../../components/Button/Button';
import { commonStringValues } from '../../../../../utils/commonStringValues';
import { setPageTitle } from '../../../../../store/slices/app/appSlice';

const ListItem = ({ item }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeTodoState = (todoUuid, newTodoState) => {
        dispatch(updateStateTodo({payload: {uuid: todoUuid, completed: newTodoState}}))
    }

    const goToDetail = (todo) => {
        dispatch(setPageTitle({title: commonStringValues.title.detailsPage}))
        navigate('/todo', { state: { todo }})
    }

    const goToUpdate = (todo) => {
        dispatch(setPageTitle({title: commonStringValues.title.editTaskPage}))
        navigate('/add-update-todo', { state: { todo }})
    }

    const goToDelete = (todo) => {
        dispatch(deleteTodo({payload: {uuid: todo.uuid}}))
    }

    return (
        <>
            {
                item &&
                <div className={`${styles.container} ${styles.customShadow}`}>
                    <div className={styles.subItem}>
                        <div className={`${commonStyles.textOnly} ${styles.title}`} >
                            {item.title}
                        </div>
                        <div className={`${commonStyles.textOnly} ${styles.dueDate}`} >
                            Due date: <span className={styles.dueDate}>{todoItemDateFormatter(item.dueDate)}</span>
                        </div>
                        <div className={styles.completed}>
                            {item.completed}
                        </div>
                    </div>
                    
                    <div className={styles.subItem}>
                        <Button type={commonStringValues.btn.type.secondary} handleClick={() => goToDetail(item)} label='See detail'></Button>
                    </div>

                    <div className={`${styles.subItem} ${styles.actionButtons} ${commonStyles.flexCenterCenter}`}>
                        <div className={commonStyles.containerIconBtn}>
                            <img src={editIcon} onClick={() => goToUpdate(item)} alt="charging update button..."></img>
                        </div>

                        <div className={commonStyles.containerIconBtn}>
                            <img src={deleteIcon} onClick={() => goToDelete(item)} alt="charging delete button..."></img>
                        </div>
                    </div>

                    <div className={styles.subItem}>
                        <SwitchSlider
                            value={item.completed}
                            label='Completed'
                            setValue={
                                (value) => {
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