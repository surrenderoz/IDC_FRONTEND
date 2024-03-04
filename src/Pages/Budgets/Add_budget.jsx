import React, { useState } from 'react';
import { Button, Col, Container, Form as UiForm, Row, Card } from 'react-bootstrap';
import AnimatedModal from '../../App/components/AnimatedModal';

const BUTTONs = ['Grants Details', 'IDC Confing', 'Department'];


const FORMs = {
    'Grants Details': [
        [
            {
                label: 'Award No',
                name: 'awardNo',
                value: '',
                placeholder: 'XXXXX'
            },
            {
                label: 'Document No.',
                name: 'docNo',
                value: '',
                placeholder: 'XXXXX'
            },
            {
                label: 'Grant Name',
                name: 'grantName',
                value: '',
                placeholder: 'e.g Road'
            }
        ],
        [
            {
                label: 'Grant Description',
                name: 'grantDec',
                value: '',
                placeholder: 'descr',
                type: 'text'
            },
            {
                label: 'Start Period',
                name: 'startDate',
                value: '',
                placeholder: '1 year',
                type: 'date'
            },
            {
                name: 'endDate',
                label: 'End Period',
                value: '',
                placeholder: '3 year',
                type: 'date'
            }
        ],
        [
            {
                name: 'grantAmt',
                label: 'Grant Amount',
                placeholder: 'e.g 134,1234',
                type: 'number'
            },
            {},
            {}
        ]
    ],
    'IDC Confing': [
        [
            {
                label: 'IDC Percentage',
                name: 'idcPercetange',
                type: 'number',
                placeholder: 'e.g 9%'
            },
            {
                label: 'IDC Amount',
                name: 'idcAmt',
                type: 'number',
                placeholder: '233,234'
            },
            {
                label: 'Threshold Limit',
                name: 'threshHoldLimit',
                type: 'number',
                placeholder: '534,345'
            }
        ],
        [
            {
                label: 'Fund No. as mention in GL',
                name: 'fundNo.',
                type: 'number',
                placeholder: 'e.g 4234'
            },
            {},
            {}
        ]
    ],
    Department: [
        [
            {
                label: 'Major Department',
                name: 'majorDepartmentName',
                placeholder: 'e.g major',
                value: ''
            },
            {
                label: 'Sub Department',
                name: 'subDepartmentName',
                placeholder: 'e.g sundepartment',
                value: ''
            },
            {
                label: 'Department as mention in GL',
                name: 'glDepartmentName',
                placeholder: 'e.g gldepart',
                value: ''
            }
        ]
    ]
};

const AddBudget = () => {
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
                    <Card.Title as="h5">Add Grants</Card.Title>
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
                                Grant Name: <span style={{ color: 'dodgerblue' }}>{formInputs?.grantName}</span> <br /> <br /> added{' '}
                                <span style={{ color: 'green' }}>succefully!!</span>{' '}
                            </Card.Title>
                        </Card.Body>

                        <Card.Footer className="text-center">
                            <button onClick={() => setShowModal(false)} className="btn btn-primary md-close">
                                Close Me!!
                            </button>
                        </Card.Footer>
                    </AnimatedModal>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default AddBudget;