import { todoItemDateFormatter } from '../../../../../utils/todoItemDateFormatter'

import styles from './Item.module.scss'

const ListItem = ({item}) => {
    console.log('item')
    console.log(item)
    return (
        <>
            {
                item &&
                <div className={styles.container}>
                    <div className={styles.description}>
                        {item.description}
                    </div>
                    <div className={styles.description}>
                        Due date: <span className={styles.dueDate}>{todoItemDateFormatter(item.dueDate)}</span>
                    </div>
                    <div className={styles.completed}>
                        {item.completed}
                    </div>
                </div>
            }
        </>
    )
}

export default ListItem