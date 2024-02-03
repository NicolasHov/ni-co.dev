import React from "react"
import './ListArticles.css'


const ListArticles = ({ data, theme }) => {
    switch (theme) {
        case "experiences":
            return ListExperience(data)
            break;
        case "projects":
            return Listprojects(data)
            break;
        default:
            break;
    }
}

const ListExperience = (data) => {
    return (
        <div className="article-content main-text">
            {data.map(item => {
                return (
                    <>
                        <div>{item.job}</div>
                        <div>{item.company}</div>
                        <div>{item.description}</div>
                    </>
                )
            })}
        </div>
    )
}

const Listprojects = (data) => {
    return (<div className="article-content main-text">
        {data.map(item => {
            return (
                <>
                    <div>{item.name}</div>
                    <div>{item.description}</div>
                </>
            )
        })}
    </div>
    )

}

export default ListArticles