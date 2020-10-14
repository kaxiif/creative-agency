import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import ServiceItem from '../ServiceItem/ServiceItem';

const ServiceContainer = ({services}) => {
    return (
        <section style={{height: '500px'}} className="mt-5 d-flex justify-content-center align-items-center">
            <div>
                <h1 className="text-center">Provide awesome <span className="text-brand">services</span></h1>
                <Container className="mt-5 pt-5">
                    <Row>
                        {
                            services.map(srvc => <ServiceItem key={srvc.name} data={srvc}></ServiceItem>)
                        }
                    </Row>
                </Container>
            </div>
        </section>
    );
};

const mapStateToProps = state => {
    return {
        services: state.services
    }
}
export default connect(mapStateToProps)(ServiceContainer);