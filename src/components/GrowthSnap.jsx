// GrowthSnap.jsx
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToSnaps, updateToSnaps } from "../redux/GrowthSlice";

const GrowthSnap = () => {
  const {
    register,
    handleSubmit,
    reset, // to pre-fill form in edit mode
  } = useForm();

  const [searchParams, setSearchParams] = useSearchParams();
  const snapId = searchParams.get("snapId");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allSnaps = useSelector((state) => state.snap.snaps);

  // 🧠 Handle Form Submission
  const handleSave = (data) => {
    const snap = {
      ...data,
      createdAt: new Date().toLocaleString(),
      _id: snapId || Date.now().toString(36),
    };

    if (snapId) {
      dispatch(updateToSnaps(snap))
      navigate("/growthSnap");
      setTimeout(()=> reset(snapId),200)

    } else {
      dispatch(addToSnaps(snap));
    }
    setSearchParams({});
    navigate("/growthSnap");
    reset();
     // go back to home
  };

  // 🔁 Pre-fill form if editing
  useEffect(() => {
  if (snapId && allSnaps.length > 0) {
    const existingSnap = allSnaps.find((snap) => snap._id === snapId);
    if (existingSnap) {
      reset(existingSnap);// prefill form values
    } else {
      console.warn("Snap not found with id:", snapId);
    }
  }
}, [snapId, allSnaps, reset]);


  return (
    <div className="w-full h-screen">
      <div className="max-w-[1080px] mx-auto">
        <Navbar />
      </div>

      <div className="max-w-[1080px] h-screen mx-auto flex flex-col items-center text-sm">
        <form
          onSubmit={handleSubmit(handleSave)}
          className="w-full md:w-[600px] max-w-[500px] h-fit px-4 py-9 flex flex-col gap-4"
        >
          <div className="flex items-center justify-between">
            <label htmlFor="win">Today's Win: </label>
            <input
              id="win"
              type="text"
              placeholder="e.g. studied 2 hours"
              className="px-2 py-0.5 border rounded-lg w-[70%]"
              {...register("win", { required: true })}
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="challenge">Today's Challenge: </label>
            <input
              id="challenge"
              type="text"
              placeholder="e.g. got distracted by phone"
              className="px-2 py-0.5 border rounded-lg w-[70%]"
              {...register("challenge", { required: true })}
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="goal">Goal for Tomorrow: </label>
            <input
              id="goal"
              type="text"
              placeholder="e.g. complete 1 React project"
              className="px-2 py-0.5 border rounded-lg w-[70%]"
              {...register("goal", { required: true })}
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="mood">Mood today: </label>
            <select
              id="mood"
              className="border pt-1 pb-1 px-2.5 rounded-lg text-sm bg-purple-500 text-white font-semibold"
              {...register("mood", { required: true })}
            >
              <option value="">Select mood</option>
              <option value="😃 (happy)">😃 (happy)</option>
              <option value="🤩 (excited)">🤩 (excited)</option>
              <option value="😄(cheerful)">😄 (cheerful)</option>
              <option value="🙏😊 (grateful)">🙏😊 (grateful)</option>
              <option value="❤️🥰 (loved)">❤️🥰 (loved)</option>
              <option value="😎 (confident)">😎 (confident)</option>
              <option value="🚀💪 (motivated)">🚀💪 (motivated)</option>
              <option value="😌🧘‍♂️ (relaxed)">😌🧘‍♂️ (relaxed)</option>
              <option value="✨😃 (inspired)">✨😃 (inspired)</option>
              <option value="🌟🙂 (hopeful)">🌟🙂 (hopeful)</option>
              <option value="😌 (calm)">😌 (calm)</option>
              <option value="😑 (meh)">😑 (meh)</option>
              <option value="😫 (stressed)">😫 (stressed)</option>
              <option value="😢 (sad)">😢 (sad)</option>
              <option value="😤 (frustrated)">😤 (frustrated)</option>
              <option value="😟😰 (anxious)">😟😰 (anxious)</option>
              <option value="😔💔 (depressed)">😔💔 (depressed)</option>
              <option value="💔😞 (heartbroken)">💔😞 (heartbroken)</option>
              {/* Add any more if needed */}
            </select>
          </div>

          <input
            type="submit"
            value={snapId ? "Update Snap" : "Create Snap"}
            className="px-5 py-0.75 border rounded-lg w-fit bg-blue-500 hover:bg-blue-700 text-white font-bold"
          />
        </form>
      </div>
    </div>
  );
};

export default GrowthSnap;
