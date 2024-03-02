import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import amountSpent from '../../Demo/Dashboard/chart/analytics-amount-spent';
import amountProcessed from '../../Demo/Dashboard/chart/analytics-amount-processed';
import profitProcessed from '../../Demo/Dashboard/chart/analytics-profit-processed';
import trafficChart from '../../Demo/Dashboard/chart/analytics-traffic-chart';
import secEcommerceChartBar1 from '../../Demo/Dashboard/chart/project-sec-ecommerce-chart-bar-1';

function Dashboard() {
    return (
        <>
            <Row>
                <Col md={6} xl={4}>
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
                </Col>
                <Col md={6} xl={4}>
                    <Card className="amount-card overflow-hidden">
                        <Card.Body>
                            <h2 className="f-w-400">$1,156</h2>
                            <p className="text-muted f-w-600 f-16">
                                <span className="text-c-yellow">Remain</span> IDC Budget
                            </p>
                        </Card.Body>
                        <Chart {...profitProcessed} />
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Fund campaign</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...trafficChart} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Body>
                            <Row className="justify-content-center text-center">
                                <Col sm={5}>
                                    <h6 className="text-muted">Real-Time Visits</h6>
                                    <h3>53k</h3>
                                </Col>
                                <Col sm={5}>
                                    <h6 className="text-muted">Returning Visitors</h6>
                                    <h3>10k</h3>
                                </Col>
                            </Row>
                            <Chart {...secEcommerceChartBar1} />
                            <Row className="justify-content-center text-center b-t-default m-t-15">
                                <Col sm={3} className="b-r-default">
                                    <h5>85%</h5>
                                    <p className="text-muted m-b-0">Satisfied</p>
                                </Col>
                                <Col sm={3} className="b-r-default">
                                    <h5>6%</h5>
                                    <p className="text-muted m-b-0">Unsatisfied</p>
                                </Col>
                                <Col sm={3}>
                                    <h5>9%</h5>
                                    <p className="text-muted m-b-0">NA</p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default Dashboard;
