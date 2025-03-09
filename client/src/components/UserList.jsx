import { useEffect, useState } from "react";

import Pagination from "./Pagination";
import Search from "./Search";
import UserListItem from "./UserListItem";
import userService from "../services/userService";
import UserDetails from "./UserDetails";
import UserDelete from "./UserDelete";
import UserCreate from "./UserCreate";
import UserEdit from "./UserEdit";

export default function UserList() {

    const [users, setUsers] = useState([]);
    const [showCreate, setShowCreate] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [userEdit, setUserEdit] = useState();
    const [id, setId] = useState();
    const [showEdit, setShowEdit] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchCriteria, setSearchCriteria] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [sortCriteria, setSortCriteria] = useState("firstName");
    const [sortOrder, setSortOrder] = useState("asc");

    useEffect(() => {
        userService.getAll()
            .then(users => {
                console.log('user:' + users);
                if (Array.isArray(users)) {
                    setUsers(users);
                } else {
                    setUsers([]);
                }
            })
            .catch(err => console.error(err));
    }, []);

    const addUserHandler = () => {
        console.log('Add user');
        setShowCreate(true);
    }

    const closeCreateEditModalHandler = () => {
        if (showCreate) {
            setShowCreate(false);
        }

        if (showEdit) {
            setShowEdit(false);
        }
    }

    const closeDetailsModalHandler = () => {
        setShowDetails(false);
    }

    const closeDeleteModalHandler = () => {
        setShowDelete(false);
    }

    const addCreateUser = async (event) => {
        event.preventDefault();
        console.log("create user");
        const formData = new FormData(event.target);
        const formValues = Object.fromEntries(formData);

        const newUser = await userService.createUser(formValues);
        console.log(newUser);

        setUsers(state => [...state, newUser]);

        setShowCreate(false);
    }

    const updateUser = async (event) => {
        event.preventDefault();
        console.log("update user start with id" + id);
        const formData = new FormData(event.target);
        const formValues = Object.fromEntries(formData);

        console.log("update user start with formValues" + formValues);
        const updatedUser = await userService.updateUser(id, formValues);
        console.log(updatedUser);

        setUsers(state => state.map(user => user._id === id ? updatedUser : user));

        setShowEdit(false);
    }

    const userDetailsShow = async (_id) => {
        console.log("Show Info modal" + _id);
        setId(_id);
        setShowDetails(true);
    }

    const userDeleteShow = async (_id) => {
        console.log("User delete show" + _id);
        setShowDelete(true);
        setId(_id);
    }

    const deleteUser = async () => {
        console.log("delete user " + id);
        const isDeleted = await userService.deleteUser(id);
        if (isDeleted) {
            setShowDelete(false);
            setUsers(users.filter(user => user._id !== id));
        }
    };

    const userEditShow = (_id) => {
        console.log("user edit show" + _id);
        setShowEdit(true);
        setId(_id);

        const userToEdit = users.find(user => user._id === _id);
        console.log("user edit show" + userToEdit);
        setUserEdit(userToEdit);
    };

    const handleSearch = (query, criteria) => {
        setSearchQuery(query);
        setSearchCriteria(criteria);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleItemsPerPageChange = (items) => {
        setItemsPerPage(items);
        setCurrentPage(1); // Reset to first page when items per page changes
    };

    const handleSort = (criteria) => {
        const order = sortCriteria === criteria && sortOrder === "asc" ? "desc" : "asc";
        setSortCriteria(criteria);
        setSortOrder(order);
    };

    const filteredUsers = users.filter(user => {
        if (!searchCriteria) {
            return true;
        }
        return user[searchCriteria].toLowerCase().includes(searchQuery.toLowerCase());
    });

    const sortedUsers = filteredUsers.sort((a, b) => {
        if (a[sortCriteria] < b[sortCriteria]) {
            return sortOrder === "asc" ? -1 : 1;
        }
        if (a[sortCriteria] > b[sortCriteria]) {
            return sortOrder === "asc" ? 1 : -1;
        }
        return 0;
    });

    const paginatedUsers = sortedUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <>
            <section className="card users-container">
                <Search onSearch={handleSearch} />

                {showCreate &&
                    (<UserCreate
                        onClose={closeCreateEditModalHandler}
                        onCreate={addCreateUser}
                    />)
                }

                {showEdit &&
                    (<UserEdit
                        _id={id}
                        user={userEdit}
                        onClose={closeCreateEditModalHandler}
                        onEdit={updateUser}
                    />)
                }

                {showDetails &&
                    (<UserDetails
                        _id={id}
                        onClose={closeDetailsModalHandler}
                    />)
                }

                {showDelete &&
                    <UserDelete
                        _id={id}
                        onClose={closeDeleteModalHandler}
                        deleteUser={deleteUser}
                    />
                }

                <div className="table-wrapper">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th onClick={() => handleSort("firstName")}>
                                    First name
                                    {sortCriteria === "firstName" && (
                                        <div>
                                            {sortOrder === "asc" && <button>▲</button>}
                                            {sortOrder === "desc" && <button>▼</button>}
                                        </div>
                                    )}
                                </th>
                                <th onClick={() => handleSort("lastName")}>
                                    Last name
                                    {sortCriteria === "lastName" && (
                                        <div>
                                            {sortOrder === "asc" && <button>▲</button>}
                                            {sortOrder === "desc" && <button>▼</button>}
                                        </div>
                                    )}
                                </th>
                                <th onClick={() => handleSort("email")}>
                                    Email
                                    {sortCriteria === "email" && (
                                        <div>
                                            {sortOrder === "asc" && <button>▲</button>}
                                            {sortOrder === "desc" && <button>▼</button>}
                                        </div>
                                    )}
                                </th>
                                <th onClick={() => handleSort("phoneNumber")}>
                                    Phone
                                    {sortCriteria === "phoneNumber" && (
                                        <div>
                                            {sortOrder === "asc" && <button>▲</button>}
                                            {sortOrder === "desc" && <button>▼</button>}
                                        </div>
                                    )}
                                </th>
                                <th onClick={() => handleSort("createdAt")}>
                                    Created
                                    {sortCriteria === "createdAt" && (
                                        <div>
                                            {sortOrder === "asc" && <button>▲</button>}
                                            {sortOrder === "desc" && <button>▼</button>}
                                        </div>
                                    )}
                                </th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedUsers.length === 0 ? (
                                <tr><td colSpan="7">No users found</td></tr>
                            ) : (
                                paginatedUsers.map(user => (
                                    <UserListItem
                                        key={user._id}
                                        {...user}
                                        userDetailsShow={userDetailsShow}
                                        userDeleteShow={userDeleteShow}
                                        userEditShow={userEditShow}
                                    />
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                <button className="btn-add btn" onClick={addUserHandler}>Add new user</button>

                <Pagination
                    totalItems={filteredUsers.length}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                    onItemsPerPageChange={handleItemsPerPageChange}
                />
            </section>
        </>
    );
}