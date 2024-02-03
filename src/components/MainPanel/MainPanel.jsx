import React from "react"
import "./MainPanel.css"
import ListArticles from "../ListArticles/ListArticles"
import circleLogoFilled from '../../assets/images/circle-filled.svg'

const MainPanel = ({ data }) => {
    return (
        <>
            <div className="main-panel">
                <div className="content-main-panel" >
                    <div className="title">
                        <h1>Hovart Nicolas</h1>
                        <div className="subtitle">
                            <div className="main-text">
                                FullStack Developer
                            </div>
                            <div className="main-text">
                                ⋅
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
                        </div>
                        <div className="separator"></div>
                    </div>
                    <div className="work-projects">
                        <div className="frame">
                            <div className="content">
                                <h2 className="work">
                                    Work experience
                                </h2>
                                <ListArticles data={data.experiences} theme={"experiences"} />
                            </div>
                            <div className="separator"></div>
                            <div className="interstice">
                                <img className="circleLogo filter-black" src={circleLogoFilled} />
                            </div>
                            <div className="separator"></div>
                            <div className="content">
                                <h2 className="projects">
                                    Recent projects
                                </h2>
                                <ListArticles data={data.projects} theme={'projects'} />
                            </div>
                            <div className="separator"></div>
                            <div className="interstice">
                                <img className="circleLogo filter-black" src={circleLogoFilled} />
                            </div>
                            <div className="separator"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPanel;