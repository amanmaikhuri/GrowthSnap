import { StrictMode } from 'react'
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import './index.css'
import App from './App.jsx'

// main.jsx
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import RootLayout from "./routes/RootLayout";
import HomePage from './components/HomePage.jsx';
import LogInPage from './components/LogInPage.jsx';
import Dashboard from './components/Dashboard.jsx';
import ExpenseTracker from './components/ExpenseTracker.jsx';
import GrowthSnap from './components/GrowthSnap.jsx';
import ContactPage from './components/ContactPage.jsx';
import MoodLogger from './components/MoodLogger.jsx';
import Shreeya from './components/Shreeya.jsx';
import ToDoList from './components/ToDoList.jsx';
import AiSummariser from './components/AiSummariser.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Header from './components/Header.jsx';

// Define your routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <LogInPage />,
    children: [
      { path: "/homepage", element: <HomePage /> },
    ],
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/dashboard",
    element: <div>
              <Header />
              <Dashboard />
            </div>,
  },
  {
    path: "/expenseTracker",
    element: 
    <div>
      <Header />
      <ExpenseTracker />
    </div>,
  },
  {
    path: "/growthSnap",
    element:
    <div>
      <Header />
       <GrowthSnap />
    </div>,
  },
  {
    path: "/contactPage",
    element:
    <div>
      <Header />
       <ContactPage />
    </div>,
  },
  {
    path: "/moodLogger",
    element: 
    <div>
      <Header />
      <MoodLogger />
    </div>,
  },
  {
    path: "/shreeya",
    element:
    <div>
      <Header />
       <Shreeya />
    </div>,
  },
  {
    path: "/toDoList",
    element:
    <div>
      <Header />
       <ToDoList />
    </div>,
  },
  {
    path: "/aiSummariser",
    element:
    <div>
      <Header />
       <AiSummariser />
    </div>,
  },
  {
    path: "/loginPage",
    element:
    <div>
      <Header />
       <LogInPage />
    </div>,
  },
  {
    path: "*",
    element:
    <div>
      <Header />
       <ErrorPage />
    </div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
