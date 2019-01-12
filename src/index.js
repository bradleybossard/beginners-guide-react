import "./styles.css";
import React from "react";
import ReactDom from "react-dom";

const rootElement = document.getElementById("root");

const element = <div className>Hello World</div>;
ReactDom.render(element, rootElement);
