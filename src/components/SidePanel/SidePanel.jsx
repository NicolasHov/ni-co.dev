import React from "react"
import Card from "../Card/Card"
import "./SidePanel.css"

const SidePanel = ({ data }) => {
    return (
        <>
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
        </>
    )
}

export default SidePanel;