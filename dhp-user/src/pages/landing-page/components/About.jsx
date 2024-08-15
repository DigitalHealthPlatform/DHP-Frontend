import React from 'react'
import serv1 from './../../../assets/images/service1.jpg'
import serv2 from './../../../assets/images/service2.jpg'
import serv3 from './../../../assets/images/service3.jpg'

const About = () => {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">General Practice</h3>
              <p className="text-gray-700 mb-4">Description of Service 1</p>
              <img 
              src= {serv1}
              alt="General Practice" 
              className="h-40 w-full object-cover rounded-md"
            />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Family Health</h3>
              <p className="text-gray-700 mb-4">Description of Service 2</p>
              <img 
              src= {serv2}
              alt="Family Health" 
              className="h-40 w-full object-cover rounded-md"
            />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Diet and Nutrition</h3>
              <p className="text-gray-700 mb-4">Description of Service 3</p>
              <img 
              src= {serv3}
              alt="Diet and Nutrition" 
              className="h-40 w-full object-cover rounded-md"
            />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  