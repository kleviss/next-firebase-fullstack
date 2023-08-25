import React from "react";
import LessonCard from "@/components/LessonCard";
import BottomBlurBar from "@/components/BottomBlurBar";
import Link from "next/link";

const PaidLessons = ({ lessons, user }) => {
  return (
    <main className="relative pb-24 pt-16">
      {lessons.map((course) => (
        <>
          <div
            className="mx-auto max-w-7xl py-6 mobile:px-6 laptop:px-8"
            key={course.courseName}
          >
            <div className="mx-auto max-w-2xl px-4 mobile:px-6 mobile:py-6 laptop:max-w-7xl laptop:px-8">
              {/* Space between title and button */}
              <div className="flex justify-between">
                <h2 className="text-2xl font-bold text-gray-900" x>
                  {course.courseName}
                </h2>
                {/* check is user is admin */}
                {user && user.email === "dulla@otr.com" ? (
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <Link href={`/admin`}>Admin Portal</Link>
                  </button>
                ) : null}
              </div>

              {course.chapters.map((chapter) => (
                <div
                  key={chapter.title}
                  className="mt-6 bg-white p-6 rounded-2xl"
                >
                  <h3 className="text-lg text-black font-bold pb-4">
                    {chapter.title}
                  </h3>
                  <div className="grid grid-cols-1 gap-x-6 gap-y-10 mobile:grid-cols-1 laptop:grid-cols-3 desktop:grid-cols-4 desktop:gap-x-8">
                    {chapter.lessons.map((lesson) => (
                      <LessonCard lesson={lesson} key={lesson.title} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ))}
      {/* space between content and footer */}
      <div className="h-6"></div>
      <div className="fixed bottom-0 left-0 w-full z-2">
        {/* add blur effect and spread */}
        <BottomBlurBar
          text=" Lajmet më të fundit në Telegram"
          buttonText="Shiko"
        />
      </div>
    </main>
  );
};

// noinspection JSUnusedGlobalSymbols
export default PaidLessons;
