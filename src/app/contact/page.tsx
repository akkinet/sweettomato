'use client'
import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';


const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 40.712776,
  lng: -74.005974,
};

const ContactUs = () => {
  return (
    <div className="bg-white-200 mt-12">
      <div className="container pt-20">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold pt-3">
          Contact <span className="text-accent">Us</span>
          </h2>
            <p className="leading-[1.8]">
              Contact us using the information below or visit our location on the map.
            </p>
            <ul className="space-y-2">
              <li>Address: Assotech Business Cresterra, Plot No. 22, Sector-135, Expressway, Noida-201305, India</li>
              <li>Phone: +123 456 7890</li>
              <li>Email: info@example.com</li>
            </ul>
          </div>

          <div>
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
