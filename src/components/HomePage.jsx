import image from "../assets/aroma.jpeg"

import { useNavigate } from "react-router";
import { BarChart2, MessageCircle, Sun } from "lucide-react"
import { FaBookOpen, FaMoneyBillWave, FaTasks } from "react-icons/fa"
import { GiPayMoney } from 'react-icons/gi'

import Header from "./Header";

const HomePage = () => {
  const navigate = useNavigate();

  //redirect to journaling route
  function redirectToJournal(){
    navigate("/moodLogger")
  }

  //redirect to growth snap route
  function redirectToGrowthSnap(){
    navigate("/growthSnap")
  }

  //redirect to Ai Companion route
  function redirectToShreeya(){
    navigate("/shreeya")
  }

  //redirect to dashboard route
  function redirectToDashboard(){
    navigate("/dashboard")
  }

  //redirect to Expense Tracker route
  function redirectToExpenses(){
    navigate("/expenseTracker")
  }

  //redirect to to-do-list route
    function redirectToTasks(){
    navigate("/toDoList")
  }

  
  return (
    <div className="h-full w-full">
      {/* header */}
        <Header />

      {/* hero section */}
        <div className="max-w-[1080px] h-[150px] md:h-[300px] relative mx-auto flex justify-center items-center">
                <img 
                src={image} 
                alt="react"
                className="p-1 px-2 md:px-5 w-full h-full md:h-[300px] absolute top-0 overflow-hidden rounded-lg opacity-60
                "/>
                <p className="absolute text-sm px-4 py-0.5  text-blue-950 font-bold">"Start where you are. Use what you have. Do what you can."
                — Arthur Ashe</p>
        </div>
      {/* main content */}
         <div className="max-w-[1080px] h-full pt-2 pb-4 rounded-sm flex flex-wrap gap-3 md:gap-4 mx-auto justify-center items-center">

        {/* journal */}
          <div className="h-[45%] w-[45%] p-4 border-emerald-500 border-2 rounded-lg flex flex-col justify-center items-center bg-gradient-to-b from-pink-200" onClick={redirectToJournal}>
            <FaBookOpen size={27} color="purple"/>
            <h2 className="text-sm text-blue-950">Reflective Journal</h2>
            <p className="p-2 text-[11px] text-center text-emerald-500 font-semibold">Reflect on your thoughts and record your mood.</p>
          </div>

        {/* growthSnap */}
          <div className="h-[45%] w-[45%] p-2 md:p-4 border-emerald-500 border-2 rounded-lg flex flex-col justify-center items-center bg-gradient-to-b from-pink-200" onClick={redirectToGrowthSnap}>
            <Sun size={27} color="purple"/>
            <h2 className="text-sm text-blue-950">Save Your Day</h2>
            <p className="p-2 text-[11px] text-center text-emerald-500 font-semibold">Record your daily wins, thoughts and goal for tomorrow with mood tracking.</p>
          </div>

        {/* shreeya */}
          <div className="h-[45%] w-[45%] p-4 md:p-6 border-emerald-500 border-2 rounded-lg flex flex-col justify-center items-center bg-gradient-to-b from-pink-200"  onClick={redirectToShreeya}>
            <MessageCircle size={27} color="blue"/>
            <h2 className="text-sm text-purple-950">Talk to Shreeya</h2>
            <p className="p-2 text-[11px] text-center text-emerald-500 font-semibold">Talk to shreeya- an ai mental health companion .</p>
          </div>

        {/* insights */}
          <div className="h-[45%] w-[45%] p-6 md:p-9 border-emerald-500 border-2 rounded-lg flex flex-col justify-center items-center bg-gradient-to-b from-pink-200"  onClick={redirectToDashboard}>
            <BarChart2 size={27} color="blue"/>
            <h2 className="p-2 text-sm text-purple-950">Insights</h2>
            <p className="text-[11px] text-center text-emerald-500 font-semibold">Find your insights here!</p>
          </div>

        {/* expense tracker */}
          <div className="h-[45%] w-[45%] p-4 md:p-6 border-emerald-500 border-2 rounded-lg flex flex-col justify-center items-center bg-gradient-to-b from-pink-200"  onClick={redirectToExpenses}>
            <GiPayMoney size={32} color="green"/>
            <h2 className="text-sm text-purple-950">Expense Tracker</h2>
            <p className="p-2 text-[11px] text-center text-emerald-500 font-semibold">Talk to shreeya- an ai mental health companion .</p>
          </div>

        {/* to do list  */}
          <div className="h-[45%] w-[45%] p-6 md:p-9 border-emerald-500 border-2 rounded-lg flex flex-col justify-center items-center bg-gradient-to-b from-pink-200"  onClick={redirectToTasks}>
            <FaTasks size={27} color="purple"/>
            <h2 className="p-2 text-sm text-purple-950">To Do List</h2>
            <p className="text-[11px] text-center text-emerald-500 font-semibold">Find your insights here!</p>
          </div>

        {/* Ai summariser */}
          {/* <div className="h-[45%] w-[45%] p-4 md:p-6 border-emerald-500 border-2 rounded-lg flex flex-col justify-center items-center bg-gradient-to-b from-pink-200">
            <MessageCircle size={27} color="blue" onClick={redirectToShreeya}/>
            <h2 className="text-sm text-purple-950">Ai Summariser</h2>
            <p className="p-2 text-[11px] text-center text-emerald-500 font-semibold">Talk to shreeya- an ai mental health companion .</p>
          </div> */}
        </div>
    </div>
  )
}
export default HomePage