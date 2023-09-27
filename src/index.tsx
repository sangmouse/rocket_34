import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Users from 'components/Users';
import LayoutRoot from 'components/LayoutRoot';
import UsersAxiosPage from 'components/UsersAxios';
import Users2 from 'components/Users2';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutRoot />,
    children: [
      {
        path: "users",
        element: <Users />
      },
      {
        path: "users2",
        element: <Users2/>
      },
      {
        path: "users-axios",
        element: <UsersAxiosPage />
      }
    ]
  },

])

// /contact

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
