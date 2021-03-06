import React from "react";
import "./slider.css";
import photo1 from "./img(examples)/1.jpg";
import photo2 from "./img(examples)/2.jpg";
import photo3 from "./img(examples)/4.jpg";


export default class Slider extends React.Component {
    constructor (props) {
        super(props);

    }

    render () {
        return (
            <div className="slider__wrapper">
                <div className="slider__content">
                    <div className="slider__photo">
                    <div className="slider__arrow__next"></div>
                        <div className="slider__photo__back">
                            <img src={photo3}></img>
                        </div>
                        <div className="slider__photo__now">
                            <img src={photo1}></img>
                        </div>
                        <div className="slider__photo__next">
                            <img src={photo2}></img>
                        </div>
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