"use client";

import Image from "next/image";
// import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import Footer from "../../../comps/footer";
// import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MyBag, { CartItemAlertNumberOfitems } from "../../../comps/myBag";
import { useItemsCartContext } from "../../../hooks/useItemsCartContext";
import axios from "axios";
import { useAuthContext } from "../../../hooks/useAuthContext";

const BlogPage = () => {
  // the items context
  const { items, dispatch } = useItemsCartContext();

  // the order number
  const [orderNumber, setOrderNumber] = useState();

  // check if user is logged in
  const { user, dispatchUser } = useAuthContext();

  // console.log(user);

  // showing successful after stripe payment is done error check
  const [errorToPlaceOrder, setErrorToPlaceOrder] = useState();

  // showing successful after stripe payment is done error check
  const [showError, setshowError] = useState(false);

  // this is stripe checkout or normal place and receive order state
  const [stripeCheckoutState, setStripeCheckoutState] = useState(false);

  // this is stripe a succesful stripe checkout or failure check state
  const [stripeCheckoutSuccess, setStripeCheckoutSuccess] = useState(false);

  // // showing successful after stripe payment is done error check
  // const [errorToPlaceOrder, setErrorToPlaceOrder] = useState();

  // the function of fetching the order number

  // useEffect(() => {
  //   // if (user) {

  //   // }

  //   console.log(user);

  if (user) {
    const fetchOrderNumber = async (e) => {
      const submission = {
        token: user.token,
      };

      try {
        const datas = await axios.post(
          "https://teabrand.onrender.com/api/orders/getuserorders",
          { submission },
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
            // headers: {
            //   "Access-Control-Allow-Origin": "*",
            //   "Content-Type": "application/json",
            // },
          }
        );

        if (datas.status === 200) {
          // console.log(datas.data);

          if (datas.data.orders) {
            let n = datas.data.orders;

            let p = n.slice(n.length - 1);
            // console.log(p);

            // console.log(p[0].ordernumber);

            setOrderNumber(p[0].ordernumber);

            // console.log(p[0].ordernumber);

            handleSendEmailToUserConfirmOrder(p[0].ordernumber);
          }
        }
      } catch (error) {
        setErrorToPlaceOrder("error");
        setshowError(true);

        // if there is an error response
        // console.log(error);

        // if there is an error response
        // console.log(error.response.data);

        // setErrorSignup(error.response.data.error);
      }
    };

    fetchOrderNumber();
  }
  // }, []);

  useEffect(() => {
    const localStoragependingstate = JSON.parse(
      localStorage.getItem("pendingstatev")
    );
    // console.log(localStoragependingstate);

    let OrderDetailss;

    const finilizestripepay = async (OrderDetails) => {
      setStripeCheckoutState(true);
      // if (!user) {
      //   setErrorToPlaceOrder("error");
      // }

      // fetch request
      try {
        const datas = await axios.post(
          "https://teabrand.onrender.com/api/orders/cartorder",
          { OrderDetails },
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
            // headers: {
            //   "Access-Control-Allow-Origin": "*",
            //   "Content-Type": "application/json",
            // },
          }
        );

        if ((datas.data.status = 200)) {
          // console.log(datas);

          // setSuccessfulOrder(true);

          // console.log(datas);

          localStorage.setItem(
            "pendingstatev",
            JSON.stringify({ OrderDetails, pendingstate: false })
          );

          let emptyarray = [];

          localStorage.setItem("cartItems", JSON.stringify(emptyarray));

          setStripeCheckoutSuccess(true);

          dispatch({ type: "SET_ITEM", payload: emptyarray });

          // hide button to avoid duplicate orders
          // setHideOrderButton(true);

          // console.log("order placed and redirecting");
          // setTimeout(() => {
          //   // navTo("/");
          //   // redirecting to order was succesfully placed thank you
          //   // redirect to homepage option.
          // }, 500);
        }
      } catch (error) {
        setErrorToPlaceOrder("error");

        // if there is an error response
        // console.log(error);

        // if there is an error response
        // console.log(error.response.data);

        // setErrorSignup(error.response.data.error);
      }
    };

    if (localStoragependingstate.pendingstate === true) {
      OrderDetailss = localStoragependingstate.OrderDetails;
      finilizestripepay(OrderDetailss);
    }
  }, [items]);

  // For Email Sending after succesful order placed, mail send to user's email

  const handleSendEmailToUserConfirmOrder = async (ordernumber) => {
    // e.preventDefault();

    // const name = e.target.name.value;
    // const email = e.target.email.value;
    // const password = e.target.password.value;

    // console.log(name);
    // console.log(email);
    // console.log(password);

    // console.log(e.target.email.value);

    const submission = {
      ordernumber: ordernumber,
    };

    // fetch request
    try {
      const datas = await axios.post(
        "https://teabrand.onrender.com/api/mail/emailorderplaced",
        {
          submission,
        },
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
        // setSuccessfulResetEmail(true);
        // setErrorSignup("");
        // setErrorLogin("");
        // setErrorResetEmailSend("");
        // setTimeout(() => {
        //   setSuccessfulResetEmail(false);
        //   // setShowLogin(true);
        //   // setShowSignup(false);
        //   // setSuccessfulSignup(false);
        // }, 5000);
      }
    } catch (error) {
      // if there is an error response
      // console.log("error");
      // console.log(error.message);
      // if (error.message) {
      //   setErrorResetEmailSend(error.message);
      // }
      // if (error.response.data) {
      //   {
      //     setErrorResetEmailSend(error.response.data.error);
      //   }
      // }
      // if there is an error response
      // setErrorResetEmailSend(error.response.data.error);
    }
  };

  return (
    <div className={styles.resetPasswordComponent}>
      <section className={styles.sectionfourSectionComponent}>
        <div className={styles.sectionfourTitle}>
          {orderNumber && !stripeCheckoutSuccess && !stripeCheckoutSuccess && (
            <div>
              <h2>THANK YOU!</h2>
              <div className={styles.sectionfourTitleh3}>
                <h3>
                  We received your order and will start preparing your package
                  right away.
                </h3>
                <h3>You will receive a confirmation email in a moment.</h3>
                <h3>
                  If you didn't find the mail in your inbox, please check spam
                  file.
                </h3>
              </div>

              {orderNumber && !stripeCheckoutSuccess && (
                <h2 className={styles.ordernumber}>
                  Order Number - {1000 + orderNumber}{" "}
                </h2>
              )}

              {orderNumber && stripeCheckoutSuccess && (
                <h2 className={styles.ordernumber}>
                  Order Number - {1000 + orderNumber}{" "}
                </h2>
              )}
            </div>
          )}

          {stripeCheckoutState && stripeCheckoutSuccess && (
            <div>
              <h2>THANK YOU!</h2>
              <div className={styles.sectionfourTitleh3}>
                <h3>
                  We received your order and will start preparing your package
                  right away.
                </h3>
                <h3>You will receive a confirmation email in a moment.</h3>
                <h3>
                  If you didn't find the mail in your inbox, please check spam
                  file.
                </h3>
              </div>

              {orderNumber && !stripeCheckoutSuccess && (
                <h2 className={styles.ordernumber}>
                  Order Number - {1000 + orderNumber}{" "}
                </h2>
              )}

              {orderNumber && stripeCheckoutSuccess && (
                <h2 className={styles.ordernumber}>
                  Order Number - {1000 + orderNumber}{" "}
                </h2>
              )}
            </div>
          )}

          {showError && !stripeCheckoutState && !stripeCheckoutSuccess && (
            <div>
              <h2 className={styles.sectionfourTitleh2}>Error!</h2>
              <h3 className={styles.sectionfourTitleh3}>
                <Link href="/">Redirect to HomePage</Link>
                <Link href="/order">Redirect to Cart</Link>
              </h3>
            </div>
          )}

          {/* {errorToPlaceOrder && (
            <div>
              <div> {errorToPlaceOrder}</div>
              <Link href="/">Redirect to HomePage</Link>
              <Link href="/order">Redirect to Cart</Link>
            </div>
          )} */}
        </div>
      </section>

      {/* {false && <CartItemAlertNumberOfitems values={1} />} */}

      <Footer />
    </div>
  );
};

export default BlogPage;
