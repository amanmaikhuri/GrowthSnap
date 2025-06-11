import { createBrowserRouter } from "react-router"
// import Auth from "./components/Auth"
// import LogInPage from "./components/LogInPage"
import Header from "./components/Header"
import Pastes from "./components/Pastes"
import PasteHome from "./components/PasteHome"
import { RouterProvider } from "react-router-dom"
import HomePage from "./components/HomePage"
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

import { Toaster } from 'react-hot-toast';
import PastesView from "./components/PastesView.jsx"
import PasteList from "./components/PasteList.jsx"
import GrowthSnapHome from "./components/GrowthSnapHome.jsx"

const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
      <div>
        <HomePage />
      </div>
    },
    {
      path: "/paste",
      element:
      <div>
        <Header/>
        <PasteHome />
        <PasteList />
      </div>
    },
    {
      path: "/pastes",
      element:
      <div>
        <Header/>
        <Pastes />
      </div>
    },
    {
      path: "/pastes/:id",
      element:
      <div>
        <Header/>
        <PastesView />
      </div>
    },
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
    path: "/evolve",
    element:
    <div>
      <Header />
       <GrowthSnapHome />
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
  ]
)

function App() {

  return (
   <div className="h-full w-full">
    <RouterProvider router={router} />

    <div>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
    </div>
    {/* <Auth /> */}
   </div>
  )
}

export default App
