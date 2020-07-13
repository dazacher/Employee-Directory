import React, { Component } from "react";
import SearchForm from "../searchform/SearchForm"
import ResultsList from "../resultslist/ResultsList"
import Employees from "../../data/randomuser.json"
import API from "../../utils/api/API";

class SearchResultContainer extends Component {
    state = {
        search: "",
        results: Employees
    };


    // When this component mounts, search the Giphy API for pictures of kittens
    componentDidMount() {
        console.log("Component mounted");
        // this.searchRandomUser("");
    }

    searchRandomUser = query => {
        API.search(query)
        .then(res => {
            console.log(res);
            // this.setState({ results: res.data.data })
        })
            .catch(err => console.log(err));
    };

    // searchByFirstName = event => {

    // }

    render() {
        return (
            <div>
                <SearchForm
                    search={this.state.search}
                    //   handleFormSubmit={this.handleFormSubmit}
                    // searchByFirstName={this.searchByFirstName}
                />
                <ResultsList results={this.state.results} />
            </div>
        );
    }
};

export default SearchResultContainer;