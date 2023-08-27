"use client";
import { FieldValues, useForm } from "react-hook-form";
export default function ReactHooksForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  async function onSubmit(data: FieldValues) {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    reset();
  }

  return (
    <div className="flex flex-col w-full justify-center items-center h-screen">
      <h2 className="text-3xl font-bold my-2">Forms</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2">
        <input
          {...register("email", {
            required: "Email is required",
            minLength: {
              value: 5,
              message: "To short must be longer than 5 characters",
            },
            maxLength: { value: 50, message: "To Long must be valid email " },
          })}
          type="email"
          placeholder="Email"
          className="px-4 py-2 rounded"
        />
        {errors.email && (
          <p className="text-red-500">{`${errors.email.message}`}</p>
        )}
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "To short must be longer than 8 characters",
            },
          })}
          type="password"
          placeholder="Password"
          className="px-4 py-2 rounded"
        />
        {errors.password && (
          <p className="text-red-500">{`${errors.password.message}`}</p>
        )}
        <input
          {...register("confirmPassword", {
            required: "Confirm password is required",
            validate: (value) =>
              value === getValues("password") || "Passwords must match",
          })}
          type="password"
          placeholder="Confirm Password"
          className="px-4 py-2 rounded"
        />
        {errors.confirmPassword && (
          <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>
        )}
        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-blue-500 disabled:bg-gray-500 py-2 rounded font-bold"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
