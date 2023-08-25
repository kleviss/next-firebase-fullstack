import React from "react";
import LessonCard from "@/components/LessonCard";
import BottomBlurBar from "@/components/BottomBlurBar";
import { freeLessons } from "../../public/static/free-lessons";

const FreeLessons = () => {
  return (
    <main className="relative pb-24 pt-16">
      {freeLessons.map((course) => (
        <>
          <div
            className="mx-auto max-w-7xl py-6 mobile:px-6 laptop:px-8"
            key={course.courseName}
          >
            <div className="mx-auto max-w-2xl px-4 mobile:px-6 mobile:py-6 laptop:max-w-7xl laptop:px-8">
              <h2 className="text-2xl text-black font-bold">
                {course.courseName}
              </h2>
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
          text="Merr akses në të gjitha leksionet"
          buttonText="Abonohu"
        />
      </div>
    </main>
  );
};

export default FreeLessons;
