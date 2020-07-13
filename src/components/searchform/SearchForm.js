import React from "react";
import "./SearchForm.css"

function SearchForm(props) {
    return (
        <form>
            <div className="form-group">
                <label>
                    Search
                <br></br>
                    <input
                        name="search"
                        type="text"
                        // value={props.search}
                        className="form-control"
                        // onChange={props.searchByFirstName}
                        id="search"
                        placeholder="Search by First Name">
                    </input>
                </label>
            </div>
        </form>
    );
};

export default SearchForm;