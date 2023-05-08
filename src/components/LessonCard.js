import React from "react";
import styles from "../app/lessonCard.module.css";

const LessonCard = ({ lesson }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const closeModal = () => setIsOpen(false);

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className={styles.modal} onClick={handleCloseModal}>
          <div className={styles.modalContent}>
            {
              // iframe for video player
              <iframe
                width="660"
                height="390"
                src="https://www.youtube.com/embed/z1vPBc2h9pE"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            }
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-red-700 text-white font-bold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline-block mr-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Mbyll Videon
            </button>
          </div>
        </div>
      )}
      <div
        className="bg-gray-800 rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg w-full mr-16"
        onClick={() => setIsOpen(true)}
      >
        <div className="md:flex">
          <div className="md:shrink-0 relative">
            <img
              src={lesson.imageUrl}
              className="h-48 w-full object-cover md:h-full md:w-48 hover:opacity-75"
              alt="Lesson"
            />
            <div className={styles.duration}>{lesson.duration}</div>
            <div className={styles.details}>{lesson.views} views</div>
          </div>

          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {lesson.category}
            </div>
            <a
              href={lesson.video}
              className="block mt-1 text-lg leading-tight font-medium text-white hover:underline"
            >
              {lesson.title}
            </a>

            <p className="mt-2 text-slate-500">{lesson.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LessonCard;
