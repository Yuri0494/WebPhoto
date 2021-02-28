import React from "react";
import "./header.css"

export default class Header extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            active: false,
        }
        this.toggleActive = this.toggleActive.bind(this);
    }

    toggleActive () {
        return this.setState({
            active: !this.state.active
        })
    }

    render () {
        
        let activeMenu = "links";
        let burgerButton = "burger__button";
        
        if(this.state.active) {
            activeMenu += " active";
            burgerButton += " active"
        } else {
            activeMenu = "links";
            burgerButton = "burger__button"
        }

        return (
                <div className="header__wrapper">
                    <div className="header__brand">
                        <h1 className="brand">Семейный фотоальбом</h1>
                    </div>
                    <div className="header__navigation">
                        <div className="navigation">
                            <div className={burgerButton}
                                onClick={() => {
                                    this.toggleActive();
                            }}><span></span></div>
                            <ul className={activeMenu} >
                                <li className="link"><a href="#">Багаевы</a></li>
                                <li className="link"><a href="#">Лапины</a></li>
                                <li className="link"><a href="#">Новые фото</a></li>
                                <li className="link"><a href="#">Разное</a></li>
                            </ul>
                        </div>
                    </div>
            
                </div>
            )
    }
}
