import { useDispatch, useSelector } from 'react-redux';
import styles from './LeftBar.module.scss'
import Button from '../Button/Button';
import {logout} from '../../store/slices/auth'

const LeftBar = () => {
    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()

    const doLogout = () => {
        dispatch(logout())
    }

    return (
        <header className={styles.appHeader}>
            {auth.autenticated ?
                <p className={styles.username}> Hello <span>{auth.user.name} {auth.user.surname}</span></p>
                    : null}

            <nav className={styles.mainNav}>
                <Button handleClick={doLogout} label='Close session'></Button>
            </nav>
        </header>
    )
}

export default LeftBar;