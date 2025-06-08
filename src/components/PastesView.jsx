import PasteHome from "./PasteHome"
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Copy } from "lucide-react";
import toast from "react-hot-toast";

const PastesView = () => {

  const {id} = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.filter((p) => p._id === id)[0];
  return (
    <div className="w-full max-w-[1080px] mx-auto text-sm md:text-lg overflow-hidden px-2">
        <div> <PasteHome /> </div>
        <div className="w-full h-full">
          <input 
              type="text"
              placeholder="enter title here"
              className="px-4 py-1 border mt-2 rounded-md w-full mr-4 md:mr-6"
              value={paste.title}
              disabled
          />
        </div>

        <div className="w-full h-full relative px-4 py-4 border mt-4 rounded-lg">
          <div className="w-full h-full pb-1.5 flex justify-between items-center border-b-2">
            <div className="flex flex-row gap-2">
              <div className="h-3 w-3 bg-red-500 rounded-full"></div>
              <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
              <div className="h-3 w-3 bg-green-500 rounded-full"></div>
            </div>
            <Copy size={20}
            onClick={() => {
                          navigator.clipboard.writeText(paste?.content);
                          toast.success("copied to clipboard")
                        }}/>
          </div>
            <textarea name="paste"
            value={paste.content}
            disabled
            placeholder="enter content here"
            className="mt-4 w-full min-h-[70vh] py-2 rounded-md text-sm"
            ></textarea>
        </div>
        
    </div>
  )
}
export default PastesView