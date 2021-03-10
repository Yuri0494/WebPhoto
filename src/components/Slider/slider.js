import React from "react";
import "./slider.css";
import photo1 from "./img(examples)/1.jpg";
import photo2 from "./img(examples)/2.jpg";
import photo3 from "./img(examples)/4.jpg";


export default class Slider extends React.Component {
    constructor (props) {
        super(props);
            this.state ={
                photos: [
                    photo1,
                    photo2,
                    photo3,
                    photo2,
                    photo1,
                    photo2,
                    photo3,
                    photo2,
                ],
                sliderCount: 3,
                newRender: false,
                active: false,
                timerId: null,
                displayed: false,
            }
        this.toggleActive = this.toggleActive.bind(this);
        this.deleteTimer = this.deleteTimer.bind(this);
        this.setTimer = this.setTimer.bind(this);
        this.toggleRenderActive = this.toggleRenderActive.bind(this);
        this.nextSlide = this.nextSlide.bind(this); 
    }

    toggleActive () {
        return this.setState({
            active: !this.state.active
        })
    }

    toggleDisplayedActive () {
        return this.setState({
            displayed: !this.state.displayed
        })
    }

    deleteTimer () {
        clearTimeout(this.state.timerId);
        console.log(this.state.timerId);
        return this.setState({
            active: !this.state.active,
        })
    }

    setTimer () {
        console.log(this.state.newRender);
        return this.setState({
            timerId: setTimeout(this.toggleActive, 2500),
            newRender: !this.state.newRender,
        })
    }

    toggleRenderActive () {
        return this.setState({
            newRender: !this.state.newRender,
        })
    }

    nextSlide () {
        let newCount = this.state.sliderCount;
        if(this.state.sliderCount + 2 == this.state.photos.length) {
            newCount = 0;
        } else {
            ++newCount;
        }
        console.log(newCount);
        return this.setState({
            sliderCount: newCount,
        })
    }


    render () {
        let photos = this.state.photos;
        let photo = "slider__photo__back";
        let photo2 = "slider__photo__now";
        let photo3 = "slider__photo__next";
        let photo4 = "slider__photo__unvisible";
        
        if(this.state.active) {
            photo += " active";
            photo2 += " active";
            photo3 += " active";
            photo4 += " active";
        } else {
            photo = "slider__photo__back";
            photo2 = "slider__photo__now";
            photo3 = "slider__photo__next";
            photo4 = "slider__photo__unvisible";
        }

        let counter = this.state.sliderCount;
        if(counter === 0) {
            
        }

        let sliderPhotos = 
            (<>
                <div 
                className={photo}><img src={photos[this.state.sliderCount - 3]}></img></div>
                <div className={photo2}><img src={photos[this.state.sliderCount - 2]}></img></div>
                <div className={photo3}>
                    <img src={photos[this.state.sliderCount - 1]}></img>
                </div>
                <div className={photo4}><img src={photos[this.state.sliderCount]}></img></div>
                
            </>)
    
        return (
            <div className="slider__wrapper">
                <div className="slider__content">
                    <div className="slider__photo">
                        <div className="slider__arrow__next"
                            onClick={(event) => {
                                this.deleteTimer();
                                this.toggleActive();
                                this.setTimer();
                                setTimeout(this.nextSlide, 2500)
                            }}
                        ></div>
                            {sliderPhotos}
                        <div className="slider__arrow__back"></div>
                    </div>
                    <div className="slider__photos">
                        <div className="slider__photos__preveiw">
                            <img src={photo1}></img>
                        </div>
                        <div className="slider__photos__preveiw">
                            <img src={photo3}></img>
                        </div>
                        <div className="slider__photos__preveiw">
                            <img src={photo3}></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}