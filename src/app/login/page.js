"use client";
import React from "react";
import signIn from "@/firebase/auth/signin";
import { useRouter } from "next/navigation";
import styles from "../../app/page.module.css";
import { useAuthContext } from "@/context/AuthContext";
import Link from "next/link";
import FreeLessons from "@/components/FreeLessons";

const LoginPage = () => {
  const router = useRouter();
  const { user } = useAuthContext();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [router, user]);

  const handleSignIn = async (e) => {
    e.preventDefault();
    const { error } = await signIn(email, password);
    if (error) {
      setError(error.message);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700">
      <h1 className="text-3xl font-semibold">Login</h1>
      <form
        className="flex flex-col bg-white rounded shadow-lg p-12 mt-12"
        onSubmit={handleSignIn}
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
          Login
        </button>
        <div className="flex mt-6 justify-center text-xs">
          <Link href="/" className="text-blue-400 hover:text-blue-500">
            {" "}
            Faqja Kryesore{" "}
          </Link>

          <span className="mx-2 text-gray-300">/</span>
          <Link href="/register" className="text-blue-400 hover:text-blue-500">
            Regjistrohu
          </Link>
        </div>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginPage;
