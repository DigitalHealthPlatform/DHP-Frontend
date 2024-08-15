import React from 'react';
import DoctorCard from './../../../components/DoctorCard';
import doc1 from './../../../assets/images/hero-bg.jpg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



const doctors = [
  {
    image: doc1,
    name: 'Dr. Matt Thompson',
    bio: 'Cardiologist with 10 years of experience...',
    email: 'drtom@gmail.com',
    phone: '+233 50 345 4565',
    hours: 'Mon-Fri, 9 AM - 5 PM',
    calendarLink: '#',

  },
  {
    name: 'Dr. Alice Ann',
    bio: 'Dermatologist specializing in skin care...',
    email: 'drtom@gmail.com',
    phone: '+233 50 345 4565',
    hours: 'Mon-Fri, 10 AM - 4 PM',
    calendarLink: '#',
  },
  
  {
    name: 'Dr. Ali Jay ',
    bio: 'Cardiologist with 10 years of experience...',
    email: 'drtom@gmail.com',
    phone: '+233 50 345 4565',
    hours: 'Mon-Fri, 9 AM - 5 PM',
    calendarLink: '#',

  },
  {
    name: 'Dr. Rose Woode',
    bio: 'Dermatologist specializing in skin care...',
    email: 'drtom@gmail.com',
    phone: '+233 50 345 4565', 
    hours: 'Mon-Fri, 10 AM - 4 PM',
    calendarLink: '#',
  },

  // Add more doctors as needed
];

const DoctorsPage = ({ doctor }) => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Our Doctors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {doctors.map((doctors, index) => (
          <DoctorCard key={index} {...doctors} />
        ))}
      </div>
    </div>
  );
};

export default DoctorsPage;
