import React from "react"
import "./MainPanel.css"

const MainPanel = ({ data }) => {
    return (
        <>
            <div className="main-panel">
                <div className="title">

                    <div className="name">Hovart Nicolas</div>
                    <div className="subtitle"></div>
                    <div className="separator"></div>
                </div>
                <div className="work-projects"></div>
            </div>
        </>
    )
}

export default MainPanel;