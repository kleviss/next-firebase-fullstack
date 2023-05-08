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

      <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <div className="md:shrink-0 relative">
            <img
              src={lesson.imageSrc}
              alt={lesson.imageAlt}
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
            <div className={styles.duration}>{lesson.duration}</div>
            <div className={styles.details}>{lesson.views} views</div>
          </div>
        </div>
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mt-4">
          {lesson.category}
        </div>
        <p className="mt-1 text-lg font-medium text-gray-900">{lesson.title}</p>
      </div>
    </>
  );
};

export default LessonCard;
