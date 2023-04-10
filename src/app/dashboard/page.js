"use client";
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import styles from "../../app/page.module.css";
import signOutUser from "@/firebase/auth/signout";
import PaidLessons from "@/components/PaidLessons";
import Link from "next/link";
import PayPerView from "../../components/PayPerView";

const PaidLessonsPage = ({ lessons }) => {
  const { user } = useAuthContext();
  const router = useRouter();

  const [hasPremium, setHasPremium] = React.useState(false);

  React.useEffect(() => {
    if (user == null)
      // Redirect the user to the login page or homepage after 2 seconds
      setTimeout(() => router.push("/login"), 2000);
    if (user && user.reloadUserInfo && user.reloadUserInfo.customAttributes) {
      const customAttributes = JSON.parse(user.reloadUserInfo.customAttributes);
      setHasPremium(customAttributes.hasPremium);
    }
  }, [router, user]);

  const handleSignOut = async () => {
    const { error } = await signOutUser();
    if (error) {
      console.log("Error signing out:", error);
    } else {
      console.log("Successfully signed out");
      // Redirect the user to the login page or homepage
      router.push("/");
    }
  };

  return (
    <main className={styles.main}>
      {user && (
        <>
          <div>
            <h1>Welcome {user.email}</h1>
            <button onClick={handleSignOut}>Logout</button>
            <Link href="/"> Faqja Kryesore </Link>
          </div>

          {hasPremium ? <PaidLessons lessons={lessons} /> : <PayPerView />}
        </>
      )}

      {!user && (
        <div>
          <h1>mduket sikur sje identifikuar</h1>
          <h2> fut icik email dhe password ke faqja tjeter ;) </h2>
        </div>
      )}
    </main>
  );
};

export default PaidLessonsPage;
