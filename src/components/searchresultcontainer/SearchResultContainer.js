import React, { Component } from "react";
import SearchForm from "../searchform/SearchForm"
import ResultsList from "../resultslist/ResultsList"
import Employees from "../../data/randomuser.json"


class SearchResultContainer extends Component {
    state = {
        search: "",
        results: Employees
    };


    componentDidMount() {
        console.log("Component mounted");
    }

    handleInputChange = event => {
        console.log("HandleInputCHange");
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
        this.searchByName(name)
    };

    searchByName = name => {
        let searchedForName = this.results.filter(results => {
            return results.first_name = name;
             
        })
// filter through results array and update state with new updated array
    }

    render() {
        return (
            <div>
                <SearchForm
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                />
                <ResultsList results={this.state.results} />
            </div>
        );
    }
};

export default SearchResultContainer;