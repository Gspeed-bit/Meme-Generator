import React from 'react'

export default function Form(props) {
    return (
        <div>
            <form className="meme-form" onSubmit={props.handleSubmit}>
                <input type="text" 
                 name= "topText"
                 value={props.topText}
                 placeholder="Top Text"
                onChange= {props.handleChange}
                />

                <input type="text" 
                 name= "bottomText"
                 value={props.bottomText}
                 placeholder="Bottom Text"
                 onChange= {props.handleChange}
                
                />  
                <button onClick={props.handleSubmit}>Gen</button>
            </form>
        </div>
    )
}
