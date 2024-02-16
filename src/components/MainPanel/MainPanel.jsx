import React, { useState, useContext } from "react"
import "./MainPanel.css"
import ListArticles from "../ListArticles/ListArticles"
import circleLogoFilled from '../../assets/images/circle-filled.svg'
import { ThemeContext } from '../../contexts.js';

const MainPanel = ({ experiences, projects }) => {
    const theme = useContext(ThemeContext);
    const classTheme = 'panel-' + theme
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("")
    // const handleOpen = () => setOpen(!open);

    return (
        <>

            <div className="main-panel">
                <div className="content-main-panel" >
                    <div className="title">
                        <h1>Hovart Nicolas</h1>
                        <div className="subtitle">
                            <div className="main-text" style={{ flexBasis: "100%" }}>
                                FullStack Developer
                            </div>
                            <div className="second-text">
                                hovart.nicolas@gmail.com
                            </div>
                            <div className="main-text">
                                ⋅
                            </div>
                            <div className="second-text">
                                Brussels, Belgium
                            </div>
                            <div className="main-text">
                                ⋅
                            </div>
                            <div className="second-text">
                                (+33) 0658066995
                            </div>
                        </div>
                    </div>
                    <div className="work-projects">
                        <div className={`frame ${classTheme}`}
                        >
                            <div className="content">
                                <h2 className="work">
                                    Work experience
                                </h2>
                                <ListArticles data={experiences} theme={"experiences"} />
                            </div>
                            <div className="separator"></div>
                            {/* <MessageDialog open={open} handleOpen={handleOpen} /> */}
                            <div className="interstice">
                                <img
                                    className="circleLogo filter-black circleLogoFilled"
                                    src={circleLogoFilled}
                                // onClick={handleOpen}
                                />
                            </div>
                            <div className="separator"></div>
                            <div className="content">
                                <h2 className="projects">
                                    Recent projects
                                </h2>
                                <ListArticles data={projects} theme={'projects'} />
                            </div>
                            <div className="separator"></div>
                            <div className="interstice">
                                <img className="circleLogo filter-black circleLogoFilled" src={circleLogoFilled} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPanel;