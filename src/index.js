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

const message = props => <div>{props.msg}</div>;

//const element = <div {...props} />;
const element = (
  <div className="container">
    {message({ msg: "Hello World" })}
    {message({ msg: "Goodbye World" })}
  </div>
);
ReactDom.render(element, rootElement);
