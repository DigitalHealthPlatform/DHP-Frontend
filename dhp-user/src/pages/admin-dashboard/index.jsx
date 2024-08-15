import React from 'react';
import Dashboard from './components/Dashboard';

const AdminDashboard = ({ doctors, setDoctors }) => {
  return (
    <div>
      <Dashboard doctors={doctors} setDoctors={setDoctors} />
    </div>
  );
};

export default AdminDashboard;
