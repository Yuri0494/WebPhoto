import React from "react";
import "./header.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

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
                    <Link to="/" style={{ textDecoration: 'none' }}><h1 className="brand">Семейный фотоальбом</h1></Link>
                    </div>
                    <div className="header__navigation">
                        <div className="navigation">
                            <div className={burgerButton}
                                onClick={() => {
                                    this.toggleActive();
                            }}><span></span></div>
                            <ul className={activeMenu} >
                                <Link to="/bagaevs"><li className="link"><a onClick={() => {this.props.pageActive("bagaevs")}}>Багаевы</a></li></Link>
                                <Link to="/lapins"><li className="link"><a>Лапины</a></li></Link>
                                <li className="link"><a>Новые фото</a></li>
                                <li className="link"><a>Разное</a></li>
                            </ul>
                        </div>
                    </div>            
                </div>)
    }
}
