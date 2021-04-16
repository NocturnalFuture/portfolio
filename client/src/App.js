import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap'
import Canvas from './Components/Canvas';
import 'bootstrap/dist/css/bootstrap.min.css';

import Projects from './Components/Projects';
import Navbar from './Components/Navbar'


function App() {
  return (
   <div className="dummy">
      <Container>

      <Row className="logo">
        <Col xl={6}><h3>@</h3></Col>
      </Row>

        <Row style={{marginTop: "90px"}} className="ceta">
          <Col xl={6} sm={12}><h1 style={{color: "white"}}>Hello Motto</h1><br/>
          <h2>my name is Adam and I am a creative fullstack web developer based in Berlin.
          <br/>
          <br/>
          My story began with an h1 in 2018 and ever since I have been driven by code and technology. Constantly trying to push the boundaries of the techstack I work with. 
         </h2>
          </Col>
        </Row>
        <Row>
          <Col xl={6} sm={12} xs={12}>
              <Canvas/>
          </Col>
          <Col xl={1} sm={12} xs={12}></Col>
          <Col xl={6} sm={12} xs={12}></Col>
        </Row>
      </Container> 

      </div>
  );
}

export default App;
