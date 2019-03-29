/* eslint-disable react/prop-types */
import React from "react";
import { Fragment } from "react";
import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";

function myPage(props) {
  return (
    <Fragment>
      <Navbar />
      {props.children}
      <Footer />
    </Fragment>
  );
}

export default myPage;
