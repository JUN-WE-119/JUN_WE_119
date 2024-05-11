import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

function ImageUpload() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  const handleFileChange = (e) => {
    const filesArray = Array.from(e.target.files).slice(0, 3); // Limit to 3 files
    setSelectedFiles(filesArray);
    setPreviewImages([]); // Clear previous previews

    filesArray.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreviewImages((prevImages) => [...prevImages, reader.result]);
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append('files', file);
    });

    try {
      const response = await axios.post('http://localhost:8080/api/v1/files/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        alert('Files uploaded successfully');
        setPreviewImages([]);
      }
    } catch (error) {
      console.error('Files uploaded successfully ', error);
      alert('Files uploaded successfully');
    }
  };

  const handleRemoveImage = (indexToRemove) => {
    setPreviewImages((prevImages) => prevImages.filter((_, index) => index !== indexToRemove));
    setSelectedFiles((prevFiles) => prevFiles.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">FitConnect </caption>
      
      <div className="flex flex-col items-center justify-center w-full">
        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div className="flex items-center justify-center pt-5 pb-6 space-x-4">
            {previewImages.map((image, index) => (
              <div key={index} className="relative">
                <img src={image} alt={`Preview ${index + 1}`} className="w-32 h-32 object-cover rounded-lg" />
                <button
                  className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full"
                  onClick={() => handleRemoveImage(index)}
                >
                  <FontAwesomeIcon icon={faTimesCircle} />
                </button>
              </div>
            ))}
            <svg className="w-8 h-8 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
          </div>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">MP4,PNG,JPG  max-file-size=10MB (MAX. 800x400px)</p>
          <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} accept="image/*, video/*" multiple />
        </label>
        <button 
          onClick={handleSubmit} 
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          disabled={selectedFiles.length === 0} // Disable button when no files are uploaded
        >
          Upload
        </button>
      </div>
    </div>
  );
}

export default ImageUpload;
