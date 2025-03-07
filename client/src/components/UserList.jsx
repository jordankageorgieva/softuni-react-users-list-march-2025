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

    useEffect(() => {
        if (users) {
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
        }

    }, []);

    useEffect(() => {
        console.log("users: " + JSON.stringify(users, false, '\t'));
        if (users) {
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
        }

    }, [id]);

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
        // stop default refresh
        event.preventDefault();
        console.log("create user");
        // get user data from the create form
        const formData = new FormData(event.target);
        const formValues = Object.fromEntries(formData);

        //create new user on server
        const newUser = await userService.createUser(formValues);
        // update local state
        console.log(newUser);

        setUsers(state => [...state, newUser]);

        // close  modal
        setShowCreate(false);
        // console.log(formData);
        // console.log("user list : " + formData.get("firstName"));
        // console.log("user list : " + Object.fromEntries(formData));
    }

    const updateUser = async (event) => {
        // stop default refresh
        event.preventDefault();
        console.log("update user start with id" + id);
        // get user data from the create form
        const formData = new FormData(event.target);
        const formValues = Object.fromEntries(formData);

        //create new user on server
        console.log("update user start with formValues" + formValues);
        const updatedUser = await userService.updateUser(id, formValues);
        // update local state
        console.log(updatedUser);

        setUsers(state => state.map(user => user._id === id ? updatedUser : user));

        // close  modal
        setShowEdit(false);
        
        // console.log(formData);
        // console.log("user list : " + formData.get("firstName"));
        // console.log("user list : " + Object.fromEntries(formData));
    }

    const userDetailsShow = async (_id) => {

        console.log("Show Info modal" + _id);
        // setUserIdDetails(users.find(user => user._id === _id));
        setId(_id);

        // stop default refresh
        event.preventDefault();
        // show the screen on the screen
        setShowDetails(true);
    }

    const userDeleteShow = async (_id) => {
        console.log("User delete show " + _id);
        if (_id) {
            setShowDelete(true);
            // id to delete
            setId(_id);
        }        
    }

    const deleteUser = () => {
        console.log("delete user " + id);
        if (userService.deleteUser(id)) {
            setShowDelete(false);
            // update user list on the screen
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
        console.log("query is " + query);
        console.log("criteria is " + criteria);
        setSearchQuery(query);
        setSearchCriteria(criteria);
    };

    const filteredUsers = users.filter(user => {
        if (!searchCriteria) {
            return true;
        }
        return user[searchCriteria].toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <>
            {/* <!-- Section component  --> */}
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
                    <div>


                        {/* <!-- Overlap components  --> */}

                        {/* <!-- <div className="loading-shade"> -->
                  <!-- Loading spinner  -->
                  <!-- <div className="spinner"></div> -->
                  <!-- 
        No users added yet  --> */}

                        {/* <!-- <div className="table-overlap">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="triangle-exclamation"
                      className="svg-inline--fa fa-triangle-exclamation Table_icon__+HHgn"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"
                      ></path>
                    </svg>
                    <h2>There is no users yet.</h2>
                  </div> --> */}

                        {/* <!-- No content overlap component  --> */}

                        {/* <!-- <div className="table-overlap">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="triangle-exclamation"
                      className="svg-inline--fa fa-triangle-exclamation Table_icon__+HHgn"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"
                      ></path>
                    </svg>
                    <h2>Sorry, we couldn't find what you're looking for.</h2>
                  </div> --> */}

                        {/* <!-- On error overlap component  --> */}

                        {/* <!-- <div className="table-overlap">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="triangle-exclamation"
                      className="svg-inline--fa fa-triangle-exclamation Table_icon__+HHgn"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"
                      ></path>
                    </svg>
                    <h2>Failed to fetch</h2>
                  </div> --> */}
                        {/* <!-- </div> --> */}
                    </div>

                    <table className="table">
                        <thead>
                            <tr>
                                <th>
                                    Image
                                </th>
                                <th>
                                    First name<svg aria-hidden="true" focusable="false" data-prefix="fas"
                                        data-icon="arrow-down" className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                        <path fill="currentColor"
                                            d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                        </path>
                                    </svg>
                                </th>
                                <th>
                                    Last name<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                        className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512">
                                        <path fill="currentColor"
                                            d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                        </path>
                                    </svg>
                                </th>
                                <th>
                                    Email<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                        role="img" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512">
                                        <path fill="currentColor"
                                            d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                        </path>
                                    </svg>
                                </th>
                                <th>
                                    Phone<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                        className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512">
                                        <path fill="currentColor"
                                            d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                        </path>
                                    </svg>
                                </th>
                                <th>
                                    Created
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                        data-icon="arrow-down" className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                        <path fill="currentColor"
                                            d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                        </path>
                                    </svg>
                                </th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            {filteredUsers.length === 0 ? (
                                <tr><td colSpan="7">No users found</td></tr>
                            ) : (
                                filteredUsers.map(user => (
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

                {/* <!-- New user button  --> */}
                <button className="btn-add btn" onClick={addUserHandler}>Add new user</button>

                <Pagination />

            </section>
        </>

    );
}