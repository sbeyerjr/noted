import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './RequiresLogin';
import { fetchProtectedData } from '../actions/ProtectedData';
import PracticeForm from './PracticeForm';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
  }

  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-name">Hello, {this.props.name}! Let's start practicing!</div>
        <PracticeForm />
      </div>
       
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    name: `${currentUser.firstName}`,
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
