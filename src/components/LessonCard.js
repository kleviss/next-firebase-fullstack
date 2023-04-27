import React from "react";
import styles from "../app/lessonCard.module.css";

const LessonCard = ({ lesson }) => {

    const [isOpen, setIsOpen] = React.useState(false);


    const handleCloseModal = () => {
        setIsOpen(false);
    }

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
<>  {isOpen && (
    <div className={styles.modal} onClick={handleCloseModal}>
        <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
                <h2>{lesson.title}</h2>

            </div>
            {
                // iframe for video player
                <iframe width="560" height="315" src="https://www.youtube.com/embed/z1vPBc2h9pE"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
            }
            <button onClick={() => setIsOpen(false)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4">Close</button>
        </div>
    </div>
)}
        <div className={styles.lessonCard} onClick={() => setIsOpen(true)}>
            <div className="md:flex">

                <div className={styles.cardImage}>
                    <img src={lesson.imageUrl} />
                    <div className={styles.duration}>{lesson.duration}</div>
                    <div className={styles.details}>{lesson.views} views</div>
                </div>

                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{lesson.category}
                    </div>
                    <a href={lesson.video} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{lesson.title}</a>

                    <p className="mt-2 text-slate-500">{lesson.description}</p>

                </div>

            </div>

        </div>
    </>



    );
};

export default LessonCard;
