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

  console.log(watch("Email"));
  console.log(watch("UserId"));

  return (
    <>
      <h2>ユーザーログイン</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("UserId", { required: true })} />
        {errors.UserId && <span>ユーザーIDは必須です</span>}

        <input {...register("Email", { required: true })} />
        {errors.Email && <span>メールアドレスは必須です</span>}

        <input type="submit" />
      </form>
    </>
  );
}

export default App;
