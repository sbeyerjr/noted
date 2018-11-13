import React from 'react';
import './Practice.css';

export default function Practice(props) {
  return (
    <div className="practice-list">
      {props.date}
      {props.scales}
    </div>
  );
}

Practice.defaultProps = {
  date: '',
  scales: ''
};
