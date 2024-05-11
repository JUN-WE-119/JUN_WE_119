import React, { useState, useEffect } from 'react';

function UserForm() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/v1/user/getUsers');
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            id: id,
            name: name,
            description: description
        };

        try {
            const response = await fetch('http://localhost:8080/api/v1/user/saveUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            if (response.ok) {
                alert('User saved successfully!');
                setId('');
                setName('');
                setDescription('');
                fetchUsers();
            } else {
                alert('Error saving user!');
            }
        } catch (error) {
            console.error('Error saving user:', error);
            alert('Error saving user!');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
            <div className="mb-5" >
                <label htmlFor="id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your ID</label>
                <input 
                    type="number" 
                    id="id" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    required
                />
            </div>
            <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                <input 
                    type="text" 
                    id="name" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="mb-5">
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Description</label>
                <textarea 
                    id="description" 
                    rows="4" 
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Write your thoughts here..."
                    required
                ></textarea>
            </div>
            <button 
                type="submit" 
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Submit
            </button>
        </form>
    );
}

export default UserForm;
