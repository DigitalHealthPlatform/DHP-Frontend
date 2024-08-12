import React from 'react'

const About = () => {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">General Practice</h3>
              <p className="text-gray-700 mb-4">Description of Service 1</p>
              <div className="h-40 bg-gray-200">Image Placeholder</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Family Health</h3>
              <p className="text-gray-700 mb-4">Description of Service 2</p>
              <div className="h-40 bg-gray-200">Image Placeholder</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Diet and Nutrition</h3>
              <p className="text-gray-700 mb-4">Description of Service 3</p>
              <div className="h-40 bg-gray-200">Image Placeholder</div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  