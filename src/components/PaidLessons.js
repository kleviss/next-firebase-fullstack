import React from "react";
import LessonCard from "./LessonCard";

const PaidLessons = () => {
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl vitae tincidunt tincidunt tincidunt tincidunt ultricies, nunc nisl ultricies nunc, vitae luctus",
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae luctus",
    },

    {
      id: 2,
      title: "Menaxho rrezikun o cun",
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
      id: 2,
      title: "Menaxho rrezikun o cun",
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
  ]);

  return (
    <>
      <div>
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </>
  );
};

export default PaidLessons;
