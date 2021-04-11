import React from "react";
import "./bagaevs__slider.css";
import { Transition } from 'react-transition-group';


export default class Bagaevs__slider extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            photos: this.createAllPhotos(),
            sliderCounter: 0,
            active: false,
            photoNowActive: false,
        }
        this.nextPhoto = this.nextPhoto.bind(this);
        this.backPhoto = this.backPhoto.bind(this);
        this.toggleActive = this.toggleActive.bind(this);
        this.setActiveTrue = this.setActiveTrue.bind(this);
        this.getThisSlide = this.getThisSlide.bind(this);
        this.scalePhoto = this.scalePhoto.bind(this);
        this.createAllPhotos = this.createAllPhotos.bind(this);
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

getThisSlide (eventTarget) {
    let numberOfSlide = +eventTarget.id;
    console.log(this.state.sliderCounter + 1);
    this.setActiveTrue();
    return this.setState({
        sliderCounter: +eventTarget.id
    })

}

scalePhoto () {
    return this.setState({
        photoNowActive: !this.state.photoNowActive
    })
}

createAllPhotos () {
    let allPhotos = [];
    for(let i = 0; i < 87; i++) {
        allPhotos.push(`/img/${i+1}.jpg`);
    }
    return allPhotos;
    }

    render () {

        // Фотографии из нижней ленты слайдера
        let photo1 = this.state.sliderCounter + 1;
        let photo2 = this.state.sliderCounter + 2;
        let photo3 = this.state.sliderCounter + 3;

        // Граничные значения для последовательной смены фотографий при переключении.
        if(photo1 > this.state.photos.length - 1) {
            photo1 = 0;
        }

        if(photo2 > this.state.photos.length - 1) {
            photo2-=this.state.photos.length;
        } 

        if(photo3 > this.state.photos.length - 1) {
            photo3-=this.state.photos.length;
        }

        let styleForImg = null;
        let styleForPodlojka = null;

        if(this.state.photoNowActive) {
            styleForImg = "slider__photo_now__img22";
            styleForPodlojka = "podlojka__active";
        } else {
            styleForImg = "slider__photo_now__img";
            styleForPodlojka = "podlojka";
        }

        return (
            <div className="slider__wrapper">
                <div className={styleForPodlojka}
                    onClick={this.scalePhoto}
                ></div>
                <div className="slider__content">
                    <p className="slider__counter">{`Фотография ${this.state.sliderCounter + 1} из ${this.state.photos.length}`}</p>
                    <div className="slider__photo">
                            <Transition in={this.state.active} timeout={500} onEntered={this.toggleActive}>
                            {
                            state => 
                            (<div className={`slider__photo_now ${state}`}>
                                  <div className="arrow_container" onClick={() => {this.nextPhoto(), this.setActiveTrue(), console.log()}}><div className="slider__arrow__next"></div></div>
                                <img className ={styleForImg} src={this.state.photos[this.state.sliderCounter]}
                                onClick={(event) => {
                                    this.scalePhoto();
                                    console.log(event.target.src);
                                }}
                                ></img>
                                 <div className="arrow_container" onClick={() => {this.backPhoto(), this.setActiveTrue()}}><div className="slider__arrow__back"></div></div>
                            </div>)
                            }   
                            </Transition>
                    </div>
                    
                    <div className="slider__photos">
                    <Transition 
                        
                        timeout={700} 
                    >
                        {state => 
                        (<>
                            <div className={`slider__photos__preveiw ${state}`}
                                onClick={(event) => {
                                    this.getThisSlide(event.target);
                                }}
                            >
                                <img id={photo1} src={this.state.photos[photo1]}></img>
                            </div>
                            <div className={`slider__photos__preveiw ${state}`}
                                onClick={(event) => {
                                    this.getThisSlide(event.target);
                                }}
                            >
                                <img id={photo2} src={this.state.photos[photo2]}></img>
                            </div>
                            <div className={`slider__photos__preveiw ${state}`}
                                onClick={(event) => {
                                    this.getThisSlide(event.target);
                                }}
                            >
                                <img id={photo3} src={this.state.photos[photo3]}></img>
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
