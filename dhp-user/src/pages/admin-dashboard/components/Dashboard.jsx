import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import DoctorCard from './../../../components/DoctorCard';

const Dashboard = ({ doctors, setDoctors }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const { register, handleSubmit, reset, setValue } = useForm();

  const onSubmit = (data) => {
    if (editingIndex !== null) {
      const updatedDoctors = doctors.map((doctor, index) =>
        index === editingIndex ? data : doctor
      );
      setDoctors(updatedDoctors);
      setEditingIndex(null);
    } else {
      setDoctors([...doctors, data]);
    }
    reset();
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    const doctor = doctors[index];
    Object.keys(doctor).forEach((key) => {
      setValue(key, doctor[key]);
    });
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    reset();
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Add Doctor Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="mb-8 p-4 border rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            {...register('name', { required: true })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Bio</label>
          <textarea
            {...register('bio', { required: true })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            {...register('email', { required: true })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            {...register('phone', { required: true })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Available Hours</label>
          <input
            type="text"
            {...register('hours', { required: true })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Image</label>
          <input
            type="file"
            {...register('image', { required: true })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            {editingIndex !== null ? 'Update Doctor' : 'Add Doctor'}
          </button>
          {editingIndex !== null && (
            <button
              type="button"
              onClick={handleCancelEdit}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Cancel Edit
            </button>
          )}
        </div>
      </form>

      {/* Display Added Doctors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {doctors.map((doctor, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md">
            <DoctorCard key={index} {...doctor} />
            <button
              onClick={() => handleEdit(index)}
              className="mt-2 inline-block bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
            >
              Edit Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
