import { useForm } from "react-hook-form";
  
const AiSummariser = () => {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
  };

  // Watch the "example" input
  const watchedExample = watch("exampleRequired");

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>React Hook Form Example</h2>

      {/* Form submission with validation */}
      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Basic Input with default value */}
        <div style={{ marginBottom: "10px" }}>
          <label>Example Input:</label><br />
          <input
            type="text"
            defaultValue="your full name"
            className="border px-4 py-1 rounded-md"
            {...register("example")}
          />
        </div>

        {/* Required Input Field */}
        <div style={{ marginBottom: "10px" }}>
          <label>Your mobile number:</label><br />
          <input
            type="text"
            placeholder="This field is required"
            className="border px-4 py-1 rounded-md"
            {...register("exampleRequired", { required: true ,maxLength: 10 })}
          />
          {errors.exampleRequired && (
            <p style={{ color: "red" }}>please enter the correct value !</p>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className="border px-4 py-1 rounded-md">Submit</button>
      </form>

      {/* Watched input value */}
      <div style={{ marginTop: "20px" }}>
        <strong>Watched Value:</strong> {watchedExample}
      </div>
    </div>
  )
}
export default AiSummariser