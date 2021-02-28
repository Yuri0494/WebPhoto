import React from "react";
import "./footer.css";
import vk from"./img/vk.png";
import gh from"./img/gh.png";

export default class Footer extends React.Component {
    render () {
        return (
                <div className="footer__wrapper">
                    <div className="content">
                        <div className="footer__credit">Created by Yuri0494</div>
                        <div className="footer__credit">All rights reserved</div>
                        <div>
                            <ul className="social__links">
                                <li className="social__link"><img src={vk}></img></li>
                                <li className="social__link"><a href="https://github.com/Yuri0494"><img src={gh}></img></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
    }
}
