import React from "react";
import { MDBDataTable } from 'mdbreact';

const ResultsList = (props) => {
    const employeeData = {
        columns: [
            {
                label: 'Image',
                field: 'picture'
            },
            {
                label: 'First Name',
                field: 'firstName',
                sort: 'asc'
            },
            {
                label: 'Last Name',
                field: 'lastName',
                sort: 'asc'
            },
            {
                label: 'Email',
                field: 'email',
                sort: 'asc'
            },
            {
                label: 'Phone Number',
                field: 'phone'

            }
        ],
        rows: props.employeeRecords
    };

    return (
        <MDBDataTable
            striped
            bordered
            responsive
            small
            data={employeeData}
        />
    );
};

export default ResultsList;