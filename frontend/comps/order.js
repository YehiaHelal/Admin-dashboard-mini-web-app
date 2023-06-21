import Link from "next/link";
import Image from "next/image";
import { useItemsCartContext } from "../hooks/useItemsCartContext";
import styles from "./order.module.css";
import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import axios from "axios";

const OrderItems = () => {
  // dispatchUser to the authContext
  const { user, dispatchUser } = useAuthContext();

  // Set All Items Images Fetch
  const [AllItemsImages, setAllItemsImages] = useState();

  // importing Cart Context items if needed
  const { items, dispatch } = useItemsCartContext();

  // checking if there is items in the carts in the local storage
  const [localStorageItemsCheck, setlocalStorageItemsCheck] = useState(false);

  // putting the total value of
  const [totalValue, setTotalValue] = useState();

  // console.log(totalValue);

  // setting the purchase button so if there is an item it always update the state and redirect to order page
  let checkLocalStorage;
  useEffect(() => {
    if (typeof window !== "undefined") {
      checkLocalStorage = JSON.parse(localStorage.getItem("cartItems"));

      // console.log("redirect won't happens");

      if (
        Object.keys(JSON.parse(localStorage.getItem("cartItems")).length > 0)
      ) {
        // console.log("here");
        // setlocalStorageItemsCheck(true);
        // console.log("redirect will happen");
      }

      // console.log(JSON.parse(localStorage.getItem("cartItems")).length > 0);
    }
  }, []);

  let filterstepone;
  let filtersteptwo;
  let getLocalCartItems;

  // calculating the total value

  if (typeof window !== "undefined") {
    getLocalCartItems = JSON.parse(localStorage.getItem("cartItems"));
  }

  useEffect(() => {
    let orderTotalvalueArray = getLocalCartItems.map(
      (item) => item.price * item.numberofitem
    );
    let orderTotalvalue = orderTotalvalueArray.reduce((a, b) => a + b, 0);

    setTotalValue(orderTotalvalue);
  }, []);

  // console.log(getLocalCartItems);

  // for exporting the value to order page and managing stripe
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("itemsvalue", JSON.stringify(totalValue));
    }
  }, [totalValue]);

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

  if (typeof window !== "undefined") {
    handleGetAllImages();
  }

  // increasing number of items + and decreasing - number of items
  let itemQuantityOneChecking;
  let addingFilterstepone;
  let addingFiltersteptwo;
  let newFilteredTargetItem;
  let filteredTargetItem;

  return (
    <div className={styles.component}>
      <div className={styles.Title}>
        <div>My Bag</div>
      </div>

      <div className={styles.overflow}>
        {getLocalCartItems &&
          AllItemsImages &&
          getLocalCartItems.map((item) => {
            return (
              <div key={item._id} className={styles.ItemStylesComponent}>
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

                <div className={styles.ItemStylesComponentNameandButton}>
                  <div> {item.name} /50 gram</div>
                  <button
                    key={item}
                    onClick={() => {
                      filterstepone = JSON.parse(
                        localStorage.getItem("cartItems")
                      );
                      filtersteptwo = filterstepone.filter(
                        (newCart) => newCart._id !== item._id
                      );
                      localStorage.setItem(
                        "cartItems",
                        JSON.stringify(filtersteptwo)
                      );
                      // setMyCategorya([...filtersteptwo]);

                      dispatch({ type: "SET_ITEM", payload: filtersteptwo });
                      // console.log(items);
                    }}
                  >
                    Remove
                  </button>
                </div>

                <div className={styles.ItemStylesComponentPriceandQuantity}>
                  <div className={styles.ItemStylesComponentQuantity}>
                    <button
                      onClick={() => {
                        addingFilterstepone = JSON.parse(
                          localStorage.getItem("cartItems")
                        );
                        addingFiltersteptwo = addingFilterstepone.filter(
                          (newCart) => newCart._id !== item._id
                        );

                        filteredTargetItem = addingFilterstepone.filter(
                          (newCart) => newCart._id === item._id
                        );

                        newFilteredTargetItem = filteredTargetItem.map(
                          (item) => {
                            item.numberofitem = item.numberofitem - 1;
                            return item;
                          }
                        );

                        [itemQuantityOneChecking] = [...newFilteredTargetItem];

                        //    console.log(itemQuantityOneChecking.numberofitem);

                        if (itemQuantityOneChecking.numberofitem >= 1) {
                          const mergedArray2 = [
                            ...addingFiltersteptwo,
                            ...newFilteredTargetItem,
                          ];
                          //         console.log(mergedArray2);

                          localStorage.setItem(
                            "cartItems",
                            JSON.stringify(mergedArray2)
                          );

                          dispatch({
                            type: "SET_ITEM",
                            payload: mergedArray2,
                          });
                        }

                        if (itemQuantityOneChecking.numberofitem < 1) {
                          //     console.log("we can't subtract more");

                          filterstepone = JSON.parse(
                            localStorage.getItem("cartItems")
                          );

                          //     console.log(filterstepone);
                          filtersteptwo = filterstepone.filter(
                            (newCart) => newCart._id !== item._id
                          );
                          localStorage.setItem(
                            "cartItems",
                            JSON.stringify(filtersteptwo)
                          );
                          // setMyCategorya([...filtersteptwo]);

                          dispatch({
                            type: "SET_ITEM",
                            payload: filtersteptwo,
                          });
                          // console.log(items);
                        }
                        // localStorage.setItem(
                        //   "cartItems",
                        //   JSON.stringify(filtersteptwo)
                        // );
                        // setMyCategorya([...filtersteptwo]);

                        // console.log(items);
                        //   localStorage.setItem(
                        //     "cartItems",
                        //     JSON.stringify(addingFiltersteptwo)
                        //   );
                        //   // setMyCategorya([...filtersteptwo]);

                        //   dispatch({ type: "SET_ITEM", payload: addingFiltersteptwo });
                        //   // console.log(items);
                      }}
                    >
                      -
                    </button>
                    <div>{item.numberofitem}</div>
                    <button
                      onClick={() => {
                        addingFilterstepone = JSON.parse(
                          localStorage.getItem("cartItems")
                        );
                        addingFiltersteptwo = addingFilterstepone.filter(
                          (newCart) => newCart._id !== item._id
                        );

                        filteredTargetItem = addingFilterstepone.filter(
                          (newCart) => newCart._id === item._id
                        );

                        newFilteredTargetItem = filteredTargetItem.map(
                          (item) => {
                            item.numberofitem = item.numberofitem + 1;
                            return item;
                          }
                        );

                        // localStorage.setItem(
                        //   "cartItems",
                        //   JSON.stringify(filtersteptwo)
                        // );
                        // setMyCategorya([...filtersteptwo]);

                        const mergedArray2 = [
                          ...addingFiltersteptwo,
                          ...newFilteredTargetItem,
                        ];
                        //    console.log(mergedArray2);

                        localStorage.setItem(
                          "cartItems",
                          JSON.stringify(mergedArray2)
                        );

                        dispatch({ type: "SET_ITEM", payload: mergedArray2 });
                        // console.log(items);
                        //   localStorage.setItem(
                        //     "cartItems",
                        //     JSON.stringify(addingFiltersteptwo)
                        //   );
                        //   // setMyCategorya([...filtersteptwo]);

                        //   dispatch({ type: "SET_ITEM", payload: addingFiltersteptwo });
                        //   // console.log(items);
                      }}

                      //   const numberofitemforvalue = JSON.parse(
                      //     localStorage.getItem("cartItems")
                      //   );

                      //   setaddItemToCart(item);
                      //   setChangeValue(numberofitemforvalue.length + 1);
                      // }}
                    >
                      +
                    </button>
                  </div>
                  <div className={styles.ItemStylesComponentPrice}>
                    ${item.price}
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <div className={styles.TotalPriceComponent}>
        <div>Total Price</div>$
        {getLocalCartItems &&
          getLocalCartItems
            .map((item) => item.price * item.numberofitem)
            .reduce((a, b) => a + b, 0)}
      </div>

      {/* redirect to order page if clicked and there is items inside cart */}
      {/* {JSON.parse(localStorage.getItem("cartItems")).length > 0 && (
        <div className={styles.ButtonElements}>
          <div className={styles.TotalPrice}>
            <div>Total</div>
            <div>${totalValue}</div>
          </div>

          <Link className={styles.PurchaseButtonLink} href={"/order"}>
            Purchase
          </Link>
        </div>
      )} */}

      {/* error if clicked and there is no item inside cart */}
      {/* {JSON.parse(localStorage.getItem("cartItems")).length === 0 && (
        <div className={styles.ButtonElements}>
          <div className={styles.TotalPrice}>
            <div>Total</div>
            <div>${totalValue}</div>
          </div>

          <button className={styles.PurchaseButton}>Purchase</button>
        </div>
      )} */}
    </div>
  );
};

export default OrderItems;

export const CartItemAlertNumberOfitemsOrder = () => {
  // to reload the page if any changes made to the items context
  const { items, dispatch } = useItemsCartContext();

  // Cart alert and number of item if there is one added
  const [CartAlertNumofitems, setCartAlertNumofitems] = useState(0);

  let CartAlertNumofitemsOutside;
  if (typeof window !== "undefined") {
    CartAlertNumofitemsOutside = JSON.parse(localStorage.getItem("cartItems"));
  }

  useEffect(() => {
    setCartAlertNumofitems(CartAlertNumofitemsOutside.length);
  }, [items]);

  return (
    <div>
      {CartAlertNumofitems > 0 && (
        <div className={styles.cartitemnumber}>{CartAlertNumofitems}</div>
      )}
    </div>
  );
};
