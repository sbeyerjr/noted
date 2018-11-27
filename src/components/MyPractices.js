import React from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import Header from './Header';
import './MyPractice.css';
import requiresLogin from './RequiresLogin';

class Practices extends React.Component {
  // State will apply to the practices object which is set to loading by default
  state = {
    dates: [],
    isLoading: true,
    errors: null
  };
  // Now we're going to make a request for data using axios
  getDate() {
    axios
      // This is where the data is hosted
      .get(`${API_BASE_URL}/practice`, {
        headers: {
          Authorization: `Bearer ${localStorage.authToken}`
        }
      })
      // Once we get a response and store data, let's change the loading state
      .then(res => {
        this.setState({ dates: res.data });
      });
  }
  // Let's our app know we're ready to render the data
  componentDidMount() {
    this.getDate();
  }
  // Putting that data to use
  render() {
    return (
      <div>
        <Header />
        <div className="wrapper">
          <div className="flex-container">
            <div class="table-container" role="table" aria-label="Destinations">
              <div class="flex-table header" role="rowgroup">
                <div class="flex-row first" role="columnheader">
                  DATE
                </div>
                <div class="flex-row" role="columnheader">
                  MINUTES PRACTICED
                </div>
                <div class="flex-row" role="columnheader">
                  SCALES PRACTICED
                </div>
                <div class="flex-row" role="columnheader">
                  OTHER MUSIC PRACTICED
                </div>
              </div>
              <div>
                {this.state.dates.map(date => (
                  <div class="flex-table row" role="rowgroup">
                    <div class="flex-row first" role="cell">
                      <li key={date.id}> {date.date}</li>
                    </div>
                    <div class="flex-row" role="cell">
                      <li key={date.id}> {date.timePracticed}</li>
                    </div>
                    <div class="flex-row" role="cell">
                      <li key={date.id}>{date.scales}</li>
                    </div>
                    <div class="flex-row" role="cell">
                      <li key={date.id}> {date.otherMusic}</li>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default requiresLogin()(Practices);