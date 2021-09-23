import React from 'react'

export default function Header(props) {
    return (
        <header>
               <img src={props.logo} alt="memeImage"
                />
                <p> Meme Generator</p>
        </header>
    )
}
