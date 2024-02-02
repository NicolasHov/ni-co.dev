import React from "react";
import './Card_item.css'

const Card_item = ({ item }) => {
    return (
        <div key={item.id} className="card">
            {item.type == 'University' ?
                (
                    <div className="ellipse-educ"></div>
                )
                :
                null}
            <div className="info">
                <div className="text-white cursus">{item.cursus}</div>
                <div className="text-blue university">{item.university}</div>
                <div className="text-light dates">{item.dates}</div>
            </div>
        </div>
    )
}

export default Card_item;