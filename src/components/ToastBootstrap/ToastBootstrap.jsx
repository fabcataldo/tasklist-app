import Toast from 'react-bootstrap/Toast';
import styles from './ToastBootstrap.module.scss';
import commonStyles from '../../styles/CommonStyles.module.scss'

const ToastBootstrap = ({ title, msg, active }) => {
    return (
        <>
            {
                active && (
                            <Toast className={`${commonStyles.flexCenterCenter} ${styles.toast}`}>
                                <Toast.Header closeButton={false}>
                                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                                    <strong className="me-auto">{title}</strong>
                                </Toast.Header>
                                <Toast.Body>{msg}</Toast.Body>
                            </Toast>


                )
            }
        </>
    )
}

export default ToastBootstrap