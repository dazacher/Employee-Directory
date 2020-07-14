import React from 'react';
import './App.css';
import Container from "./components/container/Container"
import Jumbotron from "./components/jumbotron/Jumbotron";
// import SearchForm from "./components/searchform/SearchForm";
// import ResultsList from "./components/resultslist/ResultsList";
import SearchResultContainer from "./components/searchresultcontainer/SearchResultContainer";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

function App() {
  return (
    <>
      <Jumbotron />
      <Container>
        <SearchResultContainer/>
      </Container>
    </>
  );
}

export default App;
