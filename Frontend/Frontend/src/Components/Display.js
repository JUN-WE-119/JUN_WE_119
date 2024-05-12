import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';


import EditUserModel from '.EditUserModel';
function UserForm() {
    const [users, setUsers] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editingUser, setEditingUser] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/v1/user/getUsers');
            const data = await response.json();
            setUsers(data)
        }
    }
    // const fetchUsers = async () => {
    //     try {
    //         const response = await fetch('http://localhost:8080/api/v1/user/getUsers');
    //         const data = await response.json();
    //         setUsers(data);
    //     } catch (error) {
    //         console.error('Error fetching users:', error);
    //     }
    // };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/api/v1/user/deletUser`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });

            if (response.ok) {
                fetchUsers();
            } else {
                console.error('Failed to delete user');
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const handleEdit = (user) => {
        setEditingUser(user);
        setIsEditing(true);
    };

    const handleUpdate = (updatedUser) => {
        setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
        setIsEditing(false);
    };

    const columns = React.useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'id',
            },
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Description',
                accessor: 'description',
            },
            {
                Header: 'Actions',
                accessor: 'actions',
                Cell: ({ row }) => (
                    <div>
                        <button onClick={() => handleEdit(row.original)} className="text-blue-500 hover:text-blue-700 mr-2">
                            Edit |
                        </button>
                        <button onClick={() => handleDelete(row.original.id)} className="text-red-500 hover:text-red-700">
                            Delete
                        </button>
                    </div>
                ),
            },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data: users });

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table {...getTableProps()} className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    FitConnect Users
                    <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                        FitConnect is a social media platform designed to cater specifically to the needs of fitness enthusiasts. Developed as a university project, FitConnect offers a comprehensive suite of features aimed at facilitating community engagement, progress tracking, and knowledge sharing within the fitness community
                    </p>
                </caption>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()} scope="col" className="px-6 py-3">{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                {row.cells.map((cell) => (
                                    <td {...cell.getCellProps()} className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {isEditing && <EditUserModal user={editingUser} onUpdate={handleUpdate} />}
        </div>
    );
}

export default UserForm;
