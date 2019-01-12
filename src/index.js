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

const element = <div {...props} />;
ReactDom.render(element, rootElement);
