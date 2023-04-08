import styles from "../app/footer.module.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const LandingPageFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.about}>
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus.
          </p>
          <div className={styles.social}>
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className={styles.links}>
          <h3>Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className={styles.contact}>
          <h3>Contact Us</h3>
          <ul>
            <li>123 Main St.</li>
            <li>New York, NY 10001</li>
            <li>info@example.com</li>
            <li>(555) 555-5555</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default LandingPageFooter;
