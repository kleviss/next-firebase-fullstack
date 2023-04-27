"use client";
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import PaidLessons from "@/components/PaidLessons";
import PayPerView from "../../components/PayPerView";
import loadingStyles from "../loading.module.css";
import NavTop from "../../components/NavTop";

const PaidLessonsPage = () => {
  const { user } = useAuthContext();
  const router = useRouter();

  const [hasPremium, setHasPremium] = React.useState(false);

  console.log("hasPremium", hasPremium);

  React.useEffect(() => {
    if (user == null)
      // Redirect the user to the login page or homepage after 2 seconds
      // setTimeout(() => router.push("/login"), 2000);
      router.push("/login");
    if (user && user.reloadUserInfo && user.reloadUserInfo.customAttributes) {
      const customAttributes = JSON.parse(user.reloadUserInfo.customAttributes);
      setHasPremium(customAttributes.hasPremium);
    }
  }, [router, user]);

  return (
    <main className="bg-gray-100 min-h-screen">
      {user && (
        <>
          {hasPremium ? (
            <main className="bg-gray-100 min-h-screen">
              <NavTop user={{ user }} />
              <h1 className="text-center text-2xl pt-20 text-black">
                👋🏻 hey {user.email}
                <br />
                <span className="text-center text-2xl pt-2 text-black font-bold">
                  #leTaMarrimAteBuke 🍞
                </span>
              </h1>
              <PaidLessons />
            </main>
          ) : (
            <main className="bg-gradient-to-br from-red-500 to-pink-500 min-h-screen">
              <NavTop user={{ user }} />
              <div className="min-h-screen flex justify-center items-center">
                <PayPerView />
              </div>
            </main>
          )}
        </>
      )}

      {!user && (
        <div className={loadingStyles.wrapper}>
          Checking Authentication...
          <div className={loadingStyles.ring} />
        </div>
      )}
    </main>
  );
};

export default PaidLessonsPage;
