import React, { Component } from "react";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: ""
        };
    };

    searchByFirstName = (event) => {

    };

    render() {
        return (
            <form>
                <label>
                    Search
                <br></br>
                    <input
                        name="firstName"
                        type="text"
                        value={this.state.firstName}
                        onChange={this.searchByFirstName}
                        placeholder="Search by First Name">
                    </input>
                </label>
            </form>
        );
    };
};

export default Header;