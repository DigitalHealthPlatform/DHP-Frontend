import React from 'react';

const DoctorCard = ({ name, bio, hours, calendarLink, email, phone }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <div className="flex items-center">
        <div className="w-24 h-24 bg-gray-300 rounded-lg"></div> {/* image placeholder */}
        <div className="ml-4">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-gray-600">{bio}</p>
          <p className="text-gray-600">{email}</p>
          <p className="text-gray-600">{phone}</p>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-md font-medium">Available Hours:</h3>
        <p>{hours}</p>
        <a href={calendarLink} className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded">
          Book Appointment
        </a>
      </div>
    </div>
  );
};

export default DoctorCard;
