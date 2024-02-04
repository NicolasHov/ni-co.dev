import React from "react"
import './ListArticles.css'
import circleLinedEmpty from '../../assets/images/circle-lined-empty.svg'


const ListArticles = ({ data }) => {
    return (
        <div className="article-content">
            {data.map(item => {
                return (
                    <div key={item.id}>
                        <div className="flex-text" >
                            <div className="flex-text content-job">
                                <img className="circleLogo filter-black" src={circleLinedEmpty} alt="circle lined" />

                            </div>
                            <div className="article-space">
                                <h3 className="job">
                                    {item.job}
                                    {item.name}
                                </h3>
                                {item.company ?
                                    <div className="text-blue flex-text info-job">
                                        <div>{item.company}</div> ⋅
                                        <div>{item.place}</div> ⋅
                                        <div>{item.dates}</div>
                                    </div>
                                    :
                                    null
                                }
                                <div className="main-text description flex-text">
                                    <div style={{ marginRight: "6px" }}>• </div>
                                    <div>{item.description}
                                        <a className="" href={item.link}>Link</a>
                                    </div>
                                </div>
                                <div className="main-text technos flex-text" style={{ color: "#DBA9EC" }}>
                                    {item.technos.map(techno => {
                                        return (
                                            <div>{techno}⋅ </div>
                                        )
                                    })}
                                </div>
                                {item.other_link ?
                                    <div className="main-text">
                                        <a className="" href={item.other_link}>Link</a>
                                    </div>
                                    : null}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}


export default ListArticles