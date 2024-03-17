import React, { useState } from 'react'
import hamburguerIcon from '../../assets/imgs/hamburguericon.png'
import styles from './Sidebar.module.scss'
import LeftBar from './LeftBar'
import { commonStringValues } from '../../utils/commonStringValues'

const Sidebar = () => {
    const [leftBar, setLeftBar] = useState(false)

    const activateDesactivateLeftBar = () => {
        setLeftBar(!leftBar)
    }

    return (
        <div className={styles.completeSidebar}>
            <div className={styles.containerHamburgerBtn} onClick={() => activateDesactivateLeftBar()}>
                <img src={hamburguerIcon}></img>
            </div>
            {
                leftBar && <div className={styles.backLeftBar} onClick={() => activateDesactivateLeftBar()}>
                    <div>
                        <LeftBar></LeftBar>
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