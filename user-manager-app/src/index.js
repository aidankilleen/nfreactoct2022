import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';
import UserListPage from './UserListPage';
import UserDetailPage from './UserDetailPage';
import {QueryClient, QueryClientProvider} from 'react-query';
import UserWithObjectDetailPage from './UserWithObjectDetail';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={ queryClient }>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}>
            <Route index element={<Navigate to="/home"/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/users" element={<UserListPage/>}/>
            <Route path="/users/:id" element={<UserDetailPage/>}/>
            <Route path="/userwithobject/:id" element={<UserWithObjectDetailPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
