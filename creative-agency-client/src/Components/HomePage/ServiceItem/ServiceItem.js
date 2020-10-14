import { motion } from 'framer-motion';
import React from 'react';
import { Col, Image } from 'react-bootstrap';

const ServiceItem = ({data}) => {
    return (
        <>
            <Col md={4}>
                <motion.div style={{minHeight: '280px'}} whileHover={{scale: 1.1, boxShadow: "0px 0px 20px lightgray"}} className="text-center rounded p-1"> 
                    <div className="p-3 m-1">
                        <Image width={100} src={data.serviceImage} alt={data.name} fluid />
                        <h3 className="mt-3">{data.name}</h3>
                        <p className="text-secondary"><small>{data.description}</small></p>
                    </div>
                </motion.div>
            </Col>
        </>
    );
};

export default ServiceItem;