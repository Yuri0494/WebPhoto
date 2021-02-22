import React from "react";
import "./Panel_of_navigation.css"


export default function PanelOfNavigation () {
    return (
    
    <div className="panel_wrapper">
        <div className="panel_brand">
            <h1 className="brand">WebPhoto</h1>
        </div>
        <div className="panel_navigation">
            <div className="navigation">
                <ul className="links">
                    <li className="link"><a href="#">Bagaevs</a></li>
                    <li className="link"><a href="#">Lapins</a></li>
                    <li className="link"><a href="#">Other</a></li>
                    <li className="link"><a href="#">New</a></li>
                </ul>
            </div>
        </div>

    </div>

    )
}