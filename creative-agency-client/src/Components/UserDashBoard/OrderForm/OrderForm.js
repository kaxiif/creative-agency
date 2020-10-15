import React from 'react';
import { Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import DashboardHeader from '../../Shared/DashboardHeader/DashboardHeader';

const OrderForm = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        console.log(data);
    }
    return (
        <>
            <DashboardHeader displayOption="Order"></DashboardHeader>
            <Col>
                <form className="p-5 m-2 bg-white rounded" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="name" placeholder="Your name / Company name" className="form-control form-control-lg" defaultValue="Imamul Hassan" readonly="true"/>
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                        <input type="email" ref={register({ required: true })} name="email" placeholder="Your email" className="form-control form-control-lg" defaultValue="pappuhassan@gmail.com" readonly="true"/>
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <select className="form-control form-control-lg" name="servicename" ref={register({ required: true })} >
                            <option disabled={true} value="Not set">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Not set">Other</option>
                        </select>
                        {errors.servicename && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <textarea rows={5} ref={register({ required: true })} name="description" placeholder="Project description" className="form-control form-control-lg"/>
                        {errors.description && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group row">
                        <div className="col-6">
                            <input ref={register({ required: true })} className="form-control form-control-lg" name="price" placeholder="Price" />
                            {errors.price && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-6">
                            <button className="btn btn-outline-success btn-block"><input ref={register({ required: true })} name="projectfile" className="form-control bg-transparent" placeholder="Upload project file" type="file" /></button>
                            {errors.projectfile && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>

                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-dark px-5">Send</button>
                    </div>
                </form>
            </Col>
        </>
    );
};

export default OrderForm;