import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer"; 
import Bagaevs__slider from "./components/Bagaevs__slider";
import Lapins__slider from "./components/Lapins__slider";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export default class App extends React.Component {
    constructor (props) {
      super (props)
      this.state = {
        suchPageActive: "main",
      }
      this.thisPageIsActive = this.thisPageIsActive.bind(this);
    }

    thisPageIsActive (pageName) {
      return this.setState({
        suchPageActive: pageName
      })
    }
    render () {
      console.log(this.state.suchPageActive)
      return (
        <Router>
        <div className="page__wrapper">
            <div className="page__header">
              <Header pageActive={() => {this.thisPageIsActive()}}/>
            </div>
            <div className="page__content">
              <Switch>
              <Route path="/bagaevs" component={Bagaevs__slider}><Bagaevs__slider/></Route>
              <Route path="/lapins"><Lapins__slider/></Route>
              </Switch>
            </div>
            <div className="page__footer">
              <Footer/>
            </div>
        </div>
      </Router>)
    }
}