
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

const filterDataByInput = (dataType, input) => {
    let newData = dataType.map(a => ({ ...a })); // deep copy
    return newData.filter((xp) => xp.keywords.includes(input))

}

// #####

export const ResumeReminder = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions()); // todo: update state when window is resized
    const [filteredDataExperience, setFilteredDataExperience] = useState(data.experiences)
    const [filteredDataProject, setFilteredDataProject] = useState(data.projects)
    const [input, setInput] = useState("")

    useEffect(() => {
        // experiences
        let result = filterDataByInput(data.experiences, input)
        result.length != 0 ? setFilteredDataExperience(result) : setFilteredDataExperience(data.experiences)

        // projects
        let resultProject = filterDataByInput(data.projects, input)
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