import React from 'react';
import Table from 'react-bootstrap/Table';
import TableBody from "./TableBody"
import {products} from "./products.js"

const BasicTable = () => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Left</th>
                    <th>Image</th>
                </tr>
            </thead>
            {products.map((i) => {
                console.log(i);
                return <TableBody i={i} key={i.id}/>
            })}
        </Table>
    );
};

export default BasicTable;