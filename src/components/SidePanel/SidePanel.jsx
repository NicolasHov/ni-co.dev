import React, { useState } from "react"
import Card from "../Card/Card"
import "./SidePanel.css"
import circleLogo from '../../assets/images/circle-lined.svg'

const SidePanel = ({ data, handleChange, input }) => {

    return (
        <>
            <div className="side-panel">
                <div className="buttons">
                    <div className="ellipse ellipse1"><div className="hover_class">⨯</div></div>
                    <div className="ellipse ellipse2"><div className="hover_class">-</div></div>
                    <div className="ellipse ellipse3"><div className="hover_class">+</div></div>
                </div>
                <input className="search-bar" placeholder="🔍  reactJS, nextJS,..." value={input} onChange={handleChange} />
                <div className="subsection">
                    <div className="education">
                        <div className="title-2">Education</div>
                        {data.education.map(item => {
                            return (
                                <Card theme={"education"} item={item} key={item.id} />
                            )
                        })}
                    </div>
                    <div className="links">
                        <div className="title-2">Links</div>
                        {data.links.map(item => {
                            return (
                                <Card theme={"links"} item={item} key={item.id} />
                            )
                        })}
                    </div>
                    <div className="skills">
                        <div className="title-2 skill_title">Skills</div>
                        {data.skills.map(item => {
                            return (
                                <Card theme={"skills"} item={item} key={item.id} />
                            )
                        })}
                    </div>
                    <div className="tools skills">
                        <div className="title-2 skill_title">Tools</div>
                        {data.tools.map(item => {
                            return (
                                <Card theme={"skills"} item={item} key={item.id} />
                            )
                        })}
                    </div>
                    <div className="interests skills">
                        <div className="title-2 skill_title">Interests</div>
                        {data.interests.map(item => {
                            return (
                                <Card theme={"skills"} item={item} key={item.id} />
                            )
                        })}
                    </div>
                    <div className="achievements"></div>
                </div>
                <a href="https://calendly.com/hovart-nicolas/" className="add-list">
                    <img className="circleLogo filter-white" src={circleLogo} />
                    <div className="title-2 addlist-text">Book a call</div>
                </a>
            </div>
        </>
    )
}

export default SidePanel;