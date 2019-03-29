import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import styles from "../../CSS/footer.styl";

function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div>
        <p>&copy; 2019 Erik Bridges</p>
      </div>
      <div>
        <div className={styles["footer__social"]}>
          <a
            href="https://www.linkedin.com/in/erik-bridges/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon size="lg" icon={faLinkedinIn} />
          </a>
          <a
            href="https://github.com/erikbridges"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon size="lg" icon={faGithub} />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
