
import React, { useState, useSyncExternalStore } from "react";
import "./ResumeReminder.css";
import Draggable from 'react-draggable';
import '../../assets/fonts/SF-Pro-Rounded-Regular.otf'
import data from '../../assets/data.json'
import SidePanel from '../SidePanel/SidePanel.jsx'
import MainPanel from '../MainPanel/MainPanel.jsx'

const getScreenWidth = () => {
    return 641
}

export const ResumeReminder = () => {
    const [screenWidth, setScreenWidth] = useState(getScreenWidth())

    return (
        // { screenWidth > 640 ?
        <Draggable>
            <section className="resume-reminder">
                <MainPanel data={data} />
                <SidePanel data={data} />
            </section>
        </Draggable>
        //     :
        // <section className="resume-reminder">
        //     <MainPanel data={data} />
        //     <SidePanel data={data} />
        // </section>
        // }
    )
}