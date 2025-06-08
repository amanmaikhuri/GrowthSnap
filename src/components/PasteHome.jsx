import { NavLink } from "react-router"

const PasteHome = () => {
  return (
    <div className="w-full h-full ">
        <nav className="px-4 flex gap-4 h-[2.5rem] max-w-[1080px] mx-auto items-center text-purple-950 bg-gradient-to-r from-blue-500 font-semibold">
            <NavLink  to={"/pastes"}>
                Home
            </NavLink>

            <NavLink to={"/paste"}>
                Pastes
            </NavLink>
        </nav>
    </div>
  )
}
export default PasteHome