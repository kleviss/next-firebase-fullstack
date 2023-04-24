"use client";
import React from "react";
import signUp from "@/firebase/auth/signup";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";
import Link from "next/link";
import { setCustomUserClaims } from "firebase/auth";
import "./register.css";
import styles from "../../app/page.module.css";

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
    <div className="area">
      <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    </ul>
                    <main className={styles.main}>
       <div className="login_background">
      
        <p1 className="form-title">Regjistrohu</p1>
        <form onSubmit={handleForm} className="form">
        <div class="input-container">
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
          </div>
          <div class="input-container">
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
          </div>
          <button type="submit" className="submit">Register</button>
          <Link href="/"> Faqja Kryesore </Link>
        </form>
      </div>
    </main>
    </div>
  
  );
};

export default RegisterPage;
