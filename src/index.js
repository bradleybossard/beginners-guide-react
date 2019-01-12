import "./styles.css";
import React from "react";
import ReactDom from "react-dom";

const rootElement = document.getElementById("root");

const content = "Hello World";

const element = <div className="container">{content}</div>;
ReactDom.render(element, rootElement);
