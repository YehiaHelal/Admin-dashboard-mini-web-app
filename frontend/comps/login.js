import Link from "next/link";
import Image from "next/image";
import styles from "./login.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

const Login = () => {
  // dispatchUser to the authContext
  const { user, dispatchUser } = useAuthContext();

  // console.log(user);

  // Set All Items Images Fetch
  const [AllItemsImages, setAllItemsImages] = useState();

  // Handle user image base 64 image recieve
  const [Base64Image, setBase64Image] = useState();

  // show profile / logout , or show login / signup
  const [showProfileAndLogout, setshowProfileAndLogout] = useState(false);

  // show Login
  const [showLogin, setShowLogin] = useState(true);

  // show Reset Password window
  const [showResetPassword, setShowResetPassword] = useState(false);

  // show Signup
  const [showSignup, setShowSignup] = useState(false);

  // Error Login
  const [ErrorLogin, setErrorLogin] = useState(false);

  // Error Signup
  const [ErrorSignup, setErrorSignup] = useState(false);

  // Error Sending Reset Email
  const [errorResetEmailSend, setErrorResetEmailSend] = useState(false);

  // setSuccessfulDataChange
  const [SuccessfulDataChange, setSuccessfulDataChange] = useState();

  // setErrorDataChange
  const [ErrorDataChange, setErrorDataChange] = useState();

  // Error Editing information
  const [errorInfoChange, setErrorInfoChange] = useState(false);

  // Error Sending Contact
  const [errorContactSend, setErrorContactSend] = useState(false);

  // Successful Login
  const [successfulLogin, setSuccessfulLogin] = useState(false);

  // Successful Signup
  const [successfulSignup, setSuccessfulSignup] = useState(false);

  // Successful Email sent
  const [successfulResetEmail, setSuccessfulResetEmail] = useState(false);

  // Successful Edit information
  const [successfulinfoChange, setSuccessfulinfoChange] = useState(false);

  // Successful Contact send
  const [successfulSendContact, setSuccessfulSendContact] = useState(false);

  // Handle Image upload and sending to the backend
  const [selectedImage, setSelectedImage] = useState(null);

  // Image was added successfully, from the backend confirms
  const [addedImageSuccessfully, setAddedImageSuccessfully] = useState(false);

  // Image Error from the backend if there is
  const [errorAddingImage, setErrorAddingImage] = useState();

  // to reset the input image placeholder
  const [fullNameImage, setFullNameImage] = useState("");

  // Show Default Profile window GetPastOrders/Editinfo information window
  const [showDefaultProfilewindow, SetShowDefaultProfilewindow] =
    useState(false);

  // Show Edit information window
  const [showEditInformationwindow, SetshowEditInformationwindow] =
    useState(false);

  // Show Edit information window dropdown
  const [
    showEditInformationwindowDropdown,
    SetShowEditInformationwindowDropdown,
  ] = useState(false);

  // Show Edit information window password dropdown
  const [
    showEditInformationwindowPasswordDropdown,
    SetShowEditInformationwindowPasswordDropdown,
  ] = useState(false);

  // Show Contact Us window
  const [showContactUswindow, SetShowContactUswindow] = useState(false);

  // Show Get past orders window

  const [showGetPastOrders, SetShowGetPastOrders] = useState(false);

  // showing each order when button clicked

  const [showGetPastOrdersEachOrder, SetShowGetPastOrdersEachOrder] =
    useState(false);

  // set order selected

  const [orderSelectedToShow, SetOrderSelectedToShow] = useState();

  // console.log(orderSelectedToShow);

  // show name and address and user data

  const [userdataNameAddress, SetUserdataNameAddress] = useState();

  // console.log(userdataNameAddress);

  // console.log(userdataNameAddress);

  // show user past orders

  const [userPastOrders, SetUserPastOrders] = useState();

  // console.log(userPastOrders);

  // // set to either show the default profile image or the user uploaded image if there is one
  // const [defaultImageShow, SetDefaultImageShow] = useState(true);

  // set to either show the default profile image or the user uploaded image if there is one
  const [ErrorFetchingImage, SetErrorFetchingImage] = useState(false);

  // set token and user value
  const [tokenValue, SetTokenValue] = useState();

  console.log(tokenValue);

  // to check if there is a token to log in user automatically
  useEffect(() => {
    // checking if there is token in the local storage

    // const localStoragechecking = JSON.parse(localStorage.getItem("user"));

    // console.log(localStoragechecking);

    // if (!localStoragechecking) {
    //   console.log("outside and  empty  !");

    //   let emptyarray = [];

    //   localStorage.setItem("user", JSON.stringify(emptyarray));
    //   dispatchUser({ type: "LOGIN", payload: emptyarray });
    // }

    // if (localStorage.getItem("user") !== null) {
    //   setLogin(true);
    // } else {
    //   setLogin(false);
    // }

    // console.log(typeof localStoragechecking === {});
    // console.log(Object.keys(localStoragechecking).length !== 0);

    // console.log(JSON.parse(localStorage.getItem("user")) === undefined);
    // console.log(
    //   Object.keys(JSON.parse(localStorage.getItem("user"))).length === 0
    // );

    // localStorage.getItem("user")

    // if (localStoragechecking.length > 1) {
    if (
      JSON.parse(localStorage.getItem("user")) &&
      Object.keys(JSON.parse(localStorage.getItem("user"))).length !== 0

      // localStoragechecking !== undefined
      //  &&
      // Object.keys(localStoragechecking).length > 1
    ) {
      // console.log("there is user and local storage data");
      SetTokenValue(JSON.parse(localStorage.getItem("user")));

      dispatchUser({
        type: "LOGIN",
        payload: JSON.parse(localStorage.getItem("user")),
      });

      // console.log(user);

      // handleGetUserData();

      setTimeout(() => {
        setshowProfileAndLogout(true);
        setShowLogin(false);
        setShowSignup(false);
      }, 500);

      setTimeout(() => {
        handleGetUserData();
        handleFetchingImagesFromBackend();
      }, 1000);
    } else {
      // setLogin(false);

      // console.log("there is empty local storage or none");

      let emptyarray = [];

      localStorage.setItem("user", JSON.stringify(emptyarray));
      dispatchUser({ type: "LOGIN", payload: emptyarray });
      SetTokenValue();
    }
    // if there is, will compare it with the authcontext email and if same will fetch user data if not will change authcontext user data

    // if (localStoragechecking) {
    //   console.log(localStoragechecking);
    // }

    // if (user) {
    //   console.log(user);
    // }

    // if (!user) {
    //   dispatchUser({ type: "LOGIN", payload: localStoragechecking });

    //   console.log(user);
    // }

    // // if (typeof localStoragechecking) {
    // //   console.log("there");
    // // }

    // if (Object.keys(localStoragechecking).length !== 0) {
    //   console.log("not zero");
    // }
  }, []);

  useEffect(() => {
    if (showProfileAndLogout) {
      handleGetUserData();
      handleFetchingImagesFromBackend();
    }
  }, [showProfileAndLogout]);

  // if (
  //   localStoragechecking.length > 0 &&
  //   localStoragechecking.user === user.user
  // ) {
  //   console.log("same");

  // setshowProfileAndLogout(true);
  // setShowLogin(false);
  // setShowSignup(false);

  // setTimeout(() => {
  //   handleGetUserData();
  // }, 1500);
  // }

  // if (user) {
  //   // const user = JSON.parse(localStorage.getItem("user"));
  //   // dispatchUser({ type: "LOGIN", payload: user });
  //   setshowProfileAndLogout(true);
  //   setShowLogin(false);
  //   setShowSignup(false);

  //   setTimeout(() => {
  //     handleGetUserData();
  //   }, 1500);
  // }

  // refreshing the image

  // useEffect(() => {
  //   handleGetUserData();

  //   // refreshing the image
  // }, []);

  // useEffect(() => {
  //   if (user) {
  //     if (
  //       `https://next-ecommerce-s3.s3.eu-north-1.amazonaws.com/${
  //         user.user.split("@")[0]
  //       }.png?${Date.now()}`
  //     ) {
  //       console.log("image there");
  //       SetDefaultImageShow(false);
  //     }
  //   }

  //   if (ErrorFetchingImage) {
  //   }
  // }, [defaultImageShow]);

  // sending image function
  // const handleSendingImage = async (e) => {
  //   // e.prevent Default();

  //   console.log("inside");

  //   // console.log(user.user);

  //   // const submission = {
  //   //   email: e.target.email.value,
  //   //   password: e.target.password.value,
  //   //   name: e.target.name.value,
  //   //   address: e.target.address.value,
  //   // };

  //   const formData = new FormData();
  //   formData.append("photo", selectedImage);

  //   formData.append("jwt", user.token);

  //   try {
  //     const datas = await axios.post(
  //       "https://teabrand.onrender.com/api/users/imageupdate/",

  //       formData,

  //       // {
  //       //   headers: {
  //       //     "Content-Type": "multipart/form-data",
  //       //   },
  //       // }
  //       {
  //         withCredentials: true,
  //         headers: {
  //           "Access-Control-Allow-Credentials": "true",
  //           "Access-Control-Allow-Origin": "*",
  //           "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  //           "Access-Control-Allow-Headers":
  //             "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  //         },
  //         // headers: {
  //         //   "Access-Control-Allow-Origin": "*",
  //         //   "Content-Type": "application/json",
  //         // },
  //       }
  //     );

  //     console.log(datas);

  //     if (datas.status === 200) {
  //       setAddedImageSuccessfully(true);

  //       console.log(datas);

  //       setTimeout(() => {
  //         setSelectedImage(null);
  //         setFullNameImage("");
  //       }, 500);

  //       setTimeout(() => {
  //         setAddedImageSuccessfully(false);
  //       }, 3000);
  //     }
  //   } catch (error) {
  //     // console.log("error");
  //     console.log(error);

  //     // setErrorAddingImage(error.response.data.error);

  //     setErrorAddingImage("error");

  //     setTimeout(() => {
  //       setErrorAddingImage("");
  //     }, 3000);
  //   }
  // };

  // fetching user image from backend
  // sending image function v2 route
  const handleFetchingImagesFromBackend = async (e) => {
    // e.prevent Default();

    // console.log("here");

    // console.log("inside");

    // console.log(user.user);

    // const submission = {
    //   email: e.target.email.value,
    //   password: e.target.password.value,
    //   name: e.target.name.value,
    //   address: e.target.address.value,
    // };

    const formData = new FormData();
    // formData.append("photo", selectedImage);

    if (
      !JSON.parse(localStorage.getItem("user"))

      // localStoragechecking !== undefined
      //  &&
      // Object.keys(localStoragechecking).length > 1
    ) {
      return;
    }
    if (
      Object.keys(JSON.parse(localStorage.getItem("user"))).length === 0

      // localStoragechecking !== undefined
      //  &&
      // Object.keys(localStoragechecking).length > 1
    ) {
      return;
    }

    // console.log("passed");

    const tokenUser = JSON.parse(localStorage.getItem("user"));

    formData.append("jwt", tokenUser.token);

    // uploadprofileimgtos3
    try {
      const datas = await axios.post(
        "https://teabrand.onrender.com/api/users/imagesendingtofe/",

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
            // "Content-Type": "application/json",
            // "Content-Type": "multipart/form-data",
          },
          // headers: {
          //   "Access-Control-Allow-Origin": "*",
          // "Content-Type": "application/json",
          // },
        }
      );

      // console.log(datas);

      // console.log("hey");

      if (datas.status === 200) {
        // setAddedImageSuccessfully(true);

        // console.log(datas);

        setBase64Image(datas.data.images);

        // setTimeout(() => {
        //   setSelectedImage(null);
        //   setFullNameImage("");
        // }, 500);

        // setTimeout(() => {
        //   SetErrorFetchingImage(false);
        // }, 1000);

        // setTimeout(() => {
        //   setAddedImageSuccessfully(false);
        //   SetErrorFetchingImage(false);
        // }, 2000);
      }
    } catch (error) {
      // console.log(error);
      // setErrorAddingImage("error");
      // setTimeout(() => {
      //   setErrorAddingImage("");
      // }, 3000);
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

  // sending image function v2 route

  const handleSendingImageToS3Bucket = async (e) => {
    // e.prevent Default();

    // console.log("inside");

    // console.log(user.user);

    // const submission = {
    //   email: e.target.email.value,
    //   password: e.target.password.value,
    //   name: e.target.name.value,
    //   address: e.target.address.value,
    // };

    const formData = new FormData();
    formData.append("photo", selectedImage);

    formData.append("jwt", user.token);

    // uploadprofileimgtos3
    try {
      const datas = await axios.post(
        "https://teabrand.onrender.com/api/users/imageupdate/",

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
        setAddedImageSuccessfully(true);
        handleFetchingImagesFromBackend();

        // console.log(datas);

        setTimeout(() => {
          setSelectedImage(null);
          setFullNameImage("");
        }, 500);

        setTimeout(() => {
          SetErrorFetchingImage(false);
        }, 1000);

        setTimeout(() => {
          setAddedImageSuccessfully(false);
          SetErrorFetchingImage(false);
        }, 2000);
      }
    } catch (error) {
      // console.log(error);

      setErrorAddingImage("error");

      setTimeout(() => {
        setErrorAddingImage("");
      }, 3000);
    }
  };

  // get user name and address, get user data function
  const handleGetUserData = async (e) => {
    // e.preventDefault();

    // const name = e.target.name.value;
    // const email = e.target.email.value;
    // const password = e.target.password.value;

    // console.log(name);
    // console.log(email);
    // console.log(password);

    const formData = new FormData();

    if (user) {
      formData.append("jwt", user.token);
    }

    // if (tokenValue) {
    //   // formData.append("jwt", user.token);
    //   formData.append("jwt", tokenValue.token);
    // }

    // fetch request
    try {
      const datas = await axios.post(
        "https://teabrand.onrender.com/api/users/getndata/",
        formData,
        {
          withCredentials: true,
          headers: {
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
            "Access-Control-Allow-Headers":
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
            // "Content-Type": "application/json",
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

      // console.log(datas.data);

      // check response if ok
      // console.log(datas.status === 200);

      if (datas.status === 200) {
        // console.log("data");
        SetUserdataNameAddress(datas.data);

        // setSuccessfulSignup(true);
        // setErrorSignup("");
        // setErrorLogin("");

        // setTimeout(() => {
        //   // setShowLogin(true);
        //   // setShowSignup(false);
        //   // setSuccessfulSignup(false);
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

  // get user past orders
  const handleGetUserPastOrders = async (e) => {
    // e.preventDefault();

    // const name = e.target.name.value;
    // const email = e.target.email.value;
    // const password = e.target.password.value;

    // console.log(name);
    // console.log(email);
    // console.log(password);

    // console.log(user.token);

    const formData = new FormData();
    formData.append("jwt", user.token);

    // if (tokenValue) {
    //   // formData.append("jwt", user.token);
    //   formData.append("jwt", tokenValue.token);
    // }

    // fetch request
    try {
      const datas = await axios.post(
        "https://teabrand.onrender.com/api/orders/getuserorders",
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

      // console.log(datas.data);

      // check response if ok
      // console.log(datas.status === 200);

      if (datas.status === 200) {
        // console.log("data");
        SetUserPastOrders(datas.data.orders);

        // setSuccessfulSignup(true);
        // setErrorSignup("");
        // setErrorLogin("");

        setTimeout(() => {
          // setShowLogin(true);
          // setShowSignup(false);
          // setSuccessfulSignup(false);
        }, 2000);
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

  // Forgot password - handle sending Reset Email to user

  const handleSendEmailToUserReset = async (e) => {
    e.preventDefault();

    // const name = e.target.name.value;
    // const email = e.target.email.value;
    // const password = e.target.password.value;

    // console.log(name);
    // console.log(email);
    // console.log(password);

    // console.log(e.target.email.value);

    const submission = {
      email: e.target.email.value,
    };

    // fetch request
    try {
      const datas = await axios.post(
        "https://teabrand.onrender.com/api/mail/resetpasswordemail",
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
        setSuccessfulResetEmail(true);
        setErrorSignup("");
        setErrorLogin("");
        setErrorResetEmailSend("");

        setTimeout(() => {
          setSuccessfulResetEmail(false);

          // setShowLogin(true);
          // setShowSignup(false);
          // setSuccessfulSignup(false);
        }, 5000);
      }
    } catch (error) {
      // if there is an error response

      // console.log("error");

      // console.log(error.message);

      if (error.message) {
        setErrorResetEmailSend(error.message);
      }

      if (error.response.data) {
        {
          setErrorResetEmailSend(error.response.data.error);
        }
      }

      // if there is an error response

      // setErrorResetEmailSend(error.response.data.error);
    }
  };

  // handle change user password
  const handleChangeUserPassword = async (e) => {
    e.preventDefault();

    // const name = e.target.name.value;
    // const email = e.target.email.value;
    // const password = e.target.password.value;

    // console.log(name);
    // console.log(email);
    // console.log(password);

    // if (tokenValue) {
    //   // formData.append("jwt", user.token);
    //   formData.append("jwt", tokenValue.token);
    // }

    const submission = {
      password: e.target.password.value,
      newpassword: e.target.newpassword.value,
      token: user.token,
    };

    // "https://teabrand.onrender.com/api/mail/",

    // fetch request
    try {
      const datas = await axios.post(
        "https://teabrand.onrender.com/api/users/changepassword/",
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
        // setSuccessfulSignup(true);
        setErrorSignup("");
        setErrorResetEmailSend("");
        setErrorLogin("");
        setErrorDataChange("");
        setSuccessfulDataChange("Update was successful");

        setTimeout(() => {
          // setShowLogin(true);
          // setShowSignup(false);
          // setSuccessfulSignup(false);
          setSuccessfulDataChange("");
        }, 4000);
      }
    } catch (error) {
      // console.log("error");

      // // if there is an error response
      // console.log(error);

      // // if there is an error response
      // console.log(error.response.data);
      setSuccessfulDataChange("");
      setErrorDataChange(error.response.data.error);
    }
  };

  // Signup Function
  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    // const name = e.target.name.value;
    // const email = e.target.email.value;
    // const password = e.target.password.value;

    // console.log(name);
    // console.log(email);
    // console.log(password);

    const submission = {
      email: e.target.email.value,
      password: e.target.password.value,
      name: e.target.name.value,
      address: e.target.address.value,
    };

    // fetch request
    try {
      const datas = await axios.post(
        "https://teabrand.onrender.com/api/users/signup/",
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
        setSuccessfulSignup(true);
        setErrorSignup("");
        setErrorLogin("");
        setErrorResetEmailSend("");

        setTimeout(() => {
          setShowLogin(true);
          setShowSignup(false);
          setSuccessfulSignup(false);
        }, 2000);
      }
    } catch (error) {
      // console.log("error");

      // if there is an error response
      // console.log(error);

      // if there is an error response
      // console.log(error.response.data);

      setErrorSignup(error.response.data.error);
    }
  };

  // Edit information Function
  const handleEditinformationSubmit = async (e) => {
    e.preventDefault();

    // const name = e.target.name.value;
    // const email = e.target.email.value;
    // const password = e.target.password.value;

    // console.log(name);
    // console.log(email);
    // console.log(password);

    const submission = {
      name: e.target.name.value,
      address: e.target.address.value,
      token: user.token,
    };

    // fetch request
    try {
      const datas = await axios.post(
        "https://teabrand.onrender.com/api/users/updateinfo/",
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
            // "Content-Type": "application/json",
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
        setSuccessfulinfoChange(true);
        setErrorInfoChange("");
        setErrorLogin("");
        setErrorResetEmailSend("");

        setTimeout(() => {
          // setShowLogin(true);
          // setShowSignup(false);
          setSuccessfulinfoChange(false);
          handleGetUserData();
        }, 2000);
      }
    } catch (error) {
      // console.log("error");

      // if there is an error response
      // console.log(error);

      // if there is an error response
      // console.log(error.response.data);

      setErrorInfoChange(error.response.data.error);
    }
  };

  // Contact sending function

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    // const name = e.target.name.value;
    // const email = e.target.email.value;
    // const password = e.target.password.value;

    // console.log(name);
    // console.log(email);
    // console.log(password);

    // console.log(user.user);
    // console.log(e.target.contact.value);

    const submission = {
      email: user.user,
      contact: e.target.contact.value,
      token: user.token,
    };

    // fetch request
    try {
      const datas = await axios.post(
        "https://teabrand.onrender.com/api/users/contactsend/",
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
            // "Content-Type": "application/json",
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
        setSuccessfulSendContact(true);
        setErrorContactSend("");
        setErrorLogin("");
        setErrorResetEmailSend("");

        setTimeout(() => {
          // setShowLogin(true);
          // setShowSignup(false);
          setSuccessfulSendContact(false);
        }, 2000);
      }
    } catch (error) {
      // console.log("error");

      // if there is an error response
      // console.log(error);

      // if there is an error response
      // console.log(error.response.data);

      setErrorContactSend(error.response.data.error);
    }
  };

  // Login Function
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log(email);
    // console.log(password);

    const submission = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    // fetch request
    try {
      const datas = await axios.post(
        "https://teabrand.onrender.com/api/users/login/",
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
            // "Content-Type": "application/json",
          },
          // headers: {
          //   "Access-Control-Allow-Origin": "*",
          // "Content-Type": "application/json",
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

        // after the login will set the cookie , and on every restrict request will get the cookie and add it to the request
        // so it's still secured http secure with cookie.
        // will read the cookie normally and send it as a normal file

        // Cookies.set("jwt", datas.data.token, {
        //   httpOnly: true, // true by default
        // });

        setSuccessfulLogin(true);
        setErrorSignup("");
        setErrorLogin("");
        setErrorResetEmailSend("");

        // console.log("we are in");

        // console.log(datas.data);

        // localStorage.removeItem("user");

        localStorage.setItem("user", JSON.stringify(datas.data));

        dispatchUser({ type: "LOGIN", payload: datas.data });

        // setTimeout(() => {
        //   handleGetUserData();
        // }, 1000);

        setTimeout(() => {
          setshowProfileAndLogout(true);
          setShowLogin(false);
          setShowSignup(false);
          setSuccessfulLogin(false);
        }, 2000);
      }
    } catch (error) {
      // console.log("error");

      // if there is an error response
      // console.log(error);

      // if there is an error response
      // console.log(error.response.data);

      setErrorLogin(error.response.data.error);
    }
  };

  // Logout function
  const LogoutFunctionHandler = async () => {
    // fetch request and if ok the cookie will be removed
    const datas = await axios.post(
      "https://teabrand.onrender.com/api/users/logout",
      {},
      {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          "Access-Control-Allow-Headers":
            "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
        },
      }
    );

    // then remove user from local storage and redirect , which will set the context to null automatically
    dispatchUser({ type: "LOGOUT" });

    localStorage.removeItem("user");

    SetUserdataNameAddress();

    // let emptyarray = [];

    localStorage.setItem("user", JSON.stringify([]));

    // dispatch to context just to re-renders

    // console.log("logged out");
  };

  // to check if the token is still valid and if not log out the user ..
  // useEffect(() => {
  //   if (user) {
  //     const checkToken = async () => {
  //       try {
  //         const datas = await axios.post(
  //           "https://teabrand.onrender.com/api/users/checktoken",
  //           {
  //             message: "checkme",
  //           },
  //           {
  //             withCredentials: true,
  //             headers: {
  //               "Access-Control-Allow-Credentials": "true",
  //               "Access-Control-Allow-Origin": "*",
  //               "Access-Control-Allow-Methods":
  //                 "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  //               "Access-Control-Allow-Headers":
  //                 "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  //             },
  //           }
  //         );
  //         console.log("checked");
  //         return;
  //       } catch (error) {
  //         // then remove user from local storage and   which will set the context to null automatically
  //         localStorage.removeItem("user");

  //         // dispatch to context just to re-renders
  //         dispatchUser({ type: "LOGOUT" });

  //         return;
  //       }
  //     };
  //     checkToken();
  //   }
  // }, [user]);

  return (
    <div className={styles.component}>
      <div className={styles.loginButtons}>
        {showProfileAndLogout && (
          <div>
            {" "}
            <button>Profile</button>
            <button
              onClick={() => {
                setTimeout(() => {
                  setShowLogin(true);
                  setShowSignup(false);
                  setshowProfileAndLogout(false);
                  LogoutFunctionHandler();
                  SetshowEditInformationwindow(false);
                  SetShowContactUswindow(false);
                  SetShowGetPastOrders(false);
                }, 500);
              }}
            >
              Log out
            </button>
          </div>
        )}

        {!showProfileAndLogout && (
          <div>
            {" "}
            <button
              onClick={() => {
                setShowLogin(true);
                setShowSignup(false);
                setShowResetPassword(false);
                setErrorResetEmailSend("");
              }}
            >
              Log In
            </button>
            <button
              onClick={() => {
                setShowSignup(true);
                setShowLogin(false);
                setShowResetPassword(false);
                setErrorResetEmailSend("");
              }}
            >
              Sign Up
            </button>{" "}
          </div>
        )}
      </div>

      {showLogin && (
        <div>
          <form
            onSubmit={handleLoginSubmit}
            // action="/send-data-here"
            // method="post"
            className={styles.SignupLoginForm}
          >
            <div className={styles.FormEmail}>
              <label for="email">Email:</label>
              <input
                type="text"
                name="email"
                required
                minlength="5"
                maxlength="50"
              />
            </div>
            <div className={styles.FormEmail}>
              <label for="password">Password:</label>
              <input
                type="password"
                name="password"
                required
                minlength="5"
                maxlength="50"
              />
            </div>
            <button type="submit">Login</button>
          </form>

          <div className={styles.FormEmailResetButton}>
            <button
              onClick={() => {
                setShowResetPassword(true);
                setShowLogin(false);
              }}
            >
              Or Forget Password
            </button>
          </div>

          {ErrorLogin && <p className={styles.error}>{ErrorLogin}</p>}

          {successfulLogin && (
            <p className={styles.successRequest}>Login was successful</p>
          )}
        </div>
      )}

      {showResetPassword && (
        <div>
          <form
            onSubmit={handleSendEmailToUserReset}
            // action="/send-data-here"
            // method="post"
            className={styles.SignupLoginForm}
          >
            <div className={styles.FormEmail}>
              <label for="email">Email:</label>
              <input
                type="text"
                name="email"
                required
                minlength="5"
                maxlength="50"
              />
            </div>

            <button type="submit">Send Reset Email</button>
          </form>

          {/* <button
            onClick={() => {
              setShowResetPassword(true);
            }}
          >
            Or Forget Password
          </button> */}

          {errorResetEmailSend && (
            <p className={styles.error}>{errorResetEmailSend}</p>
          )}

          {successfulResetEmail && (
            <div>
              <p className={styles.successRequest}>
                Email was successfully sent
              </p>
              <p className={styles.successRequest}>
                Please check your inbox and spam for email
              </p>
            </div>
          )}
        </div>
      )}

      {showProfileAndLogout &&
        !showEditInformationwindow &&
        !showGetPastOrders &&
        !showContactUswindow && (
          <div className={styles.ProfileComponent}>
            {/* <Image>Image of the character</Image> */}
            {userdataNameAddress && (
              <div>Welcome {userdataNameAddress.name}</div>
            )}
            {!userdataNameAddress && <div>Welcome </div>}

            <div className={styles.profileImage}>
              {Base64Image && (
                <Image
                  width={100}
                  height={100}
                  alt="image"
                  id="image-true"
                  className={styles.ImageConfirmUploadImage}
                  src={Base64Image}
                  // src={URL.createObjectURL(Base64Image)}
                ></Image>
              )}

              {!Base64Image && (
                <Image
                  width={100}
                  height={100}
                  alt="image"
                  id="image-true"
                  className={styles.ImageConfirmUploadImage}
                  src={require(`./../public/users/images/default.jpeg`)}
                ></Image>
              )}

              {/* <Image
                width={100}
                height={100}
                alt="image"
                // loader={imageLoader}
                id="image-true"
                // onerror={() => {
                //   SetImageProfileLoadedState(true);
                // }}

                onError={(e) => SetErrorFetchingImage(true)}
                // onError={() => setSrc('/assets/image-error.png')}
                // onerror="this.onerror=null; this.style.display = 'none'"
                // src={require(`./../public/users/images/${user.user}.jpeg`)
                // onLoad={() => {
                //   SetImageProfileLoadedState(true);
                // }}
                // src={`https://next-ecommerce-s3.s3.eu-north-1.amazonaws.com/${
                //   user.user.split("@")[0]
                // }.png?${Date.now()}`}
                // src={!ImageProfileLoadedState ? defaultImage : trueUserImage}
                src={
                  !ErrorFetchingImage
                    ? `https://next-ecommerce-s3.s3.eu-north-1.amazonaws.com/${
                        user.user.split("@")[0]
                      }.png?${Date.now()}`
                    : require(`./../public/users/images/default.jpeg`)

                  // defaultImageShow
                  //   ? require(`./../public/users/images/default.jpeg`)
                  //   : `https://next-ecommerce-s3.s3.eu-north-1.amazonaws.com/${
                  //       user.user.split("@")[0]
                  //     }.png?${Date.now()}`
                }
                // src={defaultImage}
              ></Image> */}

              {/* {true && (
                <Image
                  width={100}
                  height={100}
                  alt="not found"
                  src={require(`./../public/users/images/default.jpeg`)}
                ></Image>
              )} */}
            </div>

            <div className={styles.uploadImagecomponent}>
              <div className={styles.uploadImagecomponentTitle}>
                Change profile picture:
              </div>
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
                  alt="image"
                  src={URL.createObjectURL(selectedImage)}
                ></Image>
              )}
              {/* {selectedImage && (
                <button onClick={handleSendingImage}>
                  Confirm Upload Image
                </button>
              )} */}
              {selectedImage && (
                <button onClick={handleSendingImageToS3Bucket}>
                  Confirm Upload Image
                </button>
              )}

              {addedImageSuccessfully && (
                <div className={styles.successRequest}>
                  Image was added successfully
                </div>
              )}
              {errorAddingImage && (
                <div className={styles.error}>
                  Error only images are allowed!
                </div>
              )}
            </div>

            <button
              onClick={() => {
                SetShowGetPastOrders(true);
                handleGetUserPastOrders();
                handleGetAllImages();
              }}
            >
              View my past orders
            </button>

            <button
              onClick={() => {
                SetshowEditInformationwindow(true);
                handleGetUserData();
              }}
            >
              View/Edit my Information
            </button>
            <button
              onClick={() => {
                SetShowContactUswindow(true);
              }}
            >
              Contact Us
            </button>

            {/* <div className={styles.uploadImagecomponent}>
              <div>Change profile picture:</div>
              <input
                type="file"
                name="photo"
                value={fullNameImage}
                onChange={(event) => {
                  console.log(event.target.files[0]);
                  setSelectedImage(event.target.files[0]);
                }}
              ></input>
              {selectedImage && (
                <Image
                  width={100}
                  height={100}
                  alt="not found"
                  src={URL.createObjectURL(selectedImage)}
                ></Image>
              )}
              {selectedImage && (
                <button onClick={handleSendingImage}>
                  Confirm Upload Image
                </button>
              )}
              {addedImageSuccessfully && (
                <div className={styles.successRequest}>
                  Image was added successfully
                </div>
              )}
              {errorAddingImage && (
                <div className={styles.error}>
                  Error only images are allowed!
                </div>
              )}
            </div> */}
          </div>
        )}

      {showProfileAndLogout && showEditInformationwindow && (
        <div className={styles.contactUswindow}>
          <div>
            <div className={styles.contactUswindowBackbutton}>
              <div>My information</div>
              <button
                onClick={() => {
                  SetshowEditInformationwindow(false);
                }}
              >
                back
              </button>
            </div>
            {userdataNameAddress && (
              <div>
                <div>Email: {userdataNameAddress.email}</div>
                <div>Name: {userdataNameAddress.name}</div>
                <div>Address: {userdataNameAddress.address}</div>
              </div>
            )}

            {!userdataNameAddress && (
              <div>
                <div>Email: </div>
                <div>Name: </div>
                <div>Address: </div>
              </div>
            )}

            <div className={styles.changeinformationwindowButtons}>
              <button
                onClick={() => {
                  if (showEditInformationwindowPasswordDropdown) {
                    SetShowEditInformationwindowPasswordDropdown(false);
                  }
                  if (!showEditInformationwindowPasswordDropdown) {
                    SetShowEditInformationwindowPasswordDropdown(true);
                    SetShowEditInformationwindowDropdown(false);
                  }
                }}
              >
                Change password
              </button>
              <button
                onClick={() => {
                  if (showEditInformationwindowDropdown) {
                    SetShowEditInformationwindowDropdown(false);
                  }
                  if (!showEditInformationwindowDropdown) {
                    SetShowEditInformationwindowDropdown(true);
                    SetShowEditInformationwindowPasswordDropdown(false);
                  }
                }}
              >
                Change Name or Address
              </button>
            </div>
            {showProfileAndLogout &&
              showEditInformationwindow &&
              showEditInformationwindowPasswordDropdown && (
                <div>
                  <form
                    onSubmit={handleChangeUserPassword}
                    // action="/send-data-here"
                    // method="post"
                    className={styles.SignupLoginForm}
                  >
                    <div className={styles.FormEmailChangePassword}>
                      <label for="password">Current password:</label>
                      <input
                        type="text"
                        // id="name"
                        name="password"
                        required
                        minlength="5"
                        maxlength="50"
                      />
                    </div>
                    <div className={styles.FormEmailChangePassword}>
                      <label for="newpassword">New password:</label>
                      <input
                        type="text"
                        // id="name"
                        name="newpassword"
                        required
                        minlength="5"
                        maxlength="50"
                      />
                    </div>
                    <button type="submit">Submit</button>
                  </form>

                  {SuccessfulDataChange && (
                    <p className={styles.successRequest}>
                      {SuccessfulDataChange}
                    </p>
                  )}

                  {ErrorDataChange && (
                    <p className={styles.error}>{ErrorDataChange}</p>
                  )}
                </div>
              )}
          </div>

          {showProfileAndLogout &&
            showEditInformationwindow &&
            showEditInformationwindowDropdown && (
              <div>
                <div>Edit information:</div>
                <form
                  onSubmit={handleEditinformationSubmit}
                  // action="/send-data-here"
                  // method="post"
                  className={styles.SignupLoginForm}
                >
                  <div className={styles.FormEmail}>
                    <label for="name">Name:</label>
                    <input
                      className={styles.FormEmailInput}
                      type="text"
                      // id="name"
                      name="name"
                      required
                      minlength="5"
                      maxlength="50"
                    />
                  </div>
                  <div className={styles.FormEmail}>
                    <label for="address">Address:</label>
                    <input
                      className={styles.FormEmailInput}
                      type="text"
                      // id="name"
                      name="address"
                      required
                      minlength="5"
                      maxlength="50"
                    />
                  </div>
                  <button type="submit">Submit</button>
                </form>

                {errorInfoChange && (
                  <p className={styles.error}>{ErrorSignup}</p>
                )}

                {successfulinfoChange && (
                  <p className={styles.successRequest}>
                    Information was changed successfully
                  </p>
                )}
              </div>
            )}
        </div>
      )}

      {showGetPastOrders && showGetPastOrders && (
        <div className={styles.contactUswindow}>
          <div className={styles.contactUswindowBackbutton}>
            <h4 className={styles.orderpaneltitle}>All orders:</h4>
            <button
              onClick={() => {
                SetShowGetPastOrders(false);
                SetOrderSelectedToShow();
                SetShowGetPastOrdersEachOrder(false);
              }}
            >
              back
            </button>
          </div>
          {!userPastOrders && <div>No order was found</div>}
          {userPastOrders &&
            !showGetPastOrdersEachOrder &&
            userPastOrders.map((order, i) => {
              return (
                <div key={order._id}>
                  <button
                    className={styles.getMoreOrdersButton}
                    onClick={() => {
                      SetOrderSelectedToShow(order);
                      SetShowGetPastOrdersEachOrder(true);
                    }}
                  >
                    View order {i + 1}
                  </button>
                </div>
              );
            })}
          {showGetPastOrdersEachOrder &&
            orderSelectedToShow &&
            AllItemsImages && (
              <div className={styles.ItemStylesComponentOrdersComponent}>
                {orderSelectedToShow.orderProducts.map((item) => {
                  return (
                    <div
                      key={item._id}
                      className={styles.ItemStylesComponentOrders}
                    >
                      <Link href={"/collections/" + item._id}>
                        <Image
                          alt="image"
                          // src={require(`./../../frontend/public/Items/${item.name}.png`)}
                          // src={`https://next-ecommerce-s3.s3.eu-north-1.amazonaws.com/items/${item.name}.png`}
                          src={AllItemsImages[item.name]}
                          width={300}
                          height={300}
                          // className="iconImage"
                        ></Image>
                      </Link>

                      <div>
                        <div> {item.name} /50 gram</div>
                      </div>

                      <div>
                        <div className={styles.ItemStylesComponentOrdersPrice}>
                          <div>quantity: </div>
                          <div>{item.numberofitem}</div>
                        </div>
                        <div className={styles.ItemStylesComponentOrdersPrice}>
                          <div>price: </div>
                          <div>${item.price}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div>
                  <div className={styles.ItemStylesComponentTotalPrice}>
                    Order total price: {orderSelectedToShow.orderTotalValue}
                  </div>
                </div>
              </div>
            )}
        </div>
      )}

      {showContactUswindow && showContactUswindow && (
        <div className={styles.contactUswindow}>
          <div className={styles.contactUswindowBackbuttonv2}>
            <button
              onClick={() => {
                SetShowContactUswindow(false);
              }}
            >
              back
            </button>
          </div>

          <div>
            <form
              onSubmit={handleContactSubmit}
              className={styles.ContactUsForm}
            >
              <label for="email">Contact Us:</label>
              <textarea
                placeholder="Please type your message here"
                required
                type="text"
                minlength="5"
                maxlength="400"
                name="contact"
              ></textarea>

              <button type="submit">Submit</button>
            </form>

            {errorContactSend && (
              <p className={styles.error}>{errorContactSend}</p>
            )}

            {successfulSendContact && (
              <p className={styles.successRequest}>
                Contact was successfully sent
              </p>
            )}
          </div>
        </div>
      )}

      {showSignup && (
        <div>
          <form
            onSubmit={handleSignupSubmit}
            // action="/send-data-here"
            // method="post"
            className={styles.SignupLoginForm}
          >
            <div className={styles.FormEmail}>
              <label for="email">Email:</label>
              <input
                type="text"
                // id="roll"
                name="email"
                required
                minlength="5"
                maxlength="50"
              />
            </div>
            <div className={styles.FormEmail}>
              <label for="password">Password:</label>
              <input
                type="password"
                name="password"
                required
                minlength="5"
                maxlength="50"
              />
            </div>
            <div className={styles.FormEmail}>
              <label for="name">Name:</label>
              <input
                type="text"
                // id="name"
                name="name"
                required
                minlength="5"
                maxlength="50"
              />
            </div>
            <div className={styles.FormEmail}>
              <label for="address">Address:</label>
              <input
                type="text"
                // id="name"
                name="address"
                required
                minlength="5"
                maxlength="50"
              />
            </div>
            <button type="submit">Submit</button>
          </form>

          {ErrorSignup && <p className={styles.error}>{ErrorSignup}</p>}

          {successfulSignup && (
            <p className={styles.successRequest}>
              Signup was successful redirecting to Log In
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Login;
