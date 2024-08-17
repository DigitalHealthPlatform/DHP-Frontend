import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DoctorCard = ({ name, specialty, hours, calendarLink, email, phone, image, availableDates }) => {
  const [selectedDates, setSelectedDates] = useState([]);
  const [isBooking, setIsBooking] = useState(false);

  const isDateAvailable = (date) => {
    return availableDates.some(
      (availableDate) => availableDate.toDateString() === date.toDateString()
    );
  };

  const handleDateChange = (date) => {
    if (selectedDates.some((d) => d.toDateString() === date.toDateString())) {
      // If date is already selected, remove it
      setSelectedDates(
        selectedDates.filter((d) => d.toDateString() !== date.toDateString())
      );
    } else {
      // Otherwise, add it to the selection
      setSelectedDates([...selectedDates, date]);
    }
  };

  return (
    <div className="flex items-center bg-white shadow-lg rounded-l-lg overflow-hidden">
      <div className="p-4 flex-1">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{specialty}</p>
        <a href={`mailto:${email}`} className="text-blue-500 underline">
          {email}
        </a>
        <br />
        <a href={`tel:${phone}`} className="text-blue-500 underline">
          {phone}
        </a>
        <div className="mt-4">
          <h3 className="text-md font-medium">Available Hours:</h3>
          <p>{hours}</p>
          <button
            onClick={() => setIsBooking(!isBooking)}
            className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            {isBooking ? "Cancel" : "Book Appointment"}
          </button>
          {isBooking && (
            <div className="mt-4">
              <h3 className="text-md font-medium">Select Dates:</h3>
              <DatePicker
                selected={null} // Reset the selected prop
                onChange={handleDateChange}
                filterDate={isDateAvailable}
                inline
                highlightDates={selectedDates}
              />
              {selectedDates.length > 0 && (
                <div className="mt-2">
                  <p>You have selected:</p>
                  <ul>
                    {selectedDates.map((date, index) => (
                      <li key={index}>{date.toDateString()}</li>
                    ))}
                  </ul>
                  <a
                    href={calendarLink}
                    className="mt-2 inline-block bg-green-500 text-white px-4 py-2 rounded-lg"
                  >
                    Confirm Booking
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="relative flex-shrink-0 w-1/2 h-full">
        <div className="absolute inset-0 right-0 h-full w-full overflow-hidden rounded-l-full">
          <img
            src={image}
            alt="Doctor"
            className="h-full w-full object-cover rounded-l-full"
          />
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
