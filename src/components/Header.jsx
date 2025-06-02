import { Menu } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router";

const Header = () => {

    const navigate = useNavigate();
    function redirectToHome(){
    navigate("/home")
  }
  return (
    <div>
        <div className=" md:px-5 max-w-[1080px] mx-auto">
        <nav className="px-2 md:px-4 h-10 flex justify-between items-center bg-gradient-to-r from-purple-700  text-white">
            <ul className="flex gap-3">
                <li><Menu /></li>
                <li className="font-bold text-blue-300" onClick={redirectToHome}>Growth Snap</li>
            </ul>
            <ul className="flex gap-3">
                <li><FaFacebookF className="text-blue-600 w-5 h-5 hover:scale-110 transition" /></li>
                <li><FaInstagram className="text-pink-500 w-5 h-5 hover:scale-110 transition" />
                </li>
                <li><FaTwitter className="text-blue-400 w-5 h-5 hover:scale-110 transition" /></li>
            </ul>
        </nav>
        </div>
    </div>
  )
}
export default Header