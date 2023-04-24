"use client";
import React from "react";
import signIn from "@/firebase/auth/signin";
import { useRouter } from "next/navigation";
import styles from "../../app/page.module.css";
import { useAuthContext } from "@/context/AuthContext";
import Link from "next/link";
import "./login.css";


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
      <p class="form-title">Logohu tek llogaria</p>
      <div class="input-container">
      
          
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
            <button type="submit" className="submit">Log in</button>
            <Link href="/"> Faqja Kryesore </Link> <br /> <br />
            <p class="signup-link">
            <Link href="/register">
              Nuk ke akoma llogari? Regjistrohu pra ca pret{" "}
            </Link>
            </p>
          </form>
        </div>
      </div> 
     
    </main>
    </div>
  );
 
};

export default LoginPage;
