"use client";
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import PaidLessons from "@/components/PaidLessons";
import PayPerView from "../../components/PayPerView";
import loadingStyles from "../loading.module.css";
import NavTop from "../../components/NavTop";
import LessonCard from "../../components/LessonCard";
import Image from "next/image";
import styles from "../page.module.css";
import signOutUser from "../../firebase/auth/signout";
import FreeLessons from "../../components/FreeLessons";

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

  const [lessons, setLessons] = React.useState([
    {
      id: 1,
      title: "Hyrje Forex, pa dalje",
      videoUrl: "https://www.youtube.com/watch?v=7CqJlxBYj-M",
      imageUrl: "https://i.ytimg.com/vi/7CqJlxBYj-M/maxresdefault.jpg",
      duration: "1:30",
      views: 100,
      createdOn: "2020-10-10",
      authorImage: "https://i.ytimg.com/vi/7CqJlxBYj-M/maxresdefault.jpg",
      category: "FOREX",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae luctus",
    },
    {
      id: 2,
      title: "Menaxhim Risku",
      videoUrl: "https://www.youtube.com/watch?v=xPZoHsaRVzM",
      imageUrl: "https://i.ytimg.com/vi/mxK8b99iJTg/maxresdefault.jpg",
      duration: "5:30",
      views: 200,
      createdOn: "2020-10-10",
      authorImage: "https://i.ytimg.com/vi/7CqJlxBYj-M/maxresdefault.jpg",
      category: "FOREX",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae luctus",
    },
    {
      id: 3,
      title: "Fibonaci, rob zoti",
      videoUrl: "https://www.youtube.com/watch?v=mxK8b99iJTg",
      imageUrl: "https://i.ytimg.com/vi/mxK8b99iJTg/maxresdefault.jpg",
      duration: "6:30",
      views: 300,
      createdOn: "2020-10-10",
      authorImage: "https://i.ytimg.com/vi/7CqJlxBYj-M/maxresdefault.jpg",
      category: "CRYPTO",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae luctus",
    },
    {
      id: 2,
      title: "Menaxho rrezikun o cun",
      videoUrl: "https://www.youtube.com/watch?v=xPZoHsaRVzM",
      imageUrl: "https://i.ytimg.com/vi/7CqJlxBYj-M/maxresdefault.jpg",
      duration: "5:30",
      views: 200,
      createdOn: "2020-10-10",
      authorImage: "https://i.ytimg.com/vi/7CqJlxBYj-M/maxresdefault.jpg",
      category: "FOREX",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae luctus",
    },
    {
      id: 3,
      title: "Fibonaci, esht me lek, mvje keq ;)",
      videoUrl: "https://www.youtube.com/watch?v=mxK8b99iJTg",
      imageUrl: "https://i.ytimg.com/vi/7CqJlxBYj-M/maxresdefault.jpg",
      duration: "6:30",
      views: 300,
      createdOn: "2020-10-10",
      authorImage: "https://i.ytimg.com/vi/7CqJlxBYj-M/maxresdefault.jpg",
      category: "CRYPTO",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, auctor, auctor, auctor, auctor, auctor, nisl vitauctor, auctor, auctor, auctor, auctor, ae tincidunt ultricies, nunc nisl ultricies nunc, vitae luctus",
    },
    {
      id: 2,
      title: "Menaxho rrezikun o cun",
      videoUrl: "https://www.youtube.com/watch?v=xPZoHsaRVzM",
      imageUrl: "https://i.ytimg.com/vi/7CqJlxBYj-M/maxresdefault.jpg",
      duration: "5:30",
      views: 200,
      createdOn: "2020-10-10",
      authorImage: "https://i.ytimg.com/vi/7CqJlxBYj-M/maxresdefault.jpg",
      category: "FOREX",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae luctus",
    },
  ]);

  return (
    <>
      {user && (
        <main className="bg-gray-100 min-h-full">
          <NavTop user={user} href={"/dashboard"} />
          <PaidLessons lessons={lessons} />
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

const Box = () => {
  return (
    <div className="bg-gray-800 h-64 w-72 m-5 rounded-2xl">
      {/* Your navbar content here */}
    </div>
  );
};

const MainContent = ({ lessons, hasPremium }) => {
  return (
    <main className="flex-1 overflow-y-auto ml-96 pt-24">
      {/* Main content goes here */}
      {!hasPremium ? (
        <>
          <h1 className="text-4xl font-medium pb-6">Kapitulli 1</h1>
          <div className="flex overflow-x-auto">
            {[1, 2].map((item, idx) => (
              // eslint-disable-next-line react/jsx-key
              <LessonCard lesson={lessons[idx]} />
            ))}
          </div>
          <h1 className="text-4xl font-medium pb-6 pt-6">Kapitulli 2</h1>
          <div className="flex overflow-x-auto flex-wrap gap-4">
            {lessons.map((lesson) => (
              // eslint-disable-next-line react/jsx-key
              <LessonCard lesson={lesson} />
            ))}
          </div>

          <h1 className="text-4xl font-medium pb-6 pt-6">Kapitulli 3</h1>
          <div className="flex overflow-x-auto pb-10">
            {[1, 2].map((item, idx) => (
              // eslint-disable-next-line react/jsx-key
              <LessonCard lesson={lessons[idx]} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <svg
            className="w-16 h-16 text-gray-500 mb-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="12" width="18" height="8" rx="2" ry="2"></rect>
            <path d="M7 12V7a5 5 0 0 1 10 0v5"></path>
          </svg>
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            You dont have premium
          </h1>
          <p className="text-gray-600 mb-10">
            Either your payment is not yet processed or you dont have premium.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md">
            Get Premium
          </button>
        </div>
      )}
    </main>
  );
};
