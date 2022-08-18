import "./Photos.css"
import Header from "../Header/Header"
import img1 from "../../img/1.jpg"
import img2 from "../../img/2.jpg"
import img3 from "../../img/3.jpg"
import img4 from "../../img/4.jpg"
import img5 from "../../img/5.jpg"
import img6 from "../../img/6.jpg"
import img7 from "../../img/7.jpg"
import img8 from "../../img/8.jpg"
import img9 from "../../img/9.jpg"
import img10 from "../../img/10.jpg"
import img11 from "../../img/11.jpg"
import img12 from "../../img/12.jpg"
import React, { Component } from "react"

class Photos extends Component {
  constructor(props) {
    super(props)
    this.state = { baseUrl: props.location.pathname }
  }
  render() {
    const { state } = this
    return (
      <div>
        <Header url={state.baseUrl} />
        <div className="grid">
          <img alt="house" className="grid__img" src={img1}></img>
          <img alt="house" className="grid__img" src={img2}></img>
          <img alt="house" className="grid__img" src={img3}></img>
          <img alt="house" className="grid__img" src={img4}></img>
          <img alt="house" className="grid__img" src={img5}></img>
          <img alt="house" className="grid__img" src={img6}></img>
          <img alt="house" className="grid__img" src={img7}></img>
          <img alt="house" className="grid__img" src={img8}></img>
          <img alt="house" className="grid__img" src={img9}></img>
          <img alt="house" className="grid__img" src={img10}></img>
          <img alt="house" className="grid__img" src={img11}></img>
          <img alt="house" className="grid__img" src={img12}></img>
        </div>
      </div>
    )
  }
}

export default Photos
