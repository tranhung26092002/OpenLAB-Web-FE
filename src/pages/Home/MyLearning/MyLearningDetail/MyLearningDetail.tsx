import React, { useEffect, useState, Fragment } from 'react';
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';
import styles from './MyLearningDetail.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../../../../redux/configStore';
import { fetchMyProductDetail } from '../../../../redux/MyLearningReducer/MyLearningReducer';
import { useLocation } from 'react-router-dom';
import { DOMAIN_VIDEO } from '../../../../../src/util/config';
import { BookOutlined, FileTextOutlined, PlayCircleOutlined, ReadOutlined, SolutionOutlined, VideoCameraOutlined } from "@ant-design/icons";

const MylearningDetailPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = Number(queryParams.get('productId'));
    const dispatch = useDispatch<DispatchType>();
    const data = useSelector((state: RootState) => state.MyLearningReducer.currentItem);
    const [videoUrl, setVideoUrl] = useState("");
    const [titleLesson, setTitleLesson] = useState("");
    const [documentUrl, setDocumentUrl] = useState("");
    const [descriptionLesson, setDescriptionLesson] = useState("");

    // Fetch device details when the component mounts or when id changes
    useEffect(() => {
        if (id) {
            dispatch(fetchMyProductDetail(id));
        }
    }, [id, dispatch]);

    // Set default video URL when data is loaded
    useEffect(() => {
        if (data && data.lessons && data.lessons.length > 0) {
            setVideoUrl(data.lessons[0].urlVideo);
            setTitleLesson(data.lessons[0].titleLesson);
            setDocumentUrl(data.lessons[0].urlDocument);
            setDescriptionLesson(data.lessons[0].description);
        }
    }, [data]);

    if (!data) {
        return <p>No data available</p>;
    }

    const handleLessonClick = (urlVideo: string, titleLesson: string, documentUrl: string, descriptionLesson: string) => {
        setVideoUrl(urlVideo);
        setTitleLesson(titleLesson);
        setDocumentUrl(documentUrl);
        setDescriptionLesson(descriptionLesson);
    };

    return (
        <Fragment>
            <Header />
            <div className={styles.detail_container}>
                <div className={styles.title_course}>
                    <h1>{data.title}</h1>
                </div>
                <div className={styles.container_course}>
                    <div className={styles.video_course}>
                        <div className={styles.title_lesson}>
                            <h2>{titleLesson}</h2>
                        </div>
                        <div className={styles.aspect_video}>
                            <video
                                title="YouTube video player"
                                controls
                                src={`${DOMAIN_VIDEO}/api/upload/video/${videoUrl}`}
                                style={{ border: '1px solid #ddd', borderRadius: '4px' }}
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className={styles.document_lesson}>
                            <span>Tài liệu:</span>
                            <a href={documentUrl} target="_blank" rel="noopener noreferrer">
                                {documentUrl}
                            </a>
                        </div>
                        <div className={styles.description_lesson}>
                            <h2>{descriptionLesson}</h2>
                        </div>
                    </div>

                    <div className={styles.process_course}>
                        <span>Tiến độ hoàn thành khoá học</span>
                        <div className={styles.content_course}>
                            <ul className={styles.list_content}>
                                {data.lessons && data.lessons.length > 0 ? (
                                    data.lessons.map((lesson, index) => (
                                        <li
                                            key={index}
                                            className={styles.item_list}
                                            onClick={() => handleLessonClick(lesson.urlVideo, lesson.titleLesson, lesson.urlDocument, lesson.description)}
                                        >
                                            <span className={styles.icon_item}>
                                                <PlayCircleOutlined  />
                                            </span>
                                            <span className={styles.text_item}>
                                                {index + 1}. {lesson.titleLesson}
                                            </span>
                                        </li>
                                    ))
                                ) : (
                                    <p>No lessons available</p>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default MylearningDetailPage;
