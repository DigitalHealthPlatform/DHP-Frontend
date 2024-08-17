import React from 'react';
import { useNavigate } from 'react-router-dom';
import DoctorCard from './../../../components/DoctorCard';
import doc1 from './../../../assets/images/hero-bg.jpg';

const doctors = [
  {
    image: doc1,
    name: 'Dr. Matt Thompson',
    specialty: 'Cardiologist with 10 years of experience...',
    email: 'drtom@gmail.com',
    phone: '+233 50 345 4565',
    hours: 'Mon-Fri, 9 AM - 5 PM',
    calendarLink: '#',
    availableDates: [
      new Date("2024-08-18"),
      new Date("2024-08-19"),
      new Date("2024-08-23"),
    ],
  },
  {
    image: doc1,
    name: 'Dr. Alice Ann',
    specialty: 'Dermatologist specializing in skin care...',
    email: 'dralice@gmail.com',
    phone: '+233 50 345 1234',
    hours: 'Mon-Fri, 10 AM - 4 PM',
    calendarLink: '#',
    availableDates: [
      new Date("2024-08-20"),
      new Date("2024-08-21"),
      new Date("2024-08-24"),
    ],
  },
  {
    image: doc1,
    name: 'Dr. Alice Ann',
    specialty: 'Dermatologist specializing in skin care...',
    email: 'dralice@gmail.com',
    phone: '+233 50 345 1234',
    hours: 'Mon-Fri, 10 AM - 4 PM',
    calendarLink: '#',
    availableDates: [
      new Date("2024-08-20"),
      new Date("2024-08-21"),
      new Date("2024-08-24"),
    ],
  },
  // Add more doctors as needed
];

const DoctorsPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    //  user authentication 
    localStorage.removeItem('accessToken');
    
    // Redirect to  login page
    navigate('/login');
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Our Doctors</h1>
      
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} {...doctor} />
        ))}
      </div>
    </div>
  );
};

export default DoctorsPage;
