import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header'
import Footer from './Footer'
import Food from './Food'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header/>
    <Food/>
    <Footer/>
  </>
);

