import Link from "next/link";
import Image from "next/image";
import styles from "./chat.module.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

const Chat = (props) => {
  // bottom scroll automatically using
  const bottomRef = useRef(null);

  // chat state hide all ?
  const [hideAll, sethideAll] = useState(false);

  // console.log(hideAll);

  // chat state minized or maximized ?
  const [minized, setMinized] = useState(false);

  // console.log(minized);

  // chat Live state from openchat to minized chat and stopped chat and in-active interval
  const [openChatOffCompletely, setOpenChatOffCompletely] = useState(false);

  // useEffect(() => {
  //   if (props.state === true) {
  //     console.log("it's true");
  //     setOpenChat(true);
  //   }
  //   if (props.state === false) {
  //     console.log("it's false");
  //     setOpenChat(false);
  //   }
  // }, [props]);

  // State of Chat opened or closed not the button state, but after entering email and opening the full chat window
  const [openChat, setOpenChat] = useState(false);

  // console.log(openChat);

  // using useRef to be able to stop the interval because between each render the value is lost
  // const myInterval = useRef();

  // the current chat object
  const [chatObject, setChatObject] = useState();

  // set admin joined chat or not
  const [adminJoinedChat, setAdminJoinedChat] = useState();

  // console.log(chatObject);

  // const [setEmail, setSetEmail] = useState();

  // console.log(chatObject);

  // State of Chat opened or closed
  const [textareaMessageValue, setTextareaMessageValue] = useState();

  // the current chat object updated Messages, updating
  const [allchatMessages, setAllchatMessages] = useState();

  // the current chat object updated Messages, updating
  const [sortedAllChatMessagesUserAdmin, setSortedAllChatMessagesUserAdmin] =
    useState();

  // console.log(sortedAllChatMessagesUserAdmin);

  // v2.0 a smart useEffect to control fetching Messages every 3 sec and if not ActiveChat in focus stop the fetching 3sec cycle
  const [value, setValue] = useState(1);

  // Email set chat with
  const [emailset, setEmailset] = useState();

  useEffect(() => {
    if (openChat) {
      setTimeout(() => {
        // console.log(value);
        handleGetMessages(emailset);
        setValue(value + 1);
      }, 2500);
    }
  }, [openChat, value]);

  useEffect(() => {
    if (allchatMessages) {
      // sorting messages into one array
      // const adminClientMessages = [
      //   ...datas.data.adminmails.messages,
      //   ...datas.data.clientmails.messages,
      // ];

      // console.log(adminClientMessages);

      // then sorting them based on date
      allchatMessages.sort(function (a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(a.date) - new Date(b.date);
      });

      // console.log(allchatMessages);

      setSortedAllChatMessagesUserAdmin(allchatMessages);
    }

    // console.log(sortedadminClientMessages);
  }, [allchatMessages]);

  // console.log(allchatMessages);

  // let myInterval;

  // chat Live state from openchat to minized chat and stopped chat and in-active interval
  // UseEffect of it
  useEffect(() => {
    if (openChatOffCompletely) {
      // console.log("close chat completely");
      // console.log(openChatOffCompletely);
      // clearInterval(myInterval.current);
      setOpenChat(false);
      setMinized(true);
    }
  }, [openChatOffCompletely]);

  // Handle Opening and starting Chat

  const handleOpeningChat = async (e) => {
    e.preventDefault();

    // const name = e.target.name.value;
    // const email = e.target.email.value;
    // console.log(e.target.email.value);
    // const password = e.target.password.value;

    // console.log(name);
    // console.log(email);
    // console.log(password);

    const submission = {
      email: e.target.email.value,
    };

    // fetch request
    try {
      const datas = await axios.post(
        "https://teabrand.onrender.com/api/users/openchat/",
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
        setEmailset(e.target.email.value);

        setOpenChat(true);

        // console.log(datas.data);

        setChatObject(datas.data);
        // setEmailIs(e.target.email.value);

        // console.log("success connection");

        // setSetEmail(e.target.email.value);

        // const myInterval = setTimeout(() => {
        //   handleGetMessages(datas.data);
        // }, 3000);

        // myInterval = setInterval(() => {
        //   handleGetMessages(datas.data);
        // }, 5000);

        // myInterval.current = setInterval(() => {
        //   handleGetMessages(datas.data);
        // }, 1000);

        // setSuccessfulSendContact(true);
        // setErrorContactSend("");
        // setErrorLogin("");

        // setTimeout(() => {
        //   // setShowLogin(true);
        //   // setShowSignup(false);
        //   // setSuccessfulSendContact(false);
        // }, 2000);

        // call a function every 3 second to confirm.. until chat is closed to close interval
        // setInterval(displayHello, 1000);

        // clearInterval(myInterval);

        // setInterval(() => {
        //   console.log("success connection");
        // }, 3000);

        // const myInterval = setInterval(() => {
        //   console.log("success connection");
        // }, 3000);

        // setTimeout(() => {
        //   // setShowLogin(true);
        //   // setShowSignup(false);
        //   // setSuccessfulSendContact(false);
        //   clearInterval(myInterval);
        // }, 10000);

        // clearInterval();
      }
    } catch (error) {
      // console.log("error");
      // if there is an error response
      // console.log(error);
      // if there is an error response
      // console.log(error.response.data);
      // setErrorContactSend(error.response.data.error);
    }
  };

  // // handle open Chat and start the connection again after minized

  // const handleOpeningChatAgain = async (email) => {
  //   // e.preventDefault();

  //   // const name = e.target.name.value;
  //   // const email = e.target.email.value;
  //   // console.log(e.target.email.value);
  //   // const password = e.target.password.value;

  //   // console.log(name);
  //   // console.log(email);
  //   // console.log(password);

  //   const submission = {
  //     email: email,
  //   };

  //   // fetch request
  //   try {
  //     const datas = await axios.post(
  //       "https://teabrand.onrender.com/api/users/openchat/",
  //       {
  //         submission,
  //       },
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

  //     // if (submission.message.length < 10) {
  //     //   return { error: "Message must be over 10 chars long." };
  //     // }

  //     // console.log(datas);

  //     // check response if ok
  //     // console.log(datas.status === 200);

  //     if (datas.status === 200) {
  //       setOpenChat(true);

  //       console.log(datas.data);

  //       setChatObject(datas.data);
  //       // setEmailIs(e.target.email.value);

  //       console.log("success connection");

  //       // setSetEmail(e.target.email.value);

  //       // const myInterval = setTimeout(() => {
  //       //   handleGetMessages(datas.data);
  //       // }, 3000);

  //       // myInterval = setInterval(() => {
  //       //   handleGetMessages(datas.data);
  //       // }, 5000);

  //       // myInterval.current = setInterval(() => {
  //       //   handleGetMessages(datas.data);
  //       // }, 5000);

  //       // setSuccessfulSendContact(true);
  //       // setErrorContactSend("");
  //       // setErrorLogin("");

  //       // setTimeout(() => {
  //       //   // setShowLogin(true);
  //       //   // setShowSignup(false);
  //       //   // setSuccessfulSendContact(false);
  //       // }, 2000);

  //       // call a function every 3 second to confirm.. until chat is closed to close interval
  //       // setInterval(displayHello, 1000);

  //       // clearInterval(myInterval);

  //       // setInterval(() => {
  //       //   console.log("success connection");
  //       // }, 3000);

  //       // const myInterval = setInterval(() => {
  //       //   console.log("success connection");
  //       // }, 3000);

  //       // setTimeout(() => {
  //       //   // setShowLogin(true);
  //       //   // setShowSignup(false);
  //       //   // setSuccessfulSendContact(false);
  //       //   clearInterval(myInterval);
  //       // }, 10000);

  //       // clearInterval();
  //     }
  //   } catch (error) {
  //     console.log("error");

  //     // if there is an error response
  //     // console.log(error);

  //     // if there is an error response
  //     // console.log(error.response.data);

  //     // setErrorContactSend(error.response.data.error);
  //   }
  // };

  // Handle getting the Messages

  const handleGetMessages = async (email) => {
    // e.preventDefault();

    // const name = e.target.name.value;
    // const email = e.target.email.value;
    // console.log(e.target.email.value);
    // const password = e.target.password.value;

    // console.log(name);
    // console.log(email);
    // console.log(password);

    // console.log(email);

    const submission = {
      email: email,
    };

    // fetch request
    try {
      const datas = await axios.post(
        "https://teabrand.onrender.com/api/users/getmessages/",
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
        // setOpenChat(true);

        // directing the value to bottom when new message arrives
        // maybe directing to the bottom only when we send a message but we are free to go down or not when admin sends message
        // bottomRef.current?.scrollIntoView({ behavior: "smooth" });

        // setChatObject(datas.data);

        // console.log(datas);

        // setAllchatMessages(datas.data)

        // console.log("messages gotten");

        // console.log(datas);

        // admin messages
        // console.log(datas.data.adminmails.messages);

        // client messages
        // console.log(datas.data.clientmails.messages);

        // sorting messages into one array
        const adminClientMessages = [
          ...datas.data.adminmails.messages,
          ...datas.data.clientmails.messages,
        ];

        // console.log(adminClientMessages);

        // // then sorting them based on date
        // const sortedadminClientMessages = adminClientMessages.sort(function (
        //   a,
        //   b
        // ) {
        //   // Turn your strings into dates, and then subtract them
        //   // to get a value that is either negative, positive, or zero.
        //   return new Date(b.date) - new Date(a.date);
        // });

        // console.log(sortedadminClientMessages);

        setAllchatMessages(adminClientMessages);

        setAdminJoinedChat(datas.data.joined);

        // console.log(datas);

        // setSuccessfulSendContact(true);
        // setErrorContactSend("");
        // setErrorLogin("");

        // setTimeout(() => {
        //   // setShowLogin(true);
        //   // setShowSignup(false);
        //   // setSuccessfulSendContact(false);
        // }, 2000);

        // call a function every 3 second to confirm.. until chat is closed to close interval
        // setInterval(displayHello, 1000);

        // setInterval(() => {
        //   console.log("success connection");
        // }, 3000);

        // const myInterval = setInterval(() => {
        //   handleGetMessages(e);
        // }, 3000);

        // setTimeout(() => {
        //   // setShowLogin(true);
        //   // setShowSignup(false);
        //   // setSuccessfulSendContact(false);
        //   clearInterval(myInterval);
        // }, 10000);

        // clearInterval();
      }
    } catch (error) {
      // console.log("error");
      // if there is an error response
      // console.log(error);
      // if there is an error response
      // console.log(error.response.data);
      // setErrorContactSend(error.response.data.error);
    }
  };

  // handling sending messages
  const handleSendingMessages = async (e) => {
    // e.preventDefault();

    // console.log(e.target.message.value);

    if (e.target.value === "") {
      return;
    }

    // console.log(Date());
    // message: e.target.message.value,

    // setTextareaMessageValue("");

    let messageArray = {
      message: e.target.value,
      date: Date(),
      role: "user",
    };

    const submission = {
      message: messageArray,
      chatid: chatObject.chatid,
    };

    // fetch request
    try {
      const datas = await axios.post(
        "https://teabrand.onrender.com/api/users/sendingchat/",
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

      if (datas.status === 200) {
        // setOpenChat(true);

        // setChatObject(datas.data);

        // console.log("success connection, message sent");

        // directing the value to bottom when new message arrives
        // maybe directing to the bottom only when we send a message but we are free to go down or not when admin sends message

        setTimeout(() => {
          bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 1000);
      }
    } catch (error) {
      // console.log("error");
      // if there is an error response
      // console.log(error);
      // if there is an error response
      // console.log(error.response.data);
      // setErrorContactSend(error.response.data.error);
    }
  };

  //////////////////////////

  // for textarea Live Chat Submitting and Modifying

  const handleMessageChange = (event) => {
    // 👇️ access textarea value
    // console.log(event.target.value.length);
    setTextareaMessageValue(event.target.value);
    // console.log(event.target.value);
  };

  const something = (event) => {
    // if (event.keyCode === 13) {

    //   // setTextareaMessageValue("");
    //   // // SubmitEvent();
    // }

    if (event.which === 13 && !event.shiftKey) {
      event.preventDefault();

      // console.log("inside");

      handleSendingMessages(event);

      setTextareaMessageValue("");

      // this.closest("form").submit();
    }
  };
  // $("#messagev2").keypress(function (e) {
  //   if (e.which === 13 && !e.shiftKey) {
  //     e.preventDefault();

  //     console.log("inside");

  //     $(this).closest("form").submit();
  //   }
  // });

  /////////////////////////////////

  return (
    <div>
      {hideAll && <div className={styles.displaynone}></div>}
      {minized && !hideAll && (
        <div className={styles.chatcomponentNotopenedMiniized}>
          <div className={styles.chatMiniizedComponent}>
            <div className={styles.chatMiniizedComponentFirst}>
              <button
                className={styles.chatMiniizedComponentGreenButton}
              ></button>
              <button
                className={styles.chatMiniizedComponentOpenChatButton}
                onClick={() => {
                  if (!chatObject) {
                    setMinized(false);
                  }
                  if (chatObject) {
                    setMinized(false);
                    setOpenChat(true);
                    // handleOpeningChatAgain(chatObject.client);
                    setOpenChatOffCompletely(false);
                  }
                }}
              >
                Open Chat
              </button>
            </div>
            <button
              onClick={() => {
                sethideAll(true);
              }}
            >
              {" "}
              x
            </button>
          </div>
        </div>
      )}

      {!openChat && !minized && (
        <div className={styles.chatcomponentNotopened}>
          <div className={styles.chatcomponentNotopenedfirst}>
            <button
              className={styles.chatMiniizedComponentGreenButton}
            ></button>
            <button
              onClick={() => {
                setMinized(true);
              }}
            >
              x
            </button>
          </div>

          <form
            onSubmit={handleOpeningChat}
            // action="/send-data-here"
            // method="post"

            className={styles.StartChatComponent}
          >
            <div className={styles.FormEmail}>
              <label for="email">Email:</label>
              <input
                type="text"
                name="email"
                required
                minlength="5"
                maxlength="20"
                placeholder="Write Email to start chat"
              />
            </div>
            <button className={styles.FormEmailBtn} type="submit">
              Start Chat
            </button>
          </form>
        </div>
      )}

      {openChat && (
        <div className={styles.chatcomponent}>
          <div className={styles.livechatTopBorder}>
            <button
              onClick={() => {
                setOpenChatOffCompletely(true);
              }}
            >
              -
            </button>
          </div>
          <div className={styles.livechatTitle}>
            <Image
              width={100}
              height={100}
              alt="image"
              src={require(`./../public/Images/gold.png`)}
            ></Image>
            <div className={styles.livechatTitleSecondPart}>
              <div>Customer Support</div>
              <div>We Value Your Business</div>
            </div>
          </div>
          <div className={styles.livechatcomponents}>
            <div className={styles.livechatcomponentsHasJoined}>
              {!adminJoinedChat && (
                <div>
                  <div>Hey, Admin will join chat soon..</div>
                </div>
              )}

              {adminJoinedChat && adminJoinedChat === true
                ? "Admin has joined chat"
                : ""}
            </div>
            {/* <div>Messages between Admin and client here:</div> */}
            {sortedAllChatMessagesUserAdmin &&
              sortedAllChatMessagesUserAdmin.map((message, i) => {
                return (
                  <div
                    key={i}
                    //  className={styles.chatmessagesMain}
                  >
                    <div
                    // className={styles.chatmessages}
                    // style={{
                    //   justifyContent:
                    //     message.role === "admin" ? "flex-end" : "flex-start",
                    // }}
                    >
                      {message.role === "admin" && (
                        <div className={styles.chatmessagesAdminPartComponent}>
                          <Image
                            width={50}
                            height={50}
                            alt="image"
                            src={require(`./../public/users/images/default.jpeg`)}

                            // style={{
                            //   display:
                            //     message.role === "admin"
                            //       ? "none"
                            //       : "flex-start",
                            // }}
                          ></Image>
                          <div
                            ref={bottomRef}
                            // className={styles.MessagesPadding}
                            // style={{
                            //   flexDirection:
                            //     message.role === "admin"
                            //       ? "none"
                            //       : "row-reverse",
                            //   flexDirection:
                            //     message.role === "admin"
                            //       ? "row-reverse"
                            //       : "none",
                            // }}

                            // style={{
                            //   alignItems:
                            //     message.role === "user" ? "none" : "flex-end",
                            // }}
                          >
                            {message.message}
                          </div>
                        </div>
                      )}

                      {message.role === "user" && (
                        <div className={styles.chatmessagesUserPartComponent}>
                          <div
                            ref={bottomRef}
                            // className={styles.MessagesPadding}
                            // style={{
                            //   flexDirection:
                            //     message.role === "admin"
                            //       ? "none"
                            //       : "row-reverse",
                            //   flexDirection:
                            //     message.role === "admin"
                            //       ? "row-reverse"
                            //       : "none",
                            // }}

                            // style={{
                            //   alignItems:
                            //     message.role === "user" ? "none" : "flex-end",
                            // }}
                          >
                            {message.message}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
          <div className={styles.chatsubmitComponent}>
            <form
              onSubmit={handleSendingMessages}
              className={styles.chatsubmitComponentform}
              // className={styles.ContactUsForm}
            >
              <textarea
                // placeholder="Type your message here"
                required
                size={40}
                rows="4"
                cols="30"
                // height={300}
                value={textareaMessageValue}
                placeholder="Type your message here"
                type="text"
                minlength="1"
                maxlength="80"
                name="message"
                id="messagev2"
                autoFocus
                onChange={(event) => {
                  setTextareaMessageValue(event.target.value);
                }}
                autoComplete="off"
                onKeyDown={(e) => something(e)}
              ></textarea>

              <button type="submit">
                {/* {" "}
                  <Image
                    width={50}
                    height={50}
                    alt="not found"
                    src={require(`./../public/Images/send1.jpg`)}
                  ></Image>{" "} */}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
