import React from 'react';
import { Route } from 'react-router-dom';
import ImageUpload from '../Components/fillinsert'; // Import your ImageUpload component
import UserForm from '../Components/inser'; // Import your UserForm component

function CombinedPage() {
  return (
    <Route path="/gg" element={
      <div 
        className="bg-no-repeat bg-cover bg-center relative" 
        style={{ 
          backgroundImage: "url(your-image-url.jpg)", // Replace with your image URL
          minHeight: '100vh', // Set minimum height to cover the viewport
        }}
      >
        <div className="container mx-auto p-4">
          <ImageUpload />
          <UserForm />
        </div>
      </div>
    }/>
  );
}

export default CombinedPage;
