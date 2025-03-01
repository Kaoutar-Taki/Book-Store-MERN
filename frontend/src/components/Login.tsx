import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export const Login = () => {
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  const handleGoogleSignIn = () => {};
  return (
    <div className="flex h-[calc(100vh-120px)] items-center justify-center">
      <div className="mx-auto mb-4 w-full max-w-sm rounded bg-white px-8 pt-6 pb-8 shadow-md">
        <h2 className="mb-4 text-xl font-semibold">Please Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              className="w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:shadow focus:outline-none"
              id="email"
              type="email"
              name="email"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-6">
            <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              {...register("password", { required: true })}
              className="w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:shadow focus:outline-none"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          {message && <p className="mb-3 text-xs text-red-500 italic">{message}</p>}
          <div className="flex flex-wrap items-center justify-between space-y-2.5">
            <button
              className="rounded bg-blue-500 px-8 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <p className="mt-4 inline-block align-baseline text-sm font-medium">
          Haven't an account? Please
          <Link to="/register" className="text-blue-500 hover:text-blue-700">
            Register
          </Link>
        </p>

        <div className="mt-4">
          <button
            className="bg-secondary flex w-full flex-wrap items-center justify-center gap-1 rounded px-4 py-2 font-bold text-white hover:bg-blue-700 focus:shadow focus:outline-none"
            onClick={handleGoogleSignIn}
          >
            <FaGoogle className="mr-2" />
            Sign in with Google
          </button>
        </div>
        <p className="mt-5 text-center text-xs text-gray-500">
          &copy;2025 Book Store. All rights reserved.
        </p>
      </div>
    </div>
  );
};
