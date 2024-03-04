import * as React from 'react';
import { useState, useEffect } from 'react';
import { Row, Col, Card, Table, Modal, Button } from 'react-bootstrap';
import * as $ from 'jquery';
import AddBudget from './Add_budget';

const names = [
    {
        id: 1,
        Amt: '$492,456,000',
        Acc_code: '100-221-77',
        Fund: 'Tiger Nixon',
        Year: '2024',
        Dept: 'Federral',
        Gl: 'XX-XXX-XX',
        Gl_desc: 'Dept. of None',
        Trans_desc: 'Null',
        Budget_date: '2011/04/25'
    },
    {
        id: 2,
        Amt: '$4982,456,000',
        Acc_code: '100-221-77',
        Fund: 'Tiger Nixon',
        Year: '2024',
        Dept: 'Federral',
        Gl: 'XX-XXX-XX',
        Gl_desc: 'Dept. of None',
        Trans_desc: 'Null',
        Budget_date: '2011/04/25'
    },
    {
        id: 3,
        Amt: '$4992,456,000',
        Acc_code: '100-221-77',
        Fund: 'Tiger Nixon',
        Year: '2024',
        Dept: 'Federral',
        Gl: 'XX-XXX-XX',
        Gl_desc: 'Dept. of None',
        Trans_desc: 'Null',
        Budget_date: '2011/04/25'
    },
    {
        id: 4,
        Amt: '$92,456,000',
        Acc_code: '100-221-77',
        Fund: 'Tiger Nixon',
        Year: '2024',
        Dept: 'Federral',
        Gl: 'XX-XXX-XX',
        Gl_desc: 'Dept. of None',
        Trans_desc: 'Null',
        Budget_date: '2011/04/25'
    }
];

$.DataTable = require('datatables.net-bs');
require('datatables.net-responsive-bs');
function atable() {
    let tableZero = '#data-table-zero';
    $.fn.dataTable.ext.errMode = 'throw';
    // @ts-ignore
    $(tableZero).DataTable({
        data: names,
        order: [[0, 'asc']],
        columns: [
            {
                data: 'id',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'Amt',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'Acc_code',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'Fund',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'Year',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'Dept',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'Gl',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'Gl_desc',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'Trans_desc',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'Budget_date',
                render: function (data, type, row) {
                    return data;
                }
            }
        ]
    });
}

function Allbudgets() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        atable();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">All Budgets</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row className="align-items-center m-l-0">
                                <Col className="text-right mb-2">
                                    <Button variant="primary" className="btn-sm btn-round has-ripple" onClick={() => setIsOpen(true)}>
                                        <i className="feather icon-plus" /> Add Budget
                                    </Button>
                                </Col>
                            </Row>
                            <Table striped hover responsive bordered className="table table-condensed" id="data-table-zero">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Amount</th>
                                        <th>ACC. Code</th>
                                        <th>Fund</th>
                                        <th>Year</th>
                                        <th>Dept</th>
                                        <th>General Ledger</th>
                                        <th>GL Desc</th>
                                        <th>Trans_desc</th>
                                        <th>Budget_date</th>
                                    </tr>
                                </thead>

                                {/* <tbody>
                                    {names.map((v, k) => (
                                        <tr key={k}>
                                            <td>{v.id}</td>
                                            <td>{v.Acc_code}</td>
                                            <td>{v.Amt}</td>
                                            <td>{v.Dept}</td>
                                        </tr>
                                    ))}
                                </tbody> */}
                            </Table>
                        </Card.Body>
                    </Card>
                    <Modal show={isOpen} onHide={() => setIsOpen(false)} size="lg">
                        <Modal.Body>
                            <AddBudget />
                        </Modal.Body>
                    </Modal>
                </Col>
            </Row>
        </>
    );
}

export default Allbudgets;
