import React from 'react';
import DoctorsPage from './components/DoctorsPage';

const Appointments = ({ doctors }) => {
  return (
    <div>
      <DoctorsPage doctors={doctors} />
    </div>
  );
};

export default Appointments;
