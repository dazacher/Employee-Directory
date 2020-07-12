import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

class ListGroupRx extends Component {
    constructor(props) {
        super(props);

        const employees = [];

        this.state = {
            image: "",
            name: "",
            email: "",
            phone: ""
        };

        this.state = { employees };
    };

    render() {
        return (

            <form>
                {this.state.employees.map((person, id) => (
                    <ListGroup className="my-2" key={id}>
                        <ListGroup.Item>{person.image}</ListGroup.Item>
                        <ListGroup.Item>{person.name}</ListGroup.Item>
                        <ListGroup.Item>{person.email}</ListGroup.Item>
                        <ListGroup.Item>{person.phone}</ListGroup.Item>
                    </ListGroup>
                ))}
            </form>

        )
    };
};

export default ListGroupRx;