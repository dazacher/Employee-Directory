import React from "react";
import "./SearchForm.css"

function SearchForm(props) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="search">
                    Search
                <br></br>
                    <input
                        name="search"
                        type="text"
                        value={props.search}
                        className="form-control"
                        onChange={props.handleInputChange}
                        id="search"
                        placeholder="Search by Name">
                    </input>
                </label>
            </div>
        </form>
    );
};

export default SearchForm;