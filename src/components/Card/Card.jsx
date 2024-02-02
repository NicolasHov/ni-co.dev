import React from "react";
import './Card.css'


const Card = ({ item, theme }) => {
    switch (theme) {
        case "education":
            return Card_education(item)
            break;
        case "links":
            return Card_links(item)
            break;
        case "skills":
            return Card_skills(item)
            break;

        default:
            break;
    }
}


// theme Education
const Card_education = (item) => {
    return (
        <div key={item.id} className="card">
            <div className="ellipse-space">
                {item.type == 'University' ?
                    (
                        <div className="ellipse-educ">🎓</div>
                    )
                    :
                    null}
            </div>
            <div className="info">
                <div className="text-white cursus">{item.cursus}</div>
                <div className="text-blue university">{item.university}</div>
                <div className="text-light dates">{item.dates}</div>
            </div>
        </div>
    )
}

// theme links
const Card_links = (item) => {
    let colors = ["#BCD0F7", "#C7F3CF", "#F7F7BC", , "#d30c7b", "#7fffd4"]
    // let random_num = Math.floor(Math.random() * colors.length)
    return (
        <div key={item.id} className="card link">
            <div className="ellipse-educ">
                <div className="ellipse-link" style={{ backgroundColor: colors[item.id % colors.length] }}>
                    <img className="icon" src={item.icon_path} />
                </div>
            </div>
            <div className="info">
                <a href={item.link} >
                    <div className="text-white link_name">{item.name}</div>
                </a>
            </div>
        </div>
    )
}

// theme skills
const Card_skills = (item) => {
    return (
        <div key={item.id} className="card skill">
            <div className="info">
                <div className="text-white">{item.name}</div>
            </div>
        </div>
    )
}

export default Card;