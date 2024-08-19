import { useForm } from "react-hook-form";

interface ISignupForm {
  name: string;
  lastName: string;
  phone: string;
  address: string;
  zipCode: string;
}

export const SignupForm = () => {
  const { register, reset, handleSubmit } = useForm<ISignupForm>();

  const handleSubmitForm = (data: ISignupForm) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <label>
        Name:
        <input
          {...register("name", { required: true })}
        />
      </label>
      <br />

      <label>
        Last Name:
        <input
          {...register("lastName", { required: true })}
        />
      </label>
      <br />

      <label>
        Phone:
        <input
          {...register("phone", { required: true })}
        />
      </label>
      <br />

      <label>
        Address:
        <input
          {...register("address", { required: true })}
        />
      </label>
      <br />

      <label>
        Zip Code:
        <input
          {...register("zipCode", { required: true })}
        />
      </label>
      <br />

      <div>
        <button type="submit">Submit</button>
        <button type="reset" onClick={() => reset()}>Reset</button>
      </div>
    </form>
  )
}
