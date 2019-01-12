import "./styles.css";
import React from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";

const rootElement = document.getElementById("root");

const content = "Hello World";
const myClassName = "container";
const props = {
  className: "container",
  children: content
};

const Message = props => (
  <div>
    {props.children}
    <span>{props.testType}</span>
  </div>
);

// This prop types does not seem to be working, need to revisit
Message.propTypes = {
  testType: PropTypes.string
};

//const element = <div {...props} />;
const element = (
  <div className="container">
    <Message testType={1.2}>Hello World</Message>
    <Message>Goodbye World</Message>
  </div>
);
ReactDom.render(element, rootElement);
