import React from 'react';
import './App.css';
import Container from "./components/container/Container"
import Jumbotron from "./components/jumbotron/Jumbotron";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
        <Jumbotron />
      </Container>

  );
}

export default App;
