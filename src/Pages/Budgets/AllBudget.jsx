import * as React from 'react';
import { useEffect } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import * as $ from 'jquery';

$.DataTable = require('datatables.net-bs');
require('jszip');
require('pdfmake/build/pdfmake.js');
require('pdfmake/build/vfs_fonts.js');
require('datatables.net-autofill');
require('datatables.net-buttons-bs');
require('datatables.net-buttons/js/buttons.colVis.js');
require('datatables.net-buttons/js/buttons.flash.js');
require('datatables.net-buttons/js/buttons.html5.js');
require('datatables.net-buttons/js/buttons.print.js');
require('datatables.net-colreorder');
require('datatables.net-keytable');
require('datatables.net-responsive-bs');
require('datatables.net-rowgroup');
require('datatables.net-rowreorder');
require('datatables.net-scroller');
require('datatables.net-select');
require('datatables.net-fixedcolumns');
require('datatables.net-fixedheader');

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
        id: 3,
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
        id: 4,
        Amt: '$492,456,000',
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
                data: 'name',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'position',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'office',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'age',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'date',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'salary',
                render: function (data, type, row) {
                    return data;
                }
            }
        ]
    });
    let tableButton = '#datatable-button';
    let tableBtns = [
        {
            text: 'Clear Filters',
            className: 'clr-filters-btn btn btn-danger',
            action: function (e, dt, node, config) {
                // make function clear all text inputs on page via jquery
                clearfilter();
            }
        },
        {
            extend: 'copyHtml5',
            text: 'Copy',
            className: 'btn btn-secondary'
        },
        {
            extend: 'csvHtml5',
            text: 'CSV',
            className: 'btn btn-secondary'
        },
        {
            extend: 'print',
            text: 'Print',
            className: 'btn btn-secondary'
        }
    ];
    // @ts-ignore
    let buttonTable = $(tableButton).DataTable({
        // dom: 'Bfrti',
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
        ],
        buttons: tableBtns
    });
    function clearfilter() {
        // @ts-ignore
        $('.search-it').find('input:text').val('');
        buttonTable.search('').columns().search('').draw();
    }
}

function Allbudgets() {
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
                            <Card.Title as="h5">All s</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Table striped hover responsive bordered className="table table-condensed" id="datatable-button">
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
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default Allbudgets;
