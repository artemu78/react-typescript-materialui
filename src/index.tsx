import * as React from "react";
import * as ReactDOM from "react-dom";
import { Header } from './components/header';
import { Hello } from './components/hello';

// вот это работает
// ReactDOM.render(
//   <Hello compiler="TypeScript" framework="React" />,
//   document.getElementById("example")
// );

// а это нет
ReactDOM.render(
    <Header />,
    document.getElementById("example")
);