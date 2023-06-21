"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../../../comps/footer";
// import { useAuthContext } from "../hooks/useAuthContext";

const ResetPassword = ({ params }) => {
  // get the token code from the url
  // console.log(params.id);

  // Successful Signup
  const [successfulChangepass, setSuccessfulChangepass] = useState(false);

  // Error Sending Reset Email
  const [errorChangepass, setErrorChangepass] = useState();

  // Error Sending Reset Email Message
  const [errorMessage, setErrorMessage] = useState();

  // get the token from the url
  const [tokenIs, setTokenIs] = useState();

  // handle change user password
  const handleChangeUserPassword = async (e) => {
    e.preventDefault();

    // console.log(params.id);

    // const name = e.target.name.value;
    // const email = e.target.email.value;
    // const password = e.target.password.value;

    // console.log(name);
    // console.log(email);
    // console.log(password);

    const newpassword = e.target.newpassword.value;

    if (newpassword !== e.target.password.value) {
      setErrorChangepass("error not matching passwords");
      return;
    }

    const submission = {
      newpassword: newpassword,
      token: params.id,
    };

    // "https://teabrand.onrender.com/api/mail/",

    // fetch request
    try {
      const datas = await axios.post(
        "https://teabrand.onrender.com/api/users/resetpassword/",
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
        setSuccessfulChangepass(true);
        setErrorMessage("");

        setTimeout(() => {
          // setShowLogin(true);
          // setShowSignup(false);
          setSuccessfulChangepass(false);
        }, 5000);
      }
    } catch (error) {
      // console.log(error);
      // console.log("error");

      // if there is an error response
      // console.log(error);

      // if there is an error response
      // console.log(error.response.data);

      if (error.message === "Network Error") {
        setErrorChangepass("Error please request another mail");
        return;
      }

      if (error.message === "Request failed with status code 400") {
        setErrorChangepass("Error please request another mail");
        return;
      }

      setErrorChangepass(error.message);
    }
  };

  return (
    <div className={styles.resetPasswordComponent}>
      <div>
        <form
          onSubmit={handleChangeUserPassword}
          // action="/send-data-here"
          // method="post"
          className={styles.ResetPasswordForm}
        >
          <h2>Reset Password</h2>
          <div className={styles.forminputs}>
            <label for="password">New password:</label>
            <input
              type="password"
              // id="name"
              name="password"
              required
              minlength="5"
              maxlength="25"
            />
          </div>
          <div className={styles.forminputs}>
            <label for="newpassword">New password:</label>
            <input
              type="password"
              // id="name"
              name="newpassword"
              required
              minlength="5"
              maxlength="25"
            />
          </div>
          <button type="submit">Submit</button>

          {successfulChangepass && (
            <div className={styles.successMessage}>
              <p>Password was changed successfully</p>
            </div>
          )}

          {errorChangepass && (
            <div className={styles.ErrorMessage}>
              <p>{errorChangepass}</p>
            </div>
          )}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ResetPassword;
