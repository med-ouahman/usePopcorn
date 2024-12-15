import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';
import TextExpander from "./TextExpander";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <TextExpander text="Hello World, I am Mohamed and I am not in the mood right now." showMore={true} length={8} showText="Don't Hide" hideText="Don't Show"/>
  </React.StrictMode>
);

