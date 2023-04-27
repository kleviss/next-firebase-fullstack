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
    <main className={styles.main}>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSignIn}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div>
            <button type="submit">Log in</button>
            <br></br>
            <Link href="/"> Faqja Kryesore </Link> <br /> <br />
            <Link href="/register">
              Nuk ke akoma llogari? Regjistrohu pra ca pret{" "}
            </Link>
          </div>{" "}
        </form>
        {error && <p>{error}</p>}
      </div>
    </main>
  );
};

export default LoginPage;
