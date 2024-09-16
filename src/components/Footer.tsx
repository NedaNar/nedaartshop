import instagram from "../assets/images/instagram.png";
import linkedin from "../assets/images/linkedin.png";
import email from "../assets/images/email.png";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <footer className="page-footer blue-grey darken-2">
        <div className="container">
          <div className="row">
            <ul>
              <a
                href="https://www.instagram.com/nneda_art/"
                target="_blank"
                className={`btn-floating btn teal lighten-1 ${styles.iconButton}`}
              >
                <img className={styles.icon} src={instagram}></img>
              </a>

              <a
                href="https://www.linkedin.com/in/neda-narmontaite/"
                target="_blank"
                className={`btn-floating btn teal lighten-1 ${styles.iconButton}`}
              >
                <img className={styles.icon} src={linkedin}></img>
              </a>

              <a
                href=""
                target="_blank"
                className={`btn-floating btn teal lighten-1 ${styles.iconButton}`}
              >
                <img className={styles.icon} src={email}></img>
              </a>
            </ul>
          </div>
        </div>
        <div className="footer-copyright blue-grey darken-3">
          <div className="container">
            © 2024 Neda's Shop, All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
