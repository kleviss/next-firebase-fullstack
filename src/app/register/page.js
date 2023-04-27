"use client";
import React from "react";
import signUp from "@/firebase/auth/signup";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";
import Link from "next/link";
import { setCustomUserClaims } from "firebase/auth";

const RegisterPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signUp(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/dashboard");
  };
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700">
      <h1 className="text-2xl font-semibold">Register</h1>
      <form
        className="flex flex-col bg-white rounded shadow-lg p-12 mt-12"
        onSubmit={handleForm}
      >
        <label className="font-semibold text-xs" htmlFor="usernameField">
          Email
        </label>
        <input
          className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="font-semibold text-xs mt-3" htmlFor="passwordField">
          Password
        </label>
        <input
          className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700"
          type="submit"
        >
          Register
        </button>
        <div className="flex mt-6 justify-center text-xs">
          <Link href="/" className="text-blue-400 hover:text-blue-500">
            {" "}
            Faqja Kryesore{" "}
          </Link>

          <span className="mx-2 text-gray-300">/</span>
          <Link href="/login" className="text-blue-400 hover:text-blue-500">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
