import React, { Component } from 'react';
import './App.css';
import candidatosData from "./candidatos.json"
import { Col, Carousel } from "react-bootstrap"

import Select from "react-dropdown-select"

import ABRIL from "./imgs/FOTO ABRIL SABIDO XV.png"
import ARELY from "./imgs/FOTO ARELY CAMARGO XV.png"
import CLAUDETTE from "./imgs/FOTO CLAUDETTE GONZALEZ XV.png"
import HECTOR from "./imgs/FOTO HECTOR PEREZ XV.png"
import JESUS from "./imgs/FOTO JESUS RODRIGUEZ  XV.png"
import JOAQUIN from "./imgs/FOTO JOAQUIN NOH XV.png"
import ROBERTO from "./imgs/FOTO ROBERTO ERALES XV.png"
import prev from "./imgs/chevron-circle-left-solid.svg"
import next from "./imgs/chevron-circle-right-solid.svg"
import INMEL from "./imgs/INMEL.png"
import JOSE from "./imgs/JOSE.png"
import KARLA from "./imgs/KARLA.png"
import ROSS from "./imgs/ROSS.png"
import TYARE from "./imgs/TYARE.png"
import CARLOS from "./imgs/CARLOS.png"
import EDUARDO from "./imgs/EDUARDO.png"
import AVILA from "./imgs/AVILA.png"
import NICOLAS from "./imgs/NICOLAS.png"
import RENATA from "./imgs/RENATA.png"
import REYNA from "./imgs/REYNA.png"
import HERNANDEZ from "./imgs/HERNANDEZ.png"
import TORRES from "./imgs/TORRES.png"
import JESUS2 from "./imgs/JESUS.png"
import ANGELA from "./imgs/ANGELA.png"
import MARLENE from "./imgs/MARLENE.png"
import FRANCISCO from "./imgs/FRANCISCO.png"
import portada from "./imgs/portada.jpeg"

class App extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      fotos: {
        ABRIL,
        ARELY,
        CLAUDETTE,
        HECTOR,
        JESUS,
        JOAQUIN,
        ROBERTO,
        INMEL,
        JOSE,
        KARLA,
        ROSS,
        TYARE,
        CARLOS,
        EDUARDO,
        AVILA,
        NICOLAS,
        RENATA,
        REYNA,
        HERNANDEZ,
        TORRES,
        ANGELA,
        MARLENE,
        FRANCISCO,
        JESUS2
      },
      candidatos: false,
      value: []
    }
  }

  handleChange = (value) => {
    this.setState({value})
  }

  render() {
    let candidatos = this.state.value.length !== 0 ? candidatosData.filter((can) => can.distrito === this.state.value[0].dis).map((can, icandidato) => {
      let pluris = can.pluris.map((pluri, ipluri) => <li key={ipluri}><strong>{`${pluri[0]}`}</strong>{`${pluri[1]}`}</li>)
      return (
        <Carousel.Item key={icandidato}>
          <img
            className="d-block w-100"
            src={this.state.fotos[can.img]}
            alt="First slide"
            style={{padding: "15px 30px"}}
          />
          <Col style={{paddingBottom: 40}}>
            <h3 style={{textAlign: "center", fontWeight: "bold"}}>{can.nombre}</h3>
            <h5 style={{textAlign: "center", padding: "10px 0px"}}>{can.partido}</h5>
            <p style={{whiteSpace: "pre-wrap"}}>{can.text}</p>
            {pluris.length === 0 ? null : <h4>Plurinominales parásitos:</h4>}
            <ol>{pluris}</ol>
          </Col>
        </Carousel.Item>
      )
    }) : null
    return (
      <div style={{flex: 1, alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column"}}>
        <h3 style={{textAlign: "center", fontWeight: "bold", padding: "15px 0px 0px 0px", maxWidth: 600}}>¡Conoce a tu candidato!</h3>
        ESCOGE TU DISTRITO ->
        <Select style={{margin: "10px 0px"}} labelField="rom" values={this.state.value} options={[{dis:4, rom:"IV"},{dis:5, rom: "V"},{dis:11, rom:"XI"},{dis:15, rom:"XV"}]} onChange={(val) => this.handleChange(val)} />
        <Col>
          <img src={portada} style={{margin: "20px 0px", width: "100%"}}/>
        </Col>
        
        <Carousel style={{backgroundColor: "rgb(240,240,240)", maxWidth: 600}} interval={false} prevIcon={React.createElement("img", {className: "icon", src: prev})} nextIcon={React.createElement("img", {className: "icon", src: next})}>
          {candidatos}
        </Carousel>
      </div>
        
    );
  }
}

export default App;