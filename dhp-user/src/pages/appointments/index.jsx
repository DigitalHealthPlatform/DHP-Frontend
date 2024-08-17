import React from 'react';
import DoctorsPage from './components/DoctorsPage';
import Nav from './components/Nav'

const Appointments = ({ doctors }) => {
  return (
    <div>
      <Nav/>
      <DoctorsPage doctors={doctors} />
    </div>
  );
};

export default Appointments;
