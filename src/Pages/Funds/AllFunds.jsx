import * as React from 'react';
import { useState, useEffect } from 'react';
import { Row, Col, Card, Table, Button, Modal } from 'react-bootstrap';
import * as $ from 'jquery';
import AddGrant from './Add_fund';

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

const names = [
    {
        id: 1,
        GrantNo: '1001',
        DocNo: '100-221',
        GrantName: 'Tiger Nixon',
        StartDate: '2010/01/10',
        EndDate: '2011/04/25',
        MajorDept: 'Dept. of Defance',
        SubDept: 'Dept. of None',
        GL_FundNo: '11-XX-2003',
        GL_Dept: 'Federral',
        Grant_Desc: 'This Grant is related to NGO',
        Grant_Amt: '$120,000,00',
        IDC_Percentage: '16%',
        IDC_Amt: '$50,000',
        IDC_Limit: '$20,000'
    },
    {
        id: 2,
        GrantNo: '1002',
        DocNo: '100-261',
        GrantName: 'Tiger Nixon',
        StartDate: '2010/01/10',
        EndDate: '2011/04/25',
        MajorDept: 'Dept. of Defance',
        SubDept: 'Dept. of None',
        GL_FundNo: '11-XX-2003',
        GL_Dept: 'Federral',
        Grant_Desc: 'This Grant is related to NGO',
        Grant_Amt: '$120,000,00',
        IDC_Percentage: '16%',
        IDC_Amt: '$50,000',
        IDC_Limit: '$20,000'
    },
    {
        id: 3,
        GrantNo: '1003',
        DocNo: '100-561',
        GrantName: 'Tiger Nixon',
        StartDate: '2010/01/10',
        EndDate: '2011/04/25',
        MajorDept: 'Dept. of Defance',
        SubDept: 'Dept. of None',
        GL_FundNo: '11-XX-2003',
        GL_Dept: 'Federral',
        Grant_Desc: 'This Grant is related to NGO',
        Grant_Amt: '$120,000,00',
        IDC_Percentage: '16%',
        IDC_Amt: '$50,000',
        IDC_Limit: '$20,000'
    }
];

function atable() {
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
                data: 'GrantNo',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'DocNo',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'GrantName',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'StartDate',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'EndDate',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'MajorDept',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'SubDept',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'GL_FundNo',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'GL_Dept',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'Grant_Desc',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'Grant_Amt',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'IDC_Percentage',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'IDC_Amt',
                render: function (data, type, row) {
                    return data;
                }
            },
            {
                data: 'IDC_Limit',
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

function Allfunds() {
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
                            <Card.Title as="h5">All Funds</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row className="align-items-center m-l-0">
                                <Col />
                                <Col className="text-right mb-2">
                                    <Button variant="primary" className="btn-sm btn-round has-ripple" onClick={() => setIsOpen(true)}>
                                        <i className="feather icon-plus" /> Add Fund
                                    </Button>
                                </Col>
                            </Row>
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
                    <Modal show={isOpen} onHide={() => setIsOpen(false)} size="lg" >
                        <Modal.Body>
                            <AddGrant />
                        </Modal.Body>
                    </Modal>
                </Col>
            </Row>
        </>
    );
}

export default Allfunds;
