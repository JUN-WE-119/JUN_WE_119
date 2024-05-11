import React, { useState } from 'react';

function EditUserModal({ user, onUpdate }) {
    const [name, setName] = useState(user.name);
    const [description, setDescription] = useState(user.description);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/v1/user/updateUser', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...user, name, description }),
            });

            if (response.ok) {
                onUpdate({ ...user, name, description });
            } else {
                console.error('Failed to update user');
            }
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-md">
                <h2 className="text-xl font-semibold mb-4">Edit User</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Name</label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded-md"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Description</label>
                        <input
                            type="text"
                            className="mt-1 p-2 w-full border rounded-md"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditUserModal;
