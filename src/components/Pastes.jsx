import { useEffect, useState } from "react"
import PasteHome from "./PasteHome"
import { useNavigate, useSearchParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updateToPastes } from "../redux/PasteSlice";
import { toast } from 'react-hot-toast'
import { Copy, PlusSquareIcon } from "lucide-react";

const Pastes = () => {

    const [title, setTitle] =useState("");
    const [Value, setValue] = useState('');
    const [searchParams , setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId");
    const dispatch = useDispatch();
    const allPastes = useSelector((state)=> state.paste.pastes);
    const navigate = useNavigate();

    function createPaste(){
        const paste ={
            title: title,
            content: Value,
            _id: pasteId || Date.now().toString(36),
            createdAt: new Date().toLocaleString(),
        }

        if(pasteId){
            //update
            dispatch(updateToPastes(paste));
        } else {
            //create
            dispatch(addToPastes(paste))
        }

        //after creation and updation
        setTitle('');
        setValue('');
        setSearchParams({});
    }
    //to handle pasteId change due to updation window 
    useEffect(() => {
      if(pasteId){
        const paste = allPastes.find((p)=>p._id === pasteId);
        setTitle(paste.title);
        setValue(paste.content);
      }
    }, [pasteId])
    
    //navigate to paste homepage
    function redirectToHome(){
        navigate("/pastes");
        setTitle("");
        setValue("")
    }

  return (
    <div className="w-full max-w-[1080px] mx-auto text-sm md:text-lg overflow-hidden px-3">
        <div> <PasteHome /> </div>
        <div className="w-full h-full flex items-center pt-2">
            <input 
                type="text"
                placeholder="enter title here"
                className="px-2 py-1 border mt-2 rounded-md w-[59%] md:w-[75%] mr-2 md:mr-6"
                value={title}
                onChange={(e)=>{setTitle(e.target.value)}}
            />

            {/* button container */}
            <div className="flex gap-1 items-center justify-center">
                <button
                onClick={createPaste}
                className=" px-2 md:px-4 py-2 mt-1 border rounded-md text-white bg-green-500 font-bold text-[0.75rem]">
                    {pasteId ? "Update Paste" : "Create My Paste"}
                </button>
                {
                    pasteId && 
                    <div className="w-fit px-1 py-1 rounded-md"
                    onClick={redirectToHome}>
                            <PlusSquareIcon  color="blue"/>
                    </div>
                }
                </div>
        </div>

        <div className="w-full h-full border mt-4 rounded-lg">

        {/* copy section */}
            <div className="w-full h-full py-2 md:py-4 flex justify-between items-center border-b pr-2">
           
            <div className="flex flex-row gap-2 px-2 pr-2">
              <div className="h-3 w-3 bg-red-500 rounded-full"></div>
              <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
              <div className="h-3 w-3 bg-green-500 rounded-full"></div>
            </div>
            <Copy size={20}
            onClick={() => {
                          navigator.clipboard.writeText(Value);
                          toast.success("copied to clipboard")
                        }}/>
            </div>

        {/* paste Area */}
            <textarea name="paste"
            value={Value}
            placeholder="enter content here"
            className="px-2 py-2 w-full min-h-[75vh] rounded-md text-[0.75rem]"
            onChange={(e)=>{setValue(e.target.value)}}
            ></textarea>
        </div>
        
    </div>
  )
}
export default Pastes