
import React, { useEffect, useState } from "react";
import "./ResumeReminder.css";
import Draggable from 'react-draggable';
import '../../assets/fonts/SF-Pro-Rounded-Regular.otf'
import data from '../../assets/data.json'
import SidePanel from '../SidePanel/SidePanel.jsx'
import MainPanel from '../MainPanel/MainPanel.jsx'


// ##### Tools

const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

// #####

export const ResumeReminder = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions()); // todo: update state when window is resized
    const [filteredDataExperience, setFilteredDataExperience] = useState(data.experiences)
    const [filteredDataProject, setFilteredDataProject] = useState(data.projects)
    const [input, setInput] = useState("")

    useEffect(() => {
        // experiences
        let newData = data.experiences.map(a => ({ ...a })); // deep copy
        let result = newData.filter((xp) => xp.technos.includes(input))
        result.length != 0 ? setFilteredDataExperience(result) : setFilteredDataExperience(data.experiences)

        // projects
        let newDataProject = data.projects.map(a => ({ ...a })); // deep copy
        let resultProject = newDataProject.filter((xp) => xp.technos.includes(input))
        resultProject.length != 0 ? setFilteredDataProject(resultProject) : setFilteredDataProject(data.projects)
    }, [input])

    const handleChange = (event) => {
        setInput(event.target.value) // .toLowerCase()       
    }

    if (windowDimensions.width > 640)
        return (
            <Draggable>
                <section className="resume-reminder">
                    <MainPanel experiences={filteredDataExperience} projects={filteredDataProject} />
                    <SidePanel data={data} input={input} handleChange={handleChange} />
                </section>
            </Draggable >
        )
    else return (
        <section className="resume-reminder">
            <MainPanel experiences={filteredDataExperience} projects={filteredDataProject} />
            <SidePanel data={data} input={input} handleChange={handleChange} />
        </section>
    )

}