import React from "react";
import { Fragment } from "react";
import { useState } from "react";
import styles from "../CSS/contact.styl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
const Contact = () => {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
    error: false
  });
  const changeInput = e => {
    e.preventDefault();
    return setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };
  const checkForm = e => {
    const listItems = Object.values({ ...state, error: "false" });
    const checkItems = listItems.filter(value => value === "");
    if (checkItems.length !== 0) {
      e.preventDefault();
      return setState({ ...state, error: true });
    }
  };
  const renderFormTitle = () => {
    return (
      <Fragment>
        {state.error ? (
          <div className={styles["error-box"]}>
            <h2>Error</h2>
            <p>
              Oops! Looks like your form is incomplete. Please complete the form
              continue.
            </p>
          </div>
        ) : null}
        <h2>Contact Form</h2>
        <p>
          Please fill out the form and I will get back to you as soon as I can.
          Please allow 24 to 48 hours for me to respond.
        </p>
      </Fragment>
    );
  };
  const renderFormParts = () => {
    return (
      <Fragment>
        <div className={styles["form__wrap"]}>
          <label htmlFor="fName">First Name</label>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            className={classNames({ [styles["error"]]: state.error })}
            onChange={e => changeInput(e)}
          />
        </div>

        <div className={styles["form__wrap"]}>
          <label htmlFor="lName">Last Name</label>
          <input
            className={classNames({ [styles["error"]]: state.error })}
            type="text"
            name="last_name"
            placeholder="Last Name"
            onChange={e => changeInput(e)}
          />
        </div>
        <div className={styles["form__wrap"]}>
          <label htmlFor="email">Email </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={e => changeInput(e)}
            className={classNames({ [styles["error"]]: state.error })}
          />
          <input type="text" name="_gotcha" style={{ display: "none" }} />
        </div>
        <div className={styles["form__wrap"]}>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            placeholder="Message"
            onChange={e => changeInput(e)}
            className={classNames({ [styles["error"]]: state.error })}
          />
        </div>
      </Fragment>
    );
  };
  return (
    <div className={styles["contact"]}>
      <div className={styles["flex__area"]}>
        <div className={styles["contact__header"]}>
          <h2>Resume</h2>
          <a href="../../public/assets/resume.pdf" download>
            <FontAwesomeIcon icon={faDownload} />
          </a>
          <div className={styles["decor"]}>
            <h2>Erik Bridges</h2>
          </div>
        </div>
        <div className={styles["contact__form"]}>
          <form action="https://formspree.io/erikzb7@gmail.com" method="POST">
            <div className={styles["form__title"]}>{renderFormTitle()}</div>
            {renderFormParts()}
            <div className={styles["form__btn"]}>
              <button onClick={e => checkForm(e)}>Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
