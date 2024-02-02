
import React from "react";
import "./ResumeReminder.css";
import Draggable from 'react-draggable';
import '../../assets/fonts/SF-Pro-Rounded-Regular.otf'
import education from '../../assets/data.json'
import Card_item from '../Card_item/Card_item.jsx'

export const ResumeReminder = () => {
    return (
        <Draggable>
            <section className="resume-reminder">
                <div className="main-panel">
                    <div className="title">

                        <div className="name">Hovart Nicolas</div>
                        <div className="subtitle"></div>
                        <div className="separator"></div>
                    </div>
                    <div className="work-projects"></div>
                </div>
                <div className="side-panel">
                    <div className="buttons">
                        <div className="ellipse ellipse1"><div className="hover_class">⨯</div></div>
                        <div className="ellipse ellipse2"><div className="hover_class">-</div></div>
                        <div className="ellipse ellipse3"><div className="hover_class">+</div></div>
                    </div>
                    <input className="search-bar" placeholder="🔍  Hovart Nicolas" />
                    <div className="subsection">
                        <div className="education">
                            <div className="title-2">Education</div>
                            {education.map(item => {
                                return (
                                    <Card_item item={item} />
                                )
                            })}
                        </div>
                        <div className="skills"></div>
                        <div className="tools"></div>
                        <div className="achievements"></div>
                        <div className="links"></div>
                    </div>
                    <div className="add-list"></div>
                    <div className="buttons"></div>
                </div>
            </section>
        </Draggable>
    )
}