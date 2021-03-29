import React from "react";
import "./slider.css";
import { Transition } from 'react-transition-group';
import photo1 from "./img(examples)/1.jpg";
import photo2 from "./img(examples)/2.jpg";
import photo3 from "./img(examples)/4.jpg";


export default class Slider extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            photos: [
                photo1,
                photo2,
                photo3,
            ],
            sliderCounter: 0,
            active: false,
        }
        this.nextPhoto = this.nextPhoto.bind(this);
        this.backPhoto = this.backPhoto.bind(this);
        this.toggleActive = this.toggleActive.bind(this);
        this.setActiveTrue = this.setActiveTrue.bind(this);
        }

nextPhoto () {
    if(this.state.sliderCounter >= this.state.photos.length - 1) {
        return this.setState({
            sliderCounter: 0
        })
    }

    return this.setState({
        sliderCounter: ++this.state.sliderCounter
    })
}

backPhoto () {
    if(this.state.sliderCounter <= 0) {
        return this.setState({
            sliderCounter: this.state.photos.length - 1
        })
    }

    return this.setState({
        sliderCounter: --this.state.sliderCounter
    })
}

toggleActive () {
    return this.setState({
        active: !this.state.active
    })
}

setActiveTrue () {
    return this.setState({
        active: true
    })
}

    render () {
        let photo = null;
        let photo2 = this.state.sliderCounter + 1;
        let photo3 = this.state.sliderCounter + 2;

        if(photo2 > this.state.photos.length - 1) {
            console.log(photo2);
            photo2 = 1;
        } 

        if(photo3 > this.state.photos.length - 1) {
            photo3 = 0;
        }

        if(this.state.active) {
            photo = <div className="slider__photo_now.active"><img src={this.state.photos[this.state.sliderCounter]}></img></div>
        } else {
            photo = <div className="slider__photo_now"><img src={this.state.photos[this.state.sliderCounter]}></img></div>
        }
        
        
        return (
            <div className="slider__wrapper">
                <div className="slider__content">
                    <div className="slider__photo">
                        <div className="arrow_container" onClick={() => {this.nextPhoto(), this.setActiveTrue()}}><div className="slider__arrow__next"></div></div>
                            <Transition in={this.state.active} timeout={700} onEntering={this.toggleActive}>
                            {
                            state => 
                            (<div className={`slider__photo_now ${state}`}>
                                <img src={this.state.photos[this.state.sliderCounter]}></img>
                            </div>)
                            }   
                            </Transition>
                        <div className="arrow_container" onClick={() => {this.backPhoto(), this.setActiveTrue()}}><div className="slider__arrow__back"></div></div>
                    </div>
                    <div className="slider__photos">
                    <Transition 
                        
                        timeout={700} 
                    >
                        {state => 
                        (<>
                            <div className={`slider__photos__preveiw ${state}`}>
                                <img src={this.state.photos[photo2]}></img>
                            </div>
                            <div className={`slider__photos__preveiw ${state}`}>
                                <img src={this.state.photos[photo3]}></img>
                            </div>
                            <div className={`slider__photos__preveiw ${state}`}>
                                <img src={this.state.photos[this.state.sliderCounter]}></img>
                            </div>
                        </>)
                        }   
                    </Transition>
                    </div>
                </div>
            </div>
        )
    }
}
