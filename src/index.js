import "./styles.css";
import React from 'react';
import ReactDom from 'react-dom';

const rootElement = document.getElementById("root");
/*
const element = document.createElement("div");

element.textContent = "Hello World";
element.className = "container";
rootElement.appendChild(element);
*/
const element = React.createElement('div', {className: 'container'}, 'Hello World!');
console.log(element);
ReactDom.render(element, rootElement);