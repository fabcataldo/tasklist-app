import Button from "../../../components/Button/Button"
import styles from './Filters.module.scss'
import commonStyles from '../../../styles/CommonStyles.module.scss'

const Filters = ({ setCurrentTodos, currentTodos, origTodos }) => {
    const filterByState = (completed) => {
        setCurrentTodos([...currentTodos].filter(todo => todo.completed === completed))
    }

    const orderByDescription = () => {
        setCurrentTodos([...currentTodos].sort((todo1, todo2) => {
            return (todo1.description.toLowerCase() < todo2.description.toLowerCase())
                ? -1 : (todo1.description.toLowerCase() > todo2.description.toLowerCase()) ?
                    1 : 0
        }))
    }

    const orderByDate = (asc) => {
        setCurrentTodos([...currentTodos].sort(function (todo1, todo2) {
            return asc === true ? new Date(todo2.dueDate) - new Date(todo1.dueDate)
                : new Date(todo1.dueDate) - new Date(todo2.dueDate);
        }))
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.orderersFiltersContainer}>
                <div className={styles.subContainer}>
                    <div>Order by</div>
                    <div>
                        <div className={styles.buttonContainer}>
                            <Button type='secondary' label='Date (asc)' handleClick={() => orderByDate(true)}></Button>
                        </div>
                        <div className={styles.buttonContainer}>
                            <Button type='secondary' label='Date (desc)' handleClick={() => orderByDate(false)}></Button>
                        </div>
                        <div className={styles.buttonContainer}>
                            <Button type='secondary' label='Description' handleClick={orderByDescription}></Button>
                        </div>
                    </div>
                </div>
                <div className={`${styles.subContainer} ${commonStyles.flexCenterCenter}`} >
                    <div>Filter by</div>
                    <div>
                        <div className={styles.buttonContainer}>
                            <Button type='secondary' label='Completed' handleClick={() => filterByState(true)}></Button>
                        </div>
                        <div className={styles.buttonContainer}>
                            <Button type='secondary' label='Incompleted' handleClick={() => filterByState(false)}></Button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Button label='Clean filters and orderers' handleClick={() => setCurrentTodos(origTodos)}></Button>
            </div>
        </div>
    )
}

export default Filters