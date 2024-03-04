import React, { useState } from 'react';
import { Button, Col, Container, Form as UiForm, Row, Card } from 'react-bootstrap';
import AnimatedModal from '../../App/components/AnimatedModal';



const FORMs = {
    'Budget Details': [
        [
            {
                label: 'Amount',
                name: 'amt',
                value: '',
                type: 'number',
                placeholder: 'XXXXX'
            },
            {
                label: 'Acc. code',
                name: 'accCode',
                value: '',
                type: 'number',
                placeholder: 'XXXXX'
            },
            {
                label: 'Fund',
                name: 'fundName',
                value: '',
                type: 'text',
                placeholder: 'e.g Road project'
            }
        ],
        [
            {
                label: 'Dept',
                name: 'dept',
                value: '',
                placeholder: 'depart name',
                type: 'text'
            },
            {
                label: 'General Ledger',
                name: 'glLedger',
                value: '',
                type: 'number',
                placeholder: 'XXXXX',
            },
            {
                name: 'glDesc',
                label: 'Gl Description',
                placeholder: 'gl description',
                type: 'text'
            },
        ],
        [
            {
                name: 'transDesc',
                label: 'Trans Desc',
                placeholder: 'trans desc',
                type: 'text'
            },
            {
                name: 'budgetDate',
                label: 'Budget Date',
                placeholder: 'budget date',
                type: 'date'
            },
            {
                name: 'year',
                label: 'Year',
                placeholder: 'e.g year',
                type: 'date'
            },

        ]
    ],

};

const AddBudget = () => {
    const [formInputs, setFormInputs] = useState({});
    const [showModal, setShowModal] = useState(false);


    const onChange = (key, val) => {
        setFormInputs((old) => ({ ...old, [key]: val }));
    };

    const handleBtn = () => {
        const strinfyFormsData = JSON.stringify(formInputs);
        localStorage.setItem('@BUDGET_LIST', strinfyFormsData);
        return setShowModal(true);

    };

    return (
        <Container fluid>
            <Card>
                <Card.Header>
                    <Card.Title as="h5">Add Budget</Card.Title>
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

                    </Row>
                    <UiForm>
                        <Container style={{ padding: 5, gap: 5 }}>
                            {FORMs?.['Budget Details'].map((rowsList) => (
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
                            Submit
                        </Button>
                    </UiForm>
                    <AnimatedModal animation={'zoom'} visible={showModal} onClose={() => setShowModal(false)}>
                        <Card.Body>
                            <Card.Title className="text-center" as="h5">
                                Fund Name: <span style={{ color: 'dodgerblue' }}>{formInputs?.fundName}</span> <br /> <br /> added{' '}
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