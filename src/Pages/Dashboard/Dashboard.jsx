import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import BarBasicChart from '../../Demo/Charts/HighChart/BarBasicChart';
import PieBasicChart from '../../Demo/Charts/ReChart/PieBasicChart';

function Dashboard() {
    return (
        <>
            <Row>
                {/* <Col md={6} xl={6}>
                    <Table striped hover responsive bordered className="table table-condensed" id="datatable-button">
                        <thead>
                            <tr>
                                <th>Fund</th>
                                <th>Fund Name</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                    </Table>
                </Col> */}
                <Col md={6} xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Fund Details</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Table responsive hover>
                                <thead>
                                    <tr>
                                        <th>Fund</th>
                                        <th>Fund Name</th>
                                        <th>IDC Budget</th>
                                        <th>IDC Balance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Fund 1</td>
                                        <td>$3000</td>
                                        <td>$456</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Fund 2</td>
                                        <td>$5000</td>
                                        <td>$1200</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Fund 3</td>
                                        <td>$10000</td>
                                        <td>$2345</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Fund 4</td>
                                        <td>$25000</td>
                                        <td>$3567</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
                {/* <Col md={6} xl={4}>
                    <Card className="amount-card overflow-hidden">
                        <Card.Body>
                            <h2 className="f-w-400">$23,567</h2>
                            <p className="text-muted f-w-600 f-16">
                                <span className="text-c-blue">Total Grants Amount</span>
                            </p>
                        </Card.Body>
                        <Chart {...amountProcessed} />
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="amount-card overflow-hidden">
                        <Card.Body>
                            <h2 className="f-w-400">$14,552</h2>
                            <p className="text-muted f-w-600 f-16">
                                <span className="text-c-green">Total</span> Budget
                            </p>
                        </Card.Body>
                        <Chart {...amountSpent} />
                    </Card>
                </Col>*/}
                {/* <Col md={6} xl={4}>
                    <Card className="amount-card overflow-hidden">
                        <Card.Body>
                            <h2 className="f-w-400">$1,156</h2>
                            <p className="text-muted f-w-600 f-16">
                                <span className="text-c-yellow">Remain</span> IDC Budget
                            </p>
                        </Card.Body>
                        <Chart {...profitProcessed} />
                    </Card>
                </Col>  */}
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Fund Amount Allocation</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <PieBasicChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Fund Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <BarBasicChart />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default Dashboard;
