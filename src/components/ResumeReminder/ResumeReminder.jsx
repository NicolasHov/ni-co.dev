
import React from "react";
import "./ResumeReminder.css";
import Draggable from 'react-draggable';
import '../../assets/fonts/SF-Pro-Rounded-Regular.otf'
import data from '../../assets/data.json'
import SidePanel from '../SidePanel/SidePanel.jsx'
import MainPanel from '../MainPanel/MainPanel.jsx'

export const ResumeReminder = () => {
    return (
        <Draggable>
            <section className="resume-reminder">
                <MainPanel data={data} />
                <SidePanel data={data} />
            </section>
        </Draggable>
    )
}