import { NavLink } from "react-router"

const Navbar = () => {
  return (
    <div className="w-full h-6">
        <nav className="flex gap-5 px-4 py-2 max-w-[1080px] mx-auto bg-gradient-to-r from-blue-500 to-green-500 text-white">
            <NavLink to={"/growthSnap"}>
                Home
            </NavLink>
            <NavLink to={"/evolve"}>
                Your Logs
            </NavLink>
        </nav>
    </div>
  )
}
export default Navbar