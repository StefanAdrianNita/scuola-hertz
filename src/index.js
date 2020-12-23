import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from '.components/navbar';

ReactDOM.render(
    <Navbar />,
    document.getElementById('root')
);