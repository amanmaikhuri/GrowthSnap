import { CheckCircle2Icon } from "lucide-react"
import { useForm } from "react-hook-form";

const MoodLogger = () => {

   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();

  // Watch the "example" input
    const watchedExample = watch("mood");

    
  function SubmitJournal(data){
    console.log(data);
    console.log(watchedExample)
    console.log(errors.mood)
  }

  return (
    <div>
      <div className="h-full w-full">
      <div className="md:px-5 max-w-[1040px] mx-auto py-4 bg-gradient-to-b from-blue-500">
        {/* mood section  */}
          <form action={handleSubmit(SubmitJournal)}
          className="flex flex-col items-center gap-2">
            <div>
              <select name="moods" id="mood" className="border py-1 pb-2 rounded-md bg-blue-600 text-white font-semibold"
              {...register("mood",{required : true})}>
                <option value="happy">😃 (happy)</option>
                <option value="excited">🤩 (excited)</option>
                <option value="cheerful">😄 (cheerful)</option>
                <option value="Grateful">🙏😊 (grateful)</option>
                <option value="loved">❤️🥰 (loved)</option>
                <option value="confident">😎 (confident)</option>
                <option value="motivated">🚀💪 (motivated)</option>
                <option value="relaxed">😌🧘‍♂️ (relaxed)</option>
                <option value="inspired">✨😃 (inspired)</option>
                <option value="hopeful">🌟🙂 (hopeful)</option>
                <option value="calm">😌 (calm)</option>
                <option value="thoughtful">🤔 (thoughtful)</option>
                <option value="focused">🎯😐 (focused)</option>
                <option value="neutral">😐 (neutral)</option>
                <option value="meh">😑 (meh)</option>
                <option value="tired">😴 (tired)</option>
                <option value="sad">😢 (sad)</option>
                <option value="stressed">😫 (stressed)</option>
                <option value="angry">😠 (angry)</option>
                <option value="frustrated">😤 (frustrated)</option>
                <option value="anxious">😟😰 (anxious)</option>
                <option value="depressed">😔💔 (depressed)</option>
                <option value="heartbroken">💔😞 (heartbroken)</option>
                <option value="annoyed">😒 (annoyed)</option>
                <option value="disappointed">😞 (disappointed)</option>
                <option value="silly">🤪 (silly)</option>
                <option value="mischievous">😈 (mischievous)</option>
                <option value="sarcastic">🙃 (sarcastic)</option>
                <option value="goofy">🤭 (goofy)</option>
                <option value="laughing">😂🤣 (laughing)</option>
                <option value="excited-hyper">🤩🔥 (excited hyper)</option>
                <option value="romantic">😘💕 (romantic)</option>
                <option value="flirty">😉😍 (flirty)</option>
                <option value="cuddly">🥰🤗 (cuddly)</option>
                <option value="crush">😍💘 (crush)</option>
                <option value="blushing">😊🥵 (blushing)</option>
                <option value="sick">🤒🤢 (sick)</option>
                <option value="sleepy">💤😴 (sleepy)</option>
                <option value="scared">😨👻 (scared)</option>
                <option value="shocked">😱 (shocked)</option>
                <option value="nervous">😬 (nervous)</option>
            </select>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-purple-950 font-bold">Reflective Journal</h2>
              <textarea name="journal"
              className="border rounded-md h-[14rem] w-[20rem] md:h-[24rem] md:w-[34rem] lg:h-[24rem] lg:w-[42rem] text-green-950 px-2 py-2"
              {...register("journal",{required : true})}>
              </textarea>
            </div>

            <input type="submit" value="Submit" 
            className="border px-6 py-1 rounded-md bg-purple-950 text-white font-bold"/>
          </form>

          {/* Ai summary for the journal  */}
          <div className=" text-sm md:text-md lg:text-lg px-4 md:px-6">
            <h3 className="font-bold text-green-950 px-2 py-2">Your Journal Summary In Pointers</h3>
            <ul>
              <li className="flex gap-2"><CheckCircle2Icon />Lorem ipsum dolor sit amet.</li>
              <li className="flex gap-2"><CheckCircle2Icon />Sapiente, repudiandae eos. Odit, laboriosam.</li>
              <li className="flex gap-2"><CheckCircle2Icon />Minus, harum? Provident, totam ea.</li>
              <li className="flex gap-2"><CheckCircle2Icon />Commodi assumenda fuga repellendus placeat.</li>
            </ul>
          </div>

          {/* summary past logs */}
          <div className="px-4">
            <h4 className="font-bold text-green-950 py-2">
              Your History
            </h4>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Totam, ratione alias. Amet, cum!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MoodLogger