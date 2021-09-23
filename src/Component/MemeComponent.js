
import React, { Component } from 'react'
import TextImage from './TextImage'
import Form from './Form'


import MemeContainer from './MemeContainer'

export default class MemeComponent extends Component {

constructor(){
    super()
    this.state = {
        font_size: "22",
        topText: "",
        bottomText: "",
        randomImg: "https://i.imgflip.com/24y43o.jpg",
        allMemeImgs: []
    }
    this.handleChange= this.handleChange.bind(this)
    this.handleSubmit= this.handleSubmit.bind(this)
}

handleChange(event){
    const {name, value} = event.target
    this.setState({
        [name]: value
    })
}

handleSubmit(event){
        event.preventDefault()
        const randoNumber = Math.floor(Math.random() * this.state.allMemeImgs.length);
        const ranMemeImg = this.state.allMemeImgs[randoNumber].url;

        this.setState({randomImg:ranMemeImg })
    
}

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const { memes } = response.data;
            console.log(memes[5])
            this.setState({ allMemeImgs: memes });
       });
      }


    render() {
        return (
            <div>
                <MemeContainer 
                /> 


            <Form
            handleChange={this.handleChange}
            {...this.state}
            handleSubmit={this.handleSubmit}
            {...this.state}
     
            />
       
            <TextImage
            {...this.state}

            />
            </div>
            
        )
    }
}
