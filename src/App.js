import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";



export default class App extends React.Component {
    render () {
      return (
        <div className="page__wrapper">
            <div className="page__header">
              <Header/>
            </div>
            <div className="page__content">

            </div >
            <div className="page__footer">
              <Footer/>
            </div>
        </div>
      )
    }
}