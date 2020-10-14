import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeIndex from './Components/HomePage/HomeIndex/HomeIndex';
import { fetchReviewData, fetchServicesData, fetchServicesSuccess } from './Redux/AgencyActions/AgencyActions';
import { connect } from 'react-redux';
import { providedServices } from './FakeData/providedServices';
import { reviews } from './FakeData/reviews';
import Login from './Components/Shared/Login/Login';

function App({fetchServicesData, fetchServicesSuccess, fetchReviewData}) {

  useEffect(() => {
    fetchServicesData();
    fetchServicesSuccess([...providedServices]);
    fetchReviewData([...reviews]);
  }, [fetchServicesSuccess, fetchServicesData, fetchReviewData]);

  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <HomeIndex></HomeIndex>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
          </Route>
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
  fetchReviewData: fetchReviewData
}
export default connect(mapStateToProps, mapDispatchToProps)(App);