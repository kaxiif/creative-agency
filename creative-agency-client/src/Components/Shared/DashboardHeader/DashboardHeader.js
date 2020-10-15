import React from 'react';
import { Col, Row } from 'react-bootstrap';

const DashboardHeader = ({displayOption}) => {
    return (
        <div>
            <Row className="justify-content-between py-3 bg-light">
                <Col md={6}>
                    <h4 className="px-2">{displayOption}</h4>
                </Col>
                <Col md={6}>
                    <h4 className="text-right px-5">Pro Rasel</h4>
                </Col>
            </Row>
        </div>
    );
};

export default DashboardHeader;