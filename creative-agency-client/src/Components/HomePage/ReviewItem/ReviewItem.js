import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

const ReviewItem = ({data}) => {
    return (
        <Col md={4} sm={6}>
            <div style={{minHeight: '200px'}} className="m-1 p-4 rounded border">
            <Row className="justify-content-start">
                    <Col md={3}>
                        <Image src={data.personPhoto} alt={data.personName} roundedCircle fluid/>
                    </Col>
                    <Col md={9} className="text-left">
                        <h5>{data.personName}</h5>
                        <p>{data.designation}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <small className="text-secondary">{data.details}</small>
                    </Col>
                </Row>
            </div>
        </Col>
    );
};

export default ReviewItem;