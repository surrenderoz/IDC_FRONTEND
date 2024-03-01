import * as React from 'react';
import { useState } from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';
import AnimatedModal from '../../../App/components/AnimatedModal';
const AdvanceModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [animation, setAnimation] = useState('flip');
    const animationVariant = ['zoom', 'fade', 'flip', 'door', 'rotate', 'slideUp', 'slideDown', 'slideLeft', 'slideRight'];
    const modal = animationVariant.map((variant, idx) => {
        return (<Button key={idx} onClick={() => {
            setShowModal(true);
            setAnimation(variant);
        }}>
            {variant}
        </Button>);
    });
    return (<>
        <Row>
            <Col>
                <Card>
                    <Card.Header>
                        <Card.Title as="h5">Animated Model</Card.Title>
                    </Card.Header>
                    <Card.Body className="btn-page">{modal}</Card.Body>
                </Card>
            </Col>
        </Row>
        <AnimatedModal animation={animation} visible={showModal} onClose={() => setShowModal(false)}>

            <Card.Body>
                <Card.Title className='text-center' as="h5">Grant name: someing <br /> <br/> added <span style={{color:'green'}} >succefully</span> </Card.Title>
            </Card.Body>

            <Card.Footer className="text-center">
                <button onClick={() => setShowModal(false)} className="btn btn-primary md-close">
                    Close Me!!
                </button>
            </Card.Footer>

        </AnimatedModal>
    </>);
};
export default AdvanceModal;
