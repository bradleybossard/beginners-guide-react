import "./styles.css";
import React from "react";
import ReactDom from "react-dom";

const rootElement = document.getElementById("root");

const content = "Hello World";
const myClassName = "container";
const props = {
  className: "container",
  children: content
};

const Message = props => <div>{props.children}</div>;

//const element = <div {...props} />;
const element = (
  <div className="container">
    <Message>Hello World</Message>
    <Message>Goodbye World</Message>
  </div>
);
ReactDom.render(element, rootElement);
