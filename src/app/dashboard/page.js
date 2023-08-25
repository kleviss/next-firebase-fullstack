"use client";
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import PaidLessons from "@/components/PaidLessons";
import loadingStyles from "../loading.module.css";
import NavTop from "../../components/NavTop";
import { paidLessons } from "../../../public/static/paid-lessons";

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
    <>
      {user && (
        <main className="bg-gray-100 min-h-full">
          <NavTop user={user} href={"/dashboard"} />
          <PaidLessons lessons={paidLessons} user={user} />
        </main>
      )}

      {!user && (
        <div className={loadingStyles.wrapper}>
          Checking Authentication...
          <div className={loadingStyles.ring} />
        </div>
      )}
    </>
  );
};

export default PaidLessonsPage;
