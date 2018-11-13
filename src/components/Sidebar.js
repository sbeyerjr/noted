import React from 'react';
import Practice from './Practice';
import './Sidebar.css';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      practices: [
        {
          date: '11/12/2018'
        },
        {
          date: '11/14/2018'
        },
        {
          date: '11/16/2018'
        }
      ]
    };
  }
  render() {
    const practices = this.state.practices.map((practice, index) => (
      <li key={index}>
        <Practice {...practice} />
      </li>
    ));

    return (
      <section>
        <div>
          <h2>My Past Practices</h2>
          <ul className="practice-list">{practices}</ul>
        </div>
      </section>
    );
  }
}
