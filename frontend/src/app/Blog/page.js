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
      <section>
        <div className={styles.sectionfourTitle}>
          <h1>Blogs</h1>
        </div>
        <div className={styles.sectionfourComponent}>
          <Image
            alt="image"
            // className={styles.homepageImage}
            src={require(`./../../../public/Homepage/Landing Main Image3.png`)}
            // className="iconImage"
          ></Image>
          <div className={styles.sectionfourTextContent}>
            <h3>HOW TO STEEP TEA LIKE A PRO</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
              quam nulla porttitor massa id neque aliquam. Nulla posuere
              sollicitudin aliquam ultrices sagittis orci a scelerisque. Et
              pharetra pharetra massa massa ultricies. Parturient montes
              nascetur ridiculus mus mauris vitae ultricies. Felis eget nunc
              lobortis mattis. A erat nam at lectus urna. Neque aliquam
              vestibulum morbi blandit cursus risus. Nunc lobortis mattis
              aliquam faucibus purus. Feugiat nibh sed pulvinar proin gravida.
              Lacus suspendisse faucibus interdum posuere. Dolor purus non enim
              praesent elementum facilisis. Nisi scelerisque eu ultrices vitae
              auctor. Sed turpis tincidunt id aliquet risus feugiat. Parturient
              montes nascetur ridiculus mus. Sit amet venenatis urna cursus eget
              nunc scelerisque. In fermentum et sollicitudin ac orci phasellus
              egestas.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
              quam nulla porttitor massa id neque aliquam. Nulla posuere
              sollicitudin aliquam ultrices sagittis orci a scelerisque. Et
              pharetra pharetra massa massa ultricies. Parturient montes
              nascetur ridiculus mus mauris vitae ultricies. Felis eget nunc
              lobortis mattis. A erat nam at lectus urna. Neque aliquam
              vestibulum morbi blandit cursus risus. Nunc lobortis mattis
              aliquam faucibus purus. Feugiat nibh sed pulvinar proin gravida.
              Lacus suspendisse faucibus interdum posuere. Dolor purus non enim
              praesent elementum facilisis. Nisi scelerisque eu ultrices vitae
              auctor. Sed turpis tincidunt id aliquet risus feugiat. Parturient
              montes nascetur ridiculus mus. Sit amet venenatis urna cursus eget
              nunc scelerisque. In fermentum et sollicitudin ac orci phasellus
              egestas.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
              quam nulla porttitor massa id neque aliquam. Nulla posuere
              sollicitudin aliquam ultrices sagittis orci a scelerisque. Et
              pharetra pharetra massa massa ultricies. Parturient montes
              nascetur ridiculus mus mauris vitae ultricies. Felis eget nunc
              lobortis mattis. A erat nam at lectus urna. Neque aliquam
              vestibulum morbi blandit cursus risus. Nunc lobortis mattis
              aliquam faucibus purus. Feugiat nibh sed pulvinar proin gravida.
              Lacus suspendisse faucibus interdum posuere. Dolor purus non enim
              praesent elementum facilisis. Nisi scelerisque eu ultrices vitae
              auctor. Sed turpis tincidunt id aliquet risus feugiat. Parturient
              montes nascetur ridiculus mus. Sit amet venenatis urna cursus eget
              nunc scelerisque. In fermentum et sollicitudin ac orci phasellus
              egestas.
            </p>
            {/* <Link href="/Blog">READ MORE</Link> */}
          </div>
          <Image
            alt="image"
            // className={styles.homepageImage}
            src={require(`./../../../public/Homepage/Landing Main Image4.png`)}
            // className="iconImage"
          ></Image>
          <div className={styles.sectionfourTextContent}>
            <h2>ALL ABOUT TEA AROMAS</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
              quam nulla porttitor massa id neque aliquam. Nulla posuere
              sollicitudin aliquam ultrices sagittis orci a scelerisque. Et
              pharetra pharetra massa massa ultricies. Parturient montes
              nascetur ridiculus mus mauris vitae ultricies. Felis eget nunc
              lobortis mattis. A erat nam at lectus urna. Neque aliquam
              vestibulum morbi blandit cursus risus. Nunc lobortis mattis
              aliquam faucibus purus. Feugiat nibh sed pulvinar proin gravida.
              Lacus suspendisse faucibus interdum posuere. Dolor purus non enim
              praesent elementum facilisis. Nisi scelerisque eu ultrices vitae
              auctor. Sed turpis tincidunt id aliquet risus feugiat. Parturient
              montes nascetur ridiculus mus. Sit amet venenatis urna cursus eget
              nunc scelerisque. In fermentum et sollicitudin ac orci phasellus
              egestas.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
              quam nulla porttitor massa id neque aliquam. Nulla posuere
              sollicitudin aliquam ultrices sagittis orci a scelerisque. Et
              pharetra pharetra massa massa ultricies. Parturient montes
              nascetur ridiculus mus mauris vitae ultricies. Felis eget nunc
              lobortis mattis. A erat nam at lectus urna. Neque aliquam
              vestibulum morbi blandit cursus risus. Nunc lobortis mattis
              aliquam faucibus purus. Feugiat nibh sed pulvinar proin gravida.
              Lacus suspendisse faucibus interdum posuere. Dolor purus non enim
              praesent elementum facilisis. Nisi scelerisque eu ultrices vitae
              auctor. Sed turpis tincidunt id aliquet risus feugiat. Parturient
              montes nascetur ridiculus mus. Sit amet venenatis urna cursus eget
              nunc scelerisque. In fermentum et sollicitudin ac orci phasellus
              egestas.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
              quam nulla porttitor massa id neque aliquam. Nulla posuere
              sollicitudin aliquam ultrices sagittis orci a scelerisque. Et
              pharetra pharetra massa massa ultricies. Parturient montes
              nascetur ridiculus mus mauris vitae ultricies. Felis eget nunc
              lobortis mattis. A erat nam at lectus urna. Neque aliquam
              vestibulum morbi blandit cursus risus. Nunc lobortis mattis
              aliquam faucibus purus. Feugiat nibh sed pulvinar proin gravida.
              Lacus suspendisse faucibus interdum posuere. Dolor purus non enim
              praesent elementum facilisis. Nisi scelerisque eu ultrices vitae
              auctor. Sed turpis tincidunt id aliquet risus feugiat. Parturient
              montes nascetur ridiculus mus. Sit amet venenatis urna cursus eget
              nunc scelerisque. In fermentum et sollicitudin ac orci phasellus
              egestas.
            </p>
            {/* <Link href="/Blog">READ MORE</Link> */}
          </div>
          <Image
            alt="image"
            // className={styles.homepageImage}
            src={require(`./../../../public/Homepage/Landing Main Image2.png`)}
            // className="iconImage"
          ></Image>
          <div className={styles.sectionfourTextContent}>
            <h2>ALL ABOUT TEA AROMAS</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
              quam nulla porttitor massa id neque aliquam. Nulla posuere
              sollicitudin aliquam ultrices sagittis orci a scelerisque. Et
              pharetra pharetra massa massa ultricies. Parturient montes
              nascetur ridiculus mus mauris vitae ultricies. Felis eget nunc
              lobortis mattis. A erat nam at lectus urna. Neque aliquam
              vestibulum morbi blandit cursus risus. Nunc lobortis mattis
              aliquam faucibus purus. Feugiat nibh sed pulvinar proin gravida.
              Lacus suspendisse faucibus interdum posuere. Dolor purus non enim
              praesent elementum facilisis. Nisi scelerisque eu ultrices vitae
              auctor. Sed turpis tincidunt id aliquet risus feugiat. Parturient
              montes nascetur ridiculus mus. Sit amet venenatis urna cursus eget
              nunc scelerisque. In fermentum et sollicitudin ac orci phasellus
              egestas.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
              quam nulla porttitor massa id neque aliquam. Nulla posuere
              sollicitudin aliquam ultrices sagittis orci a scelerisque. Et
              pharetra pharetra massa massa ultricies. Parturient montes
              nascetur ridiculus mus mauris vitae ultricies. Felis eget nunc
              lobortis mattis. A erat nam at lectus urna. Neque aliquam
              vestibulum morbi blandit cursus risus. Nunc lobortis mattis
              aliquam faucibus purus. Feugiat nibh sed pulvinar proin gravida.
              Lacus suspendisse faucibus interdum posuere. Dolor purus non enim
              praesent elementum facilisis. Nisi scelerisque eu ultrices vitae
              auctor. Sed turpis tincidunt id aliquet risus feugiat. Parturient
              montes nascetur ridiculus mus. Sit amet venenatis urna cursus eget
              nunc scelerisque. In fermentum et sollicitudin ac orci phasellus
              egestas.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
              quam nulla porttitor massa id neque aliquam. Nulla posuere
              sollicitudin aliquam ultrices sagittis orci a scelerisque. Et
              pharetra pharetra massa massa ultricies. Parturient montes
              nascetur ridiculus mus mauris vitae ultricies. Felis eget nunc
              lobortis mattis. A erat nam at lectus urna. Neque aliquam
              vestibulum morbi blandit cursus risus. Nunc lobortis mattis
              aliquam faucibus purus. Feugiat nibh sed pulvinar proin gravida.
              Lacus suspendisse faucibus interdum posuere. Dolor purus non enim
              praesent elementum facilisis. Nisi scelerisque eu ultrices vitae
              auctor. Sed turpis tincidunt id aliquet risus feugiat. Parturient
              montes nascetur ridiculus mus. Sit amet venenatis urna cursus eget
              nunc scelerisque. In fermentum et sollicitudin ac orci phasellus
              egestas.
            </p>
            {/* <Link href="/Blog">READ MORE</Link> */}
          </div>
          <Image
            alt="image"
            // className={styles.homepageImage}
            src={require(`./../../../public/Homepage/home-page-image-1.png`)}
            // className="iconImage"
          ></Image>
          <div className={styles.sectionfourTextContent}>
            <h2>ALL ABOUT TEA AROMAS</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
              quam nulla porttitor massa id neque aliquam. Nulla posuere
              sollicitudin aliquam ultrices sagittis orci a scelerisque. Et
              pharetra pharetra massa massa ultricies. Parturient montes
              nascetur ridiculus mus mauris vitae ultricies. Felis eget nunc
              lobortis mattis. A erat nam at lectus urna. Neque aliquam
              vestibulum morbi blandit cursus risus. Nunc lobortis mattis
              aliquam faucibus purus. Feugiat nibh sed pulvinar proin gravida.
              Lacus suspendisse faucibus interdum posuere. Dolor purus non enim
              praesent elementum facilisis. Nisi scelerisque eu ultrices vitae
              auctor. Sed turpis tincidunt id aliquet risus feugiat. Parturient
              montes nascetur ridiculus mus. Sit amet venenatis urna cursus eget
              nunc scelerisque. In fermentum et sollicitudin ac orci phasellus
              egestas.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
              quam nulla porttitor massa id neque aliquam. Nulla posuere
              sollicitudin aliquam ultrices sagittis orci a scelerisque. Et
              pharetra pharetra massa massa ultricies. Parturient montes
              nascetur ridiculus mus mauris vitae ultricies. Felis eget nunc
              lobortis mattis. A erat nam at lectus urna. Neque aliquam
              vestibulum morbi blandit cursus risus. Nunc lobortis mattis
              aliquam faucibus purus. Feugiat nibh sed pulvinar proin gravida.
              Lacus suspendisse faucibus interdum posuere. Dolor purus non enim
              praesent elementum facilisis. Nisi scelerisque eu ultrices vitae
              auctor. Sed turpis tincidunt id aliquet risus feugiat. Parturient
              montes nascetur ridiculus mus. Sit amet venenatis urna cursus eget
              nunc scelerisque. In fermentum et sollicitudin ac orci phasellus
              egestas.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
              quam nulla porttitor massa id neque aliquam. Nulla posuere
              sollicitudin aliquam ultrices sagittis orci a scelerisque. Et
              pharetra pharetra massa massa ultricies. Parturient montes
              nascetur ridiculus mus mauris vitae ultricies. Felis eget nunc
              lobortis mattis. A erat nam at lectus urna. Neque aliquam
              vestibulum morbi blandit cursus risus. Nunc lobortis mattis
              aliquam faucibus purus. Feugiat nibh sed pulvinar proin gravida.
              Lacus suspendisse faucibus interdum posuere. Dolor purus non enim
              praesent elementum facilisis. Nisi scelerisque eu ultrices vitae
              auctor. Sed turpis tincidunt id aliquet risus feugiat. Parturient
              montes nascetur ridiculus mus. Sit amet venenatis urna cursus eget
              nunc scelerisque. In fermentum et sollicitudin ac orci phasellus
              egestas.
            </p>
            {/* <Link href="/Blog">READ MORE</Link> */}
          </div>
          <Image
            alt="image"
            // className={styles.homepageImage}
            src={require(`./../../../public/Categories/Black tea.png`)}
            // className="iconImage"
          ></Image>
          <div className={styles.sectionfourTextContent}>
            <h2>ALL ABOUT TEA AROMAS</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
              quam nulla porttitor massa id neque aliquam. Nulla posuere
              sollicitudin aliquam ultrices sagittis orci a scelerisque. Et
              pharetra pharetra massa massa ultricies. Parturient montes
              nascetur ridiculus mus mauris vitae ultricies. Felis eget nunc
              lobortis mattis. A erat nam at lectus urna. Neque aliquam
              vestibulum morbi blandit cursus risus. Nunc lobortis mattis
              aliquam faucibus purus. Feugiat nibh sed pulvinar proin gravida.
              Lacus suspendisse faucibus interdum posuere. Dolor purus non enim
              praesent elementum facilisis. Nisi scelerisque eu ultrices vitae
              auctor. Sed turpis tincidunt id aliquet risus feugiat. Parturient
              montes nascetur ridiculus mus. Sit amet venenatis urna cursus eget
              nunc scelerisque. In fermentum et sollicitudin ac orci phasellus
              egestas.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
              quam nulla porttitor massa id neque aliquam. Nulla posuere
              sollicitudin aliquam ultrices sagittis orci a scelerisque. Et
              pharetra pharetra massa massa ultricies. Parturient montes
              nascetur ridiculus mus mauris vitae ultricies. Felis eget nunc
              lobortis mattis. A erat nam at lectus urna. Neque aliquam
              vestibulum morbi blandit cursus risus. Nunc lobortis mattis
              aliquam faucibus purus. Feugiat nibh sed pulvinar proin gravida.
              Lacus suspendisse faucibus interdum posuere. Dolor purus non enim
              praesent elementum facilisis. Nisi scelerisque eu ultrices vitae
              auctor. Sed turpis tincidunt id aliquet risus feugiat. Parturient
              montes nascetur ridiculus mus. Sit amet venenatis urna cursus eget
              nunc scelerisque. In fermentum et sollicitudin ac orci phasellus
              egestas.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
              quam nulla porttitor massa id neque aliquam. Nulla posuere
              sollicitudin aliquam ultrices sagittis orci a scelerisque. Et
              pharetra pharetra massa massa ultricies. Parturient montes
              nascetur ridiculus mus mauris vitae ultricies. Felis eget nunc
              lobortis mattis. A erat nam at lectus urna. Neque aliquam
              vestibulum morbi blandit cursus risus. Nunc lobortis mattis
              aliquam faucibus purus. Feugiat nibh sed pulvinar proin gravida.
              Lacus suspendisse faucibus interdum posuere. Dolor purus non enim
              praesent elementum facilisis. Nisi scelerisque eu ultrices vitae
              auctor. Sed turpis tincidunt id aliquet risus feugiat. Parturient
              montes nascetur ridiculus mus. Sit amet venenatis urna cursus eget
              nunc scelerisque. In fermentum et sollicitudin ac orci phasellus
              egestas.
            </p>
            {/* <Link href="/Blog">READ MORE</Link> */}
          </div>
          <Image
            alt="image"
            // className={styles.homepageImage}
            src={require(`./../../../public/Categories/Chai.png`)}
            // className="iconImage"
          ></Image>
          <div className={styles.sectionfourTextContent}>
            <h2>ALL ABOUT TEA AROMAS</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
              quam nulla porttitor massa id neque aliquam. Nulla posuere
              sollicitudin aliquam ultrices sagittis orci a scelerisque. Et
              pharetra pharetra massa massa ultricies. Parturient montes
              nascetur ridiculus mus mauris vitae ultricies. Felis eget nunc
              lobortis mattis. A erat nam at lectus urna. Neque aliquam
              vestibulum morbi blandit cursus risus. Nunc lobortis mattis
              aliquam faucibus purus. Feugiat nibh sed pulvinar proin gravida.
              Lacus suspendisse faucibus interdum posuere. Dolor purus non enim
              praesent elementum facilisis. Nisi scelerisque eu ultrices vitae
              auctor. Sed turpis tincidunt id aliquet risus feugiat. Parturient
              montes nascetur ridiculus mus. Sit amet venenatis urna cursus eget
              nunc scelerisque. In fermentum et sollicitudin ac orci phasellus
              egestas.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
              quam nulla porttitor massa id neque aliquam. Nulla posuere
              sollicitudin aliquam ultrices sagittis orci a scelerisque. Et
              pharetra pharetra massa massa ultricies. Parturient montes
              nascetur ridiculus mus mauris vitae ultricies. Felis eget nunc
              lobortis mattis. A erat nam at lectus urna. Neque aliquam
              vestibulum morbi blandit cursus risus. Nunc lobortis mattis
              aliquam faucibus purus. Feugiat nibh sed pulvinar proin gravida.
              Lacus suspendisse faucibus interdum posuere. Dolor purus non enim
              praesent elementum facilisis. Nisi scelerisque eu ultrices vitae
              auctor. Sed turpis tincidunt id aliquet risus feugiat. Parturient
              montes nascetur ridiculus mus. Sit amet venenatis urna cursus eget
              nunc scelerisque. In fermentum et sollicitudin ac orci phasellus
              egestas.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
              quam nulla porttitor massa id neque aliquam. Nulla posuere
              sollicitudin aliquam ultrices sagittis orci a scelerisque. Et
              pharetra pharetra massa massa ultricies. Parturient montes
              nascetur ridiculus mus mauris vitae ultricies. Felis eget nunc
              lobortis mattis. A erat nam at lectus urna. Neque aliquam
              vestibulum morbi blandit cursus risus. Nunc lobortis mattis
              aliquam faucibus purus. Feugiat nibh sed pulvinar proin gravida.
              Lacus suspendisse faucibus interdum posuere. Dolor purus non enim
              praesent elementum facilisis. Nisi scelerisque eu ultrices vitae
              auctor. Sed turpis tincidunt id aliquet risus feugiat. Parturient
              montes nascetur ridiculus mus. Sit amet venenatis urna cursus eget
              nunc scelerisque. In fermentum et sollicitudin ac orci phasellus
              egestas.
            </p>
            {/* <Link href="/Blog">READ MORE</Link> */}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogPage;
