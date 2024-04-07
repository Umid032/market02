import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Product from './pages/Product.jsx';
import { CartProvider } from 'react-use-cart';
import Bag from './pages/Bag.jsx';

const router = createBrowserRouter(
  [
    {
      path: "/market02",
      element: <App />,
      children: [
        {
          path: "/market02",
          element: <Home />,
        },
        {
          path: "/market02/product/:id",
          element: <Product />,
        },
        {
          path: "/market02/bag",
          element: <Bag />,
        },
      ],
    },
  ],
  { basename: "/" }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>,
)
