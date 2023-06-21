"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./adminMorder.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

const MangeOrders = () => {
  // All Items Fetch
  const [AllOrders, setAllOrders] = useState();

  // console.log(AllOrders);

  // Set All Items Images Fetch
  const [AllItemsImages, setAllItemsImages] = useState();

  // dispatchUser to the authContext
  const { user, dispatchUser } = useAuthContext();

  // console.log(AllOrders);

  // Show Opened Orders
  const [ShowAllOrdersTab, setShowAllOrdersTab] = useState(false);

  // Show Opened Orders
  const [ShowOpenedOrders, setShowOpenedOrders] = useState(false);

  // Show Archived Orders
  const [ShowArchivedOrders, setShowArchivedOrders] = useState(false);

  // Show Products Details of the Order
  const [ShowSpecficOrderProduct, setShowSpecficOrderProduct] = useState(false);

  // Show Products Details of the Order Show and Hide manage button
  const [ShowSpecficOrderProductHideShow, setShowSpecficOrderProductHideShow] =
    useState(false);

  // Show Products Details of the Order
  const [ShowSpecficOrderProductinEdit, setShowSpecficOrderProductinEdit] =
    useState(false);

  // Show EDIT ORDER COMPONENT
  const [showEditOrderCom, setShowEditOrderCom] = useState(false);

  // ITEM SELECTED TO EDIT
  const [OrderSelectedToEdit, setOrderSelectedToEdit] = useState();

  // console.log(OrderSelectedToEdit);

  // Error Editing Order
  const [ErrorEditOrder, setErrorEditOrder] = useState();

  // Successful Editing Order
  const [successfulEditOrder, setSuccessfulEditOrder] = useState(false);

  // Show DELETE ORDER COMPONENT
  const [showDeleteOrderCom, setShowDeleteOrderCom] = useState(false);

  // ITEM SELECTED TO DELETE
  const [OrderSelectedToDelete, setOrderSelectedToDelete] = useState();

  // console.log(OrderSelectedToDelete);

  // Show Products Details of the Order in Delete
  const [ShowSpecficOrderProductinDelete, setShowSpecficOrderProductinDelete] =
    useState(false);

  // check before delete
  const [CheckBeforeDelete, setCheckBeforeDelete] = useState(false);

  // Error Deleting Order
  const [ErrorDeleteOrder, setErrorDeleteOrder] = useState();

  // Successful Deleting Order
  const [SuccessfulDeleteOrder, setSuccessfulDeleteOrder] = useState(false);

  // set Order Marked Completed
  const [ErrorMarkingCompleted, setErrorMarkingCompleted] = useState();

  // set show setShowAddNoteInput
  const [ShowAddNoteInput, setShowAddNoteInput] = useState(false);
  // and Selected Item
  const [AddNoteSelectedItem, setAddNoteSelectedItem] = useState();

  // set Successful Marked complete
  const [SuccessfulMarkedComplete, setSuccessfulMarkedComplete] =
    useState(false);

  // set Successful Marked complete
  const [ErrorMarkOrderComplete, setErrorMarkOrderComplete] = useState();

  // set Add Note Value to Item
  const [ItemAddNoteValue, setItemAddNoteValue] = useState();

  // console.log(ItemAddNoteValue);

  // useeffect to control show either the archived order or opened order

  useEffect(() => {
    if (ShowOpenedOrders && AllOrders) {
      const openedOrdersStill = AllOrders.filter((order) => {
        //     console.log(item._id, addItemToCart._id);
        return order.opened === true;
      });

      // console.log(openedOrdersStill);
      // console.log("will show opened");
      // console.log(AllOrders);
      setAllOrders(openedOrdersStill);
    }
    if (ShowArchivedOrders && AllOrders) {
      const archivedOrdersStill = AllOrders.filter((order) => {
        //     console.log(item._id, addItemToCart._id);
        return order.opened === false;
      });

      // console.log(archivedOrdersStill);
      // console.log("will show archived");
      // console.log(AllOrders);
      setAllOrders(archivedOrdersStill);
    }
  }, [ShowOpenedOrders, ShowArchivedOrders]);

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

        // console.log(ShowOpenedOrders);
        // console.log(ShowArchivedOrders);

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

  // Handle Get All Items Images
  const handleGetAllImages = async () => {
    // e.preventDefault();

    // const name = e.target.name.value;
    // const email = e.target.email.value;
    // const password = e.target.password.value;

    if (AllItemsImages) {
      return;
    }

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

  // handleAddNoteToOrder
  const HandleAddNoteToOrder = async (e) => {
    e.preventDefault();

    // console.log("inside");

    // console.log(AddNoteSelectedItem.ordernumber);

    if (ItemAddNoteValue.length < 1) {
      // console.log("nothing entered");

      return;
    }

    // console.log(user.user);

    const submission = {
      note: ItemAddNoteValue,
      ordernumber: AddNoteSelectedItem.ordernumber,
      token: user.token,
    };

    // const formData = new FormData();
    // formData.append("photo", selectedImage);
    // formData.append("name", e.target.name.value);
    // formData.append("price", e.target.price.value);

    try {
      const datas = await axios.post(
        "https://teabrand.onrender.com/api/orders/orderaddnote/",

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
        handleGetAllOrders();
      }
    } catch (error) {
      // console.log("error");
      // console.log(error);
    }
  };

  // // Handle Delete  ORDER

  const HandleDeleteOrder = async (e) => {
    // e.preventDefault();

    // console.log("inside");

    // console.log(user.user);

    // console.log(OrderSelectedToDelete);

    if (!OrderSelectedToDelete) {
      // console.log("no selected ");

      return;
    }

    // console.log(itemSelectedInDeleteCom.name);

    const submission = {
      ordernumber: OrderSelectedToDelete.ordernumber,
      token: user.token,
    };

    // const formData = new FormData();
    // formData.append("photo", selectedImage);
    // formData.append("name", e.target.name.value);
    // formData.append("price", e.target.price.value);

    try {
      const datas = await axios.post(
        "https://teabrand.onrender.com/api/orders/deleteorder",

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
        setSuccessfulDeleteOrder(true);
        setErrorDeleteOrder();
        // console.log(datas);
        setTimeout(() => {
          // Fetching the NEW PRODUCTS DATA AFTER UPDATE
          handleGetAllOrders();
          setCheckBeforeDelete(false);
          setOrderSelectedToDelete();
          setSuccessfulDeleteOrder(false);

          // setSuccessfulInDeleteProduct(false);
        }, 1500);
      }
    } catch (error) {
      // console.log("error");

      // console.log(error);

      if (error.message) {
        // console.log("inside");
        setErrorDeleteOrder(error.message);
      }

      if (error.response.data.error) {
        setErrorDeleteOrder(error.response.data.error);
      }
    }
  };

  // Handle Mark Order as Completed

  const handleOrderMarkCompleted = async (order) => {
    // e.preventDefault();

    // console.log(order);

    // console.log("inside");

    // console.log(order);

    // console.log(OrderMarkedCompleted);

    // console.log(user.user);

    // address price mobile
    // console.log(e.target.address.value);
    // console.log(e.target.price.value);
    // console.log(e.target.mobile.value);

    // if (!OrderMarkedCompleted) {
    //   console.log("nothing was selected ");
    //   return setErrorMarkingCompleted("you need to add a field value to Edit");
    // }

    // for item name change and not changing item, will have to change s3 bucket name because we are dependent on name to fetch image so..

    // const formData = new FormData();

    // formData.append("selectedOrder", OrderSelectedToEdit.ordernumber);

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
      order: order,
      token: user.token,
    };

    try {
      const datas = await axios.post(
        "https://teabrand.onrender.com/api/orders/markordercompleted",

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

        setSuccessfulMarkedComplete(true);
        // setErrorEditOrder();

        // console.log(datas);

        setTimeout(() => {
          handleGetAllOrders();
        }, 100);

        setTimeout(() => {
          // Fetching the NEW PRODUCTS DATA AFTER UPDATE

          // setSelectedImageToEdit(null);
          // setResetNameValueEdit("");
          // setResetPriceValueEdit("");
          // handleGetAllOrders();

          // to let it stay up and not close the window in case he wants to check and edit more in same item
          // setOrderSelectedToEdit();
          setSuccessfulMarkedComplete(false);
        }, 1500);
      }
    } catch (error) {
      // console.log("error");

      // console.log(error);

      if (error.message) {
        // console.log("inside");
        setErrorMarkOrderComplete(error.message);
      }

      if (error.response.data.error) {
        setErrorMarkOrderComplete(error.response.data.error);
      }
    }
  };

  // Handle Edit ORDER

  const HandleOrderEdit = async (e) => {
    e.preventDefault();

    // console.log("inside");

    // console.log(user.user);

    // address price mobile
    // console.log(e.target.address.value);
    // console.log(e.target.price.value);
    // console.log(e.target.mobile.value);

    if (
      !e.target.address.value &&
      !e.target.price.value &&
      !e.target.mobile.value
    ) {
      // console.log("nothing was selected ");
      return setErrorEditOrder("you need to add a field value to Edit");
    }

    // for item name change and not changing item, will have to change s3 bucket name because we are dependent on name to fetch image so..

    const formData = new FormData();

    formData.append("selectedOrder", OrderSelectedToEdit.ordernumber);

    if (e.target.address.value) {
      formData.append("address", e.target.address.value);
    }

    if (e.target.price.value) {
      formData.append("price", e.target.price.value);
    }

    if (e.target.mobile.value) {
      formData.append("mobile", e.target.mobile.value);
    }

    formData.append("jwt", user.token);

    try {
      const datas = await axios.post(
        "https://teabrand.onrender.com/api/orders/updateOrder",

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
      //
      if (datas.status === 200) {
        setSuccessfulEditOrder(true);
        setErrorEditOrder();

        // console.log(datas);

        setTimeout(() => {
          handleGetAllOrders();
        }, 500);

        setTimeout(() => {
          // Fetching the NEW PRODUCTS DATA AFTER UPDATE

          // setSelectedImageToEdit(null);
          // setResetNameValueEdit("");
          // setResetPriceValueEdit("");
          // handleGetAllOrders();

          // to let it stay up and not close the window in case he wants to check and edit more in same item
          setOrderSelectedToEdit();
          setSuccessfulEditOrder(false);
        }, 3000);
      }
    } catch (error) {
      // console.log("error");

      // console.log(error);

      if (error.message) {
        // console.log("inside");
        setErrorEditOrder(error.message);
      }

      if (error.response.data.error) {
        setErrorEditOrder(error.response.data.error);
      }
    }
  };

  return (
    <div>
      {/* <div>Orders here</div> */}
      <div className={styles.MangingDataComponent}>
        <button
          style={{
            border:
              ShowAllOrdersTab === true ? "1px solid rgb(0, 0, 255, 0.99)" : "",
          }}
          onClick={(e) => {
            handleGetAllOrders(e);
            handleGetAllImages();
            setShowAllOrdersTab(true);
            setShowEditOrderCom(false);
            setShowDeleteOrderCom(false);
            setShowArchivedOrders(false);
            setShowOpenedOrders(false);
          }}
        >
          All Orders
        </button>
        {/* <button>Add Order</button> */}
        <button
          style={{
            border:
              showEditOrderCom === true ? "1px solid rgb(0, 0, 255, 0.99)" : "",
          }}
          onClick={(e) => {
            handleGetAllOrders(e);
            handleGetAllImages();

            setShowEditOrderCom(true);
            setShowAllOrdersTab(false);
            setShowDeleteOrderCom(false);
          }}
        >
          Edit Order
        </button>
        <button
          style={{
            border:
              showDeleteOrderCom === true
                ? "1px solid rgb(0, 0, 255, 0.99)"
                : "",
          }}
          onClick={(e) => {
            handleGetAllOrders(e);
            handleGetAllImages();

            setShowDeleteOrderCom(true);
            setShowEditOrderCom(false);
            setShowAllOrdersTab(false);
          }}
        >
          Delete Order
        </button>
      </div>

      {ShowAllOrdersTab && (
        <div className={styles.Mangingorders2ndBtn}>
          <button
            style={{
              border:
                ShowOpenedOrders === true
                  ? "1px solid rgb(0, 0, 255, 0.99)"
                  : "",
            }}
            onClick={() => {
              if (ShowOpenedOrders) {
                setShowOpenedOrders(false);
                handleGetAllOrders();
              }
              if (!ShowOpenedOrders) {
                handleGetAllOrders();

                setTimeout(() => {
                  setShowArchivedOrders(false);
                  setShowOpenedOrders(true);
                  setShowAllOrdersTab(true);
                }, 500);
              }
            }}
          >
            Show Only Opened Orders
          </button>

          <button
            style={{
              border:
                ShowArchivedOrders === true
                  ? "1px solid rgb(0, 0, 255, 0.99)"
                  : "",
            }}
            onClick={() => {
              if (ShowArchivedOrders) {
                setShowArchivedOrders(false);
                handleGetAllOrders();
              }
              if (!ShowArchivedOrders) {
                handleGetAllOrders();

                setTimeout(() => {
                  setShowOpenedOrders(false);
                  setShowArchivedOrders(true);
                  setShowAllOrdersTab(true);
                }, 500);
                // setShowOpenedOrders(false);
                // setShowArchivedOrders(true);
                // setShowAllOrdersTab(true);
                // setTimeout(() => {
                //   handleGetAllOrders();
                // }, 300);
              }
            }}
          >
            Show Only Completed/Archived Orders
          </button>
        </div>
      )}

      {AllOrders && ShowAllOrdersTab && (
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
          <div className={styles.ALLITEMSSearchForOrder}>
            <input placeholder="order number"></input>
            <button>Search</button>
          </div>
          <div>
            {" "}
            {SuccessfulMarkedComplete && (
              <div className={styles.successRequest}>Marked</div>
            )}
            {ErrorMarkOrderComplete && (
              <div className={styles.error}>{ErrorMarkOrderComplete}</div>
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
                value={ItemAddNoteValue}
                onChange={(e) => {
                  setItemAddNoteValue(e.target.value);
                }}
              />

              <button type="submit" onClick={HandleAddNoteToOrder}>
                Submit
              </button>

              {/* {successfulEditOrder && (
                  <div className={styles.successRequest}>
                    Product was Edited successfully
                  </div>
                )}
                {ErrorEditOrder && (
                  <div className={styles.error}>{ErrorEditOrder}</div>
                )} */}
            </div>
          )}
        </div>
      )}

      {AllOrders && ShowAllOrdersTab && (
        <div className={styles.AllOrders}>
          {AllOrders &&
            AllOrders.filter(function (order) {
              if (ShowOpenedOrders) {
                return order.opened === true;
              }
              if (ShowArchivedOrders) {
                return order.opened === false;
              }
            }).map((order, i) => {
              return (
                <div key={order._id} className={styles.AllOrderStyle}>
                  <h4 className={styles.AllOrderStyleTitle}>Order:</h4>
                  <div>Order number: {order.ordernumber}</div>
                  <div>Order price: {order.orderTotalValue}$</div>
                  <div>Order address: {order.userData.address}</div>
                  <div>
                    Order state:{" "}
                    {order.opened === true ? "opened" : "completed"}
                  </div>
                  <div>Order user: {order.userData.email}</div>
                  <div>User mobile number: {order.userData.mobilenumber}</div>
                  <div>Order note: {order.note ? order.note : "empty"}</div>
                  <button
                    onClick={() => {
                      if (ShowSpecficOrderProduct) {
                        setShowSpecficOrderProduct(false);
                        setShowSpecficOrderProductHideShow(false);
                      }
                      if (!ShowSpecficOrderProduct) {
                        setShowSpecficOrderProduct(true);
                        setShowSpecficOrderProductHideShow(true);
                      }
                    }}
                  >
                    {ShowSpecficOrderProductHideShow === false ? (
                      <div>Show order products</div>
                    ) : (
                      <div>Hide order products</div>
                    )}
                  </button>

                  <div className={styles.AllOrderStyleExtrabtn}>
                    <button
                      onClick={() => {
                        // console.log(order);

                        // setOrderMarkedCompleted(order);

                        handleOrderMarkCompleted(order);
                      }}
                    >
                      {ShowOpenedOrders
                        ? "Mark complete"
                        : ShowArchivedOrders
                        ? "Mark in-complete"
                        : ""}
                    </button>
                    <button
                      onClick={() => {
                        if (ShowAddNoteInput) {
                          setShowAddNoteInput(false);
                          setAddNoteSelectedItem();
                        }
                        if (!ShowAddNoteInput) {
                          setShowAddNoteInput(true);
                          setAddNoteSelectedItem(order);
                        }
                      }}
                    >
                      Add Note
                    </button>
                  </div>

                  {ShowSpecficOrderProduct &&
                    AllItemsImages &&
                    order.orderProducts.map((item, i) => {
                      return (
                        <div key={i} className={styles.OrderFullDetails}>
                          <Image
                            alt="image"
                            className={styles.productItemImage}
                            // src={require(`./../../../public/Items/${item.name}.png`)}
                            // src={`https://next-ecommerce-s3.s3.eu-north-1.amazonaws.com/items/${item.name}.png`}
                            src={AllItemsImages[item.name]}
                            // className="iconImage"
                            width={300}
                            height={300}
                          ></Image>
                          <div>Name: {item.name}</div>
                          <div>Price: {item.price}$</div>
                          <div>Quantity: {item.price}</div>
                        </div>
                      );
                    })}
                </div>
              );
            })}
        </div>
      )}

      {showEditOrderCom && AllOrders && (
        <div className={styles.EditOrderComponent}>
          <h3> Select a Product: </h3>

          <select
            type="item"
            name="item"
            value={OrderSelectedToEdit ? OrderSelectedToEdit.ordernumber : ""}
            onChange={(e) => {
              // console.log(e.target.value);
              setOrderSelectedToEdit(
                AllOrders.find((order) => order.ordernumber === +e.target.value)
              );
              // itemSearch = AllOrders.find((order) => order.ordernumber === +value);
            }}
          >
            <option type="item" name="item"></option>
            {AllOrders.map((order, index) => {
              return (
                <option
                  key={index}
                  type="item"
                  name="item"
                  value={order.ordernumber}
                >
                  {order.ordernumber}
                </option>
              );
            })}
          </select>

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
              <option>Show First 25</option>
              <option>Show 25 to 50</option>
              <option>Show 50 to 75</option>
              <option>Show 75 to 100</option>
              <option>Show 100 to 125</option>
            </select>
            <div className={styles.ALLITEMSSearchForOrder}>
              <input placeholder="order number"></input>
              <button>Search</button>
            </div>
          </div>
        </div>
      )}

      {showEditOrderCom && AllOrders && OrderSelectedToEdit && (
        <div className={styles.Editcomponent}>
          <div>
            <div className={styles.ALLITEMS}></div>

            <div className={styles.AllOrderStyle}>
              <h4 className={styles.AllOrderStyleTitle}>Order:</h4>

              <div>Order number: {OrderSelectedToEdit.ordernumber}</div>
              <div>Order price: {OrderSelectedToEdit.orderTotalValue}$</div>
              <div>Order address: {OrderSelectedToEdit.userData.address}</div>
              <div>
                Order state:{" "}
                {OrderSelectedToEdit.opened === true ? "opened" : "completed"}
              </div>
              <div>Order user: {OrderSelectedToEdit.userData.email}</div>
              <div>
                User mobile number: {OrderSelectedToEdit.userData.mobilenumber}
                {/* 01234567890{" "} */}
              </div>

              <button
                onClick={() => {
                  if (ShowSpecficOrderProduct) {
                    setShowSpecficOrderProductinEdit(false);
                  }
                  if (!ShowSpecficOrderProduct) {
                    setShowSpecficOrderProductinEdit(true);
                  }
                }}
              >
                Show order products
              </button>
              <div className={styles.AllOrderStyleExtrabtn}>
                {/* <button>Archive order</button> */}
                <button>Edit Note</button>
              </div>

              {ShowSpecficOrderProductinEdit &&
                AllItemsImages &&
                OrderSelectedToEdit.orderProducts.map((item, i) => {
                  return (
                    <div key={i} className={styles.OrderFullDetails}>
                      <Image
                        alt="image"
                        className={styles.productItemImage}
                        // src={require(`./../../../public/Items/${item.name}.png`)}
                        // src={`https://next-ecommerce-s3.s3.eu-north-1.amazonaws.com/items/${item.name}.png`}
                        src={AllItemsImages[item.name]}
                        // className="iconImage"
                        width={300}
                        height={300}
                      ></Image>
                      <div>Name: {item.name}</div>
                      <div>Price: {item.price}$</div>
                      <div>Quantity: {item.price}</div>
                    </div>
                  );
                })}
            </div>
          </div>
          <form className={styles.EditFormComponent} onSubmit={HandleOrderEdit}>
            <h4 className={styles.EditFormComponentTitle}>
              Fill the field you want to edit:
            </h4>
            <div>
              <label for="address">Edit Address:</label>
              <input
                type="text"
                // id="roll"
                name="address"
                minlength="1"
                maxlength="30"
                // value={ResetNameValueEdit}
                // onChange={(e) => {
                //   setResetNameValueEdit(e.target.value);
                // }}
              />
            </div>
            <div>
              <label for="price">Edit Price:</label>
              <input
                type="number"
                name="price"
                minlength="1"
                maxlength="6"
                // value={ResetPriceValueEdit}
                // onChange={(e) => {
                //   setResetPriceValueEdit(e.target.value);
                // }}
              />
            </div>
            <div>
              <label for="mobile">Edit User Mobile:</label>
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

            <button type="submit">Submit</button>

            {successfulEditOrder && (
              <div className={styles.successRequest}>
                Product was Edited successfully
              </div>
            )}
            {ErrorEditOrder && (
              <div className={styles.error}>{ErrorEditOrder}</div>
            )}
          </form>
        </div>
      )}

      {showDeleteOrderCom && AllOrders && (
        <div className={styles.EditOrderComponent}>
          <h3> Select a Product: </h3>

          <select
            type="item"
            name="item"
            value={
              OrderSelectedToDelete ? OrderSelectedToDelete.ordernumber : ""
            }
            onChange={(e) => {
              // console.log(e.target.value);
              setOrderSelectedToDelete(
                AllOrders.find((order) => order.ordernumber === +e.target.value)
              );
              // itemSearch = AllOrders.find((order) => order.ordernumber === +value);
            }}
          >
            <option type="item" name="item"></option>
            {AllOrders.map((order, index) => {
              return (
                <option
                  key={index}
                  type="item"
                  name="item"
                  value={order.ordernumber}
                >
                  {order.ordernumber}
                </option>
              );
            })}
          </select>

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
              <option>Show First 25</option>
              <option>Show 25 to 50</option>
              <option>Show 50 to 75</option>
              <option>Show 75 to 100</option>
              <option>Show 100 to 125</option>
            </select>
            <div className={styles.ALLITEMSSearchForOrder}>
              <input placeholder="order number"></input>
              <button>Search</button>
            </div>
          </div>
        </div>
      )}

      {showDeleteOrderCom && AllOrders && OrderSelectedToDelete && (
        <div className={styles.DeleteComponent}>
          <div>
            <div className={styles.ALLITEMS}></div>

            <div className={styles.AllOrderStyle}>
              <h4 className={styles.AllOrderStyleTitle}>Order:</h4>

              <div>Order number: {OrderSelectedToDelete.ordernumber}</div>
              <div>Order price: {OrderSelectedToDelete.orderTotalValue}$</div>
              <div>Order address: {OrderSelectedToDelete.userData.address}</div>
              <div>
                Order state:{" "}
                {OrderSelectedToDelete.opened === true ? "opened" : "completed"}
              </div>
              <div>Order user: {OrderSelectedToDelete.userData.email}</div>
              <div>
                User mobile number:{" "}
                {OrderSelectedToDelete.userData.mobilenumber}
                {/* 01234567890{" "} */}
              </div>

              <button
                onClick={() => {
                  if (ShowSpecficOrderProductinDelete) {
                    setShowSpecficOrderProductinDelete(false);
                  }
                  if (!ShowSpecficOrderProductinDelete) {
                    setShowSpecficOrderProductinDelete(true);
                  }
                }}
              >
                Show order products
              </button>
              <div className={styles.AllOrderStyleExtrabtn}>
                {/* <button>Archive order</button> */}
              </div>

              {ShowSpecficOrderProductinDelete &&
                AllItemsImages &&
                OrderSelectedToDelete.orderProducts.map((item, i) => {
                  return (
                    <div key={i} className={styles.OrderFullDetails}>
                      <Image
                        alt="image"
                        className={styles.productItemImage}
                        // src={require(`./../../../public/Items/${item.name}.png`)}
                        // src={`https://next-ecommerce-s3.s3.eu-north-1.amazonaws.com/items/${item.name}.png`}
                        src={AllItemsImages[item.name]}
                        // className="iconImage"
                        width={300}
                        height={300}
                      ></Image>
                      <div>Name: {item.name}</div>
                      <div>Price: {item.price}$</div>
                      <div>Quantity: {item.price}</div>
                    </div>
                  );
                })}
            </div>
          </div>

          <button
            onClick={() => {
              setCheckBeforeDelete(true);
            }}
          >
            Delete Product
          </button>

          {CheckBeforeDelete && (
            <div className={styles.checkingBeforeDelete}>
              <div>Are you sure you want to delete Product ?</div>
              <div>
                <button onClick={HandleDeleteOrder}>Yes</button>
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

          {SuccessfulDeleteOrder && (
            <div className={styles.successRequest}>
              Order was Deleted successfully
            </div>
          )}
          {ErrorDeleteOrder && (
            <div className={styles.error}>{ErrorDeleteOrder}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default MangeOrders;
