import React, { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import LessonCard from "@/components/LessonCard";
import Link from "next/link";

const data = [
  {
    courseName: "Hapat e parë në forex",
    chapters: [
      {
        title: "Kapitulli 1: Fillimi",
        lessons: [
          {
            id: 1,
            title: "Mësimi 1: Hyrje Ne Forex\n",
            videoUrl: "https://www.youtube.com/watch?v=mxK8b99iJTg",
            imageSrc:
              "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
            imageAlt:
              "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
            duration: "6:30",
            views: 300,
            createdOn: "2020-10-10",
            authorImage: "https://i.ytimg.com/vi/7CqJlxBYj-M/maxresdefault.jpg",
            category: "FOREX",
          },
          {
            id: 2,
            title: "Mësimi 2: Hyrje ne Metatrader\n",
            videoUrl: "https://www.youtube.com/watch?v=mxK8b99iJTg",
            imageSrc:
              "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
            imageAlt:
              "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
            duration: "6:30",
            views: 300,
            createdOn: "2020-10-10",
            authorImage: "https://i.ytimg.com/vi/7CqJlxBYj-M/maxresdefault.jpg",
            category: "FOREX",
          },
        ],
      },
      {
        title: "Kapitulli 2: Analiza Teknike",
        lessons: [
          {
            id: 1,
            title: "Mësimi 1: Si të lexojmë grafikët\n",
            videoUrl: "https://www.youtube.com/watch?v=mxK8b99iJTg",
            imageSrc:
              "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
            imageAlt:
              "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
            duration: "6:30",
            views: 300,
            createdOn: "2020-10-10",
            authorImage: "https://i.ytimg.com/vi/7CqJlxBYj-M/maxresdefault.jpg",
            category: "FOREX",
          },
          {
            id: 2,
            title: "Mësimi 2: Si të llogarsim pip-sat\n",
            videoUrl: "https://www.youtube.com/watch?v=mxK8b99iJTg",
            imageSrc:
              "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
            imageAlt:
              "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
            duration: "6:30",
            views: 300,
            createdOn: "2020-10-10",
            authorImage: "https://i.ytimg.com/vi/7CqJlxBYj-M/maxresdefault.jpg",
            category: "FOREX",
          },
          {
            id: 3,
            title: "Mësimi 3: Si të lllogarisim lotet\n",
            videoUrl: "https://www.youtube.com/watch?v=mxK8b99iJTg",
            imageSrc:
              "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
            imageAlt:
              "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
            duration: "6:30",
            views: 300,
            createdOn: "2020-10-10",
            authorImage: "https://i.ytimg.com/vi/7CqJlxBYj-M/maxresdefault.jpg",
            category: "FOREX",
          },
          {
            id: 4,
            title: "Mësimi 4: Si të menaxhosh riskun\n",
            videoUrl: "",
            imageSrc:
              "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
            imageAlt:
              "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
            duration: "6:30",
            views: 300,
            createdOn: "2020-10-10",
            authorImage: "https://i.ytimg.com/vi/7CqJlxBYj-M/maxresdefault.jpg",
            category: "ME PAGESË",
          },
          {
            id: 5,
            title: "Mësimi 5: Përgatitja psiologjike ne forex\n",
            videoUrl: "",
            imageSrc:
              "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
            imageAlt:
              "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
            duration: "6:30",
            views: 300,
            createdOn: "2020-10-10",
            authorImage: "https://i.ytimg.com/vi/7CqJlxBYj-M/maxresdefault.jpg",
            category: "ME PAGESË",
          },
        ],
      },
    ],
  },
];

const FreeLessons = () => {
  return (
    <>
      <header className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Free Lessons
          </h1>
        </div>
      </header>
      <main>
        {data.map((course) => (
          <div
            className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"
            key={course.courseName}
          >
            <div className="bg-white">
              <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl text-black font-bold">
                  {course.courseName}
                </h2>
                {course.chapters.map((chapter) => (
                  <div key={chapter.title} className="mt-6">
                    <h3 className="text-lg text-black font-bold py-12">
                      {chapter.title}
                    </h3>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                      {chapter.lessons.map((lesson) => (
                        <LessonCard lesson={lesson} key={lesson.title} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div
          className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"
          key={"skeletor"}
        >
          <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl text-black font-bold">
                  Abonohu për të pasur akses në të gjitha leksionet
                </h2>
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
                >
                  Abonohu tani <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default FreeLessons;
