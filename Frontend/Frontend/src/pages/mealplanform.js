import React, { useState, useEffect } from "react";


const MealPlanForm = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/meal-plans', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          category,
          description,
          images: images.map(image => ({
            filename: image.name,
            contentType: image.type,
            data: image
          }))
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit data');
      }

      setTitle('');
      setCategory('');
      setDescription('');
      setImages([]);
      
      // Set success message
      setSuccessMessage('Data has been submitted to the database');

      console.log('Form data submitted successfully');
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  const handleImageUpload = async (e) => {
    const files = e.target.files;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('file', files[i]);
    }

    try {
      const response = await fetch('http://localhost:8080/api/images/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload images');
      }

      const imageUrl = await response.text(); // Read response as text
      // Handle the received image URL as needed
      console.log('Uploaded image URL:', imageUrl);
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };

  useEffect(() => {
    // Remove success message after 2 seconds
    const timer = setTimeout(() => {
      setSuccessMessage("");
    }, 2000);
    
    // Clean up timer
    return () => clearTimeout(timer);
  }, [successMessage]);

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
        {successMessage && (
            <div role="alert" className="alert alert-success">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{successMessage}</span>
            </div>
          )}
          <br/>
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-green-600 font-semibold">Title</span>
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter Title"
                className="input input-bordered input-green-600"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-green-600 font-semibold">Category</span>
              </label>
              <input
                type="text"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Enter Category"
                className="input input-bordered input-green-600"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-green-600 font-semibold">Description</span>
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter Description"
                className="textarea textarea-bordered textarea-green-600"
                rows="3"
                required
              ></textarea>
            </div>
            {/* <div className="form-control">
              <label className="label">
                <span className="label-text text-green-600 font-semibold">Images</span>
              </label>
              <input
                type="file"
                id="images"
                onChange={handleImageUpload}
                className="file-input file-input-bordered file-input-green-600"
                multiple
              />
            </div> */}
            <div className="form-control mt-6">
              <button type="submit" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-green-500 rounded-full shadow-md group" >
                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-green-500 group-hover:translate-x-0 ease">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span class="absolute flex items-center justify-center w-full h-full text-green-500 transition-all duration-300 transform group-hover:translate-x-full ease">Submit</span>
                <span class="relative invisible">Submit Buttohadhakdjadaijdkcjdajdhakhdasn Text</span>
              </button>
            </div>
          </form>
          {/* Success Message */}
          
        </div>
      </div>
    </div>
  );
};

export default MealPlanForm;
