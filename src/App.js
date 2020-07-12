import React from 'react';
import './App.css';
import Container from "./components/container/Container"
import Jumbotron from "./components/jumbotron/Jumbotron";
import Header from "./components/header/Header";
import ListGroup from "./components/listgroup/ListGroup";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
        <Jumbotron />
        <Header/>
        <ListGroup/>
      </Container>

  );
}

export default App;
