import React from 'react';
import { useForm } from 'react-hook-form';
import DashboardHeader from '../../Shared/DashboardHeader/DashboardHeader';

const GiveReview = () => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div>
            <DashboardHeader displayOption="Review"></DashboardHeader>
            <form className="p-5 m-2 bg-white rounded" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="name" placeholder="Your name / Company name" className="form-control form-control-lg" defaultValue="Imamul Hassan" readonly="true"/>
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                        <input type="txet" ref={register({ required: true })} name="email" placeholder="Your designation" className="form-control form-control-lg" defaultValue="pappuhassan@gmail.com" readonly="true"/>
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <textarea rows={5} ref={register({ required: true })} name="description" placeholder="Description" className="form-control form-control-lg"/>
                        {errors.description && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-dark px-5">Send</button>
                    </div>
                </form>
        </div>
    );
};

export default GiveReview;