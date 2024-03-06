
import React, { useEffect, useState } from "react";
import "./ResumeReminder.css";
import '../../assets/fonts/SF-Pro-Rounded-Regular.otf'
// import { getData } from "../../utils/getResume.js";
import data from '../../assets/data.json'
import Draggable from 'react-draggable';
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

const filterDataByInput = (unfilteredData, input) => {
    let newData = unfilteredData.map(a => ({ ...a })); // deep copy
    return newData.filter((xp) => xp.keywords.includes(input))
}

// #####

export const ResumeReminder = () => {
    const [filter, setFilter] = useState("");
    // code for fetch API when  i will find a workaround for var env in vite prod : 
    // many states for data but its advised since react 18
    // const [education, setEducation] = useState([])
    // const [links, setLink] = useState([])
    // const [skills, setSkill] = useState([])
    // const [tools, setTool] = useState([])
    // const [interests, setInterest] = useState([])
    // const [experiences, setExperience] = useState([])
    // const [projects, setProject] = useState([])
    // const [filteredExperiences, setFilteredExperience] = useState([])
    // const [filteredProjects, setFilteredProject] = useState([])

    //code using data.json
    const [education, setEducation] = useState(data.education)
    const [links, setLink] = useState(data.links)
    const [skills, setSkill] = useState(data.skills)
    const [tools, setTool] = useState(data.tools)
    const [interests, setInterest] = useState(data.interests)
    const [experiences, setExperience] = useState(data.experiences)
    const [projects, setProject] = useState(data.projects)
    const [filteredExperiences, setFilteredExperience] = useState(data.experiences)
    const [filteredProjects, setFilteredProject] = useState(data.projects)
    // other states
    const [input, setInput] = useState("")
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions()); // todo: update state when window is resized

    // for fetch
    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const res = await getData();
    //             setExperience(res.record.experiences)
    //             setProject(res.record.projects)
    //             setFilteredExperience(res.record.experiences)
    //             setFilteredProject(res.record.projects)
    //             setEducation(res.record.education)
    //             setLink(res.record.links)
    //             setSkill(res.record.skills)
    //             setTool(res.record.tools)
    //             setInterest(res.record.interests)
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     fetchData();
    // }, [])

    useEffect(() => {
        if (experiences?.length) {
            let resultExperience = filterDataByInput(experiences, input)
            resultExperience.length != 0 ? setFilteredExperience(resultExperience) : setFilteredExperience(experiences)
        }

        if (projects?.length) {
            let resultProject = filterDataByInput(projects, input)
            resultProject.length != 0 ? setFilteredProject(resultProject) : setFilteredProject(projects)
        }
    }, [input])

    const handleChange = (event) => {
        setInput(event.target.value) // .toLowerCase()       
    }

    if (windowDimensions.width > 640)
        return (
            <Draggable>
                <section className="resume-reminder">
                    <MainPanel
                        experiences={filteredExperiences}
                        projects={filteredProjects}
                    />
                    <SidePanel
                        education={education}
                        links={links}
                        skills={skills}
                        tools={tools}
                        interests={interests}
                        input={input}
                        handleChange={handleChange}
                    />
                </section>
            </Draggable >
        )
    else return ( // without draggable for window size < 640px
        <section className="resume-reminder">
            <MainPanel
                experiences={filteredExperiences}
                projects={filteredProjects}
            />
            <SidePanel
                education={education}
                links={links}
                skills={skills}
                tools={tools}
                interests={interests}
                input={input}
                handleChange={handleChange}
            />
        </section>
    )
}