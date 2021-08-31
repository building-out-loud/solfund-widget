import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/index";
import "@fontsource/roboto-mono";

const fundraisingWidgetContainer = document.getElementById("fundraising-widget-container");

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App container={fundraisingWidgetContainer} />
    </ChakraProvider> 
  </React.StrictMode>,
  fundraisingWidgetContainer
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
