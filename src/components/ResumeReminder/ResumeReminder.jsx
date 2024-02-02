
import React from "react";
import "./ResumeReminder.css";
import Draggable from 'react-draggable';
import '../../assets/fonts/SF-Pro-Rounded-Regular.otf'
import data from '../../assets/data.json'
import Card from '../Card/Card.jsx'

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
                            {data.education.map(item => {
                                return (
                                    <Card theme={"education"} item={item} />
                                )
                            })}
                        </div>
                        <div className="links">
                            <div className="title-2">Links</div>
                            {data.links.map(item => {
                                return (
                                    <Card theme={"links"} item={item} />
                                )
                            })}
                        </div>
                        <div className="skills">
                            <div className="title-2 skill_title">Skills</div>
                            {data.skills.map(item => {
                                return (
                                    <Card theme={"skills"} item={item} />
                                )
                            })}
                        </div>
                        <div className="skills">
                            <div className="title-2 skill_title">Tools</div>
                            {data.tools.map(item => {
                                return (
                                    <Card theme={"skills"} item={item} />
                                )
                            })}
                        </div>
                        <div className="achievements"></div>
                    </div>
                    <div className="add-list"></div>
                    <div className="buttons"></div>
                </div>
            </section>
        </Draggable>
    )
}