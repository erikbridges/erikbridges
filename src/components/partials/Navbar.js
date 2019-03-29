import React from "react";
import Media from "react-media";
import styles from "../../CSS/navbar.styl";
import classNames from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [state, setState] = useState({
    active: false
  });
  const toggleNav = () => setState({ active: !state.active });
  return (
    <Media query="(min-width: 968px)">
      {matches =>
        matches ? (
          <nav className={styles["navbar"]}>
            <div className={styles["logo"]}>
              <span>E</span>
              <span>B</span>
            </div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Creations</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        ) : (
          <nav className={styles["navbar__mobile"]}>
            <div
              className={styles["navbar__collapse"]}
              onClick={() => toggleNav()}
            >
              <span />
              <span />
              <span />
            </div>
            <div className={styles["logo"]}>
              <span>E</span>
              <span>B</span>
            </div>
            <div id={classNames({ [styles["overlay"]]: state.active })} />
            <div
              className={classNames({
                [styles["navbar__wrapper"]]: true,
                [styles["active"]]: state.active
              })}
            >
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/portfolio">Creations</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </nav>
        )
      }
    </Media>
  );
}

export default Navbar;
