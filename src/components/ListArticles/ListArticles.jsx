import React, { useContext } from "react"
import './ListArticles.css'
import circleLinedEmpty from '../../assets/images/circle-lined-empty.svg'
import { ThemeContext, SizeContext } from '../../contexts.js';

const ListArticles = ({ data }) => {
    const theme = useContext(ThemeContext);
    const classTheme = 'technos-' + theme
    const size = useContext(SizeContext);
    const classSize = 'main-text-' + size

    return (
        <div className="article-content">
            {data.map(item => {
                return (
                    <div key={item.id}>
                        <div className="flex-text article" >
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
                                <div className={`main-text description flex-text ${classSize}`} >
                                    <div style={{ marginRight: "6px" }}>• </div>
                                    <div>{item.description}
                                        <a
                                            className="text-white"
                                            style={{ fontSize: "0.8em" }}
                                            href={item.link}
                                        >
                                            Link
                                        </a>
                                    </div>
                                </div>
                                <div className={`main-text technos flex-text ${classTheme}  ${classSize}`}>
                                    {item.technos.map((techno, index) => {
                                        return (
                                            <div key={index} > {techno.charAt(0).toUpperCase() + techno.slice(1)}⋅ </div>
                                        )
                                    })}
                                </div>
                                {item.other_link ?
                                    <div className={`main-text ${classSize}`}>
                                        <a className="" href={item.other_link}>Link</a>
                                    </div>
                                    : null}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}


export default ListArticles