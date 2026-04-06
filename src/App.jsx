import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("UserId")} />

        <input {...register("Email", { required: true })} />
        {errors.Email && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </>
  );
}

export default App;
