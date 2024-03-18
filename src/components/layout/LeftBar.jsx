import { useDispatch, useSelector } from 'react-redux';
import styles from './LeftBar.module.scss'
import { logout } from '../../store/slices/auth'

const LeftBar = () => {
    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()

    const doLogout = () => {
        dispatch(logout())
    }

    return (
        <div className={styles.container}>
            <div>
                {auth.autenticated ?
                    <div className={styles.username}> Hello
                        <span>{auth.user.name} {auth.user.surname}</span>
                    </div>
                    : null
                }
            </div>


            <div onClick={doLogout} className={styles.closeSessionBtn}>Close session</div>

        </div>

    )
}

export default LeftBar;