"use client";

import Image from "next/image";
import styles from "./page.module.css";
import OrderItems from "../../../comps/order";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../../comps/footer";
import { useRouter } from "next/navigation";
import { useItemsCartContext } from "../../../hooks/useItemsCartContext";

const OrderPage = () => {
  const { push } = useRouter();
  const { items, dispatch } = useItemsCartContext();

  if (typeof window !== "undefined") {
    let emptyarray = [];
    if (!localStorage.getItem("cartItems")) {
      localStorage.setItem("cartItems", JSON.stringify(emptyarray));
    }
  }

  // to refresh state
  const [changeValue, setChangeValue] = useState(0); // for adding items to the cart

  // showing successfull placing order when recieved order
  const [successfulOrder, setSuccessfulOrder] = useState(false);

  // showing successfull placing order when recieved order
  const [errorToPlaceOrder, setErrorToPlaceOrder] = useState(false);

  // showing edit information notification
  const [ShowEditInfoNotication, setShowEditInfoNotication] = useState();

  // fetching the user data if he still logged in
  const [userData, setUserData] = useState();

  // console.log(userData);

  // importing user data from authContext
  const { user, dispatchUser } = useAuthContext();

  // console.log(user);

  // reading the data from the local storage if it's there and  logged in check status and updating
  const [loggedinset, setLoggedinset] = useState();

  // order detail value
  const [OrderDetailsValue, setOrderDetailsValue] = useState();

  // console.log(OrderDetailsValue);

  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localStorageUser = JSON.parse(localStorage.getItem("user"));
      if (localStorageUser) {
        setLoggedinset(localStorageUser);
        setErrorToPlaceOrder("");
        // console.log("logged in");
      }
      if (!localStorageUser) {
        // console.log("not logged in");
      }
    }
  }, [user]);

  // total value set
  // const [totalvalue, setTotalvalue] = useState();

  // console.log(totalvalue);

  // getting the total value price for stripe mangement

  // useEffect(() => {
  //   const localStorageUser = localStorage.getItem("itemsvalue");

  //   setTotalvalue(localStorageUser);
  // }, []);

  // trying to fetch all user data from the DB
  // user email, address, mobile number, name
  // use effect ..

  // https://pharma-online-api-production.up.railway.app/api/users/profile

  useEffect(() => {
    if (user) {
      const fetchUserData = async () => {
        // const res = await axios.post(
        //   "https://pharma-online-api-production.up.railway.app/api/users/profile",
        //   { message: "hello" },
        //   {
        //     withCredentials: true,
        //     headers: {
        //       "Access-Control-Allow-Credentials": "true",
        //       "Access-Control-Allow-Origin": "*",
        //       "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
        //       "Access-Control-Allow-Headers":
        //         "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
        //     },
        //   }
        // );

        const formData = new FormData();
        formData.append("jwt", user.token);

        try {
          const response = await axios.post(
            "https://teabrand.onrender.com/api/users/profile",
            formData,
            {
              withCredentials: true,
              headers: {
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods":
                  "GET,OPTIONS,PATCH,DELETE,POST,PUT",
                "Access-Control-Allow-Headers":
                  "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
              },
            }
          );

          // console.log(response);

          setUserData(response.data.user);
        } catch (error) {
          // console.log(error);
        }
      };
      fetchUserData();
    }
  }, [user]);

  // useEffect to control pending status or not pending, can be it more complicated and encrypted
  // so the stripe request won't happen won't that encrypted state is present otherwise the code won't follow
  // so it can be used like a webhook to check
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Perform localStorage action
      // const item = localStorage.getItem("key");

      let pendingstate = false;
      localStorage.setItem("pendingstatev", JSON.stringify(pendingstate));
    }

    if (typeof window !== "undefined") {
      const orderItemsv = JSON.parse(localStorage.getItem("cartItems"));

      let orderTotalvalueArray = orderItemsv.map(
        (item) => item.price * item.numberofitem
      );
      let orderPriceTotalvalue = orderTotalvalueArray.reduce(
        (a, b) => a + b,
        0
      );
      // console.log(orderPriceTotalvalue); // priceTotal

      // items as they are , that will be the order and when fetching it, will display it as it is with number of items.
      // total price down there and we got it too.

      const OrderDetails = {
        orderProducts: [...orderItemsv],
        orderTotalValue: orderPriceTotalvalue,
      };

      // console.log(OrderDetails);

      setOrderDetailsValue(OrderDetails);
    }

    // pending state to check if the user is clicking on stripe and paying or joking the system
  }, []);

  // the order items array

  // ///////////////////////////////////////////
  // orders items

  // const orderItemsv = JSON.parse(localStorage.getItem("cartItems"));

  // let orderTotalvalueArray = orderItemsv.map(
  //   (item) => item.price * item.numberofitem
  // );
  // let orderPriceTotalvalue = orderTotalvalueArray.reduce((a, b) => a + b, 0);
  // // console.log(orderPriceTotalvalue); // priceTotal

  // // items as they are , that will be the order and when fetching it, will display it as it is with number of items.
  // // total price down there and we got it too.

  // const OrderDetails = {
  //   orderProducts: [...orderItemsv],
  //   orderTotalValue: orderPriceTotalvalue,
  // };

  // let OrderDetails;

  // console.log(orderItemsv);

  // orders price total

  // console.log(OrderDetails);

  // console.log(user);

  // setTotalValue(orderTotalvalue);

  // placing the order to the backend , pay when recived order
  const HandlePlaceOrder = async () => {
    // fetch request and if ok the cookie will be removed

    if (!user) {
      setErrorToPlaceOrder(true);
    }

    const orderItemsv = JSON.parse(localStorage.getItem("cartItems"));

    let orderTotalvalueArray = orderItemsv.map(
      (item) => item.price * item.numberofitem
    );
    let orderPriceTotalvalue = orderTotalvalueArray.reduce((a, b) => a + b, 0);
    // console.log(orderPriceTotalvalue); // priceTotal

    // items as they are , that will be the order and when fetching it, will display it as it is with number of items.
    // total price down there and we got it too.

    const submission = {
      OrderDetails: {
        orderProducts: [...orderItemsv],
        orderTotalValue: orderPriceTotalvalue,
      },

      token: user.token,
    };

    // fetch request
    try {
      const datas = await axios.post(
        "https://teabrand.onrender.com/api/orders/cartorder",
        { submission },
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

      if ((datas.data.status = 200)) {
        setSuccessfulOrder(true);

        // localStorage.removeItem("cartItems");

        let emptyarray = [];

        // if (!localStorage.getItem("cartItems")) {
        localStorage.setItem("cartItems", JSON.stringify(emptyarray));
        // }

        dispatch({ type: "SET_ITEM", payload: emptyarray });

        // hide button to avoid duplicate orders
        // setHideOrderButton(true);

        // console.log("order placed and redirecting");
        // setTimeout(() => {
        //   // navTo("/");
        //   // redirecting to order was succesfully placed thank you
        //   // redirect to homepage option.
        // }, 500);

        // console.log("redirecting");

        setTimeout(() => {
          // navTo("/");
          push("https://tea-brand-ecommerce-fe-nextjs.vercel.app/successorder");

          // redirecting to order was succesfully placed thank you
          // redirect to homepage option.
        }, 1500);
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

  // const createCheckoutSession = async () => {
  //   axios
  //     .post("api/checkout_sessions")
  //     .then((res) => {
  //       console.log(res);
  //       window.location = res.data.sessionURL;
  //     })
  //     .catch((err) => console.log(err));
  // };

  const HandleGetPaymentLink = async () => {
    // fetch request and if ok the cookie will be removed

    if (!user) {
      setErrorToPlaceOrder(true);
    }

    // fetch request
    try {
      const datas = await axios.post(
        "api/checkout_sessions",
        // { OrderDetails },
        { OrderDetailsValue },

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

      if ((datas.data.status = 200)) {
        // console.log(datas.data);

        let pendingstate = true;
        localStorage.setItem(
          "pendingstatev",
          // JSON.stringify({ OrderDetails, pendingstate })
          JSON.stringify({ OrderDetailsValue, pendingstate })
        );

        // console.log(datas.data.sessionURL);

        window.location = datas.data.sessionURL;

        // setTimeout(() => {
        //   // navTo("/");
        //   push("/successorder");

        //   // redirecting to order was succesfully placed thank you
        //   // redirect to homepage option.
        // }, 2000);
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

  return (
    <div className={styles.componentAll}>
      <div className={styles.component}>
        {userData && (
          <div className={styles.DeliveryDetailsComponent}>
            <div className={styles.DeliveryDetailsAddress}>
              <div className={styles.DeliveryDetailsAddressTitle}>
                Delivery Details
              </div>
              <div className={styles.FontWeightLess}>Shipping address</div>
              <div className={styles.FontWeightLess}>{userData.address}</div>
            </div>
            <div className={styles.DeliveryDetailsAddress}>
              <div> Billing address</div>
              <div> Same as shipping address</div>
              <div> {userData.email}</div>
            </div>
            <div className={styles.DeliveryDetailsAddress}>
              <div>Contact information</div>
              <div>Email:{userData.email}</div>
            </div>
            <div className={styles.DeliveryDetailsAddressEditInfoBtn}>
              <button
                onClick={() => {
                  if (!ShowEditInfoNotication) {
                    setShowEditInfoNotication(
                      "To change your information,  Please Click on the User Icon at top-right"
                    );
                  }
                  if (ShowEditInfoNotication) {
                    setShowEditInfoNotication("");
                  }
                }}
              >
                EDIT DETAILS
              </button>

              {ShowEditInfoNotication && <div>{ShowEditInfoNotication}</div>}
            </div>
          </div>
        )}

        {!userData && (
          <div className={styles.componentSignup}>
            <div>
              Please Log In or Sign Up to proceed with the purchase by clicking
              on the User Icon at top-right
            </div>
            {/* <div>Please Log In or Sign Up to proceed with the purchase</div> */}
          </div>
        )}

        <div className={styles.Items}>
          <OrderItems></OrderItems>
        </div>
        <div className={styles.PaymentComponent}>
          <div className={styles.PaymentComponentEach}>
            <button
              className={styles.PaymentComponentButton}
              onClick={() => {
                if (!user) {
                  setErrorToPlaceOrder(true);
                }

                // if (user) {
                //   setErrorToPlaceOrder(false);
                //   checkout({
                //     lineItems: [
                //       {
                //         price: "price_1N7q60JKiXv7Edddnr7Nq1Zy",

                //         quantity: 1,
                //       },
                //     ],
                //   });
                // }

                if (user) {
                  setErrorToPlaceOrder(false);

                  // HandleGetPaymentLink();

                  HandleGetPaymentLink();

                  // checkout({
                  //   lineItems: [
                  //     {
                  //       price: "price_1N7q60JKiXv7Edddnr7Nq1Zy",

                  //       quantity: 1,
                  //     },
                  //   ],
                  // successUrl: `https://tea-brand-ecommerce-fe-nextjs.vercel.app/successorder`,
                  // cancelUrl: `https://tea-brand-ecommerce-fe-nextjs.vercel.app/failedpaymentorder`,
                  // lineItems: [
                  //   // {
                  //   //   price_data: {
                  //   //     unit_amount: 100,
                  //   //     currency: "usd",
                  //   //     product: "prod_NtdMGkkhFwijXE",
                  //   //   },
                  //   //   quantity: 1,
                  //   // },
                  //   {
                  //     price_data: {
                  //       currency: "eur",
                  //       product_data: {
                  //         name: "Accomodation",
                  //       },
                  //       unit_amount: 20000,
                  //     },
                  //     quantity: 1,
                  //   },
                  // ],
                  // });
                }
              }}
            >
              <div className={styles.PaymentComponentButtonInsideComponent}>
                <div className={styles.PaymentComponentButtonInside}>
                  <h2>Pay</h2>
                  <h2>Now</h2>
                </div>
                <Image
                  alt="image"
                  src={require(`./../../../public/Homepage/paymentoptions3.jpg`)}
                ></Image>
              </div>
            </button>

            {showLoading && (
              <div className={styles.PaymentComponentPartonev2}>
                Loading, redirecting now
              </div>
            )}

            <div className={styles.PaymentComponentPartone}>
              <div>Powered By Stripe Payments</div>
            </div>
          </div>

          <div className={styles.PaymentComponentEachSecond}>
            <button
              onClick={() => {
                if (user) {
                  HandlePlaceOrder();
                  setErrorToPlaceOrder(false);
                }
                if (!user) {
                  setErrorToPlaceOrder(true);
                }
              }}
              className={styles.PaymentComponentOrderButton}
            >
              <h2> Or Order</h2>
              <div className={styles.PaymentComponentOrderButtonv2}>
                <p> And Pay when received </p>
                <p> with CASH </p>
              </div>
            </button>
          </div>

          {successfulOrder && (
            <div className={styles.successfulordernotifcation}>
              Order was placed successfully, redirecting now
            </div>
          )}

          {errorToPlaceOrder && (
            <div className={styles.Errornotification}>
              Please Log In or Sign Up First
            </div>
          )}
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default OrderPage;
