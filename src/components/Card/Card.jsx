import React, { useContext } from "react"
import './Card.css'
import { ThemeContext } from '../../contexts.js';

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
    let colors = ["DBA9EC", "#4B296B", "#EA6D2A", "#B8C14B", "#FFFBFF"]
    return (
        <div key={item.id} className="card educ">
            <div className="ellipse-space">
                {item.type == 'University' ?
                    (
                        <div className="ellipse-educ" style={{ backgroundColor: colors[item.id % colors.length] }}>🎓</div>
                    )
                    :
                    <div className="ellipse-educ">🏀</div>}
            </div>
            <div className="info">
                <div className="text-white cursus">{item.cursus}</div>
                <div className="text-blue university">{item.university}</div>
                <div className="text-blue university">{item.training}</div>
                <div className="text-light dates">{item.dates}</div>
            </div>
        </div>
    )
}

// theme links
const Card_links = (item) => {
    let colors = ["#7fffd4", "#BCD0F7", "#F7F7BC", "#C7F3CF", "#7fffd4"]
    return (
        <div key={item.id} className="card link">
            <div className="ellipse-link" style={{ backgroundColor: colors[item.id[0] % colors.length] }}>
            </div>
            <div className="content-link">
                <a href={item.link} >
                    <div className="text-white link_name">{item.name}</div>
                </a>
            </div>
        </div>
    )
}

// theme skills
const Card_skills = (item) => {
    const theme = useContext(ThemeContext);
    const classTheme = 'card-' + theme
    return (
        <div key={item.id} className={`card skill ${classTheme}`}>
            <div className="info">
                <div className="text-white">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</div>
            </div>
        </div>
    )
}

export default Card;