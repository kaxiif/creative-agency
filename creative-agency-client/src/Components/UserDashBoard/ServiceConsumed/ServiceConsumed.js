import React from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import DashboardHeader from '../../Shared/DashboardHeader/DashboardHeader';

const ServiceConsumed = () => {
    return (
        <>
            <DashboardHeader displayOption="Service Consumed"></DashboardHeader>
            <Row className="p-5">
                <Col style={{ maxWidth: '400px', borderRadius: '20px'}} md={6} className="bg-white p-3">
                    <Row className="justify-content-between align-items-center">
                        <Col md={6}>
                            <Image width={80} src="/images/icons/graphic.png" alt="graphic" fluid/>
                        </Col>
                        <Col md={6}>
                            <Button variant="outline-danger" className="px-4">Pending</Button>
                        </Col>
                    </Row>
                    <h5 className="my-2">Web & Mobile design</h5>
                    <p><small className="text-secondary">We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</small></p>
                </Col>
            </Row>
        </>
    );
};

export default ServiceConsumed;