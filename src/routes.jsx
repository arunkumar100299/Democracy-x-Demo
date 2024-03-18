import React from 'react';
import AboutPage from './pages/about/AboutPage';
import ContactPage from './pages/contact/ContactPage';
import Dashboard from './pages/dashboard/Dashboard';
import UserPage from './pages/user/UserPage';
import SellerHomePage from './pages/home/SellerHomePage';
import ProductsPage from './pages/products/ProductsPage';
import NewProducts from './pages/products/NewProducts';

export const routes = [
  {
    path: 'about',
    element: <AboutPage />,
  },
  {
    path: 'user',
    element: <UserPage />,
  },
  {
    path: 'contact',
    element: <ContactPage />,
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
  },
  {
    path: 'sellerHomePage',
    element: <SellerHomePage />,
  },
  {
    path: 'products',
    element: <ProductsPage />,
  },
  {
    path: 'newProduct',
    element: <NewProducts />,
  },
];
