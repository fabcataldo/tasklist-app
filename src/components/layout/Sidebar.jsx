import React, { useState } from 'react'
import hamburguerIcon from '../../assets/imgs/hamburguer-white.png'
import arrowLeftIcon from '../../assets/imgs/arrow-left.svg'
import styles from './Sidebar.module.scss'
import LeftBar from './LeftBar'
import { useLocation, useNavigate } from 'react-router-dom'
import commonStyles from '../../styles/CommonStyles.module.scss';
import { useDispatch, useSelector } from 'react-redux'
import { setPageTitle } from '../../store/slices/app/appSlice'
import { commonStringValues } from '../../utils/commonStringValues'

const Sidebar = () => {
    const [leftBar, setLeftBar] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();
    const {app} = useSelector(state => state)
    const dispatch = useDispatch();

    const activateDesactivateLeftBar = () => {
        setLeftBar(!leftBar)
    }

    const goBack = () => {
        dispatch(setPageTitle({title: commonStringValues.title.app}))
        navigate(-1)
    }

    return (
        <div className={styles.completeSidebar}>
            <div className={commonStyles.containerIconBtn}>
                {
                    location.pathname.includes('/todos')
                        ? <img
                            src={hamburguerIcon}
                            onClick={() => activateDesactivateLeftBar()}
                            alt='charging hamburguer icon...'>
                        </img>
                        : <img
                            src={arrowLeftIcon}
                            onClick={() => goBack()}
                            alt='charging arrow left icon...'>
                        </img>
                }
            </div>
            {
                leftBar &&
                <div className={styles.leftBarContainer} onClick={() => activateDesactivateLeftBar()}>
                    <LeftBar></LeftBar>

                    <div className={styles.backdrop}>
                    </div>
                </div>
            }
            <div className={`${commonStyles.title} ${styles.titleApp}`}>{app.pageTitle}</div>
        </div>
    )
}

export default Sidebar;