import React, { Component } from "react";
import SearchForm from "../searchform/SearchForm"
// import ResultsList from "../resultslist/ResultsList"
// import Employees from "../../data/randomuser.json"
import axios from "axios";
import DatatablePage from "../resultslist/ResultsList";
// import { MDBDataTable } from 'mdbreact';


class SearchResultContainer extends Component {
    state = {
        
        employeeRecords: []
    };


    componentDidMount = () => {
        axios.get("https://randomuser.me/api/?results=100&nat=us")
        .then(response => {
            console.log(response);
            let employeeRecords = [];
            for (let i = 0 ; i < response.data.results.length ; i++ ) {
                let employee = {
                    picture: <img alt={`${response.data.results[i].name.first} ${response.data.results[i].name.last}`} src={`${response.data.results[i].picture.medium}`}></img>,
                    firstName: response.data.results[i].name.first,
                    lastName: response.data.results[i].name.last,
                    email: response.data.results[i].email,
                    phone: response.data.results[i].phone
                }
                employeeRecords.push(employee)
                console.log(employeeRecords)  
            }
            this.setState({ employeeRecords: employeeRecords });
        })
        
        console.log("Component mounted");
    }

    // handleInputChange = event => {
    //     console.log("HandleInputCHange");
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     this.setState({
    //         [name]: value
    //     });
    //     this.searchByName(name)
    // };

    // searchByName = name => {
    //     let searchedForName = this.results.filter(results => {
    //         return results.first_name = {name};
             
    //     })
// filter through results array and update state with new updated array
    // }

    render() {
        return (
            <div>
                <SearchForm
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                />
                <DatatablePage employeeRecords={this.state.employeeRecords} />
            </div>
        );
    }
};

export default SearchResultContainer;