import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeIndex from './Components/HomePage/HomeIndex/HomeIndex';
import { fetchReviewData, fetchServicesData, fetchServicesFailure, fetchServicesSuccess } from './Redux/AgencyActions/AgencyActions';
import { connect } from 'react-redux';
import { reviews } from './FakeData/reviews';
import Login from './Components/Shared/Login/Login';
import DashboardNav from './Components/Shared/DashboardNav/DashboardNav';
import PrivateRoute from './Components/Shared/PrivateRoute/PrivateRoute';

function App({fetchServicesData, fetchServicesSuccess, fetchReviewData, fetchServicesFailure}) {

  useEffect(() => {
    const fetchOpertaion = async () => {
      fetchServicesData();
      await fetch('http://localhost:5000/getServices')
      .then(res => res.json())
      .then(data =>{
          fetchServicesSuccess(data);
        })
        .catch(err => {
          fetchServicesFailure(err.message);
        });
      }
      fetchOpertaion();
    fetchReviewData([...reviews]);
  }, [fetchServicesSuccess, fetchServicesData, fetchReviewData, fetchServicesFailure]);

  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <HomeIndex></HomeIndex>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard">
            <DashboardNav></DashboardNav>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/:service">
            <DashboardNav></DashboardNav>
          </PrivateRoute>
        </Switch>
    </Router>
  );
}
const mapStateToProps = state => {
  return {
    services: state.services
  }
}

const mapDispatchToProps = {
  fetchServicesData : fetchServicesData,
  fetchServicesSuccess : fetchServicesSuccess,
  fetchServicesFailure : fetchServicesFailure,
  fetchReviewData: fetchReviewData
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
