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
        name: 'System Architect',
        position: 'Edinburgh',
        office: 'Tiger Nixon',
        age: 61,
        date: '2011/04/25',
        salary: '$320,800'
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
        dom: 'Bfrti',
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
        ],
        buttons: tableBtns
    });
    function clearfilter() {
        // @ts-ignore
        $('.search-it').find('input:text').val('');
        buttonTable.search('').columns().search('').draw();
    }
    // @ts-ignore
    new $.fn.dataTable.Buttons(buttonTable, {
        buttons: [
            {
                extend: 'columnsToggle',
                text: 'Toggle Cols'
            }
        ]
    });
    buttonTable.buttons(1, null).container().appendTo('#toggle');
    let tableColumnOrder = '#datatable-column-order';
    // @ts-ignore
    $(tableColumnOrder).DataTable({
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
        ],
        colReorder: true
    });

    let tableResponsive = '#data-table-responsive';
    // @ts-ignore
    $(tableResponsive).DataTable({
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
        ],
        responsive: {
            responsive: {
                details: {
                    // @ts-ignore
                    display: $.fn.dataTable.Responsive.display.childRowImmediate,
                    type: ''
                }
            }
        }
    });

}

function Allgrants() {
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
                            <Card.Title as="h5">All grants</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Table striped hover responsive bordered className="table table-condensed" id="datatable-button">
                            <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Grant No</th>
                                        <th>Doc No</th>
                                        <th>Grant Name</th>
                                        <th>Start Date</th>
                                        <th>End Date</th>
                                        <th>Major Department</th>
                                        <th>Sub Department</th>
                                        <th>GL Fund No</th>
                                        <th>GL Department</th>
                                        <th>Grant Desc.</th>
                                        <th>Grant Amt.</th>
                                        <th>IDC Percentage</th>
                                        <th>IDC Amount</th>
                                        <th>Threshold Limit</th>
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

export default Allgrants;
