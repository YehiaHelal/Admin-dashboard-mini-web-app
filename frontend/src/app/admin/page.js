"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import MangeOrders from "../../../comps/adminMorder";
import MangeUsers from "../../../comps/adminUsers";
import LiveChat from "../../../comps/adminLiveChat";
import { useAuthContext } from "../../../hooks/useAuthContext";

const Admin = () => {
  // dispatchUser to the authContext
  const { user, dispatchUser } = useAuthContext();

  // Set All Items Images Fetch
  const [AllItemsImages, setAllItemsImages] = useState();

  // Show Dashboard
  const [showDashboard, setShowDashboard] = useState(false);

  // Set Dashboard Total Data
  const [dashboardTotalData, setDashboardTotalData] = useState();

  // console.log(dashboardTotalData);

  // Show ITEMS
  const [showProducts, setShowProducts] = useState(false);

  // blue outside showProducts

  // All Items Fetch
  const [AllItems, setAllItems] = useState();

  // Show All Items Fetch Condition
  const [ShowAllItems, setShowAllItems] = useState(false);

  // Show All Items Full Details and Description
  const [ShowAllItemsFullDetails, setShowAllItemsFullDetails] = useState(false);

  // Show ADD PRODUCT COMPONENT
  const [showAddProductCom, setShowAddProductCom] = useState(false);

  // Show DELETE PRODUCT COMPONENT
  const [showDeleteProductCom, setShowDeleteProductCom] = useState(false);

  // PRODUCT SELECTED IN DELETE PRODUCT COMPONENT
  const [itemSelectedInDeleteCom, setItemSelectedInDeleteCom] = useState();

  // Confirm that deleted is intented
  const [checkBeforeDelete, setCheckBeforeDelete] = useState(false);

  // Set Successfully Creating a new PRODUCT
  const [successfulInDeleteProduct, setSuccessfulInDeleteProduct] =
    useState(false);

  // Set Error In DELETE PRODUCT
  const [errorDeleteProduct, setErrorDeleteProduct] = useState();

  // Show EDIT PRODUCT COMPONENT
  const [showEditProductCom, setShowEditProductCom] = useState(false);

  // Select the Uploaded Image To Edit
  const [selectedImageToEdit, setSelectedImageToEdit] = useState(null);

  // to reset the input Edit image placeholder
  const [fullNameImageToEdit, setFullNameImageToEdit] = useState("");

  // Name Reset value after Editing a product
  const [ResetNameValueEdit, setResetNameValueEdit] = useState();

  // Price Reset value after Editing a product
  const [ResetPriceValueEdit, setResetPriceValueEdit] = useState();

  // PRODUCT SELECTED IN DELETE PRODUCT COMPONENT
  const [itemSelectedInEditCom, setItemSelectedInEditCom] = useState();

  // Set Successful Edit PRODUCT
  const [successfulEditProduct, setSuccessfulEditProduct] = useState(false);

  // Set Error In DELETE PRODUCT
  const [errorEditProduct, setErrorEditProduct] = useState();

  // to reset the input image placeholder
  const [fullNameImage, setFullNameImage] = useState("");

  // Select the Uploaded Image
  const [selectedImage, setSelectedImage] = useState(null);

  // Set Successfully Creating a new item
  const [successfulProductCreated, setSuccessfulProductCreated] =
    useState(false);

  // Set Error Creating a new item
  const [errorCreatingNewProduct, setErrorCreatingNewProduct] = useState();

  // Name Reset value after creating a product
  const [ResetNameValue, setResetNameValue] = useState();

  // Price Reset value after creating a product
  const [ResetPriceValue, setResetPriceValue] = useState();

  // Show ORDERS
  const [showOrders, setShowOrders] = useState(false);

  // Show USERS
  const [showUsers, setShowUsers] = useState(false);

  // Show Live Chat
  const [showLiveChat, setShowLiveChat] = useState(false);

  // // Show Contacts
  // const [showContacts, setShowContacts] = useState(false);

  // Handle Get All Items Images
  const handleGetAllImages = async () => {
    // e.preventDefault();

    // const name = e.target.name.value;
    // const email = e.target.email.value;
    // const password = e.target.password.value;

    // console.log(name);
    // console.log(email);
    // console.log(password);

    // fetch request
    try {
      const datas = await axios.get(
        "https://teabrand.onrender.com/api/items/itemsImages",

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

        // console.log(datas);
        // setAllItems(datas.data);

        setAllItemsImages(datas.data.images);

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

  // Handle get Dashboard general Data
  const handleGetDashboardData = async () => {
    // e.preventDefault();

    // const name = e.target.name.value;
    // const email = e.target.email.value;
    // const password = e.target.password.value;

    // console.log(name);
    // console.log(email);
    // console.log(password);

    const formData = new FormData();
    formData.append("jwt", user.token);

    // token: user.token,

    // fetch request
    try {
      const datas = await axios.post(
        "https://teabrand.onrender.com/api/users/dashboarddata",
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

        setDashboardTotalData(datas.data);

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

  const handleGetAllItems = async () => {
    // e.preventDefault();

    // const name = e.target.name.value;
    // const email = e.target.email.value;
    // const password = e.target.password.value;

    // console.log(name);
    // console.log(email);
    // console.log(password);

    // fetch request
    try {
      const datas = await axios.get(
        "https://teabrand.onrender.com/api/items",

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

        setAllItems(datas.data);

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

  // HandleAddNewProduct and S3 Image adding

  const HandleAddNewProduct = async (e) => {
    e.preventDefault();

    // console.log("inside");

    // console.log(user.user);

    const submission = {
      name: e.target.name.value,
      price: e.target.price.value,
    };

    const formData = new FormData();
    formData.append("photo", selectedImage);
    formData.append("name", e.target.name.value);
    formData.append("price", e.target.price.value);
    formData.append("jwt", user.token);

    // token: user.token,

    try {
      const datas = await axios.post(
        "https://teabrand.onrender.com/api/items/addproduct/",

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
        // setAddedImageSuccessfully(true);
        setSuccessfulProductCreated(true);
        setErrorCreatingNewProduct();

        // console.log(datas);

        setTimeout(() => {
          setSelectedImage(null);
          setFullNameImage("");
          setResetPriceValue("");
          setResetNameValue("");
          setSuccessfulProductCreated(false);
        }, 1500);

        // setTimeout(() => {
        //   setAddedImageSuccessfully(false);
        // }, 3000);
      }
    } catch (error) {
      // console.log("error");

      // console.log(error);

      if (error.message) {
        // console.log("inside");
        setErrorCreatingNewProduct(error.message);
      }

      if (error.response.data.error) {
        setErrorCreatingNewProduct(error.response.data.error);
      }

      // setErrorAddingImage("error");

      // setTimeout(() => {
      //   setErrorAddingImage("");
      // }, 3000);
    }
  };

  // Handle Delete A PRODUCT

  const HandleDeleteAProduct = async (e) => {
    // e.preventDefault();

    // console.log("inside");

    // console.log(user.user);

    if (!itemSelectedInDeleteCom) {
      // console.log("no selected ");

      return;
    }

    // console.log(itemSelectedInDeleteCom.name);

    const submission = {
      name: itemSelectedInDeleteCom.name,
      token: user.token,
    };

    // const formData = new FormData();
    // formData.append("photo", selectedImage);
    // formData.append("name", e.target.name.value);
    // formData.append("price", e.target.price.value);

    try {
      const datas = await axios.post(
        "https://teabrand.onrender.com/api/items/deleteproduct",

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
        // setAddedImageSuccessfully(true);
        setSuccessfulInDeleteProduct(true);
        setErrorDeleteProduct();

        // console.log(datas);

        setTimeout(() => {
          // Fetching the NEW PRODUCTS DATA AFTER UPDATE
          handleGetAllItems();

          setCheckBeforeDelete(false);
          setItemSelectedInDeleteCom();
          setSuccessfulInDeleteProduct(false);
        }, 1500);

        // setTimeout(() => {
        //   setAddedImageSuccessfully(false);
        // }, 3000);
      }
    } catch (error) {
      // console.log("error");

      // console.log(error);

      if (error.message) {
        // console.log("inside");
        setErrorDeleteProduct(error.message);
      }

      if (error.response.data.error) {
        setErrorDeleteProduct(error.response.data.error);
      }

      // setErrorAddingImage("error");

      // setTimeout(() => {
      //   setErrorAddingImage("");
      // }, 3000);
    }
  };

  // Handle Edit PRODUCT

  const HandleEditProduct = async (e) => {
    e.preventDefault();

    // console.log("inside");

    // console.log(user.user);

    if (!selectedImageToEdit && !e.target.name.value && !e.target.price.value) {
      // console.log("nothing was selected ");
      return setErrorEditProduct("you need to add a field value to Edit");
    }

    // for item name change and not changing item, will have to change s3 bucket name because we are dependent on name to fetch image so..
    // const ItemSelectedUrl = `https://next-ecommerce-s3.s3.eu-north-1.amazonaws.com/items/${itemSelectedInEditCom.name}.png`;

    const formData = new FormData();

    formData.append("selectedItem", itemSelectedInEditCom.name);
    // formData.append("selectedItemUrl", ItemSelectedUrl);

    if (selectedImageToEdit) {
      formData.append("photo", selectedImageToEdit);
    }

    if (e.target.name.value) {
      formData.append("name", e.target.name.value);
    }

    if (e.target.price.value) {
      formData.append("price", e.target.price.value);
    }

    formData.append("jwt", user.token);

    // const submission = {
    //   name: itemSelectedInDeleteCom.name,
    // };

    try {
      const datas = await axios.post(
        "https://teabrand.onrender.com/api/items/editproduct",

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
        // setAddedImageSuccessfully(true);
        setSuccessfulEditProduct(true);
        setErrorEditProduct();

        // console.log(datas);

        setTimeout(() => {
          // Fetching the NEW PRODUCTS DATA AFTER UPDATE

          setSelectedImageToEdit(null);
          setResetNameValueEdit("");
          setResetPriceValueEdit("");
          handleGetAllItems();

          // to let it stay up and not close the window in case he wants to check and edit more in same item
          setItemSelectedInEditCom();
          setSuccessfulEditProduct(false);
        }, 1000);

        // setTimeout(() => {
        //   setAddedImageSuccessfully(false);
        // }, 3000);
      }
    } catch (error) {
      // console.log("error");

      // console.log(error);

      if (error.message) {
        // console.log("inside");
        setErrorEditProduct(error.message);
      }

      if (error.response.data.error) {
        setErrorEditProduct(error.response.data.error);
      }

      // setErrorAddingImage("error");

      // setTimeout(() => {
      //   setErrorAddingImage("");
      // }, 3000);
    }
  };

  return (
    <div className={styles.component}>
      <div className={styles.directionButtons}>
        {/* <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
            />
          </svg>
          <div>Ecommerce Admin</div>
        </button> */}

        {false && (
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
            <div>Options</div>
          </div>
        )}
        <button
          onClick={() => {
            if (showDashboard === true) {
              setShowDashboard(false);
            }

            if (showDashboard !== true) {
              setShowDashboard(true);
              setShowOrders(false);
              setShowUsers(false);
              setShowLiveChat(false);
              setShowProducts(false);

              setTimeout(() => {
                handleGetDashboardData();
              }, 100);
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>

          <div>Dashboard</div>
        </button>

        <button
          onClick={() => {
            if (showOrders === true) {
              setShowOrders(false);
            }

            if (showOrders !== true) {
              setShowOrders(true);
              setShowDashboard(false);
              setShowUsers(false);
              setShowLiveChat(false);
              setShowProducts(false);
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
            />
          </svg>

          <div>Orders</div>
        </button>

        <button
          style={{
            border:
              showProducts === true ? "1px solid rgb(0, 0, 255, 0.99)" : "",
          }}
          onClick={() => {
            if (showProducts === true) {
              setShowProducts(false);
            }

            if (showProducts !== true) {
              setShowProducts(true);
              setShowOrders(false);
              setShowUsers(false);
              setShowLiveChat(false);
              setShowDashboard(false);
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
            />
          </svg>
          <div>Products</div>
        </button>

        <button
          onClick={() => {
            if (showUsers === true) {
              setShowUsers(false);
            }

            if (showUsers !== true) {
              setShowUsers(true);
              setShowOrders(false);
              setShowProducts(false);
              setShowLiveChat(false);
              setShowDashboard(false);
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>

          <div>Users</div>
        </button>

        <button
          onClick={() => {
            if (showLiveChat === true) {
              setShowLiveChat(false);
            }

            if (showLiveChat !== true) {
              setShowLiveChat(true);
              setShowOrders(false);
              setShowUsers(false);
              setShowProducts(false);
              setShowDashboard(false);
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>

          <div>Live chat</div>
        </button>

        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg> */}
      </div>

      <div className={styles.ManagingExpandingComponent}>
        {showDashboard && dashboardTotalData && (
          <div>
            {/* <h3 className={styles.DashboardNotifcationDefault}>
              By Default any user created is Admin, you can change user role if
              you want from users panel
            </h3> */}
            <div className={styles.DashboardData}>
              <h3>Welcome to Dashboard</h3>
              <div>Number of Products: {dashboardTotalData.products} </div>
              <div>Number of Orders: {dashboardTotalData.orders}</div>
              <div>Number of Users: {dashboardTotalData.users}</div>
              <div>Number of Chats initiated: {dashboardTotalData.chats}</div>
            </div>
          </div>
        )}
        {showProducts && (
          <div>
            <div className={styles.MangingDataComponent}>
              <button
                style={{
                  border:
                    ShowAllItems === true
                      ? "1px solid rgb(0, 0, 255, 0.99)"
                      : "",
                }}
                onClick={() => {
                  handleGetAllItems();
                  handleGetAllImages();
                  setShowAllItems(true);
                  setShowAddProductCom(false);
                  setShowDeleteProductCom(false);
                  setShowEditProductCom(false);
                }}
              >
                All Products
              </button>
              <button
                style={{
                  border:
                    showAddProductCom === true
                      ? "1px solid rgb(0, 0, 255, 0.99)"
                      : "",
                }}
                onClick={() => {
                  setShowAddProductCom(true);
                  setShowAllItems(false);
                  setShowDeleteProductCom(false);
                  setShowEditProductCom(false);
                }}
              >
                Add Product
              </button>

              <button
                style={{
                  border:
                    showEditProductCom === true
                      ? "1px solid rgb(0, 0, 255, 0.99)"
                      : "",
                }}
                onClick={() => {
                  handleGetAllItems();
                  handleGetAllImages();

                  setShowEditProductCom(true);
                  setShowAddProductCom(false);
                  setShowAllItems(false);
                  setShowDeleteProductCom(false);
                }}
              >
                Edit Product
              </button>
              <button
                style={{
                  border:
                    showDeleteProductCom === true
                      ? "1px solid rgb(0, 0, 255, 0.99)"
                      : "",
                }}
                onClick={() => {
                  handleGetAllItems();
                  handleGetAllImages();

                  setShowDeleteProductCom(true);
                  setShowEditProductCom(false);
                  setShowAddProductCom(false);
                  setShowAllItems(false);
                }}
              >
                Delete Product
              </button>
            </div>

            {ShowAllItems && (
              <div className={styles.ALLITEMSOptionsandSelect}>
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
                <button
                  onClick={() => {
                    if (ShowAllItemsFullDetails) {
                      setShowAllItemsFullDetails(false);
                    }
                    if (!ShowAllItemsFullDetails) {
                      setShowAllItemsFullDetails(true);
                    }
                  }}
                >
                  Show Item Full Details
                </button>
              </div>
            )}
            {ShowAllItems && (
              <div className={styles.ALLITEMSComponent}>
                {AllItems &&
                  AllItemsImages &&
                  AllItems.map((item) => {
                    return (
                      <div key={item._id} className={styles.ALLITEMS}>
                        <Image
                          alt="image"
                          className={styles.productItemImage}
                          // src={require(`./../../../public/Items/${item.name}.png`)}
                          // src={`https://next-ecommerce-s3.s3.eu-north-1.amazonaws.com/items/${
                          //   item.name
                          // }.png?${Date.now()}`}
                          src={AllItemsImages[item.name]}
                          // className="iconImage"
                          width={300}
                          height={300}
                        ></Image>
                        <div>Name: {item.name}</div>
                        <div>Price {item.price}$</div>
                        {ShowAllItemsFullDetails && <div>Extra</div>}
                      </div>
                    );
                  })}
              </div>
            )}

            {showAddProductCom && (
              <div>
                <form
                  onSubmit={HandleAddNewProduct}
                  className={styles.AddNewProductComponent}
                >
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
                      value={ResetNameValue}
                      onChange={(e) => {
                        setResetNameValue(e.target.value);
                      }}
                    />
                  </div>
                  <div className={styles.AddNewProductForm}>
                    <label
                      className={styles.AddNewProductFormLabel}
                      for="price"
                    >
                      Price:
                    </label>
                    <input
                      type="number"
                      name="price"
                      required
                      minlength="1"
                      maxlength="6"
                      value={ResetPriceValue}
                      onChange={(e) => {
                        setResetPriceValue(e.target.value);
                      }}
                    />
                  </div>

                  <div className={styles.AddNewProductFormImage}>
                    <input
                      type="file"
                      name="photo"
                      id="img"
                      className={styles.imageuploadInput}
                      value={fullNameImage}
                      onChange={(event) => {
                        // console.log(event.target.files[0]);
                        setSelectedImage(event.target.files[0]);
                      }}
                    ></input>
                    <label className={styles.imageuploadLabelInput} for="img">
                      Upload image
                    </label>
                    {selectedImage && (
                      <Image
                        width={100}
                        height={100}
                        className={styles.imageuploadLabelInputSelectedImage}
                        alt="image"
                        src={URL.createObjectURL(selectedImage)}
                      ></Image>
                    )}

                    <button
                      className={styles.AddProductbuttonSubmit}
                      type="submit"
                    >
                      Submit
                    </button>

                    {successfulProductCreated && (
                      <div className={styles.successRequest}>
                        Product was added successfully
                      </div>
                    )}
                    {errorCreatingNewProduct && (
                      <div className={styles.error}>
                        {errorCreatingNewProduct}
                      </div>
                    )}
                  </div>
                </form>
              </div>
            )}

            {showDeleteProductCom && AllItems && (
              <div className={styles.DeleteProductComponent}>
                <h3> Select a Product: </h3>
                <select
                  type="item"
                  name="item"
                  onChange={(e) => {
                    // console.log(e.target.value);
                    setItemSelectedInDeleteCom(
                      AllItems.find((o) => o.name === e.target.value)
                    );
                  }}
                >
                  <option type="item" name="item"></option>
                  {AllItems.map((item, index) => {
                    return (
                      <option
                        key={index}
                        type="item"
                        name="item"

                        // value={item.name}
                      >
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            )}

            {showDeleteProductCom &&
              AllItems &&
              itemSelectedInDeleteCom &&
              AllItemsImages && (
                <div className={styles.DeleteProductItemComponent}>
                  <div className={styles.ALLITEMS}>
                    <Image
                      alt="image"
                      className={styles.productItemImage}
                      // src={require(`./../../../public/Items/${item.name}.png`)}
                      // src={`https://next-ecommerce-s3.s3.eu-north-1.amazonaws.com/items/${itemSelectedInDeleteCom.name}.png`}
                      src={AllItemsImages[itemSelectedInDeleteCom.name]}
                      // className="iconImage"
                      width={300}
                      height={300}
                    ></Image>
                    <div>Name: {itemSelectedInDeleteCom.name}</div>
                    <div>Price {itemSelectedInDeleteCom.price}$</div>
                  </div>

                  <button
                    onClick={() => {
                      setCheckBeforeDelete(true);
                    }}
                  >
                    Delete Product
                  </button>

                  {checkBeforeDelete && (
                    <div className={styles.checkingBeforeDelete}>
                      <div>Are you sure you want to delete Product ?</div>
                      <div>
                        <button onClick={HandleDeleteAProduct}>Yes</button>
                        <button
                          onClick={() => {
                            if (checkBeforeDelete) setCheckBeforeDelete(false);
                          }}
                        >
                          No
                        </button>
                      </div>
                    </div>
                  )}

                  {successfulInDeleteProduct && (
                    <div className={styles.successRequest}>
                      Product was Deleted successfully
                    </div>
                  )}
                  {errorDeleteProduct && (
                    <div className={styles.error}>{errorDeleteProduct}</div>
                  )}
                </div>
              )}

            {showEditProductCom && AllItems && (
              <div className={styles.DeleteProductComponent}>
                <h3> Select a Product: </h3>
                <select
                  type="item"
                  name="item"
                  onChange={(e) => {
                    // console.log(e.target.value);
                    setItemSelectedInEditCom(
                      AllItems.find((o) => o.name === e.target.value)
                    );
                  }}
                >
                  <option type="item" name="item"></option>
                  {AllItems.map((item, index) => {
                    return (
                      <option
                        key={index}
                        type="item"
                        name="item"
                        value={item.name}
                      >
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            )}

            {showEditProductCom && AllItems && itemSelectedInEditCom && (
              <div className={styles.EditProductComponent}>
                <form
                  onSubmit={HandleEditProduct}
                  className={styles.AddNewProductComponent}
                >
                  <div className={styles.AddNewProductFormTitle}>
                    Fill the field you want to edit:
                  </div>
                  <div className={styles.AddNewProductForm}>
                    <label for="name">Edit Name:</label>
                    <input
                      type="text"
                      // id="roll"
                      name="name"
                      minlength="1"
                      maxlength="25"
                      value={ResetNameValueEdit}
                      onChange={(e) => {
                        setResetNameValueEdit(e.target.value);
                      }}
                    />
                  </div>
                  <div className={styles.AddNewProductForm}>
                    <label for="price">Edit Price:</label>
                    <input
                      type="number"
                      name="price"
                      minlength="1"
                      maxlength="6"
                      value={ResetPriceValueEdit}
                      onChange={(e) => {
                        setResetPriceValueEdit(e.target.value);
                      }}
                    />
                  </div>

                  <div className={styles.AddNewProductFormImage}>
                    <input
                      type="file"
                      name="photo"
                      id="img"
                      className={styles.imageuploadInput}
                      value={fullNameImageToEdit}
                      onChange={(event) => {
                        // console.log(event.target.files[0]);
                        setSelectedImageToEdit(event.target.files[0]);
                      }}
                    ></input>
                    <label className={styles.imageuploadLabelInput} for="img">
                      Upload - Edit Image
                    </label>
                    {selectedImageToEdit && (
                      <Image
                        width={100}
                        height={100}
                        className={styles.imageuploadLabelInputSelectedImage}
                        alt="image"
                        src={URL.createObjectURL(selectedImageToEdit)}
                      ></Image>
                    )}

                    <button
                      className={styles.AddProductbuttonSubmit}
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>

                {showEditProductCom &&
                  AllItems &&
                  itemSelectedInEditCom &&
                  AllItemsImages && (
                    <div className={styles.DeleteProductItemComponent}>
                      <div className={styles.ALLITEMS}>
                        <Image
                          alt="image"
                          className={styles.productItemImage}
                          // src={require(`./../../../public/Items/${item.name}.png`)}
                          // src={`https://next-ecommerce-s3.s3.eu-north-1.amazonaws.com/items/${itemSelectedInEditCom.name}.png`}
                          src={AllItemsImages[itemSelectedInEditCom.name]}
                          // className="iconImage"
                          width={300}
                          height={300}
                        ></Image>
                        <div>Name: {itemSelectedInEditCom.name}</div>
                        <div>Price {itemSelectedInEditCom.price}$</div>
                      </div>

                      {successfulEditProduct && (
                        <div className={styles.successRequest}>
                          Product was Edited successfully
                        </div>
                      )}
                      {errorEditProduct && (
                        <div className={styles.error}>{errorEditProduct}</div>
                      )}
                    </div>
                  )}
              </div>
            )}
          </div>
        )}

        {
          showOrders && <MangeOrders />
          // (
          //   <div className={styles.MangingDataComponent}>
          //     <button>All Orders</button>
          //     <button>Add Order</button>
          //     <button>Delete Order</button>
          //     <button>Edit Order</button>
          //   </div>
          // )
        }
        {/* {showUsers && (
          <div className={styles.MangingDataComponent}>
            <button>All Users</button>
            <button>Disable User</button>
            <button>Delete User</button>
            <button>Edit User</button>
          </div>
        )} */}
        {showUsers && <MangeUsers />}

        {showLiveChat && <LiveChat />}
      </div>
    </div>
  );
};

export default Admin;
