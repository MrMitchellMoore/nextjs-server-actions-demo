"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TSignUpSchema, signUpSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function ReactHooksFormWithZod() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<TSignUpSchema>({ resolver: zodResolver(signUpSchema) });

  async function onSubmit(data: TSignUpSchema) {
    const response = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();
    if (!response.ok) {
      toast("Submitting form failed!");
      return;
    }

    if (responseData.errors) {
      const errors = responseData.errors;
      if (errors.email) {
        setError("email", {
          type: "server",
          message: errors.email,
        });
      } else if (errors.password) {
        setError("password", {
          type: "server",
          message: errors.password,
        });
      } else if (errors.confirmPassword) {
        setError("confirmPassword", {
          type: "server",
          message: errors.confirmPassword,
        });
      } else {
        toast("Something went wrong!");
      }
    }

    toast("Submitted Successfully");
    reset();
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="flex flex-col w-full justify-center items-center h-screen">
        <h2 className="text-3xl font-bold my-2">Forms</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-2"
        >
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="px-4 py-2 rounded"
          />
          {errors.email && (
            <p className="text-red-500">{`${errors.email.message}`}</p>
          )}
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="px-4 py-2 rounded"
          />
          {errors.password && (
            <p className="text-red-500">{`${errors.password.message}`}</p>
          )}
          <input
            {...register("confirmPassword")}
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
    </>
  );
}
