"use client";
import React from "react";

const FreeLessons = () => {
  const [lessons, setLessons] = React.useState([
    {
      id: 1,
      title: "Bej lek pa lek",
      videoUrl: "https://www.youtube.com/watch?v=7CqJlxBYj-M",
    },
    {
      id: 2,
      title: "Menaxho rrezikun o cun",
      videoUrl: "https://www.youtube.com/watch?v=xPZoHsaRVzM",
    },
    {
      id: 3,
      title: "fibonaci, esht me lek, mvje keq ;)",
      videoUrl: "https://www.youtube.com/watch?v=mxK8b99iJTg",
    },
  ]);

  return (
    <div>
      {lessons.map((lesson) => (
        <div key={lesson.id}>
          <h2>{lesson.title}</h2>
          <iframe
            src={lesson.videoUrl}
            title={lesson.title}
            width="560"
            height="315"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default FreeLessons;
