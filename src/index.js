import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 导入 BrowserRouter
import App from './App';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> {/* 只需要在这里使用一次 BrowserRouter */}
    <App />
  </BrowserRouter>
);
