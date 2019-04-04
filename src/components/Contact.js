// React
import React from "react";
import { Fragment } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../CSS/contact.styl";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import Loader from "react-loader-spinner";
import ReCAPTCHA from "react-google-recaptcha";
// Validators
import {
  checkNames,
  checkEmail,
  checkMessageField
} from "./helpers/validators";

const recaptchaRef = React.createRef();

const Contact = () => {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
    errorMessage: "",
    processing: false,
    error: false,
    success: false
  });
  const changeInput = e => {
    e.preventDefault();
    return setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };
  const invalidForm = errorMessage => {
    window.grecaptcha.reset();
    const inputElements = document.getElementsByTagName("input");
    for (let i = 0; i < inputElements.length; i++) {
      if (inputElements[i].type == "text") {
        inputElements[i].value = "";
      }
    }
    setState({
      ...state,
      first_name: "",
      last_name: "",
      email: "",
      message: "",
      error: true,
      processing: false,
      errorMessage
    });
  };
  const checkForm = async e => {
    e.preventDefault();
    setState({ ...state, processing: true });
    const { first_name, last_name, email, message } = state;

    // Recaptcha ID
    const recaptchaValue = recaptchaRef.current.getValue();

    // Check Name Inputs
    const checkInputs = [
      checkNames(first_name).error,
      checkNames(last_name).error
    ];
    const checkInputFilter = checkInputs.filter(item =>
      item == true ? true : undefined
    );
    if (checkInputFilter.length !== 0) {
      return invalidForm(
        "Invalid first or last name. Make sure they are not too long or too short. 3 chars min; 50 chars max"
      );
    }
    // Check Email Inputs
    try {
      const checkEmailInput = await checkEmail(email);
      if (checkEmailInput.error) {
        return invalidForm(checkEmailInput.errorMessage);
      }
    } catch (ex) {
      return invalidForm(
        "Something is wrong with email check. Try refreshing and try again."
      );
    }
    // Check Message Input
    const checkMessageInput = checkMessageField(message);
    if (checkMessageInput.error) {
      return invalidForm(checkMessageInput.errorMessage);
    }
    // Submit Information To Form Server
    try {
      const fetchData = await fetch("https://formcarry.com/s/wM9vfNxwr-o", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          first_name,
          last_name,
          email,
          "g-recaptcha-response": recaptchaValue,
          message
        })
      });
      const data = await fetchData.json();
      // Change form based on response.
      if (data.code == 403 && data.title.includes("Google")) {
        return invalidForm("Validation Failed. Please verify to continue.");
      } else if (data.code == 200) {
        // Clear Input
        const inputElements = document.getElementsByTagName("input");
        for (let i = 0; i < inputElements.length; i++) {
          if (inputElements[i].type == "text") {
            inputElements[i].value = "";
          }
        }
        return setState({
          ...state,
          success: true,
          first_name: "",
          last_name: "",
          email: "",
          message: "",
          processing: false
        });
      } else {
        return invalidForm(
          "Something is wrong with our servers. Please refresh and try again"
        );
      }
    } catch (ex) {
      return invalidForm(
        "Something is wrong with our servers. Try refreshing and try again."
      );
    }
  };
  const renderFormTitle = () => {
    return (
      <Fragment>
        <div className={styles["contact__title"]}>
          <h2>Contact Form</h2>
          <p>
            Please fill out the form and I will get back to you as soon as I
            can. Please allow 24 to 48 hours for me to respond.
          </p>
          <p>Notice: </p>
        </div>
        {state.error ? (
          <div className={styles["error-box"]}>
            <p>{state.errorMessage}</p>
          </div>
        ) : null}
      </Fragment>
    );
  };
  const renderFormParts = () => {
    return (
      <Fragment>
        <div className={styles["form__wrap"]}>
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            className={classNames({ [styles["error"]]: state.error })}
            onChange={e => changeInput(e)}
          />
        </div>

        <div className={styles["form__wrap"]}>
          <label htmlFor="last_name">Last Name</label>
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
          <input type="hidden" name="_gotcha" />
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
        <div className={styles["form__wrap"]}>
          <ReCAPTCHA
            sitekey="6LdRpJsUAAAAALyU0ffbzi5PSIExCe_JViKGjkz6"
            theme="dark"
            ref={recaptchaRef}
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
          <a href="./public/assets/resume.pdf" download>
            <FontAwesomeIcon icon={faDownload} />
          </a>
          <div className={styles["decor"]}>
            <h2>Erik Bridges</h2>
          </div>
        </div>
        <div className={styles["contact__form"]}>
          <form>
            {state.success ? (
              <div className={styles["contact__success"]}>
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faCheckCircle} />
                </span>
                <div className={styles["contact__success-header"]}>
                  <h2>Form Submitted Successfully</h2>
                  <p>
                    Your form is submitted successfully! Please wait patiently
                    and I will get back with you soon.{" "}
                  </p>
                  <div className={styles["contact__success--btn-wrap"]}>
                    <Link to="/about"> About</Link>
                    <Link to="/portfolio">Project</Link>
                  </div>
                </div>
              </div>
            ) : state.processing ? (
              <div
                style={{
                  margin: "0 auto",
                  display: "grid",
                  placeItems: "center"
                }}
              >
                <Loader type="TailSpin" color="#FFF" />
                <h1 style={{ fontSize: "1rem", paddingTop: "20px" }}>
                  Loading Please Wait...
                </h1>
              </div>
            ) : (
              <Fragment>
                <div className={styles["form__title"]}>{renderFormTitle()}</div>
                {renderFormParts()}
                <div className={styles["form__btn"]}>
                  <button onClick={e => checkForm(e)}> Send</button>
                </div>
              </Fragment>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
