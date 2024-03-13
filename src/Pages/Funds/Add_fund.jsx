import React, { useState } from 'react';
import { Button, Col, Container, Form as UiForm, Row, Card } from 'react-bootstrap';
import AnimatedModal from '../../App/components/AnimatedModal';

const BUTTONs = ['Grants Details', 'IDC Confing'];

const FORMs = {
    'Grants Details': [
        [
            {
                label: 'Grant Award ID',
                name: 'grant_award_no',
                value: '',
                placeholder: 'XXXXX'
            },
            {
                label: 'Grant Agency.',
                name: 'grant_agency',
                value: '',
                placeholder: 'Department of Defense'
            },
            {
                label: 'Program Name',
                name: 'program_name',
                value: '',
                placeholder: 'Road'
            }
        ],
        [
            {
                label: 'Fund No',
                name: 'fund_no',
                value: '',
                placeholder: 'Fund no',
                type: 'XXXX-XXX'
            },
            {
                label: 'Fund Name',
                name: 'fund_name',
                value: '',
                placeholder: 'Fund name',
                type: 'text'
            },
            {
                label: 'Fund Amount',
                name: 'fund_amount',
                value: '',
                placeholder: 'Fund Amount',
                type: 'number'
            }
        ],
        [
            {
                label: 'Start Period',
                name: 'startDate',
                value: '',
                placeholder: '1 year',
                type: 'date'
            },
            {
                label: 'End Period',
                name: 'endDate',
                value: '',
                placeholder: '3 year',
                type: 'date'
            }
        ]
    ],
    'IDC Confing': [
        [
            {
                label: 'IDC Percentage',
                name: 'idcPercetange',
                type: 'number',
                placeholder: '9%'
            },
            {
                label: 'IDC Amount',
                name: 'idcAmt',
                type: 'number',
                placeholder: '$233,234'
            },
            {
                label: 'Threshold Limit',
                name: 'threshHoldLimit',
                type: 'number',
                placeholder: '$534,345'
            }
        ]
    ]
    // Department: [
    //     [
    //         {
    //             label: 'Major Department',
    //             name: 'majorDepartmentName',
    //             placeholder: 'e.g major',
    //             value: ''
    //         },
    //         {
    //             label: 'Sub Department',
    //             name: 'subDepartmentName',
    //             placeholder: 'e.g sundepartment',
    //             value: ''
    //         },
    //         {
    //             label: 'Department as mention in GL',
    //             name: 'glDepartmentName',
    //             placeholder: 'e.g gldepart',
    //             value: ''
    //         }
    //     ]
    // ]
};

const AddFund = () => {
    const [selectedBtn, setSelectedBtn] = useState(0);
    const [formInputs, setFormInputs] = useState({});
    const [showModal, setShowModal] = useState(false);

    const isSubmit = selectedBtn === BUTTONs.length - 1;

    const onChange = (key, val) => {
        setFormInputs((old) => ({ ...old, [key]: val }));
    };

    const handleBtn = () => {
        if (isSubmit) {
            const strinfyFormsData = JSON.stringify(formInputs);
            localStorage.setItem('@GRANTS_LIST', strinfyFormsData);
            return setShowModal(true);
        }
        setSelectedBtn((old) => (isSubmit ? old : old + 1));
    };

    return (
        <Container fluid>
            <Card>
                <Card.Header>
                    <Card.Title as="h5">Add Funds</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Row
                        style={{
                            display: 'flex',
                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: 4
                        }}
                    >
                        {BUTTONs?.map((item, i) => (
                            <Button
                                key={i.toString()}
                                style={{ flex: 1 }}
                                variant={selectedBtn === i ? 'primary' : 'secondary'}
                                onClick={() => setSelectedBtn(i)}
                            >
                                {item}
                            </Button>
                        ))}
                    </Row>
                    <UiForm>
                        <Container style={{ padding: 5, gap: 5 }}>
                            {FORMs?.[BUTTONs[selectedBtn]].map((rowsList) => (
                                <Row>
                                    {rowsList.map((form, formKey) => (
                                        <Col key={form?.name || formKey.toString()}>
                                            {form.label && (
                                                <UiForm.Group className="mb-3" id={form.name} controlId={form.name}>
                                                    <UiForm.Label>{form.label}</UiForm.Label>
                                                    <UiForm.Control
                                                        min={0}
                                                        type={form.type}
                                                        id={form.name}
                                                        name={form?.name}
                                                        value={formInputs[form.name]}
                                                        onChange={(e) => onChange(form?.name, e.target.value)}
                                                        placeholder={form.placeholder || ''}
                                                    />
                                                </UiForm.Group>
                                            )}
                                        </Col>
                                    ))}
                                </Row>
                            ))}
                        </Container>
                        <Button variant="primary" onClick={handleBtn} type={'button'}>
                            {isSubmit ? 'Submit' : 'Next'}
                        </Button>
                    </UiForm>
                    <AnimatedModal animation={'zoom'} visible={showModal} onClose={() => setShowModal(false)}>
                        <Card.Body>
                            <Card.Title className="text-center" as="h5">
                                Grant Name: <span style={{ color: 'dodgerblue' }}>{formInputs?.grantName}</span> <br /> <br /> Added{' '}
                                <span style={{ color: 'green' }}>Succefully!!</span>{' '}
                            </Card.Title>
                        </Card.Body>

                        <Card.Footer className="text-center">
                            <button onClick={() => setShowModal(false)} className="btn btn-primary md-close">
                                Close!!
                            </button>
                        </Card.Footer>
                    </AnimatedModal>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default AddFund;
