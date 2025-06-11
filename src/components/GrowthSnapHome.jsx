import { PlusCircleIcon, Calendar, Copy, Edit, Eye, Share, Trash } from "lucide-react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromSnaps } from "../redux/GrowthSlice";
import toast from "react-hot-toast";

const GrowthSnapHome = () => {
  const snaps = useSelector((state) => state.snap?.snaps || []);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filteredData = useMemo(() => {
    if (!searchTerm) return snaps;
    return snaps.filter((snap) => {
      const term = searchTerm.toLowerCase();
      return (
        (snap?.goal || "").toLowerCase().includes(term) ||
        (snap?.mood || "").toLowerCase().includes(term) ||
        (snap?.challenge || "").toLowerCase().includes(term) ||
        (snap?.win || "").toLowerCase().includes(term)
      );
    });
  }, [snaps, searchTerm]);

  const handleDelete = (snapId) => {
    dispatch(removeFromSnaps(snapId));
    toast.success("Snap removed");
  };

  const handleShare = (snapId) => {
    const sharableLink = `${window.location.origin}/snaps/${snapId}`;
    navigator.clipboard.writeText(sharableLink);
    toast.success("Sharable link copied!");
  };

  return (
    <div className="h-[92vh] w-full overflow-y-auto">
      <div className="max-w-[1080px] h-full mx-auto relative">
        <Navbar />

        {/* Header */}
        <div className="px-4 pt-6 font-bold flex justify-between items-center text-sm">
          <h2>Evolving You</h2>
          <input
            type="search"
            placeholder="Search here"
            className="border px-2 py-1 rounded-lg md:w-[80%]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Logs */}
        <div className="px-4 py-4 space-y-4">
          {filteredData.length > 0 ? (
            filteredData.map((snap) => (
              <div key={snap?._id} className="border rounded-md p-3 shadow-md">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-lg text-blue-950 border rounded-lg px-2 py-1">{snap?.mood}</h3>
                  <span className="text-xs text-gray-500 font-semibold border-b">{snap?.createdAt}</span>
                </div>
                <div className="text-sm text-gray-700">
                  <p><strong>Win:</strong> {snap?.win}</p>
                  <p><strong>Challenge:</strong> {snap?.challenge}</p>
                  <p><strong>Goal:</strong> {snap?.goal}</p>
                </div>
                <div className="mt-3 flex justify-between gap-3 text-gray-600">
                  <NavLink to={`/growthSnap?snapId=${snap?._id}`}>
                    <Edit size={20} />
                  </NavLink>
                  <button onClick={() => handleDelete(snap?._id)}>
                    <Trash size={20} color="red" />
                  </button>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(`${snap?.goal}\n${snap?.challenge}\n${snap?.win}`);
                      toast.success("Copied to clipboard");
                    }}
                  >
                    <Copy size={20} />
                  </button>
                  {/* <NavLink to={`/snaps/${snap?._id}`}>
                    <Eye size={20} />
                  </NavLink> */}
                  <button onClick={() => handleShare(snap?._id)}>
                    <Share size={20} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500">No data found</div>
          )}
        </div>

        {/* Add new log button */}
        <div className="absolute bottom-9 right-9">
          <NavLink to={"/growthSnap"}>
            <PlusCircleIcon size={32} color="blue" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default GrowthSnapHome;
