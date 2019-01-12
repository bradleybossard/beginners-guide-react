import "./styles.css";
import React from "react";
import ReactDom from "react-dom";

const rootElement = document.getElementById("root");

const content = "Hello World";
const myClassName = "container";

const element = <div className={myClassName}>{content}</div>;
ReactDom.render(element, rootElement);
