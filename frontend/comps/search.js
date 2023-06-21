"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./search.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Search = (props) => {
  // ITEM props
  // console.log(props.items);
  const AllItems = props.items;

  // Input
  const [searchInput, setSearchInput] = useState("");

  // Item Search Item if found
  const [searchFound, setSearchFound] = useState([]);

  // console.log(searchFound);

  // Error not found if clicked
  const [notFound, setNotFound] = useState(false);

  // console.log(notFound);

  let filteredId;
  // let SearchInputToLowerCase;

  useEffect(() => {
    if (searchInput) {
      // console.log("not empty");

      //     let searchedNameobject;

      // searchedNameobject = allItems.find(
      //   (item) => item.name.toLowerCase() === title
      // );

      // SearchInputToLowerCase = searchInput.toLowerCase();

      // console.log(SearchInputToLowerCase);

      filteredId = AllItems.filter((AllItems) => {
        return AllItems.name.toLowerCase() === searchInput.toLowerCase();
      });

      if (Object.keys(filteredId).length > 0) {
        // console.log("there is an item, item found");
        setSearchFound(filteredId[0]);
      }

      if (Object.keys(filteredId).length === 0) {
        // console.log("none");
        setSearchFound([]);
      }
    }
  }, [searchInput]);

  return (
    <div className={styles.component}>
      <div className={styles.componentFlex}>
        <input
          onChange={(e) => {
            setSearchInput(e.target.value);
            setNotFound(false);
          }}
          type="text"
          required
          className={styles.input}
          placeholder="Search"
        ></input>

        {Object.keys(searchFound).length > 0 && (
          <Link
            href={"/collections/" + searchFound._id}
            className={styles.buttonFound}
            onClick={() => {
              setSearchFound([]);
            }}
          >
            Search
          </Link>
        )}

        {Object.keys(searchFound).length === 0 && (
          <button
            onClick={() => {
              setNotFound(true);
            }}
            className={styles.button}
          >
            Search
          </button>
        )}
      </div>
      {notFound && (
        <p className={styles.errorNotFound}>Please enter a valid name item</p>
      )}
    </div>
  );
};

export default Search;
