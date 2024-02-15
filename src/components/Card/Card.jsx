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
    // let icons_url = ["https://pngimg.com/uploads/linkedIn/linkedIn_PNG19.png", "https://pngimg.com/uploads/github/github_PNG32.png", "https://cdns.iconmonstr.com/wp-content/releases/preview/7.6.0/240/iconmonstr-dashboard-alt-filled.png", "https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-discord-5.png"]
    // let random_num = Math.floor(Math.random() * colors.length)
    return (
        <div key={item.id} className="card link">
            <div className="ellipse-link" style={{ backgroundColor: colors[item.id % colors.length] }}>
                {/* <img className="icon" src={icons_url[item.id % icons_url.length]} /> */}
                {/* <img className="icon" src={item.icon_path} />  //TOFIX: won't work on build (maybe change for png images) -> see https://github.com/vitejs/vite/issues/1204 or https://vitejs.dev/guide/assets#importing-asset-as-url*/}
                {/* then tried using css but fail :  */}
                {/* <div className="icon" style={{
                    backgroundImage: "url(" + item.icon_path + ")"
                }}
                ></div> */}
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
    return (
        <div key={item.id} className="card skill">
            <div className="info">
                <div className="text-white">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</div>
            </div>
        </div>
    )
}

export default Card;