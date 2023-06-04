import React from "react";
import ReactDOM  from "react-dom"; //This will help us to hook our entire application to index.html

import App from './App';
import './index.css';

// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('App');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);

ReactDOM.render(<App/>, document.getElementById('root'));