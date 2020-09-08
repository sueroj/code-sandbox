import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from 'components/Navigation';
import Sandbox from 'components/Sandbox';

function App() {

  const element =
    <Router>
      <Container fluid>
        <div className="App">
          <Row>
            <Col>
              <header>
                <Navigation />
              </header>
            </Col>
          </Row>
          <Row>
            <Col>
                <Sandbox exercise="linkedlist"/>
            </Col>
          </Row>
        </div>
      </Container>
    </Router>;


  return element
}

export default App;
