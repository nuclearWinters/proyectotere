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
import ATHENEA from "./imgs/ATHENEA.png"
import EDGAR from "./imgs/EDGAR.png"
import HUMBERTO from "./imgs/HUMBERTO.png"
import JESICA from "./imgs/JESICA.png"
import MARTINEZ from "./imgs/MARTINEZ.png"
import VALERIA from "./imgs/VALERIA.png"
import CONDE from "./imgs/CONDE.png"
import MAURICIO from "./imgs/MAURICIO.png"
import ROLANDO from "./imgs/ROLANDO.png"
import VILLATORO from "./imgs/VILLATORO.png"
import AMARO from "./imgs/AMARO.png"
import ALBERTO from "./imgs/ALBERTO.png"
import BEATRIZ from "./imgs/BEATRIZ.png"
import EDDY from "./imgs/EDDY.png"
import GREGORIO from "./imgs/GREGORIO.png"
import MARICRUZ from "./imgs/MARICRUZ.png"
import ERIKA from "./imgs/ERIKA.png"
import FATIMA from "./imgs/FATIMA.png"
import GABRIELA from "./imgs/GABRIELA.png"
import MICHELE from "./imgs/MICHELE.png"
import PASCUAL from "./imgs/PASCUAL.png"
import DZIB from "./imgs/DZIB.png"
import ENOEL from "./imgs/ENOEL.png"
import ERICK from "./imgs/ERICK.png"
import ORVAÑANOS from "./imgs/ORVAÑANOS.png"
import PALLARES from "./imgs/PALLARES.png"
import PATRICIA from "./imgs/PATRICIA.png"
import Carrillo from "./imgs/Carrillo.png"
import Euterpe from "./imgs/Euterpe.png"
import Ismael from "./imgs/Ismael.png"
import Nery from "./imgs/Nery.png"
import Yenny from "./imgs/Yenny.png"
import ANGELICA from "./imgs/ANGELICA.png"
import ERNESTO from "./imgs/ERNESTO.png"
import NÁHUAT from "./imgs/NÁHUAT.png"
import NELIA from "./imgs/NELIA.png"
import ROCIO from "./imgs/ROCIO.png"
import ESTHER from "./imgs/ESTHER.png"
import EUGENIA from "./imgs/EUGENIA.png"
import GUSTAVO from "./imgs/GUSTAVO.png"
import MARTINIANO from "./imgs/MARTINIANO.png"
import MUÑOZ from "./imgs/MUÑOZ.png"
import VELAZQUEZ from "./imgs/VELAZQUEZ.png"
import Chanito from "./imgs/Chanito.png"
import CORDOVA from "./imgs/CORDOVA.png"
import CORRALES from "./imgs/CORRALES.png"
import Miranda from "./imgs/Miranda.png"
import Navarrete from "./imgs/Navarrete.png"
import CHAN from "./imgs/CHAN.png"
import ANTONIETA from "./imgs/ANTONIETA.png"
import HAU from "./imgs/HAU.png"
import HUCHIM from "./imgs/HUCHIM.png"
import PEDRO from "./imgs/PEDRO.png"
import VILLALOBOS from "./imgs/VILLALOBOS.png"
import ARACELY from "./imgs/SEPULVEDA.png"
import ARIADNE from "./imgs/ARIADNE.png"
import CABRERA from "./imgs/CABRERA.png"
import COBOS from "./imgs/COBOS.png"
import OVANDO from "./imgs/OVANDO.png"
import SEPULVEDA from "./imgs/ARACELY.png"
import ZELAYA from "./imgs/ZELAYA.png"

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
        JESUS2,
        ATHENEA,
        EDGAR,
        HUMBERTO,
        JESICA,
        MARTINEZ,
        VALERIA,
        CONDE,
        MAURICIO,
        ROLANDO,
        VILLATORO,
        AMARO,
        ALBERTO,
        BEATRIZ,
        EDDY,
        GREGORIO,
        MARICRUZ,
        ERIKA,
        FATIMA,
        GABRIELA,
        MICHELE,
        PASCUAL,
        DZIB,
        ENOEL,
        ERICK,
        ORVAÑANOS,
        PALLARES,
        PATRICIA,
        Carrillo,
        Euterpe,
        Ismael,
        Nery,
        Yenny,
        ANGELICA,
        ERNESTO,
        NÁHUAT,
        NELIA,
        ROCIO,
        ESTHER,
        EUGENIA,
        GUSTAVO,
        MARTINIANO,
        MUÑOZ,
        VELAZQUEZ,
        Chanito,
        CORDOVA,
        CORRALES,
        Miranda,
        Navarrete,
        CHAN,
        ANTONIETA,
        HAU,
        HUCHIM,
        PEDRO,
        VILLALOBOS,
        ARACELY,
        ARIADNE,
        CABRERA,
        COBOS,
        OVANDO,
        SEPULVEDA,
        ZELAYA
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
        <Select style={{margin: "10px 0px"}} labelField="rom" values={this.state.value} options={[{dis: 1, rom:"I"}, {dis: 2, rom: "II"},{dis:3, rom:"III"},{dis:4, rom: "IV"},{dis:5, rom:"V"},{dis:6, rom:"VI"},{dis: 7, rom:"VII"},{dis: 8, rom:"VIII"}, {dis: 9, rom: "IX"}, {dis: 10, rom: "X"}, {dis: 11, rom: "XI"}, {dis: 12, rom: "XII"}, {dis: 13, rom: "XIII"}, {dis: 14, rom: "XIV"}, {dis: 15, rom: "XV"}]} onChange={(val) => this.handleChange(val)} />
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