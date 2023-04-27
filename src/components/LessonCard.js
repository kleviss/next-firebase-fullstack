import React from "react";
import styles from "../app/lessonCard.module.css";

const LessonCard = ({ lesson }) => {
    return (

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
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


    );
};

export default LessonCard;
