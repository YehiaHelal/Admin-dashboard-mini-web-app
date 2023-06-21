"use client";

import Image from "next/image";
// import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import Footer from "../../comps/footer";
// import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// const inter = Inter({ subsets: ["latin"] });

function Home() {
  const [itemCollection, setItemCollection] = useState([]);

  // show only the first 8 items

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("https://teabrand.onrender.com/api/items");

      const item = await response.json();
      // console.log("there");

      if (response.ok) {
        // dispatcho({ type: "FETCHED-ALL", payload: json });
        // console.log("there");
      }

      // console.log(item);

      setItemCollection(item.slice(0, 8));
    };

    fetchItems();
  }, []);

  return (
    <div className={styles.homepageComponent}>
      <div className={styles.homepageFirstPart}>
        <Image
          alt="image"
          className={styles.homepageImage}
          src={require(`./../../public/Homepage/home-page-image-1.png`)}
        ></Image>
        <div className={styles.homepageFirstPartRight}>
          <h1>Every day is unique, just like our tea</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>

          <Link href={"/collections/"} className={styles.firstPartButton}>
            <button className={styles.homepageFirstPartRightbutton}>
              BROWSES TEA COLLECTIONS
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.homepageSecondPart}>
        <div className={styles.homepageSecondPartFirst}>
          <div className={styles.homepageSecondPartFirstEach}>
            <Image
              alt="image"
              className={styles.homepageImage}
              src={require(`./../../public/Homepage/Icons/1.png`)}
              // className="iconImage"
            ></Image>
            <div>450+ KIND OF LOOSEF TEA</div>
          </div>
          <div className={styles.homepageSecondPartFirstEach}>
            <Image
              alt="image"
              className={styles.homepageImage}
              src={require(`./../../public/Homepage/Icons/3.png`)}
              // className="iconImage"
            ></Image>
            <div>CERTIFICATED ORGANIC TEAS</div>
          </div>
          <div className={styles.homepageSecondPartFirstEach}>
            <Image
              alt="image"
              className={styles.homepageImage}
              src={require(`./../../public/Homepage/Icons/4.png`)}
              // className="iconImage"
            ></Image>
            <div>FREE DELIVERY</div>
          </div>
          <div className={styles.homepageSecondPartFirstEach}>
            <Image
              alt="image"
              className={styles.homepageImage}
              src={require(`./../../public/Homepage/Icons/2.png`)}
              // className="iconImage"
            ></Image>
            <div>SAMPLE FOR ALL TEAS</div>
          </div>
        </div>
        <div className={styles.homepageSecondPartSecond}>
          <Link href={"/Blog/"}>
            <button>LEARN MORE</button>
          </Link>
        </div>
      </div>

      {/* section 3 */}
      <section>
        <div className={styles.sectionthreeTitle}>
          <h1>Our Collections</h1>
        </div>

        <div className={styles.sectionthreeProducts}>
          {itemCollection &&
            // Object.keys(itemCollection).length > 0
            itemCollection.map((item) => {
              return (
                <div key={item._id} className={styles.sectionthreeEachProduct}>
                  <Link
                    href={"/collections/" + item._id}
                    className={styles.sectionthreeEachProductLink}
                  >
                    <Image
                      alt="image"
                      // src={`https://next-ecommerce-s3.s3.eu-north-1.amazonaws.com/items/${item.name}.png`}
                      // width={300}
                      // height={300}
                      src={require(`./../../public/Categories/${item.name}.png`)}
                      // className="iconImage"
                    ></Image>
                    <p> {item.name}</p>
                  </Link>
                </div>
              );
            })}
        </div>
      </section>
      {/* section 4 */}
      <section>
        <div className={styles.sectionfourTitle}>
          <h1>Last Blog Posts</h1>
        </div>
        <div className={styles.sectionfourComponent}>
          <Image
            alt="image"
            // className={styles.homepageImage}
            src={require(`./../../public/Homepage/Landing Main Image3.png`)}
            // className="iconImage"
          ></Image>
          <div className={styles.sectionfourTextContent}>
            <h2>HOW TO STEEP TEA LIKE A PRO</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              dictum non consectetur a erat nam at. Risus nec feugiat in
              fermentum posuere urna nec tincidunt praesent.{" "}
            </p>
            <Link href="/Blog">READ MORE</Link>
          </div>
          <Image
            alt="image"
            // className={styles.homepageImage}
            src={require(`./../../public/Homepage/Landing Main Image4.png`)}
            // className="iconImage"
          ></Image>
          <div className={styles.sectionfourTextContent}>
            <h2>ALL ABOUT TEA AROMAS</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              dictum non consectetur a erat nam at. Risus nec feugiat in
              fermentum posuere urna nec tincidunt praesent.
            </p>
            <Link href="/Blog">READ MORE</Link>
          </div>
        </div>
      </section>

      {/* section 5 */}
      <section>
        <div className={styles.sectionfiveComponent}>
          <div className={styles.sectionfiveTextContent}>
            <h1>FOR WHOLESALERS</h1>
            <p>
              We offer loose tea leaves of the best quality for your business.
              With a choice of more than 450 different kinds of loose tea, we
              can make a sophisticated selection that fits exactly in your kind
              of establishment.
            </p>
            <Link href="/Blog">GET A FREE CONSULTATION</Link>
          </div>

          <Image
            alt="image"
            // className={styles.homepageImage}
            src={require(`./../../public/Homepage/Landing Main Image2.png`)}
            // className="iconImage"
          ></Image>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
