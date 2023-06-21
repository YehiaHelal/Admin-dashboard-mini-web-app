"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./adminUsers.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { notFound } from "next/navigation";
import moment from "moment";
import { useAuthContext } from "../hooks/useAuthContext";

const MangeUsers = () => {
  // All Items Fetch
  const [AllUsers, setAllUsers] = useState();

  // dispatchUser to the authContext
  const { user, dispatchUser } = useAuthContext();

  // console.log(AllUsers);

  // Show Opened Users
  const [ShowAllUsersTab, setShowAllUsersTab] = useState(false);

  // Show Opened Users
  const [ShowActiveUsers, setShowActiveUsers] = useState(false);

  // Show Archived Users
  const [ShowDeactivitedUsers, setShowDeactivitedUsers] = useState(false);

  // getting all orders to show for each user his order made
  const [AllOrders, setAllOrders] = useState();

  // console.log(AllOrders);

  // Show Products Details of the User
  const [ShowSpecficUserExtraData, setShowSpecficUserExtraData] =
    useState(false);

  // Show Extra Details of the User Show and Hide manage button
  const [
    ShowSpecficUserExtraDataHideShow,
    setShowSpecficUserExtraDataHideShow,
  ] = useState(false);

  // Show User Extra Details in Edit
  const [ShowSpecficUserExtraDatainEdit, setShowSpecficUserExtraDatainEdit] =
    useState(false);

  // Show EDIT User COMPONENT
  const [showEditUsersCom, setShowEditUsersCom] = useState(false);

  // User SELECTED TO EDIT
  const [UserSelectedToEdit, setUserSelectedToEdit] = useState();

  // console.log(UserSelectedToEdit);

  // Error Editing Users
  const [ErrorEditUsers, setErrorEditUser] = useState();

  // Successful Editing Users
  const [successfulEditUsers, setSuccessfulEditUser] = useState(false);

  // Show DELETE Users COMPONENT
  const [showDeleteUsersCom, setShowDeleteUsersCom] = useState(false);

  // ITEM SELECTED TO DELETE
  const [UsersSelectedToDelete, setUserSelectedToDelete] = useState();

  // console.log(UsersSelectedToDelete);

  // Show Products Details of the Users in Delete
  const [
    ShowSpecficUserExtraDatainDelete,
    setShowSpecficUserExtraDatainDelete,
  ] = useState(false);

  // check before delete
  const [CheckBeforeDelete, setCheckBeforeDelete] = useState(false);

  // Error Deleting Users
  const [ErrorDeleteUsers, setErrorDeleteUser] = useState();

  // Successful Deleting Users
  const [SuccessfulDeleteUsers, setSuccessDeleteUser] = useState(false);

  // set Users Marked Deactivited
  const [ErrorMarkingCompleted, setErrorMarkingCompleted] = useState();

  // set show setShowAddNoteInput
  const [ShowAddNoteInput, setShowAddNoteInput] = useState(false);
  // and Selected Item
  const [AddNoteSelectedItem, setAddNoteSelectedItem] = useState();

  // set Successful Deactivite complete
  const [SuccessfulMarkedComplete, setSuccessfulMarkedDeactivited] =
    useState(false);

  // set Successful Marked Deactivited
  const [ErrorMarkUsersComplete, setErrorMarkUserDeactivited] = useState();

  // Error fetching image if not, set the user image to default
  const [ErrorFetchingImage, SetErrorFetchingImage] = useState();

  // set Add Note Value to User
  const [UserAddNoteValue, setUserAddNoteValue] = useState();

  // show add User component
  const [showAddUserCom, setShowAddUserCom] = useState(false);

  // show add User component
  const [errorCreatingNewUser, setErrorCreatingNewUser] = useState(false);

  // show add User component
  const [successfulUserCreated, setSuccessfulUserCreated] = useState(false);

  // value change to cause re render
  const [value, setValue] = useState(1);

  // useeffect to control show either the archived Users or opened Users
  // useEffect(() => {
  //   if (ShowActiveUsers && AllUsers) {
  //     const openedUserssStill = AllUsers.filter((Users) => {
  //       //     console.log(item._id, addItemToCart._id);
  //       return Users.active === true;
  //     });

  //     // console.log(openedUserssStill);
  //     // console.log("will show opened");
  //     // console.log(AllUsers);
  //     setAllUsers(openedUserssStill);
  //   }
  //   if (ShowDeactivitedUsers && AllUsers) {
  //     const archivedUserssStill = AllUsers.filter((Users) => {
  //       //     console.log(item._id, addItemToCart._id);
  //       return Users.active === false;

  //     });

  //     // console.log(archivedUserssStill);
  //     // console.log("will show archived");
  //     // console.log(AllUsers);
  //     setAllUsers(archivedUserssStill);
  //   }
  // }, [ShowActiveUsers, ShowDeactivitedUsers, value]);

  // Handle Get All users

  const HandleGetAllUsers = async (e) => {
    // e.preventDefault();

    // console.log(e);
    // const name = e.target.name.value;
    // const email = e.target.email.value;
    // const password = e.target.password.value;

    // console.log(name);
    // console.log(email);
    // console.log(password);

    const formData = new FormData();
    formData.append("jwt", user.token);

    // fetch request
    try {
      const datas = await axios.post(
        "https://teabrand.onrender.com/api/users/getallusers",
        formData,
        {
          withCredentials: true,
          headers: {
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
            "Access-Control-Allow-Headers":
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
          // headers: {
          //   "Access-Control-Allow-Origin": "*",
          //   "Content-Type": "application/json",
          // },
        }
      );

      // if (submission.message.length < 10) {
      //   return { error: "Message must be over 10 chars long." };
      // }

      // console.log(datas);

      // check response if ok
      // console.log(datas.status === 200);

      if (datas.status === 200) {
        // console.log(datas);

        // console.log(datas.data);
        setAllUsers(datas.data);

        // setValue(value + 1);
        // setTimeout(() => {
        //   setShowAllItems(true);
        // }, 500);
        // console.log("data");
        // SetUserdataNameAddress(datas.data);
      }
    } catch (error) {
      // console.log("error");
      // if there is an error response
      // console.log(error);
      // if there is an error response
      // console.log(error.response.data);
      // setErrorSignup(error.response.data.error);
    }
  };

  // Handle Get All Items

  const handleGetAllOrders = async (e) => {
    // e.preventDefault();

    // console.log(e);
    // const name = e.target.name.value;
    // const email = e.target.email.value;
    // const password = e.target.password.value;

    // console.log(name);
    // console.log(email);
    // console.log(password);

    const formData = new FormData();
    formData.append("jwt", user.token);

    // fetch request
    try {
      const datas = await axios.post(
        "https://teabrand.onrender.com/api/orders/getallorders",
        formData,
        {
          withCredentials: true,
          headers: {
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
            "Access-Control-Allow-Headers":
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
          // headers: {
          //   "Access-Control-Allow-Origin": "*",
          //   "Content-Type": "application/json",
          // },
        }
      );

      // if (submission.message.length < 10) {
      //   return { error: "Message must be over 10 chars long." };
      // }

      // console.log(datas);

      // check response if ok
      // console.log(datas.status === 200);

      if (datas.status === 200) {
        // console.log(datas.data);

        setAllOrders(datas.data);

        // setTimeout(() => {
        //   setShowAllItems(true);
        // }, 500);

        // console.log("data");
        // SetUserdataNameAddress(datas.data);
      }
    } catch (error) {
      // console.log("error");
      // if there is an error response
      // console.log(error);
      // if there is an error response
      // console.log(error.response.data);
      // setErrorSignup(error.response.data.error);
    }
  };

  // handleAddNoteToUser
  const HandleAddNoteToUser = async (e) => {
    e.preventDefault();

    // console.log("inside");

    // console.log(AddNoteSelectedItem.Usersnumber);

    if (UserAddNoteValue.length < 1) {
      // console.log("nothing entered");

      return;
    }

    // console.log(user.user);

    const submission = {
      note: UserAddNoteValue,
      email: AddNoteSelectedItem.email,
      token: user.token,
    };

    // const formData = new FormData();
    // formData.append("photo", selectedImage);
    // formData.append("name", e.target.name.value);
    // formData.append("price", e.target.price.value);

    try {
      const datas = await axios.post(
        "https://teabrand.onrender.com/api/users/addnotetouser",

        submission,

        // {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        // }
        {
          withCredentials: true,
          headers: {
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
            "Access-Control-Allow-Headers":
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
          // headers: {
          //   "Access-Control-Allow-Origin": "*",
          //   "Content-Type": "application/json",
          // },
        }
      );

      // console.log(datas);

      if (datas.status === 200) {
        // console.log(datas);
        HandleGetAllUsers();
      }
    } catch (error) {
      // console.log("error");
      // console.log(error);
    }
  };

  // // Handle Delete  Users

  const HandleDeleteUser = async (e) => {
    // e.preventDefault();

    // console.log("inside");

    // console.log(user.user);

    // console.log(UsersSelectedToDelete);

    if (!UsersSelectedToDelete) {
      // console.log("no selected ");

      return;
    }

    // console.log(itemSelectedInDeleteCom.name);

    const submission = {
      userSelected: UsersSelectedToDelete.email,
      token: user.token,
    };

    // const formData = new FormData();
    // formData.append("photo", selectedImage);
    // formData.append("name", e.target.name.value);
    // formData.append("price", e.target.price.value);

    try {
      const datas = await axios.post(
        "https://teabrand.onrender.com/api/Users/deleteuser",

        { submission },

        // {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        // }
        {
          withCredentials: true,
          headers: {
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
            "Access-Control-Allow-Headers":
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
          // headers: {
          //   "Access-Control-Allow-Origin": "*",
          //   "Content-Type": "application/json",
          // },
        }
      );

      // console.log(datas);

      if (datas.status === 200) {
        setSuccessDeleteUser(true);
        setErrorDeleteUser();
        // console.log(datas);
        setTimeout(() => {
          // Fetching the NEW PRODUCTS DATA AFTER UPDATE
          HandleGetAllUsers();
          setCheckBeforeDelete(false);
          setUserSelectedToDelete();
          setSuccessDeleteUser(false);

          // setSuccessfulInDeleteProduct(false);
        }, 1500);
      }
    } catch (error) {
      // console.log("error");

      // console.log(error);

      if (error.message) {
        // console.log("inside");
        setErrorDeleteUser(error.message);
      }

      if (error.response.data.error) {
        setErrorDeleteUser(error.response.data.error);
      }
    }
  };

  // Handle Mark Users as Completed

  const handleDeactiviteUser = async (User) => {
    // e.preventDefault();

    // console.log(User);

    // console.log("inside");

    // console.log(Users);

    // console.log(UsersMarkedCompleted);

    // console.log(user.user);

    // address price mobile
    // console.log(e.target.address.value);
    // console.log(e.target.price.value);
    // console.log(e.target.mobile.value);

    // if (!UsersMarkedCompleted) {
    //   console.log("nothing was selected ");
    //   return setErrorMarkingCompleted("you need to add a field value to Edit");
    // }

    // for item name change and not changing item, will have to change s3 bucket name because we are dependent on name to fetch image so..

    // const formData = new FormData();

    // formData.append("selectedUsers", UsersSelectedToEdit.Usersnumber);

    // if (e.target.address.value) {
    //   formData.append("address", e.target.address.value);
    // }

    // if (e.target.price.value) {
    //   formData.append("price", e.target.price.value);
    // }

    // if (e.target.mobile.value) {
    //   formData.append("mobile", e.target.mobile.value);
    // }

    const submission = {
      Users: User,
      token: user.token,
    };

    try {
      const datas = await axios.post(
        "https://teabrand.onrender.com/api/users/deactivateuser",

        { submission },

        // {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        // }
        {
          withCredentials: true,
          headers: {
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
            "Access-Control-Allow-Headers":
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
          // headers: {
          //   "Access-Control-Allow-Origin": "*",
          //   "Content-Type": "application/json",
          // },
        }
      );

      // console.log(datas);

      if (datas.status === 200) {
        // console.log(datas);

        setSuccessfulMarkedDeactivited(true);

        // setErrorEditUser();

        // console.log(datas);

        setTimeout(() => {
          HandleGetAllUsers();
        }, 100);

        setTimeout(() => {
          // Fetching the NEW PRODUCTS DATA AFTER UPDATE

          // setSelectedImageToEdit(null);
          // setResetNameValueEdit("");
          // setResetPriceValueEdit("");
          // HandleGetAllUsers();

          // to let it stay up and not close the window in case he wants to check and edit more in same item
          // setUserSelectedToEdit();
          setSuccessfulMarkedDeactivited(false);
        }, 1500);
      }
    } catch (error) {
      // console.log("error");
      // console.log(error);
      // if (error.message) {
      //   console.log("inside");
      //   setErrorMarkUserDeactivited(error.message);
      // }
      // if (error.response.data.error) {
      //   setErrorMarkUserDeactivited(error.response.data.error);
      // }
    }
  };

  // Handle Edit Users

  const HandleUserEdit = async (e) => {
    e.preventDefault();

    // console.log("inside");

    // console.log(user.user);

    // address price mobile
    // console.log(e.target.name.value);
    // console.log(e.target.address.value);
    // console.log(e.target.mobile.value);
    // console.log(e.target.role.value);

    if (
      !e.target.name.value &&
      !e.target.address.value &&
      !e.target.mobile.value &&
      !e.target.role.value
    ) {
      // console.log("nothing was selected ");
      return setErrorEditUser("you need to add a field value to Edit");
    }

    // for item name change and not changing item, will have to change s3 bucket name because we are dependent on name to fetch image so..

    const formData = new FormData();

    formData.append("selectedUser", UserSelectedToEdit.email);

    if (e.target.name.value) {
      formData.append("name", e.target.name.value);
    }

    if (e.target.address.value) {
      formData.append("address", e.target.address.value);
    }

    if (e.target.mobile.value) {
      formData.append("mobile", e.target.mobile.value);
    }
    if (e.target.role.value) {
      formData.append("role", e.target.role.value);
    }

    formData.append("jwt", user.token);

    try {
      const datas = await axios.post(
        "https://teabrand.onrender.com/api/users/updateuserinfo",

        formData,

        // {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        // }
        {
          withCredentials: true,
          headers: {
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
            "Access-Control-Allow-Headers":
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
          // headers: {
          //   "Access-Control-Allow-Origin": "*",
          //   "Content-Type": "application/json",
          // },
        }
      );

      // console.log(datas);

      if (datas.status === 200) {
        setSuccessfulEditUser(true);
        setErrorEditUser();
        // console.log(datas);
        setTimeout(() => {
          HandleGetAllUsers();
        }, 500);
        setTimeout(() => {
          // Fetching the NEW PRODUCTS DATA AFTER UPDATE
          // setSelectedImageToEdit(null);
          // setResetNameValueEdit("");
          // setResetPriceValueEdit("");
          // HandleGetAllUsers();
          // to let it stay up and not close the window in case he wants to check and edit more in same item
          setUserSelectedToEdit();
          setSuccessfulEditUser(false);
        }, 2000);
      }
    } catch (error) {
      // console.log("error");

      // console.log(error);

      if (error.message) {
        // console.log("inside");
        setErrorEditUser(error.message);
      }

      if (error.response.data.error) {
        setErrorEditUser(error.response.data.error);
      }
    }
  };

  // Handle Add New User Admin

  const HandleAddNewUser = async (e) => {
    e.preventDefault();

    // console.log("inside");

    // console.log(user.user);

    // console.log(e.target.email.value);
    // console.log(e.target.address.value);
    // console.log(e.target.name.value);
    // console.log(e.target.mobile.value);
    // console.log(e.target.role.value);

    const submission = {
      email: e.target.email.value,
      address: e.target.address.value,
      name: e.target.name.value,
      mobile: e.target.mobile.value,
      role: e.target.role.value,
      password: e.target.password.value,
      token: user.token,
    };

    // const formData = new FormData();
    // formData.append("photo", selectedImage);
    // formData.append("name", e.target.name.value);
    // formData.append("price", e.target.price.value);

    try {
      const datas = await axios.post(
        "https://teabrand.onrender.com/api/users/adduseradmin",

        { submission },

        // {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        // }
        {
          withCredentials: true,
          headers: {
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
            "Access-Control-Allow-Headers":
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
          // headers: {
          //   "Access-Control-Allow-Origin": "*",
          //   "Content-Type": "application/json",
          // },
        }
      );

      // console.log(datas);

      if (datas.status === 200) {
        setSuccessfulUserCreated(true);
        setErrorCreatingNewUser();

        // console.log(datas);
        setTimeout(() => {
          // setSelectedImage(null);
          // setFullNameImage("");
          // setResetPriceValue("");
          // setResetNameValue("");
          setSuccessfulUserCreated(false);
        }, 2000);
      }
    } catch (error) {
      // console.log("error");

      // console.log(error);

      if (error.message) {
        // console.log("inside");
        setErrorCreatingNewUser(error.message);
      }

      if (error.response.data.error) {
        setErrorCreatingNewUser(error.response.data.error);
      }

      setTimeout(() => {
        setErrorCreatingNewUser();
      }, 3000);
    }
  };

  // const imageLoader = ({ src, width, quality }, e) => {
  //   // return `https://next-ecommerce-s3.s3.eu-north-1.amazonaws.com/${
  //   //   User.email.split("@")[0]
  //   // }.png?${Date.now()}`;

  //   console.log(e);

  //   return `https://next-ecommerce-s3.s3.eu-north-1.amazonaws.com/devyehia.png`;
  // };

  return (
    <div>
      {/* <div>Userss here</div> */}
      <div className={styles.MangingDataComponent}>
        <button
          style={{
            border:
              ShowAllUsersTab === true ? "1px solid rgb(0, 0, 255, 0.99)" : "",
          }}
          onClick={(e) => {
            HandleGetAllUsers();
            setShowAllUsersTab(true);
            setShowAddUserCom(false);
            setShowEditUsersCom(false);
            setShowDeleteUsersCom(false);
            setShowDeactivitedUsers(false);
            setShowActiveUsers(false);
            setTimeout(() => {
              handleGetAllOrders();
            }, 300);
          }}
        >
          All Users
        </button>

        <button
          style={{
            border:
              showAddUserCom === true ? "1px solid rgb(0, 0, 255, 0.99)" : "",
          }}
          onClick={() => {
            HandleGetAllUsers();
            setShowAddUserCom(true);
            setShowAllUsersTab(false);
            setShowEditUsersCom(false);
            setShowDeleteUsersCom(false);
            setShowDeactivitedUsers(false);
            setShowActiveUsers(false);
          }}
        >
          Add User
        </button>
        <button
          style={{
            border:
              showEditUsersCom === true ? "1px solid rgb(0, 0, 255, 0.99)" : "",
          }}
          onClick={(e) => {
            HandleGetAllUsers();
            setShowEditUsersCom(true);
            setShowAddUserCom(false);
            setShowAllUsersTab(false);
            setShowDeleteUsersCom(false);
            setShowDeactivitedUsers(false);
            setShowActiveUsers(false);
          }}
        >
          Edit User
        </button>

        <button
          style={{
            border:
              showDeleteUsersCom === true
                ? "1px solid rgb(0, 0, 255, 0.99)"
                : "",
          }}
          onClick={(e) => {
            HandleGetAllUsers();
            setShowDeleteUsersCom(true);
            setShowAddUserCom(false);
            setShowEditUsersCom(false);
            setShowAllUsersTab(false);
            setShowDeactivitedUsers(false);
            setShowActiveUsers(false);
          }}
        >
          Delete User
        </button>
      </div>

      {ShowAllUsersTab && (
        <div className={styles.MangingUserss2ndBtn}>
          <button
            style={{
              border:
                ShowActiveUsers === true
                  ? "1px solid rgb(0, 0, 255, 0.99)"
                  : "",
            }}
            onClick={() => {
              if (ShowActiveUsers) {
                setShowActiveUsers(false);
                HandleGetAllUsers();
              }
              if (!ShowActiveUsers) {
                HandleGetAllUsers();

                setTimeout(() => {
                  setShowDeactivitedUsers(false);
                  setShowActiveUsers(true);
                  setShowAllUsersTab(true);
                }, 500);
              }
            }}
          >
            Click - Show Only Active Users
          </button>

          <button
            style={{
              border:
                ShowDeactivitedUsers === true
                  ? "1px solid rgb(0, 0, 255, 0.99)"
                  : "",
            }}
            onClick={() => {
              if (ShowDeactivitedUsers) {
                setShowDeactivitedUsers(false);
                HandleGetAllUsers();
              }
              if (!ShowDeactivitedUsers) {
                HandleGetAllUsers();

                setTimeout(() => {
                  setShowActiveUsers(false);
                  setShowDeactivitedUsers(true);
                  setShowAllUsersTab(true);
                }, 500);
                // setShowActiveUsers(false);
                // setShowDeactivitedUsers(true);
                // setShowAllUsersTab(true);
                // setTimeout(() => {
                //   HandleGetAllUsers();
                // }, 300);
              }
            }}
          >
            Click - Show Only Deactivated Users
          </button>
        </div>
      )}

      {AllUsers && ShowAllUsersTab && (
        <div className={styles.ALLITEMSOptionSelect}>
          {" "}
          <select type="item" name="item">
            {/* {toursNames.map((item, index) => {
                        return (
                          <option key={index} type="item" name="item">
                            {item}
                          </option>
                        );
                      })} */}
            <option>Show First 10</option>
            <option>Show First 20</option>
            <option>Show First 30</option>
            <option>Show First 40</option>
            <option>Show First 50</option>
          </select>
          <div className={styles.ALLITEMSSearchForUsers}>
            <input placeholder="Users number"></input>
            <button>Search</button>
          </div>
          <div>
            {" "}
            {SuccessfulMarkedComplete && (
              <div className={styles.successRequest}>Marked</div>
            )}
            {ErrorMarkUsersComplete && (
              <div className={styles.error}>{ErrorMarkUsersComplete}</div>
            )}
          </div>
          {ShowAddNoteInput && (
            <div className={styles.addNoteComponent}>
              <textarea
                className={styles.addNoteComponentTextarea}
                type="text"
                name="note"
                minlength="1"
                maxlength="150"
                value={UserAddNoteValue}
                onChange={(e) => {
                  setUserAddNoteValue(e.target.value);
                }}
              />

              <button type="submit" onClick={HandleAddNoteToUser}>
                Submit
              </button>

              {/* {successfulEditUsers && (
                  <div className={styles.successRequest}>
                    Product was Edited successfully
                  </div>
                )}
                {ErrorEditUsers && (
                  <div className={styles.error}>{ErrorEditUsers}</div>
                )} */}
            </div>
          )}
        </div>
      )}

      {AllUsers && ShowAllUsersTab && (
        <div className={styles.AllUsers}>
          {AllUsers &&
            AllUsers.filter(function (User) {
              if (ShowActiveUsers) {
                return User.active === true;
              }
              if (ShowDeactivitedUsers) {
                return User.active === false;
              }
            }).map((User, i) => {
              return (
                <div key={User._id} className={styles.AllUserstyle}>
                  <h4 className={styles.AllUserstyleTitle}>User:</h4>

                  <Image
                    width={100}
                    height={100}
                    alt="image"
                    // loader={imageLoader}
                    id="image-true"
                    // onerror={() => {
                    //   SetImageProfileLoadedState(true);
                    // }}

                    // onError={(e) => {
                    //   console.log(e);
                    // }}
                    // onError={() => setSrc('/assets/image-error.png')}
                    // onerror="this.onerror=null; this.style.display = 'none'"
                    src={require(`./../public/users/images/default.jpeg`)}
                    // onLoad={() => {
                    //   SetImageProfileLoadedState(true);
                    // }}
                    // src={`https://next-ecommerce-s3.s3.eu-north-1.amazonaws.com/${
                    //   user.user.split("@")[0]
                    // }.png?${Date.now()}`}
                    // src={!ImageProfileLoadedState ? defaultImage : trueUserImage}

                    // src={
                    //   !ErrorFetchingImage
                    //     ? `https://next-ecommerce-s3.s3.eu-north-1.amazonaws.com/${
                    //         User.email.split("@")[0]
                    //       }.png?${Date.now()}`
                    //     : require(`./../public/users/images/default.jpeg`)
                    // }

                    // loader={imageLoader}
                    // src={`${User.email.split("@")[0]}`}
                    // loader={`https://next-ecommerce-s3.s3.eu-north-1.amazonaws.com/${
                    //   User.email.split("@")[0]
                    // }.png?${Date.now()}`}
                    // src={
                    //   `https://next-ecommerce-s3.s3.eu-north-1.amazonaws.com/${
                    //     User.email.split("@")[0]
                    //   }.png?${Date.now()}` === notFound
                    //     ? require(`./../public/users/images/default.jpeg`)
                    //     : `https://next-ecommerce-s3.s3.eu-north-1.amazonaws.com/${
                    //         User.email.split("@")[0]
                    //       }.png?${Date.now()}`
                    // }
                    // src={defaultImage}
                  ></Image>
                  <div>User email: {User.email}</div>
                  <div>User name: {User.name}</div>
                  <div>User mobile: {User.mobilenumber}</div>
                  <div>User address: {User.address}</div>
                  <div>User role: {User.role}</div>
                  <div>
                    User total orders:{" "}
                    {AllOrders &&
                      AllOrders.filter(function (order) {
                        return order.user === User.email;
                      }).length}
                    /10 target
                  </div>
                  <div>
                    User status:{" "}
                    {User.active === true ? "active" : "deactivited"}
                  </div>
                  <div>
                    Added note: {User.note === "none" ? "empty" : User.note}
                  </div>
                  <div>
                    User created at:{" "}
                    {moment(User.createdAt).format("DD/MM/YYYY")}
                  </div>

                  <button
                    onClick={() => {
                      if (ShowSpecficUserExtraData) {
                        setShowSpecficUserExtraData(false);
                        setShowSpecficUserExtraDataHideShow(false);
                      }
                      if (!ShowSpecficUserExtraData) {
                        setShowSpecficUserExtraData(true);
                        setShowSpecficUserExtraDataHideShow(true);
                      }
                    }}
                  >
                    {ShowSpecficUserExtraDataHideShow === false ? (
                      <div>Show All User Orders</div>
                    ) : (
                      <div>Hide User Orders</div>
                    )}
                  </button>
                  <div className={styles.AllUserstyleExtrabtn}>
                    <button
                      onClick={() => {
                        // console.log(User);

                        // setUsersMarkedCompleted(Users);

                        handleDeactiviteUser(User);
                      }}
                    >
                      {ShowDeactivitedUsers === true
                        ? "Reactivate User"
                        : "Deactivate User"}
                    </button>
                    <button
                      onClick={() => {
                        if (ShowAddNoteInput) {
                          setShowAddNoteInput(false);
                          setAddNoteSelectedItem();
                        }
                        if (!ShowAddNoteInput) {
                          setShowAddNoteInput(true);
                          setAddNoteSelectedItem(User);
                        }
                      }}
                    >
                      Add Note
                    </button>
                  </div>
                  {
                    ShowSpecficUserExtraData &&
                      // <div>All his orders number</div>

                      AllOrders.filter(function (order) {
                        return order.user === User.email;
                      }).map((order, i) => {
                        return <div>Order Number: {order.ordernumber}</div>;
                      })
                    // User.UsersProducts.map((item, i) => {
                    //   return (
                    //     <div key={i} className={styles.UsersFullDetails}>
                    //       <Image
                    //         alt="n"
                    //         className={styles.productItemImage}
                    //         // src={require(`./../../../public/Items/${item.name}.png`)}
                    //         src={`https://next-ecommerce-s3.s3.eu-north-1.amazonaws.com/items/${item.name}.png`}
                    //         // className="iconImage"
                    //         width={300}
                    //         height={300}
                    //       ></Image>
                    //       <div>Name: {item.name}</div>
                    //       <div>Price: {item.price}$</div>
                    //       <div>Quantity: {item.price}</div>
                    //     </div>
                    //   );
                    // })
                  }
                </div>
              );
            })}
        </div>
      )}

      {showAddUserCom && AllUsers && (
        <div>
          <form
            // setSuccessfulUserCreated setErrorCreatingNewUser
            onSubmit={HandleAddNewUser}
            className={styles.AddNewProductComponent}
          >
            <div className={styles.AddNewProductForm}>
              <label className={styles.AddNewProductFormLabel} for="email">
                Email:
              </label>
              <input
                type="text"
                // id="roll"
                name="email"
                required
                minlength="1"
                maxlength="30"
                // value={ResetNameValue}
                // onChange={(e) => {
                //   setResetNameValue(e.target.value);
                // }}
              />
            </div>
            <div className={styles.AddNewProductForm}>
              <label className={styles.AddNewProductFormLabel} for="password">
                Password:
              </label>
              <input
                type="password"
                // id="roll"
                name="password"
                required
                minlength="1"
                maxlength="50"
                // value={ResetNameValue}
                // onChange={(e) => {
                //   setResetNameValue(e.target.value);
                // }}
              />
            </div>
            <div className={styles.AddNewProductForm}>
              <label className={styles.AddNewProductFormLabel} for="name">
                Name:
              </label>
              <input
                type="text"
                // id="roll"
                name="name"
                required
                minlength="1"
                maxlength="25"
                // value={ResetNameValue}
                // onChange={(e) => {
                //   setResetNameValue(e.target.value);
                // }}
              />
            </div>

            <div className={styles.AddNewProductForm}>
              <label className={styles.AddNewProductFormLabel} for="address">
                Address:
              </label>
              <input
                type="text"
                name="address"
                required
                minlength="1"
                maxlength="40"
                // value={ResetPriceValue}
                // onChange={(e) => {
                //   setResetPriceValue(e.target.value);
                // }}
              />
            </div>
            <div className={styles.AddNewProductForm}>
              <label className={styles.AddNewProductFormLabel} for="mobile">
                Mobile:
              </label>
              <input
                type="number"
                name="mobile"
                required
                minlength="1"
                maxlength="16"
                // value={ResetPriceValue}
                // onChange={(e) => {
                //   setResetPriceValue(e.target.value);
                // }}
              />
            </div>
            <div className={styles.AddNewProductForm}>
              <label className={styles.AddNewProductFormLabel} for="role">
                Role:
              </label>
              <input
                type="text"
                name="role"
                required
                minlength="1"
                maxlength="20"
                // value={ResetPriceValue}
                // onChange={(e) => {
                //   setResetPriceValue(e.target.value);
                // }}
              />
            </div>

            <button className={styles.AddProductbuttonSubmit} type="submit">
              Submit
            </button>

            {successfulUserCreated && (
              <div className={styles.successRequest}>
                User Created Successfully
              </div>
            )}
            {errorCreatingNewUser && (
              <div className={styles.error}>{errorCreatingNewUser}</div>
            )}
          </form>
        </div>
      )}

      {showEditUsersCom && AllUsers && (
        <div className={styles.EditUsersComponent}>
          <div className={styles.ALLITEMSOptionSelect}>
            <select type="item" name="item">
              <option>Show First 25</option>
              <option>Show 25 to 50</option>
              <option>Show 50 to 75</option>
              <option>Show 75 to 100</option>
              <option>Show 100 to 125</option>
            </select>
            <div className={styles.ALLITEMSSearchForUsers}>
              <input placeholder="User email"></input>
              <button>Search</button>
            </div>
          </div>

          <div>
            <h3> Select a User: </h3>
            <select
              type="item"
              name="item"
              value={UserSelectedToEdit ? UserSelectedToEdit.email : ""}
              onChange={(e) => {
                // console.log(e.target.value);
                setUserSelectedToEdit(
                  AllUsers.find((Users) => Users.email === e.target.value)
                );
                // itemSearch = AllUsers.find((Users) => Users.Usersnumber === +value);
              }}
            >
              <option type="item" name="item"></option>
              {AllUsers.map((User, index) => {
                return (
                  <option
                    key={index}
                    type="item"
                    name="item"
                    value={User.email}
                  >
                    {User.email}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      )}

      {showEditUsersCom && AllUsers && UserSelectedToEdit && (
        <div className={styles.Editcomponent}>
          <div>
            <div className={styles.ALLITEMS}></div>

            <div className={styles.AllUserstyle}>
              <h4 className={styles.AllUserstyleTitle}>User:</h4>
              <Image
                width={100}
                height={100}
                alt="image"
                id="image-true"
                src={require(`./../public/users/images/default.jpeg`)}
              ></Image>

              <div>User email: {UserSelectedToEdit.email}</div>
              <div>User name: {UserSelectedToEdit.name}</div>
              <div>User mobile: {UserSelectedToEdit.mobilenumber}</div>
              <div>User address: {UserSelectedToEdit.address}</div>
              <div>User total orders: 0/10</div>
              <div>User role: {UserSelectedToEdit.role}</div>
              <div>
                User state:
                {UserSelectedToEdit.active === true ? "active" : "deactivited"}
              </div>
              <div>User note: {UserSelectedToEdit.note}</div>
              <div>
                User created at:{" "}
                {moment(UserSelectedToEdit.createdAt).format("DD/MM/YYYY")}
              </div>

              <button
              // onClick={() => {
              //   if (ShowSpecficUserExtraData) {
              //     setShowSpecficUserExtraDatainEdit(false);
              //   }
              //   if (!ShowSpecficUserExtraData) {
              //     setShowSpecficUserExtraDatainEdit(true);
              //   }
              // }}
              ></button>
              <div className={styles.AllUserstyleExtrabtn}>
                {/* <button>Archive Users</button> */}
                {/* <button>Add Note</button> */}
              </div>
            </div>
          </div>
          <form className={styles.EditFormComponent} onSubmit={HandleUserEdit}>
            <h4 className={styles.EditFormComponentTitle}>
              Fill the field you want to edit:
            </h4>
            <div className={styles.AddNewProductForm}>
              <label className={styles.AddNewProductFormLabel} for="name">
                Edit Name:
              </label>
              <input
                type="text"
                // id="roll"
                name="name"
                minlength="1"
                maxlength="25"
                // value={ResetNameValue}
                // onChange={(e) => {
                //   setResetNameValue(e.target.value);
                // }}
              />
            </div>

            <div className={styles.AddNewProductForm}>
              <label className={styles.AddNewProductFormLabel} for="address">
                Edit Address:
              </label>
              <input
                type="text"
                name="address"
                minlength="1"
                maxlength="40"
                // value={ResetPriceValue}
                // onChange={(e) => {
                //   setResetPriceValue(e.target.value);
                // }}
              />
            </div>

            <div className={styles.AddNewProductForm}>
              <label className={styles.AddNewProductFormLabel} for="mobile">
                Edit User Mobile:
              </label>
              <input
                type="number"
                name="mobile"
                minlength="1"
                maxlength="15"
                // value={ResetPriceValueEdit}
                // onChange={(e) => {
                //   setResetPriceValueEdit(e.target.value);
                // }}
              />
            </div>

            <div className={styles.AddNewProductForm}>
              <label className={styles.AddNewProductFormLabel} for="role">
                Edit Role:
              </label>
              <input
                type="text"
                name="role"
                minlength="1"
                maxlength="20"
                // value={ResetPriceValue}
                // onChange={(e) => {
                //   setResetPriceValue(e.target.value);
                // }}
              />
            </div>

            <button type="submit">Submit</button>

            {successfulEditUsers && (
              <div className={styles.successRequest}>Successful update</div>
            )}
            {ErrorEditUsers && (
              <div className={styles.error}>{ErrorEditUsers}</div>
            )}
          </form>
        </div>
      )}

      {showDeleteUsersCom && AllUsers && (
        <div className={styles.EditUsersComponent}>
          <div className={styles.ALLITEMSOptionSelect}>
            <select type="item" name="item">
              <option>Show First 25</option>
              <option>Show 25 to 50</option>
              <option>Show 50 to 75</option>
              <option>Show 75 to 100</option>
              <option>Show 100 to 125</option>
            </select>
            <div className={styles.ALLITEMSSearchForUsers}>
              <input placeholder="User email"></input>
              <button>Search</button>
            </div>
          </div>

          <div>
            <h3> Select a User: </h3>
            <select
              type="item"
              name="item"
              value={UsersSelectedToDelete ? UsersSelectedToDelete.email : ""}
              onChange={(e) => {
                // console.log(e.target.value);
                setUserSelectedToDelete(
                  AllUsers.find((Users) => Users.email === e.target.value)
                );
                // itemSearch = AllUsers.find((Users) => Users.Usersnumber === +value);
              }}
            >
              <option type="item" name="item"></option>
              {AllUsers.map((User, index) => {
                return (
                  <option
                    key={index}
                    type="item"
                    name="item"
                    value={User.email}
                  >
                    {User.email}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        // <div className={styles.EditUsersComponent}>
        //   <h3> Select a Product: </h3>

        //   <select
        //     type="item"
        //     name="item"
        //     value={
        //       UsersSelectedToDelete ? UsersSelectedToDelete.Usersnumber : ""
        //     }
        //     onChange={(e) => {
        //       console.log(e.target.value);
        //       setUserSelectedToDelete(
        //         AllUsers.find((Users) => Users.Usersnumber === +e.target.value)
        //       );
        //       // itemSearch = AllUsers.find((Users) => Users.Usersnumber === +value);
        //     }}
        //   >
        //     <option type="item" name="item"></option>
        //     {AllUsers.map((Users, index) => {
        //       return (
        //         <option
        //           key={index}
        //           type="item"
        //           name="item"
        //           value={Users.Usersnumber}
        //         >
        //           {Users.Usersnumber}
        //         </option>
        //       );
        //     })}
        //   </select>

        //   <div className={styles.ALLITEMSOptionSelect}>
        //     {" "}
        //     <select type="item" name="item">
        //       {/* {toursNames.map((item, index) => {
        //                 return (
        //                   <option key={index} type="item" name="item">
        //                     {item}
        //                   </option>
        //                 );
        //               })} */}
        //       <option>Show First 25</option>
        //       <option>Show 25 to 50</option>
        //       <option>Show 50 to 75</option>
        //       <option>Show 75 to 100</option>
        //       <option>Show 100 to 125</option>
        //     </select>
        //     <div className={styles.ALLITEMSSearchForUsers}>
        //       <input placeholder="Users number"></input>
        //       <button>Search</button>
        //     </div>
        //   </div>
        // </div>
      )}

      {showDeleteUsersCom && AllUsers && UsersSelectedToDelete && (
        <div className={styles.DeleteComponent}>
          <div>
            <div className={styles.ALLITEMS}></div>

            <div className={styles.AllUserstyle}>
              <h4 className={styles.AllUserstyleTitle}>User:</h4>
              <Image
                width={100}
                height={100}
                alt="image"
                id="image-true"
                src={require(`./../public/users/images/default.jpeg`)}
              ></Image>

              <div>User email: {UsersSelectedToDelete.email}</div>
              <div>User name: {UsersSelectedToDelete.name}</div>
              <div>User mobile: {UsersSelectedToDelete.mobilenumber}</div>
              <div>User address: {UsersSelectedToDelete.address}</div>
              <div>User total orders: 0/10</div>
              <div>User role: {UsersSelectedToDelete.role}</div>
              <div>
                User state:
                {UsersSelectedToDelete.active === true
                  ? "active"
                  : "deactivited"}
              </div>
              <div>User note: {UsersSelectedToDelete.note}</div>
              <div>
                User created at:{" "}
                {moment(UsersSelectedToDelete.createdAt).format("DD/MM/YYYY")}
              </div>
            </div>
          </div>

          {/* <button
                onClick={() => {
                  if (ShowSpecficUserExtraDatainDelete) {
                    setShowSpecficUserExtraDatainDelete(false);
                  }
                  if (!ShowSpecficUserExtraDatainDelete) {
                    setShowSpecficUserExtraDatainDelete(true);
                  }
                }}
              >
                Show Users products
              </button> */}

          {/* {ShowSpecficUserExtraDatainDelete &&
                UsersSelectedToDelete.UsersProducts.map((item, i) => {
                  return (
                    <div key={i} className={styles.UsersFullDetails}>
                      <Image
                        alt="n"
                        className={styles.productItemImage}
                        // src={require(`./../../../public/Items/${item.name}.png`)}
                        src={`https://next-ecommerce-s3.s3.eu-north-1.amazonaws.com/items/${item.name}.png`}
                        // className="iconImage"
                        width={300}
                        height={300}
                      ></Image>
                      <div>Name: {item.name}</div>
                      <div>Price: {item.price}$</div>
                      <div>Quantity: {item.price}</div>
                    </div>
                  );
                })} */}

          <button
            onClick={() => {
              setCheckBeforeDelete(true);
            }}
          >
            Delete User
          </button>

          {CheckBeforeDelete && (
            <div className={styles.checkingBeforeDelete}>
              <div>Are you sure you want to delete Product ?</div>
              <div>
                <button onClick={HandleDeleteUser}>Yes</button>
                <button
                  onClick={() => {
                    if (CheckBeforeDelete) {
                      setCheckBeforeDelete(false);
                    }
                  }}
                >
                  No
                </button>
              </div>
            </div>
          )}

          {SuccessfulDeleteUsers && (
            <div className={styles.successRequest}>
              Users was Deleted successfully
            </div>
          )}
          {ErrorDeleteUsers && (
            <div className={styles.error}>{ErrorDeleteUsers}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default MangeUsers;
