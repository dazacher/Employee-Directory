import React from "react";
import Table from "react-bootstrap/Table";


function ResultsList(props) {

    return (

        <form>
            <Table striped bordered hover size="sm" responsive>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {props.results.map((person, id) => (
                        <tr  key={id}>
                            <td><img alt={`${person.first_name} ${person.last_name}`} src={`./pictures/${person.picture}`}></img></td>
                            <td>{`${person.first_name} ${person.last_name}`}</td>
                            <td>{person.email}</td>
                            <td>{person.phone_number}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </form>
    )
};

export default ResultsList;