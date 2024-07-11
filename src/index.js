import React from 'react';
import { createRoot } from 'react-dom/client';
import 'font-awesome/css/font-awesome.min.css'
import MessengerCustomerChat from 'react-messenger-customer-chat';

import App from './App';

import { store } from './app/store';
import { Provider } from 'react-redux';

// import Custom Css
import "./assets/css/style.css"
import "./assets/css/color.css"
import "./assets/css/responsive.css"
import "./assets/css/animate.min.css"


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <MessengerCustomerChat pageId="105124045291751" appId="385408413223722" />
      <App />
    </Provider>
  </React.StrictMode>,
);
