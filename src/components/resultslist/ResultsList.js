import React from "react";
import { MDBDataTable } from 'mdbreact';

const DatatablePage = (props) => {
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

// function ResultsList(props) {

//     return (

//         <form>
//             <MDBDataTable striped bordered hover size="sm" responsive>
//                 <thead>
//                     <tr>
//                         <th>Image</th>
//                         <th sort="asc">First Name</th>
//                         <th sort="asc">Last Name</th>
//                         <th>Email</th>
//                         <th>Phone Number</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {props.employeeRecords.map((person, id) => (
//                         <tr key={id}>
//                             <td sort><img alt={`${person.first} ${person.last}`} src={`./pictures/${person.picture}`}></img></td>
//                             <td>{person.first}</td>
//                             <td>{person.last}</td>
//                             <td>{person.email}</td>
//                             <td>{person.phone}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </MDBDataTable>
//         </form >
//     )
// };

export default DatatablePage;