import React, { useState } from 'react'
import hamburguerIcon from '../../assets/imgs/hamburguericon.png'
import arrowLeftIcon from '../../assets/imgs/arrow-left.svg'
import styles from './Sidebar.module.scss'
import LeftBar from './LeftBar'
import { commonStringValues } from '../../utils/commonStringValues'
import { useLocation, useNavigate } from 'react-router-dom'
import commonStyles from '../../styles/CommonStyles.module.scss';

const Sidebar = () => {
    const [leftBar, setLeftBar] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();

    const activateDesactivateLeftBar = () => {
        setLeftBar(!leftBar)
    }

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div className={styles.completeSidebar}>
            <div className={commonStyles.containerIconBtn}>
                {
                    location.pathname.includes('/todos')
                        ? <img src={hamburguerIcon} onClick={() => activateDesactivateLeftBar()}></img>
                        : <img src={arrowLeftIcon} onClick={() => goBack()}></img>
                }
            </div>
            {
                leftBar &&
                <div className={styles.leftBarContainer} onClick={() => activateDesactivateLeftBar()}>
                    <div className={styles.backLeftBar}>
                        <div>
                            <LeftBar></LeftBar>
                        </div>
                    </div>
                    <div className={styles.backdrop}>
                    </div>

                </div>
            }
            <aside>
                <h1><span>{commonStringValues.title.app}</span></h1>
            </aside>
        </div>
    )
}

export default Sidebar;