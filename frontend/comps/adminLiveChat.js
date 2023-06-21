"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./adminLiveChat.module.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import moment from "moment";
import { useAuthContext } from "../hooks/useAuthContext";

const LiveChat = () => {
  // dispatchUser to the authContext
  const { user, dispatchUser } = useAuthContext();

  // Show All Opened Chat
  const [showActiveChat, setShowActiveChat] = useState(false);

  // Show Old Archived Chat
  const [showArchivedChat, setShowArchivedChat] = useState(false);

  // // State of Chat opened or closed
  // const [textareaMessageValue, setTextareaMessageValue] = useState();

  // the current chat object updated Messages, updating
  const [allActiveChatMessages, setAllActiveChatMessages] = useState();

  // console.log(allActiveChatMessages);

  // the current chat object updated Messages, updating
  const [successActionNotification, setSuccessActionNotification] =
    useState(false);

  // the current chat object updated Messages, updating
  const [errorperformingAction, setErrorperformingAction] = useState();

  // the current chat object updated Messages, updating
  const [sortingAllActiveChatMessages, setSortingAllActiveChatMessages] =
    useState();

  // set show setShowAddNoteInput
  const [ShowAddNoteInput, setShowAddNoteInput] = useState(false);
  // and Selected Chat
  const [AddNoteSelectedItem, setAddNoteSelectedItem] = useState();
  // set Add Note Value to
  const [ItemAddNoteValue, setItemAddNoteValue] = useState();

  // bottom scroll automatically using useRef
  const bottomRef = useRef(null);

  // to control interval call for messages every 3 sec
  // using useRef to be able to stop the interval because between each render the value is lost
  // const myInterval = useRef();

  // v2.0 a smart useEffect to control fetching Messages every 3 sec and if not ActiveChat in focus stop the fetching 3sec cycle
  const [value, setValue] = useState(1);

  // useEffect(() => {
  //   if (showActiveChat && allActiveChatMessages) {
  //     // setTimeout(() => {
  //     //   console.log(value);
  //     //   HandleGetMessagesActiveChatPanel();
  //     //   setValue(value + 1);
  //     // }, 3000);

  //     console.log(allActiveChatMessages);

  //     const openedChat = allActiveChatMessages.filter((chat) => {
  //       //     console.log(item._id, addItemToCart._id);
  //       return chat.opened === true;
  //     });

  //     console.log(openedChat);
  //     console.log("will show opened");
  //     // console.log(AllOrders);
  //     setShowActiveChat(openedChat);
  //   }

  //   if (showArchivedChat && allActiveChatMessages) {
  //     const archivedChat = allActiveChatMessages.filter((chat) => {
  //       //     console.log(item._id, addItemToCart._id);
  //       return chat.opened === false;
  //     });

  //     console.log(archivedChat);
  //     console.log("will show archived");
  //     // console.log(AllOrders);
  //     setShowActiveChat(archivedChat);
  //   }
  // }, [showActiveChat, showArchivedChat]);

  useEffect(() => {
    if (showActiveChat | showArchivedChat) {
      setTimeout(() => {
        // console.log(value);
        HandleGetMessagesActiveChatPanel();
        setValue(value + 1);
      }, 3000);
    }
  }, [showActiveChat, showArchivedChat, value]);

  // useEffect(() => {
  //   if (allchatMessages) {
  //     // sorting messages into one array
  //     // const adminClientMessages = [
  //     //   ...datas.data.adminmails.messages,
  //     //   ...datas.data.clientmails.messages,
  //     // ];

  //     // console.log(adminClientMessages);

  //     // then sorting them based on date
  //     allchatMessages.sort(function (a, b) {
  //       // Turn your strings into dates, and then subtract them
  //       // to get a value that is either negative, positive, or zero.
  //       return new Date(a.date) - new Date(b.date);
  //     });

  //     console.log(allchatMessages);

  //     setSortedAllChatMessagesUserAdmin(allchatMessages);
  //   }

  //   // console.log(sortedadminClientMessages);
  // }, [allchatMessages]);

  // Handle Opening and starting Chat
  // const handleOpeningChat = async (e) => {
  //   e.preventDefault();

  //   const submission = {
  //     email: e.target.email.value,
  //   };

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

  //       }
  //     );

  //     if (datas.status === 200) {
  //       setOpenChat(true);

  //       console.log(datas.data);

  //       setChatObject(datas.data)

  //       console.log("success connection");

  //       myInterval.current = setInterval(() => {
  //         handleGetMessages(datas.data);

  //       }, 1000);

  //     }
  //   } catch (error) {
  //     console.log("error");
  //   }
  // };

  // Handle getting the Messages

  const HandleGetMessagesActiveChatPanel = async (e) => {
    // e.preventDefault();

    // const name = e.target.name.value;
    // const email = e.target.email.value;
    // console.log(e.target.email.value);
    // const password = e.target.password.value;

    // console.log(name);
    // console.log(email);
    // console.log(password);

    const formData = new FormData();
    formData.append("jwt", user.token);

    // fetch request
    try {
      const datas = await axios.post(
        "https://teabrand.onrender.com/api/users/activechatpanel/",
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

        // // admin messages
        // console.log(datas.data.adminmails.messages);

        // // client messages
        // console.log(datas.data.clientmails.messages);

        // // sorting messages into one array
        // const adminClientMessages = [
        //   ...datas.data.adminmails.messages,
        //   ...datas.data.clientmails.messages,
        // ];

        setAllActiveChatMessages(datas.data.chats);
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

  // Handle Start the Interval call in Active Chat panel

  // const HandleStartCallIntervalMessages = async () => {
  //   console.log(showActiveChat);
  //   if (!showActiveChat) {
  //     clearInterval(myInterval.current);
  //   }

  //   if (showActiveChat) {
  //     myInterval.current = setInterval(() => {
  //       if (!showActiveChat) {
  //         clearInterval(myInterval.current);
  //       }
  //       HandleGetMessagesActiveChatPanel();
  //     }, 3000);
  //   }
  // };

  // handling sending messages
  const handleSendingMessages = async (e, chat) => {
    e.preventDefault();

    // console.log(e);

    // console.log(chat);

    // console.log(chat.chatid);

    // console.log(e.target.message.value);

    // console.log(user);

    // console.log(e.target.message.value);

    // if (e.target.value === "") {
    //   return;
    // }

    let messageArray = {
      message: e.target.message.value,
      date: Date(),
      role: "admin",
    };

    // console.log(messageArray);

    const submission = {
      message: messageArray,
      chatid: chat.chatid,
      token: user.token,
    };

    // console.log(submission);

    // fetch request
    try {
      const datas = await axios.post(
        "https://teabrand.onrender.com/api/users/adminsendingchat/",
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

        // console.log(datas);

        // console.log("success connection, message sent");

        setSuccessActionNotification(true);

        setTimeout(() => {
          setSuccessActionNotification(false);
        }, 1500);

        // directing the value to bottom when new message arrives
        // maybe directing to the bottom only when we send a message but we are free to go down or not when admin sends message

        // setTimeout(() => {
        //   bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        // }, 1000);
      }
    } catch (error) {
      // console.log("error");

      // if there is an error response
      // console.log(error);

      if (error.message) {
        // console.log("inside");
        setErrorperformingAction(error.message);
      }

      if (error.response.data.error) {
        setErrorperformingAction(error.response.data.error);
      }

      setTimeout(() => {
        setErrorperformingAction();
      }, 2000);

      // if there is an error response
      // console.log(error.response.data);

      // setErrorContactSend(error.response.data.error);
    }
  };

  //////////////////////////

  // for textarea Live Chat Submitting and Modifying

  // const handleMessageChange = (event) => {
  //   // 👇️ access textarea value
  //   // console.log(event.target.value.length);
  //   setTextareaMessageValue(event.target.value);
  //   // console.log(event.target.value);
  // };

  // const something = (event) => {
  //   if (event.which === 13 && !event.shiftKey) {
  //     event.preventDefault();

  //     console.log("inside");

  //     handleSendingMessages(event);

  //     setTextareaMessageValue("");
  //   }
  // };

  // handling Join Chat Turn On
  const HandleAdminTurnJoinChat = async (chat) => {
    // e.preventDefault();

    // chat id
    // console.log(chat.chatid);

    // sending chat id to mark the chat as joined
    const submission = {
      chatid: chat.chatid,
      token: user.token,
    };

    // fetch request
    try {
      const datas = await axios.post(
        "https://teabrand.onrender.com/api/users/adminjoinchat/",
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
        // console.log(datas);

        setSuccessActionNotification(true);

        setTimeout(() => {
          setSuccessActionNotification(false);
        }, 1500);
      }
    } catch (error) {
      // console.log("error");

      if (error.message) {
        // console.log("inside");
        setErrorperformingAction(error.message);
      }

      if (error.response.data.error) {
        setErrorperformingAction(error.response.data.error);
      }

      setTimeout(() => {
        setErrorperformingAction();
      }, 2000);
    }
  };

  // handling Mark Chat Completed
  const HandleAdminMarkChatComplete = async (chat) => {
    // e.preventDefault();

    // chat id
    // console.log(chat.chatid);

    // if in active panel mark the chat complete to archive it and if in the archived/completed panel when clicked will switch to uncomplete
    let state;
    if (showActiveChat) {
      state = false;
    }

    if (showArchivedChat) {
      state = true;
    }

    // sending chat id to mark the chat as joined
    const submission = {
      chatid: chat.chatid,
      state: state,
      token: user.token,
    };

    // fetch request
    try {
      const datas = await axios.post(
        "https://teabrand.onrender.com/api/users/adminmarkchatcomplete/",
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
        // console.log(datas);

        setSuccessActionNotification(true);

        setTimeout(() => {
          setSuccessActionNotification(false);
        }, 1500);
      }
    } catch (error) {
      // console.log("error");

      if (error.message) {
        // console.log("inside");
        setErrorperformingAction(error.message);
      }

      if (error.response.data.error) {
        setErrorperformingAction(error.response.data.error);
      }

      setTimeout(() => {
        setErrorperformingAction();
      }, 2000);
    }
  };

  // handling Adding Note to Chat
  const HandleAdminAddNoteToChat = async (e) => {
    e.preventDefault();

    // console.log(AddNoteSelectedItem.chatid);
    // console.log(ItemAddNoteValue);

    if (ItemAddNoteValue.length < 1) {
      // console.log("nothing entered");

      return;
    }

    // note of admin in the chat
    const submission = {
      note: ItemAddNoteValue,
      chatid: AddNoteSelectedItem.chatid,
      token: user.token,
    };

    // fetch request
    try {
      const datas = await axios.post(
        "https://teabrand.onrender.com/api/users/adminaddnotetochat/",
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
        // console.log(datas);

        setSuccessActionNotification(true);

        setTimeout(() => {
          setSuccessActionNotification(false);
        }, 1500);
      }
    } catch (error) {
      // console.log("error");

      if (error.message) {
        // console.log("inside");
        setErrorperformingAction(error.message);
      }

      if (error.response.data.error) {
        setErrorperformingAction(error.response.data.error);
      }

      setTimeout(() => {
        setErrorperformingAction();
      }, 2000);
    }
  };

  // handling Mark Chat Completed
  const HandleMarkForManger = async (chat) => {
    // e.preventDefault();

    // chat id
    // console.log(chat.chatid);

    // sending chat id to mark the chat as joined
    const submission = {
      chatid: chat.chatid,
      token: user.token,
    };

    // fetch request
    try {
      const datas = await axios.post(
        "https://teabrand.onrender.com/api/users/adminmarkformanger/",
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
        // console.log(datas);

        setSuccessActionNotification(true);

        setTimeout(() => {
          setSuccessActionNotification(false);
        }, 1500);
      }
    } catch (error) {
      // console.log("error");

      if (error.message) {
        // console.log("inside");
        setErrorperformingAction(error.message);
      }

      if (error.response.data.error) {
        setErrorperformingAction(error.response.data.error);
      }

      setTimeout(() => {
        setErrorperformingAction();
      }, 2000);
    }
  };

  // handling Mark Chat Completed
  const HandleBlockUser = async (chat) => {
    // e.preventDefault();

    // chat id
    // console.log(chat.chatid);

    let state;
    if (showActiveChat) {
      state = true;
    }

    if (showArchivedChat) {
      state = false;
    }

    // sending chat id to mark the chat as joined
    const submission = {
      chatid: chat.chatid,
      state: state,
      token: user.token,
    };

    // fetch request
    try {
      const datas = await axios.post(
        "https://teabrand.onrender.com/api/users/adminblockuseremail/",
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
        // console.log(datas);

        setSuccessActionNotification(true);

        setTimeout(() => {
          setSuccessActionNotification(false);
        }, 1500);
      }
    } catch (error) {
      // console.log("error");

      if (error.message) {
        // console.log("inside");
        setErrorperformingAction(error.message);
      }

      if (error.response.data.error) {
        setErrorperformingAction(error.response.data.error);
      }

      setTimeout(() => {
        setErrorperformingAction();
      }, 2000);
    }
  };

  return (
    <div className={styles.LiveChatComponent}>
      <h3>Live chat:</h3>

      <div className={styles.ButtonTopNavigation}>
        <button
          style={{
            background: showActiveChat === true ? "white" : "",
          }}
          onClick={() => {
            HandleGetMessagesActiveChatPanel();
            setShowActiveChat(true);
            setShowArchivedChat(false);
            // setTimeout(() => {
            //   HandleStartCallIntervalMessages();
            // }, 2000);
          }}
        >
          Show Active chat Panel
        </button>
        <button
          style={{
            background: showArchivedChat === true ? "white" : "",
          }}
          onClick={() => {
            setShowArchivedChat(true);
            setShowActiveChat(false);
          }}
        >
          Show Archived/Completed chat Panel (and unblock chat)
        </button>
      </div>

      {showActiveChat | showArchivedChat && (
        <div>
          <div className={styles.showActiveChatComponentShowSelection}>
            <select type="item" name="item">
              {/* {toursNames.map((item, index) => {
                        return (
                          <option key={index} type="item" name="item">
                            {item}
                          </option>
                        );
                      })} */}
              <option>Show First 4</option>
              <option>Show From 4 to 8</option>
              <option>Show From 8 to 12</option>
              <option>Show From 12 to 16</option>
            </select>

            <div>
              Number of all chats:{" "}
              {allActiveChatMessages && allActiveChatMessages.length}
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

                <button type="submit" onClick={HandleAdminAddNoteToChat}>
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

            {successActionNotification && (
              <div className={styles.successRequest}>Done</div>
            )}

            {errorperformingAction && (
              <div className={styles.error}>{errorperformingAction}</div>
            )}
          </div>

          <div className={styles.chatBodycomponent}>
            {allActiveChatMessages &&
              allActiveChatMessages
                .filter(function (chat) {
                  if (showActiveChat) {
                    return chat.opened === true && chat.blocked === false;
                  }
                  if (showArchivedChat) {
                    return (chat.opened === false) | (chat.blocked === true);
                  }
                })
                .map((chat) => {
                  return (
                    <div
                      key={chat._id}
                      className={styles.ChatFullbodyInfoandChatitself}
                    >
                      <div className={styles.chatUserInfo}>
                        <h4>Chat/User Info:</h4>
                        <div>Chat id number: {chat.chatid}</div>
                        <div>Email: {chat.client}</div>
                        <div>
                          {chat.opened === false
                            ? "Chat state: Completed chat "
                            : ""}

                          {chat.blocked === true
                            ? "Chat state: Blocked user"
                            : ""}
                        </div>
                        <div>
                          Started at:{" "}
                          {moment(chat.createdAt).format("HH:mm  (DD/MM/YYYY)")}
                        </div>
                        <div>Note: {chat.note}</div>
                        {/* <div>Orders: 0/10</div> */}
                      </div>

                      <div className={styles.chatandButtonBody}>
                        <div className={styles.chatandButtonBodyEachElement}>
                          <div className={styles.chatBodyLogo}>
                            <Image
                              width={100}
                              height={100}
                              alt="image"
                              src={require(`./../public/Images/gold.png`)}
                            ></Image>
                            <div>
                              <div>Customer Support</div>
                              <div>Admin: Yehia</div>
                            </div>
                          </div>

                          <div className={styles.chatMessages}>
                            {[
                              ...chat.adminmails.messages,
                              ...chat.clientmails.messages,
                            ]
                              .sort(function (a, b) {
                                // Turn your strings into dates, and then subtract them
                                // to get a value that is either negative, positive, or zero.
                                return new Date(a.date) - new Date(b.date);
                              })
                              .map((message, i) => {
                                return (
                                  <div
                                    key={i}
                                    //  className={styles.chatmessagesMain}
                                  >
                                    {/* {message.message} */}

                                    {message.role === "admin" && (
                                      <div
                                        className={
                                          styles.chatmessagesAdminPartComponent
                                        }
                                      >
                                        {/* <Image
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
                                      ></Image> */}
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
                                      <div
                                        className={
                                          styles.chatmessagesUserPartComponent
                                        }
                                      >
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
                                );
                              })}

                            {/* {sortedAllChatMessagesUserAdmin &&
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
                                      <div
                                        className={
                                          styles.chatmessagesAdminPartComponent
                                        }
                                      >
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
                                          {message.message} admin
                                        </div>
                                      </div>
                                    )}

                                    {message.role === "user" && (
                                      <div
                                        className={
                                          styles.chatmessagesUserPartComponent
                                        }
                                      >
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
                                          {message.message} user
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              );
                            })} */}
                          </div>

                          <div>
                            <div className={styles.chatsubmitComponent}>
                              <form
                                onSubmit={(e) => {
                                  handleSendingMessages(e, chat);
                                }}
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
                                  // value={textareaMessageValue}
                                  placeholder="Type your message here"
                                  type="text"
                                  minlength="1"
                                  maxlength="100"
                                  name="message"
                                  id="messagev2"
                                  // autoFocus
                                  // onChange={(event) => {
                                  //   setTextareaMessageValue(event.target.value);
                                  // }}
                                  autoComplete="off"
                                  // onKeyDown={(e) => something(e)}
                                ></textarea>

                                <button type="submit">
                                  Send
                                  {/* {" "}
                  <Image
                    width={50}
                    height={50}
                    alt="image"
                    src={require(`./../public/Images/send1.jpg`)}
                  ></Image>{" "} */}
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className={styles.chatadminButtons}>
                          <button
                            onClick={() => {
                              HandleAdminTurnJoinChat(chat);
                            }}
                          >
                            Join Chat
                          </button>
                          <button
                            onClick={() => {
                              HandleAdminMarkChatComplete(chat);
                            }}
                          >
                            {/* {showActiveChat
                              ? "Mark complete"
                              : "Mark in-complete"} */}

                            {showActiveChat
                              ? "Mark complete"
                              : showArchivedChat && chat.opened === false
                              ? "Mark in-complete"
                              : "Mark complete"}
                          </button>
                          <button
                            onClick={() => {
                              if (ShowAddNoteInput) {
                                setShowAddNoteInput(false);
                                setAddNoteSelectedItem();
                              }
                              if (!ShowAddNoteInput) {
                                setShowAddNoteInput(true);
                                setAddNoteSelectedItem(chat);
                              }
                            }}
                          >
                            Add Note
                          </button>
                          <button
                            onClick={() => {
                              HandleMarkForManger(chat);
                            }}
                          >
                            Mark for Manger
                          </button>
                          <button
                            onClick={() => {
                              HandleBlockUser(chat);
                            }}
                          >
                            {showActiveChat
                              ? "Block user"
                              : showArchivedChat && chat.blocked === true
                              ? "Unblock user"
                              : "Block user"}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveChat;
