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
  // importing user data from authContext
  const { user, dispatchUser } = useAuthContext();

  // the items context
  const { items, dispatch } = useItemsCartContext();

  // the order number
  const [orderNumber, setOrderNumber] = useState();

  // the function of fetching the order number

  useEffect(() => {
    if (user) {
      const fetchOrderNumber = async (e) => {
        const formData = new FormData();
        formData.append("jwt", user.token);

        try {
          const datas = await axios.post(
            "https://teabrand.onrender.com/api/orders/getuserorders",
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
              // headers: {
              //   "Access-Control-Allow-Origin": "*",
              //   "Content-Type": "application/json",
              // },
            }
          );

          if (datas.status === 200) {
            // console.log(datas.data);

            let n = datas.data.orders;

            let p = n.slice(n.length - 1);
            // console.log(p);

            // console.log(p[0].ordernumber);

            setOrderNumber(p[0].ordernumber);
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

      fetchOrderNumber();
    }
  }, [items]);

  return (
    <div className={styles.resetPasswordComponent}>
      <section className={styles.sectionfourSectionComponent}>
        <div className={styles.sectionfourTitle}>
          <h2>Payment Error!</h2>
          <div className={styles.sectionfourTitleh3}>
            <h3>Sorry Payment was not succesful please try again</h3>
            {/* <h3>You will receive a confirmation email in a moment.</h3> */}
          </div>

          <Link
            href="https://tea-brand-ecommerce-fe-nextjs.vercel.app/order"
            className={styles.Linkredirect}
          >
            Redirect to Order Page
          </Link>
        </div>
      </section>

      {false && <CartItemAlertNumberOfitems values={1} />}

      <Footer />
    </div>
  );
};

export default BlogPage;
