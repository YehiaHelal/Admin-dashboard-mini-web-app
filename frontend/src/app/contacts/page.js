"use client";

import Image from "next/image";
// import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import Footer from "../../../comps/footer";
// import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const BlogPage = () => {
  return (
    <div className={styles.resetPasswordComponent}>
      <section className={styles.sectionfourSectionComponent}>
        <div>
          <div className={styles.sectionfourTitle}>
            <h1>About Us</h1>
          </div>
          <div className={styles.sectionfourComponent}>
            <div className={styles.sectionfourTextContent}>
              <h3>Our Brand is Lorem ipsum dolor sit amet,</h3>
              <p>
                Our vision: Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Diam quam nulla porttitor massa id neque aliquam. Nulla
                posuere sollicitudin aliquam ultrices sagittis orci a
                scelerisque. Et pharetra pharetra massa massa ultricies.
                Parturient montes nascetur ridiculus mus mauris vitae ultricies.
                Felis eget nunc lobortis mattis. A erat nam at lectus urna.
                Neque aliquam vestibulum morbi blandit cursus risus. Nunc
                lobortis mattis aliquam faucibus purus. Feugiat nibh sed
                pulvinar proin gravida. Lacus suspendisse faucibus interdum
                posuere. Dolor purus non enim praesent elementum facilisis. Nisi
                scelerisque eu ultrices vitae auctor. Sed turpis tincidunt id
                aliquet risus feugiat. Parturient montes nascetur ridiculus mus.
                Sit amet venenatis urna cursus eget nunc scelerisque. In
                fermentum et sollicitudin ac orci phasellus egestas.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className={styles.sectionfourTitle}>
            <h1>Our Contacts</h1>
          </div>
          <div className={styles.sectionfourComponent}>
            <div className={styles.sectionfourTextContent}>
              <h3 className={styles.sectionfourTextContenth3}>
                Address Information:
              </h3>
              <div>
                BRANCH 1 ADDRESS: 3 Falahi, Falahi St, Pasdaran Ave, Shiraz,
                Provieence
              </div>
              <div>
                BRANCH 2 ADDRESS: 10 Falahi, Falahi St, Pasdaran Ave, Shiraz,
                Provieence
              </div>
              <h3 className={styles.sectionfourTextContenth3}>
                Telephone Information:
              </h3>
              {/* <div>MOBILE: 01234567901</div> */}
              <div>Tel: +20 1234567890</div>
              <div>Tel: +20 1234567891</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogPage;
