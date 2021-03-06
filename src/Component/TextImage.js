import React from 'react'

export default function TextImage(props) {
    return (
        <div className="meme">
            <img src={props.randomImg} alt="randomImg" />
            <h2 className="top"> {props.topText}</h2>
            <h2 className="bottom">{props.bottomText}</h2>
        </div>
    )
}
