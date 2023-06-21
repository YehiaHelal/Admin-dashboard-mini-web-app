"use client";

import Image from "next/image";

// import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import Footer from "../../../comps/footer";
import { useEffect, useState } from "react";
import { useItemsCartContext } from "../../../hooks/useItemsCartContext";
import axios from "axios";

function Collections() {
  // Cart Context fetch items
  const { items, dispatch } = useItemsCartContext();

  // console.log(items);

  // Set All Items Images Fetch
  const [AllItemsImages, setAllItemsImages] = useState();

  // console.log(AllItemsImages);

  const [fetchedImages, setfetchedImages] = useState(false);

  // useState fetch items
  const [itemCollection, setItemCollection] = useState([]);

  // Changes and sorting Items
  const [itemCollectionShowing, setItemCollectionShowing] = useState([]);

  // mainUnchangeableItems
  const [mainItems, setMainItems] = useState([]);

  // filtered check and reset
  const [isFiltered, setIsFiltered] = useState(false);

  // filtered based on
  const [filteringBase, setFilteringBase] = useState();

  // function to handle All filteries
  function handleNameFilter(item) {
    if (!isFiltered) {
      filtered = itemCollectionShowing.filter((itemCollectionShowing) => {
        return itemCollectionShowing.name === item.name;
      });
      setItemCollectionShowing(filtered);

      setIsFiltered(true);
      setFilteringBase(item.name);
    }

    if (isFiltered && filteringBase !== item.name) {
      filtered = mainItems.filter((itemCollectionShowing) => {
        return itemCollectionShowing.name === item.name;
      });
      setItemCollectionShowing(filtered);
      setIsFiltered(true);
      setFilteringBase(item.name);
      setMainItems(itemCollection);
    }

    if (isFiltered && filteringBase === item.name) {
      setItemCollectionShowing(itemCollection);
      setFilteringBase("none");
    }
  }

  function handleOriginFilter(item) {
    if (!isFiltered) {
      filtered = itemCollectionShowing.filter((itemCollectionShowing) => {
        return itemCollectionShowing.ORIGIN === item.ORIGIN;
      });
      setItemCollectionShowing(filtered);

      setIsFiltered(true);
      setFilteringBase(item.ORIGIN);
    }

    if (isFiltered && filteringBase !== item.ORIGIN) {
      filtered = mainItems.filter((itemCollectionShowing) => {
        return itemCollectionShowing.ORIGIN === item.ORIGIN;
      });
      setItemCollectionShowing(filtered);
      setIsFiltered(true);
      setFilteringBase(item.ORIGIN);
      setMainItems(itemCollection);
    }

    if (isFiltered && filteringBase === item.ORIGIN) {
      setItemCollectionShowing(itemCollection);
      setFilteringBase("none");
    }
  }

  function handleFlavourFilter(FLAVOR) {
    if (!isFiltered) {
      filtered = itemCollectionShowing.filter((itemCollectionShowing) => {
        return itemCollectionShowing.FLAVOR === FLAVOR;
      });
      setItemCollectionShowing(filtered);

      setIsFiltered(true);
      setFilteringBase(FLAVOR);
    }

    if (isFiltered && filteringBase !== FLAVOR) {
      filtered = mainItems.filter((itemCollectionShowing) => {
        return itemCollectionShowing.FLAVOR === FLAVOR;
      });
      setItemCollectionShowing(filtered);
      setIsFiltered(true);
      setFilteringBase(FLAVOR);
      setMainItems(itemCollection);
    }

    if (isFiltered && filteringBase === FLAVOR) {
      setItemCollectionShowing(itemCollection);
      setFilteringBase("none");
    }
  }

  function handleQualitiesFilter(QUALITIES) {
    if (!isFiltered) {
      filtered = itemCollectionShowing.filter((itemCollectionShowing) => {
        return itemCollectionShowing.QUALITIES === QUALITIES;
      });
      setItemCollectionShowing(filtered);

      setIsFiltered(true);
      setFilteringBase(QUALITIES);
    }

    if (isFiltered && filteringBase !== QUALITIES) {
      filtered = mainItems.filter((itemCollectionShowing) => {
        return itemCollectionShowing.QUALITIES === QUALITIES;
      });
      setItemCollectionShowing(filtered);
      setIsFiltered(true);
      setFilteringBase(QUALITIES);
      setMainItems(itemCollection);
    }

    if (isFiltered && filteringBase === QUALITIES) {
      setItemCollectionShowing(itemCollection);
      setFilteringBase("none");
    }
  }

  function handleCaffeineFilter(CAFFEINE) {
    if (!isFiltered) {
      filtered = itemCollectionShowing.filter((itemCollectionShowing) => {
        return itemCollectionShowing.CAFFEINE === CAFFEINE;
      });
      setItemCollectionShowing(filtered);

      setIsFiltered(true);
      setFilteringBase(CAFFEINE);
    }

    if (isFiltered && filteringBase !== CAFFEINE) {
      filtered = mainItems.filter((itemCollectionShowing) => {
        return itemCollectionShowing.CAFFEINE === CAFFEINE;
      });
      setItemCollectionShowing(filtered);
      setIsFiltered(true);
      setFilteringBase(CAFFEINE);
      setMainItems(itemCollection);
    }

    if (isFiltered && filteringBase === CAFFEINE) {
      setItemCollectionShowing(itemCollection);
      setFilteringBase("none");
    }
  }

  function handleOrganicFilter(Organic) {
    if (!isFiltered) {
      filtered = itemCollectionShowing.filter((itemCollectionShowing) => {
        return itemCollectionShowing.ORGANIC === Organic;
      });
      setItemCollectionShowing(filtered);

      setIsFiltered(true);
      setFilteringBase(Organic);
    }

    if (isFiltered && filteringBase !== Organic) {
      filtered = mainItems.filter((itemCollectionShowing) => {
        return itemCollectionShowing.ORGANIC === Organic;
      });
      setItemCollectionShowing(filtered);
      setIsFiltered(true);
      setFilteringBase(Organic);
      setMainItems(itemCollection);
    }

    if (isFiltered && filteringBase === Organic) {
      setItemCollectionShowing(itemCollection);
      setFilteringBase("none");
    }
  }

  //To handle Sorting

  // Selected sorted option
  const [selectValue, setSelectValue] = useState("");

  // handle sorting functions
  useEffect(() => {
    if (selectValue === "Highest price to Lowest") {
      const sortedData = [...itemCollectionShowing].sort((a, b) =>
        a.price < b.price ? 1 : -1
      );

      setItemCollectionShowing(sortedData);
    }

    if (selectValue === "Lowest price to Highest") {
      const sortedData = [...itemCollectionShowing].sort((a, b) =>
        a.price > b.price ? 1 : -1
      );

      setItemCollectionShowing(sortedData);
    }
    if (selectValue === "Sort back to normal") {
      setItemCollectionShowing(itemCollection);
    }
  }, [selectValue]);

  //Drop-down logic

  // ShowCollections
  const [showCollections, setShowCollections] = useState(false);

  // ShowOrigin
  const [showOrigin, setShowOrigin] = useState(false);

  // Show Flavour
  const [showFlavour, setShowFlavour] = useState(false);

  // Show Qualities
  const [showQualities, setShowQualities] = useState(false);

  // Show Cafeine
  const [showCafeine, setShowCafeine] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("https://teabrand.onrender.com/api/items");

      const item = await response.json();

      if (response.ok) {
        // dispatcho({ type: "FETCHED-ALL", payload: json });
      }

      setItemCollection(item);
      setItemCollectionShowing(item);
      setMainItems(item);
    };

    fetchItems();
  }, []);

  useEffect(() => {
    handleGetAllImages();
  }, [fetchedImages]);

  let filtered = [];

  // Handle Get All Items Images
  const handleGetAllImages = async () => {
    // e.preventDefault();

    // const name = e.target.name.value;
    // const email = e.target.email.value;
    // const password = e.target.password.value;

    // console.log(name);
    // console.log(email);
    // console.log(password);

    // console.log("trying");

    if (AllItemsImages) {
      // console.log("item already exists");
      return;
    }

    // console.log("fetching now");

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
        setfetchedImages(true);

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

  return (
    <div className={styles.pageComponent}>
      <Image
        alt="image"
        className={styles.pageImage}
        src={require(`./../../../public/TeaCollections/Main.png`)}

        // className="iconImage"
      ></Image>
      <p className={styles.BreadCrumbs}>Directions BreadCrumbs</p>

      <div className={styles.Sorting}>
        <select
          className={styles.SortingSelect}
          // id="productType"

          // className="form-drop-down-style"
          // type="productType"
          // name="productType"
          onChange={(e) => setSelectValue(e.target.value)}
        >
          <option>SORT BY</option>
          <option>Highest price to Lowest</option>
          <option>Lowest price to Highest</option>
          <option>Sort back to normal</option>
        </select>
      </div>

      <div className={styles.ProductComponent}>
        <div className={styles.Productquery}>
          <div className={styles.ProductqueryMains}>
            <button>COLLECTIONS</button>
            <button
              onClick={() => {
                if (!showCollections) {
                  setShowCollections(true);
                  handleGetAllImages();
                }
                if (showCollections) {
                  setShowCollections(false);
                }
              }}
            >
              {!showCollections && (
                <Image
                  Image
                  alt="image"
                  src={require(`./../../../public/TeaCollections/+.png`)}
                ></Image>
              )}

              {showCollections && (
                <Image
                  alt="image"
                  src={require(`./../../../public/TeaCollections/-.png`)}
                ></Image>
              )}
            </button>
          </div>
          {showCollections &&
            itemCollection.map((item) => {
              return (
                <div key={item._id} className={styles.ProductqueryEachDetails}>
                  <div className={styles.ProductqueryEachDetailsButtonP}>
                    <button
                      style={{
                        backgroundColor:
                          filteringBase === item.name ? "black" : "white",
                      }}
                      onClick={() => {
                        handleNameFilter(item);

                        // if (!isFiltered) {
                        //   filtered = itemCollectionShowing.filter(
                        //     (itemCollectionShowing) => {
                        //       return itemCollectionShowing.name === item.name;
                        //     }
                        //   );
                        //   setItemCollectionShowing(filtered);

                        //   setIsFiltered(true);
                        //   setFilteringBase(item.name);
                        // }

                        // if (isFiltered && filteringBase !== item.name) {

                        //   filtered = mainItems.filter(
                        //     (itemCollectionShowing) => {
                        //       return itemCollectionShowing.name === item.name;
                        //     }
                        //   );
                        //   setItemCollectionShowing(filtered);
                        //   setIsFiltered(true);
                        //   setFilteringBase(item.name);
                        //   setMainItems(itemCollection);
                        // }

                        // if (isFiltered && filteringBase === item.name) {
                        //   setItemCollectionShowing(itemCollection);
                        //   setFilteringBase("none");
                        // }
                      }}
                    ></button>
                    <div>{item.name}</div>
                  </div>
                </div>
              );
            })}

          <div className={styles.ProductqueryMains}>
            <button>ORIGIN</button>
            <button
              onClick={() => {
                if (!showOrigin) {
                  setShowOrigin(true);
                }
                if (showOrigin) {
                  setShowOrigin(false);
                }
              }}
            >
              {!showOrigin && (
                <Image
                  alt="image"
                  src={require(`./../../../public/TeaCollections/+.png`)}
                ></Image>
              )}

              {showOrigin && (
                <Image
                  alt="image"
                  src={require(`./../../../public/TeaCollections/-.png`)}
                ></Image>
              )}
            </button>
          </div>

          {showOrigin &&
            itemCollection
              .filter((itemCollection) => {
                return itemCollection.ORIGIN;
              })
              .map((item) => {
                return (
                  <div
                    key={item._id}
                    className={styles.ProductqueryEachDetails}
                  >
                    <div className={styles.ProductqueryEachDetailsButtonP}>
                      <button
                        style={{
                          backgroundColor:
                            filteringBase === item.ORIGIN ? "black" : "white",
                        }}
                        onClick={() => {
                          handleOriginFilter(item);

                          // filtered = itemCollectionShowing.filter(
                          //   (itemCollectionShowing) => {
                          //     return (
                          //       itemCollectionShowing.ORIGIN === item.ORIGIN
                          //     );
                          //   }
                          // );
                          // setItemCollectionShowing(filtered);
                        }}
                      ></button>
                      <div>{item.ORIGIN}</div>
                    </div>
                  </div>
                );
              })}

          <div className={styles.ProductqueryMains}>
            <button>FLAVOUR</button>
            <button
              onClick={() => {
                if (!showFlavour) {
                  setShowFlavour(true);
                }
                if (showFlavour) {
                  setShowFlavour(false);
                }
              }}
            >
              {!showFlavour && (
                <Image
                  alt="image"
                  src={require(`./../../../public/TeaCollections/+.png`)}
                ></Image>
              )}

              {showFlavour && (
                <Image
                  alt="image"
                  src={require(`./../../../public/TeaCollections/-.png`)}
                ></Image>
              )}
            </button>
          </div>

          {showFlavour && (
            <div className={styles.ProductqueryEachDetails}>
              <div className={styles.ProductqueryEachDetailsButtonP}>
                <button
                  style={{
                    backgroundColor:
                      filteringBase === "sweet" ? "black" : "white",
                  }}
                  onClick={() => {
                    handleFlavourFilter("sweet");
                  }}
                ></button>
                <div>Sweet</div>
              </div>
              <div className={styles.ProductqueryEachDetailsButtonP}>
                <button
                  style={{
                    backgroundColor:
                      filteringBase === "Spicy" ? "black" : "white",
                  }}
                  onClick={() => {
                    handleFlavourFilter("Spicy");
                  }}
                ></button>
                <div>Spicy</div>
              </div>
              <div className={styles.ProductqueryEachDetailsButtonP}>
                <button
                  style={{
                    backgroundColor:
                      filteringBase === "Sour" ? "black" : "white",
                  }}
                  onClick={() => {
                    handleFlavourFilter("Sour");
                  }}
                ></button>
                <div>Sour</div>
              </div>
            </div>
          )}

          <div className={styles.ProductqueryMains}>
            <button>QUALITIES</button>
            <button
              onClick={() => {
                if (!showQualities) {
                  setShowQualities(true);
                }
                if (showQualities) {
                  setShowQualities(false);
                }
              }}
            >
              {!showQualities && (
                <Image
                  alt="image"
                  src={require(`./../../../public/TeaCollections/+.png`)}
                ></Image>
              )}

              {showQualities && (
                <Image
                  alt="image"
                  src={require(`./../../../public/TeaCollections/-.png`)}
                ></Image>
              )}
            </button>
          </div>

          {showQualities && (
            <div className={styles.ProductqueryEachDetails}>
              <div className={styles.ProductqueryEachDetailsButtonP}>
                <button
                  style={{
                    backgroundColor:
                      filteringBase === "Smoothing" ? "black" : "white",
                  }}
                  onClick={() => {
                    handleQualitiesFilter("Smoothing");
                  }}
                ></button>
                <div>Smoothing</div>
              </div>
              <div className={styles.ProductqueryEachDetailsButtonP}>
                <button
                  style={{
                    backgroundColor:
                      filteringBase === "Sweetery" ? "black" : "white",
                  }}
                  onClick={() => {
                    handleQualitiesFilter("Sweetery");
                  }}
                ></button>
                <div>Sweetery</div>
              </div>
              <div className={styles.ProductqueryEachDetailsButtonP}>
                <button
                  style={{
                    backgroundColor:
                      filteringBase === "Caffiend" ? "black" : "white",
                  }}
                  onClick={() => {
                    handleQualitiesFilter("Caffiend");
                  }}
                ></button>
                <div>Caffiend</div>
              </div>
            </div>
          )}

          <div className={styles.ProductqueryMains}>
            <button>CAFEINE</button>
            <button
              onClick={() => {
                if (!showCafeine) {
                  setShowCafeine(true);
                }
                if (showCafeine) {
                  setShowCafeine(false);
                }
              }}
            >
              {!showCafeine && (
                <Image
                  alt="image"
                  src={require(`./../../../public/TeaCollections/+.png`)}
                ></Image>
              )}

              {showCafeine && (
                <Image
                  alt="image"
                  src={require(`./../../../public/TeaCollections/-.png`)}
                ></Image>
              )}
            </button>
          </div>

          {showCafeine && (
            <div className={styles.ProductqueryEachDetails}>
              <div className={styles.ProductqueryEachDetailsButtonP}>
                <button
                  style={{
                    backgroundColor:
                      filteringBase === "Medium" ? "black" : "white",
                  }}
                  onClick={() => {
                    handleCaffeineFilter("Medium");
                  }}
                ></button>
                <div>Medium</div>
              </div>
              <div className={styles.ProductqueryEachDetailsButtonP}>
                <button
                  style={{
                    backgroundColor:
                      filteringBase === "Low" ? "black" : "white",
                  }}
                  onClick={() => {
                    handleCaffeineFilter("Low");
                  }}
                ></button>
                <div>Low</div>
              </div>
              <div className={styles.ProductqueryEachDetailsButtonP}>
                <button
                  style={{
                    backgroundColor:
                      filteringBase === "High" ? "black" : "white",
                  }}
                  onClick={() => {
                    handleCaffeineFilter("High");
                  }}
                ></button>
                <div>High</div>
              </div>
            </div>
          )}

          <section className={styles.organicButton}>
            <p>ORGANIC</p>
            <button
              style={{
                backgroundColor:
                  filteringBase === "ORGANIC" ? "black" : "white",
              }}
              onClick={() => {
                if (!isFiltered) {
                  filtered = itemCollectionShowing.filter(
                    (itemCollectionShowing) => {
                      return itemCollectionShowing.ORGANIC === "ORGANIC";
                    }
                  );
                  setItemCollectionShowing(filtered);

                  setIsFiltered(true);
                  setFilteringBase("ORGANIC");
                }

                if (isFiltered && filteringBase !== "ORGANIC") {
                  filtered = mainItems.filter((itemCollectionShowing) => {
                    return itemCollectionShowing.ORGANIC === "ORGANIC";
                  });
                  setItemCollectionShowing(filtered);
                  setIsFiltered(true);
                  setFilteringBase("ORGANIC");
                  setMainItems(itemCollection);
                }

                if (isFiltered && filteringBase === "ORGANIC") {
                  setItemCollectionShowing(itemCollection);
                  setFilteringBase("none");
                }
              }}
            ></button>
          </section>
        </div>

        <div className={styles.ProductEachItem}>
          {AllItemsImages &&
            itemCollectionShowing.map((item) => {
              return (
                <div key={item._id}>
                  <Link
                    href={"/collections/" + item._id}
                    className={styles.productEachItemFlex}
                  >
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
                    <div className={styles.productItemName}> {item.name}</div>
                    <div className={styles.productItemPriceAndGram}>
                      <div className={styles.productItemPrice}>
                        ${item.price}
                      </div>
                      <div>/50 gram</div>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Collections;
