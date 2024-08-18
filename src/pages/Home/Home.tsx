import React, { Fragment, useEffect, useRef, useState } from 'react';
import styles from './Home.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

type Props = {}

export const Home = (props: Props) => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const imageContainerRef = useRef<HTMLDivElement>(null);

    const images = [
        require('../../assets/img/home/10.png'),
        require('../../assets/img/home/11.png'),
        require('../../assets/img/home/12.png'),
        require('../../assets/img/home/13.png'),
        require('../../assets/img/home/14.png'),
        require('../../assets/img/home/15.png'),
    ];

    const totalImages = images.length;
    const imagesToShow = 3;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex + 1 >= totalImages ? 0 : prevIndex + 1
            );
        }, 3000); // Dịch chuyển sau mỗi 3 giây

        return () => {
            clearInterval(interval);
        };
    }, [totalImages]);

    useEffect(() => {
        if (imageContainerRef.current) {
            imageContainerRef.current.style.transform = `translateX(-${currentIndex * (100 / imagesToShow)
                }%)`;
        }
    }, [currentIndex]);

    return (
        <Fragment>
            <Header />
            <section className={styles.banner_padding}>
                <div className={styles.container_banner}>
                    <div className={styles.content_banner}>
                        <div className={styles.text_banner}>
                            <h1 className={styles.heading}>
                                Nền tảng thực hành số,
                            </h1>
                            <h1 className={styles.heading}>
                                dịch dụ AI/IoT giá rẻ cho chuyển đổi số giáo dục
                            </h1>
                            <p className={styles.description}>
                                Chúng tôi nỗ lực làm việc để hiểu khách hàng và mang đến các dịch vụ chất lượng, có giá trị thực tiễn cao!
                            </p>
                            <button className={styles.btn} onClick={() => navigate('/products', { replace: true })}>
                                Các dịch vụ chính
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.features_padding}>
                <div className={styles.container_features}>
                    <div className={styles.content_features}>
                        <div className={styles.text_features}>
                            <div className={styles.section_heading}>
                                <h2 className={styles.sub_heading}>Các dịch vụ chính</h2>
                                <p className={styles.heading}>Các dịch vụ chính OpenLAB đang tập trung phát triển và cung cấp cho khách hàng</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.row_features}>
                        <div className={styles.feature_column} >
                            <div className={styles.feature_item} >
                                <div className={styles.feature_icon}>
                                    <span>
                                        <img src={require("../../assets/img/home/Practice.png")} alt="Nền tảng thực hành trực tuyến" />
                                    </span>
                                </div>
                                <div className={styles.feature_text}>
                                    <h4>Nền tảng thực hành số</h4>
                                    <p>Cung cấp các dịch vụ thực hành trực truyến AI/IoT</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.feature_column} >
                            <div className={styles.feature_item} >
                                <div className={styles.feature_icon}>
                                    <span>
                                        <img src={require("../../assets/img/home/KIT.png")} alt="Thiết bị thực hành trực tuyến" />
                                    </span>
                                </div>
                                <div className={styles.feature_text}>
                                    <h4>Thiết bị thực hành thông minh</h4>
                                    <p>Cung cấp các bộ KIT thực hành trực tuyến AI/IoT</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.feature_column} >
                            <div className={styles.feature_item} >
                                <div className={styles.feature_icon}>
                                    <span>
                                        <img src={require("../../assets/img/home/Course.png")} alt="Khóa học thực hành trực tuyến" />
                                    </span>
                                </div>
                                <div className={styles.feature_text}>
                                    <h4>Khóa học thực hành trực tuyến</h4>
                                    <p>Cung cấp các khóa học thực hành trực tuyến AI/IoT chuyên sâu, thực chiến dự án</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.feature_column} >
                            <div className={styles.feature_item} >
                                <div className={styles.feature_icon}>
                                    <span>
                                        <img src={require("../../assets/img/home/Chatbot.png")} alt="Trợ giảng số trực tuyến" />
                                    </span>
                                </div>
                                <div className={styles.feature_text}>
                                    <h4>Trợ giảng số AI</h4>
                                    <p>Cung cấp các dịch vụ Chatbot AI hỗ trợ thực hành trực tuyến 24/7</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.solution_padding}>
                <div className={styles.container_project}>
                    <div className={styles.content_left}>
                        <h2>Các giải pháp tiên phong</h2>
                        <p>Các gói giải pháp được lựa chọn riêng theo từng nhu cầu, quy mô. <br /> Tiêu chuẩn khẳng định vị thế tiên phong của OpenLAB</p>
                        <ul>
                            <li><i className="fas fa-check"></i> Giải pháp phòng Lab thông minh OpenLab</li>
                            <li><i className="fas fa-check"></i> Hệ thống Kit thực hành thông minh OpenKit</li>
                            <li><i className="fas fa-check"></i> Khóa học thực hành chuyên sâu OpenCourse</li>
                            <li><i className="fas fa-check"></i> Giải pháp trợ giảng số AI OpenChat</li>
                        </ul>
                    </div>
                    <div className={styles.img_right}>
                        <span>
                            <img src={require("../../assets/img/about/1.jpg")} alt="about" />
                        </span>
                        <span>
                            <img src={require("../../assets/img/about/2.jpg")} alt="about" />
                        </span>
                        <span>
                            <img src={require("../../assets/img/about/3.jpg")} alt="about" />
                        </span>
                        <span>
                            <img src={require("../../assets/img/about/4.jpg")} alt="about" />
                        </span>
                    </div>
                </div>
            </section>

            <section className={styles.project_padding}>
                <div className={styles.container_project}>
                    <div className={styles.content_project}>
                        <div className={styles.text_project}>
                            <h2 className={styles.sub_heading}>Sản phẩm phổ biến</h2>
                            <p className={styles.heading}>Các sản phẩm tiêu biểu trong hệ sinh thái thực hành số của OpenLAB</p>
                        </div>
                    </div>
                    <div className={styles.row_project}>
                        <div className={styles.project_column}>
                            <div className={styles.project_header}>
                                <span>
                                    <img src={require("../../assets/img/home/1.jpg")} alt="project 1" />
                                </span>
                            </div>
                            <div className={styles.project_content}>
                                <div className={styles.project_meta}>
                                    <span className={styles.category}>New</span>

                                    <span className={styles.label}>
                                        <i className="fas fa-signal me-2"></i>
                                        Có sẵn
                                    </span></div>
                                <div className={styles.project_title}>
                                    <p>Lập trình nhúng IoT với ESP8266</p>
                                </div>
                                <div className={styles.project_meta_info}>
                                    <i className="far fa-quote-left me-2"></i>
                                    <p>
                                        OpenLAB cung cấp khóa học cơ bản về IoT với ESP8266
                                    </p>
                                </div>
                                <div className={styles.project_footer}>
                                    <div className="project-price"></div>
                                    <button className={styles.btn} onClick={() => navigate('/products/detail?productId=17', { replace: true })}>
                                        Xem chi tiết
                                        <i className="fa fa-long-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className={styles.project_column}>
                            <div className={styles.project_header}>
                                <span>
                                    <img src={require("../../assets/img/home/2.jpg")} alt="project 2" />
                                </span>
                            </div>
                            <div className={styles.project_content}>
                                <div className={styles.project_meta}>
                                    <span className={styles.category}>New</span>

                                    <span className={styles.label}>
                                        <i className="fas fa-signal me-2"></i>
                                        Có sẵn
                                    </span></div>
                                <div className={styles.project_title}>
                                    <p>Lập trình nhúng IoT với Arduino</p>
                                </div>
                                <div className={styles.project_meta_info}>
                                    <i className="far fa-quote-left me-2"></i>
                                    <p>
                                        OpenLAB cung cấp khóa học cơ bản về lập trình nhúng IoT với Arduino
                                    </p>
                                </div>
                                <div className={styles.project_footer}>
                                    <div className="project-price"></div>
                                    <button className={styles.btn} onClick={() => navigate('/products/detail?productId=19', { replace: true })}>
                                        Xem chi tiết
                                        <i className="fa fa-long-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className={styles.project_column}>
                            <div className={styles.project_header}>
                                <span>
                                    <img src={require("../../assets/img/home/3.jpg")} alt="project 3" />
                                </span>
                            </div>
                            <div className={styles.project_content}>
                                <div className={styles.project_meta}>
                                    <span className={styles.category}>New</span>
                                    <span className={styles.label}>
                                        <i className="fas fa-signal me-2"></i>
                                        Có sẵn
                                    </span></div>
                                <div className={styles.project_title}>
                                    <p>Lập trình nhúng IoT với STM32</p>
                                </div>
                                <div className={styles.project_meta_info}>
                                    <i className="far fa-quote-left me-2"></i>
                                    <p>
                                        OpenLAB cung cấp khóa học cơ bản lập trình nhúng IoT với STM32
                                    </p>
                                </div>
                                <div className={styles.project_footer}>
                                    <div className={styles.project_price}></div>
                                    <button className={styles.btn} onClick={() => navigate('/products/detail?productId=18', { replace: true })}>
                                        Xem chi tiết
                                        <i className="fa fa-long-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.project_column}>
                            <div className={styles.project_header}>
                                <span>
                                    <img src={require("../../assets/img/home/15.jpg")} alt="project 3" />
                                </span>
                            </div>
                            <div className={styles.project_content}>
                                <div className={styles.project_meta}>
                                    <span className={styles.category}>New</span>
                                    <span className={styles.label}>
                                        <i className="fas fa-signal me-2"></i>
                                        Có sẵn
                                    </span></div>
                                <div className={styles.project_title}>
                                    <p>Lập trình xe hơi tự hành với ESP32-CAM</p>
                                </div>
                                <div className={styles.project_meta_info}>
                                    <i className="far fa-quote-left me-2"></i>
                                    <p>
                                        OpenLAB cung cấp khóa học lập trình xe hơi tự hành với ESP32-CAM
                                    </p>
                                </div>
                                <div className={styles.project_footer}>
                                    <div className={styles.project_price}></div>
                                    <button className={styles.btn} onClick={() => navigate('/products/detail?productId=29', { replace: true })}>
                                        Xem chi tiết
                                        <i className="fa fa-long-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.project_column}>
                            <div className={styles.project_header}>
                                <span>
                                    <img src={require("../../assets/img/home/26.jpg")} alt="project 3" />
                                </span>
                            </div>
                            <div className={styles.project_content}>
                                <div className={styles.project_meta}>
                                    <span className={styles.category}>New</span>
                                    <span className={styles.label}>
                                        <i className="fas fa-signal me-2"></i>
                                        Có sẵn
                                    </span></div>
                                <div className={styles.project_title}>
                                    <p>Thực hành lập trình phát triển ChatBot AI</p>
                                </div>
                                <div className={styles.project_meta_info}>
                                    <i className="far fa-quote-left me-2"></i>
                                    <p>
                                        OpenLAB cung cấp khóa học lập trình phát triển ChatBot AI
                                    </p>
                                </div>
                                <div className={styles.project_footer}>
                                    <div className={styles.project_price}></div>
                                    <button className={styles.btn} onClick={() => navigate('/products/detail?productId=42', { replace: true })}>
                                        Xem chi tiết
                                        <i className="fa fa-long-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.project_column}>
                            <div className={styles.project_header}>
                                <span>
                                    <img src={require("../../assets/img/home/31.jpg")} alt="project 3" />
                                </span>
                            </div>
                            <div className={styles.project_content}>
                                <div className={styles.project_meta}>
                                    <span className={styles.category}>New</span>
                                    <span className={styles.label}>
                                        <i className="fas fa-signal me-2"></i>
                                        Có sẵn
                                    </span></div>
                                <div className={styles.project_title}>
                                    <p>Thực hành lập trình nhúng IoT với ESP32</p>
                                </div>
                                <div className={styles.project_meta_info}>
                                    <i className="far fa-quote-left me-2"></i>
                                    <p>
                                        OpenLAB cung cấp khóa học thực hành lâp trình nhúng IoT với ESP32
                                    </p>
                                </div>
                                <div className={styles.project_footer}>
                                    <div className={styles.project_price}></div>
                                    <button className={styles.btn} onClick={() => navigate('/products/detail?productId=46', { replace: true })}>
                                        Xem chi tiết
                                        <i className="fa fa-long-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer_project}>
                        <div className={styles.text_center}>
                            Bạn muốn tìm hiểu thêm về chúng tôi, về các dự án chúng tôi đang nghiên cứu?
                            <button className={styles.text_style} onClick={() => navigate('/products', { replace: true })}>
                                Tất cả sản phẩm
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.about_padding}>
                <div className={styles.container_about}>
                    <div className={styles.about_img}>
                        <span>
                            <img src={require("../../assets/img/home/9.jpg")} alt="about" />
                        </span>
                    </div>
                    <div className={styles.about_content}>
                        <div className={styles.about_heading}>
                            <h2 className={styles.sub_heading}>Tại sao lại là OpenLAB</h2>
                            <p className={styles.heading}>Một số lý do bạn nên hợp tác với chúng tôi</p>
                        </div>
                        <div className={styles.about_features}>
                            <div className={styles.feature_item}>
                                <div className={styles.feature_icon}>
                                    <i className="fa-solid fa-people-group"></i>
                                </div>
                                <div className={styles.feature_text}>
                                    <h4>Khách hàng là trung tâm</h4>
                                    <p>
                                        OpenLAB luôn nỗ lực làm việc để mang đến những dịch vụ chất lượng tốt nhất cho khách hàng, luôn nỗ lực lắng nghe để hiểu khách hàng và nâng cao trải nghiệm sản phẩm.
                                    </p>
                                </div>
                            </div>

                            <div className={styles.feature_item}>
                                <div className={styles.feature_icon}>
                                    <i className="fa-solid fa-certificate"></i>
                                </div>
                                <div className={styles.feature_text}>
                                    <h4>Chất lượng dịch vụ</h4>
                                    <p>
                                        OpenLAB luôn tiên phong trong việc đưa những tiến bộ mới nhất của công nghệ vào việc phát triển các dịch vụ có giá trị thực tiễn cao, phục vụ khách hàng bình dân.
                                    </p>
                                </div>
                            </div>

                            <div className={styles.feature_item}>
                                <div className={styles.feature_icon}>
                                    <i className="fa-solid fa-house-user"></i>
                                </div>
                                <div className={styles.feature_text}>
                                    <h4>Nhiệt huyết, trách nhiệm trong công việc</h4>
                                    <p>
                                        OpenLAB luôn khắt khe trong từng chi tiết nhỏ, lấy sự hài lòng của khách hàng làm tiêu chuẩn cho các dịch vụ của mình.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.customer_padding}>
                <div className={styles.container_customer}>
                    <div className={styles.content_customer}>
                        <div className={styles.section_heading}>
                            <h2 className={styles.sub_heading}>Đối tác</h2>
                            <p className={styles.heading}>Các đơn vị đang hợp tác cùng chúng tôi</p>
                        </div>
                    </div>
                    <div className={styles.row_customer}>
                        <div className={styles.owl_customer}>
                            <div className={styles.owl_stage} ref={imageContainerRef}>
                                {images.map((image, index) => (
                                    <div className={styles.img} key={index}>
                                        <img src={image} alt={`partner-${index}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.contact_padding}>
                <div className={styles.container_contact}>
                    <div className={styles.image_contact}>
                        <span >
                            <img src={require("../../assets/img/contact.webp")} alt="contact" />
                        </span>
                    </div>
                    <div className={styles.info_contact}>
                        <div className={styles.content_contact}>
                            <h2 className={styles.header_content}>Liên hệ OpenLAB</h2>
                            <p className={styles.main_content}>Hãy liên hệ với chúng tôi bất cứ khi nào bạn cần. Chúng tôi sẽ phản hồi trong thời gian sớm nhất!</p>
                            <button className={styles.footer_content} onClick={() => navigate('/contact', { replace: true })}>
                                Liên hệ
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}
