import { Calendar, Copy, Edit, Eye, Share, Trash } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { removeFromPastes } from "../redux/PasteSlice";
import toast from "react-hot-toast";
import { NavLink } from "react-router";


const PasteList = () => {

  const pastes =useSelector((state) => state.paste.pastes);

  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase()));

  function handleDelete(pasteId){
    dispatch(removeFromPastes(pasteId));
    console.log(pasteId)
  }

  //handle share 
  const copyToClipboard = async (text) =>{
    try{
      await navigator.clipboard.writeText(text);
      toast("link copied")
    } catch(err){
      console.error('failed to copy',err)
    }
  }
  return (
    <div className="h-full w-full px-2 py-2 max-w-[1080px] mx-auto">
        <input 
        className="px-4 py-1 rounded-md border w-full"
        type="search"
        placeholder="search here"
        value={searchTerm}
        onChange={((e) => setSearchTerm(e.target.value))} />

        <div className="flex flex-col gap-4 border p-1.5 md:px-4 md:py-2 mt-2 rounded-lg">
          <div className="text-blue-950 font-bold bg-green-500 px-6 rounded-md py-1 w-fit">
            All Pastes
          </div>
          {
            filteredData.length > 0 && 
            filteredData.map(
              (paste) => {
                return (
                  <div key={paste?._id}
                  className="border px-4 py-1 rounded-lg h-full w-full bg-gradient-to-r from-green-300 to-blue-300 text-blue-950 flex flex-col gap-1">
                      <div className=" py-1 font-bold flex flex-row justify-between">
                      {/* paste titles */}
                        <div className="w-full">{paste.title}</div>

                        {/* button container */}
                      <div className="w-full flex flex-row place-content-evenly">
                        <button >
                          <NavLink to={`/pastes?pasteId=${paste?._id}`}>
                            <Edit size={20}/>
                          </NavLink>
                        </button>

                        <button onClick={() => handleDelete(paste?._id)}>
                          <Trash color="red" size={20}/>
                        </button>

                        <button onClick={() => {
                          navigator.clipboard.writeText(paste?.content);
                          toast.success("copied to clipboard")
                        }}>
                          <Copy size={20}/>
                        </button>

                        <button>
                          <NavLink to={`/pastes/${paste?._id}`}>
                            <Eye size={20}/>
                          </NavLink>
                        </button>

                        <button onClick={()=>{
                          const sharableLink = `${window.location.origin}/pastes/${paste?._id}`
                          copyToClipboard(sharableLink)
                          console.log("copied",sharableLink);
                        }}>
                          <Share size={20}/>
                        </button>
                      </div>
                      </div>

                        {/* paste content */}
                      <div className="flex justify-between py-2">
                        <div className="min-h-[3rem] max-h-[4rem] max-w-[55%] overflow-hidden text-[0.75rem] md:text-[0.85rem] text-justify pr-2">
                          {paste.content}
                        </div>

                      {/* date created */}
                      <div className="flex flex-col gap-2">
                          <div className="font-semibold text-[0.65rem] px-2 py-1 border w-fit rounded-lg h-fit flex gap-2 items-center">
                            <Calendar size={20}/>
                            {paste.createdAt}
                          </div>
                          {/* <div className="w-fit border px-4 py-0.5 rounded-md font-semibold text-sm">
                            code
                          </div> */}
                      </div>
                      </div>
                  </div>
                )
              }
            )
          }
        </div>
    </div>
  )
}
export default PasteList