
import React, { useEffect, useState } from "react";
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
    const [filteredDataExperience, setFilteredDataExperience] = useState(data.experiences)
    const [filteredDataProject, setFilteredDataProject] = useState(data.projects)
    const [input, setInput] = useState("")

    useEffect(() => {
        console.log(input);

        // experiences
        let newData = data.experiences.map(a => ({ ...a })); // deep copy
        let result = newData.filter((xp) => xp.technos.includes(input))
        console.log(result);
        result.length != 0 ? setFilteredDataExperience(result) : setFilteredDataExperience(data.experiences)

        // projects
        let newDataProject = data.projects.map(a => ({ ...a })); // deep copy
        let resultProject = newDataProject.filter((xp) => xp.technos.includes(input))
        resultProject.length != 0 ? setFilteredDataProject(resultProject) : setFilteredDataProject(data.projects)
    }, [input])

    const handleChange = (event) => {
        setInput(event.target.value) // .toLowerCase()       
    }

    return (
        // TODO: 
        // { screenWidth > 640 ?
        <Draggable>
            <section className="resume-reminder">
                <MainPanel experiences={filteredDataExperience} projects={filteredDataProject} />
                <SidePanel data={data} input={input} handleChange={handleChange} />
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