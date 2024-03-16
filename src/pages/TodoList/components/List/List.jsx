import ListItem from "./Item/Item"
import styles from './List.module.scss'
import NoData from '../../../../components/NoData/NoData'


const List = ({items}) => {
    console.log('items')
    console.log(items)
    return (
        <>
            {
                !items || items.length === 0
                ? <NoData></NoData>
                : items.map( item => {
                    return (
                        <div className={styles.containerList}>
                            <ListItem item={item}></ListItem>
                        </div>
                    )
                })
            }
        </>
    )
}

export default List