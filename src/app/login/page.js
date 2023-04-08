"use client";
import React from "react";
import signIn from "@/firebase/auth/signin";
import { useRouter } from "next/navigation";
import styles from "../../app/page.module.css";
import { useAuthContext } from "@/context/AuthContext";
import Link from "next/link";

const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { user } = useAuthContext();
  const router = useRouter();

  console.log("user", user);

  if (user) return router.push("/dashboard");

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/dashboard");
  };

  return (
    <main className={styles.main}>
      <div className="wrapper">
        <div className="form-wrapper">
          <h1 className="mt-60 mb-30">Login</h1>
          <form onSubmit={handleForm} className="form">
            <label htmlFor="email">
              <p>Email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                name="email"
                id="email"
                placeholder="example@mail.com"
              />
            </label>
            <label htmlFor="password">
              <p>Password</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
            </label>
            <button type="submit">Log in</button>
            <Link href="/"> Faqja Kryesore </Link> <br /> <br />
            <Link href="/register">
              Nuk ke akoma llogari? Regjistrohu pra ca pret{" "}
            </Link>
          </form>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
