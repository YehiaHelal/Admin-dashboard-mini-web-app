import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerWhole}>
      <div className={styles.footerComponent}>
        <div>
          <h3>COLLECTIONS</h3>

          <Link href="/collections">Black teas</Link>
          <Link href="/collections">Green teas</Link>
          <Link href="/collections">White teas</Link>
          <Link href="/collections">Herbal teas</Link>
          <Link href="/collections">Matcha</Link>
          <Link href="/collections">Chai</Link>
          <Link href="/collections">Oolong</Link>
          <Link href="/collections">Rooibos</Link>
          <Link href="/collections">Teaware</Link>
        </div>
        <div className={styles.AboutUs}>
          <h3>LEARN</h3>
          <Link href="/contacts">About us</Link>
          <Link href="/Blog">About our teas</Link>
          <Link href="/Blog">Tea academy</Link>
        </div>
        <div>
          <h3>CUSTOMER SERVICE</h3>
          <Link href="/contacts">Ordering and payment </Link>
          <Link href="/contacts">Delivery</Link>
          <Link href="/contacts">Privacy and policy</Link>
          <Link href="/contacts">Terms & Conditions</Link>
        </div>
        <div>
          <h3>CONTACT US</h3>
          <p>3 Falahi, Falahi St, Pasdaran Ave, Shiraz, Fars Provieence</p>
          <p>Email: amoopurr@gmail.com </p>
          <p>Tel: +20 1234567890 </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
