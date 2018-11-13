import React from 'react';
import Sidebar from './Sidebar';
import PracticeForm from './PracticeForm';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function App(props) {
  return (
    <div>
      <PracticeForm />
      <Sidebar />
    </div>
  );
}
