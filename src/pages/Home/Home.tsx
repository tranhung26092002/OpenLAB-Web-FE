import React, { Fragment, useEffect, useRef, useState } from 'react';
import styles from './Home.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

type Props = {}

export const Home = (props: Props) => {
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
                            {/* <span className={styles.sub_heading}>AI/IoT as service</span> */}
                            <h1 className={styles.heading}>
                                Nền tảng thực hành số,
                            </h1>
                            <h1 className={styles.heading}>
                                dịch dụ AI/IoT giá rẻ cho chuyển đổi số giáo dục
                            </h1>
                            <p className={styles.description}>
                                Chúng tôi nỗ lực làm việc để hiểu khách hàng và mang đến các dịch vụ chất lượng, có giá trị thực tiễn cao!
                            </p>
                            <a className={styles.btn} href="/products">
                                Các dịch vụ chính
                            </a>
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
                                        <img src={require("../../assets/img/home/1.jpg")} alt="Nền tảng thực hành trực tuyến" />
                                    </span>
                                    {/* <i className="fa-solid fa-building-columns"></i> */}
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
                                        <img src={require("../../assets/img/home/2.jpg")} alt="Thiết bị thực hành trực tuyến" />
                                    </span>
                                    {/* <i className="fa-solid fa-layer-group"></i> */}
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
                                        <img src={require("../../assets/img/home/3.jpg")} alt="Khóa học thực hành trực tuyến" />
                                    </span>
                                    {/* <i className="fa-solid fa-video"></i> */}
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
                                        <img src={require("../../assets/img/home/4.jpg")} alt="Trợ giảng số trực tuyến" />
                                    </span>
                                    {/* <i className="fa-solid fa-chart-line"></i> */}
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
            <section className={styles.project_padding}>
                <div className={styles.container_project}>
                    <div className={styles.content_project}>
                        <div className={styles.text_project}>
                            <div className={styles.section_heading}>
                                <h2 className={styles.sub_heading}>Sản phẩm phổ biến</h2>
                                <p className={styles.heading}>Các sản phẩm tiêu biểu trong hệ sinh thái thực hành số của OpenLAB</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.row_project}>
                        <div className={styles.project_column}>
                            <div className={styles.project_grid}>
                                <div className={styles.project_header}>
                                    <span>
                                        <img src={require("../../assets/img/home/5.jpg")} alt="project 1" />
                                    </span>
                                </div>
                                <div className={styles.project_content}>
                                    <div className={styles.project_meta}>
                                        <span className={styles.category}>App</span>

                                        <span className={styles.label}>
                                            <i className="fas fa-signal me-2"></i>
                                            Có sẵn
                                        </span></div>
                                    <div className={styles.project_title}>
                                        <a href="/products">OpenLab: Giải pháp phòng LAB thông minh</a>
                                    </div>
                                    <div className={styles.project_meta_info}>
                                        <i className="far fa-quote-left me-2"></i>
                                        <p>
                                            OpenLab cung cấp giải pháp toàn diện cho hệ thống phòng Lab thông minh, bao gồm các các bộ kit thực hành thông minh, phần mềm thực hành, và hub điều khiển trung tâm kết nối Kit với toàn bộ các thiết bị trong Lab như máy chiếu, Tivi, điều hòa, đèn điện,... tạo ra một hệ thống đồng bộ trên server...
                                        </p>
                                    </div>
                                    <div className={styles.project_footer}>
                                        <div className="project-price"></div>
                                        <a className={styles.btn} href="/home/product">
                                            Xem chi tiết
                                            <i className="fa fa-long-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.project_column}>
                            <div className={styles.project_grid}>
                                <div className={styles.project_header}>
                                    <span>
                                        <img src={require("../../assets/img/home/6.jpg")} alt="project 2" />
                                    </span>
                                </div>
                                <div className={styles.project_content}>
                                    <div className={styles.project_meta}>
                                        <span className={styles.category}>App</span>

                                        <span className={styles.label}>
                                            <i className="fas fa-signal me-2"></i>
                                            Có sẵn
                                        </span></div>
                                    <div className={styles.project_title}>
                                        <a href="/products">OpenKit: Thiết bị thực hành thông minh</a>
                                    </div>
                                    <div className={styles.project_meta_info}>
                                        <i className="far fa-quote-left me-2"></i>
                                        <p>
                                            OpenKit cung cấp hệ thống các bộ Kit thực hành thông minh AI/IoT cho các chuyên ngành như Lập trình nhúng IoT, Điện toán đám mây, Mạng cảm biến, ML, Phân tích dữ liệu...
                                        </p>
                                    </div>
                                    <div className={styles.project_footer}>
                                        <div className="project-price"></div>
                                        <a className={styles.btn} href="/home/product">
                                            Xem chi tiết
                                            <i className="fa fa-long-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.project_column}>
                            <div className={styles.project_grid}>
                                <div className={styles.project_header}>
                                    <span>
                                        <img src={require("../../assets/img/home/7.jpg")} alt="project 3" />
                                    </span>
                                </div>
                                <div className={styles.project_content}>
                                    <div className={styles.project_meta}>
                                        <span className={styles.category}>App</span>
                                        <span className={styles.label}>
                                            <i className="fas fa-signal me-2"></i>
                                            Có sẵn
                                        </span></div>
                                    <div className={styles.project_title}>
                                        <a href="/products">OpenCourse: Khóa học thực hành chuyên sâu</a>
                                    </div>
                                    <div className={styles.project_meta_info}>
                                        <i className="far fa-quote-left me-2"></i>
                                        <p>
                                            OpenCourse cung cấp các khóa học thực hành chuyên sâu cho nhiều loại Kit khác nhau như STM32, ARDUINO, ESP, Raspberry Pi,... Mỗi khóa học bao gồm tài liệu, video, code mẫu và trợ giảng số AI hỗ trợ thực hành 24/7.
                                        </p>
                                    </div>
                                    <div className={styles.project_footer}>
                                        <div className={styles.project_price}></div>
                                        <a className={styles.btn} href="/home/product">
                                            Xem chi tiết
                                            <i className="fa fa-long-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.project_column}>
                            <div className={styles.project_grid}>
                                <div className={styles.project_header}>
                                    <span>
                                        <img src={require("../../assets/img/home/4.jpg")} alt="project 3" />
                                    </span>
                                </div>
                                <div className={styles.project_content}>
                                    <div className={styles.project_meta}>
                                        <span className={styles.category}>App</span>
                                        <span className={styles.label}>
                                            <i className="fas fa-signal me-2"></i>
                                            Có sẵn
                                        </span></div>
                                    <div className={styles.project_title}>
                                        <a href="/products">OpenChat: Trợ giảng số AI hỗ trợ thực hành 24/7</a>
                                    </div>
                                    <div className={styles.project_meta_info}>
                                        <i className="far fa-quote-left me-2"></i>
                                        <p>
                                            OpenChatcung cấp dịch vụ trợ giảng số AI, hỗ trợ chuyên sâu, đa dạng các nội dung thực hành theo yêu cầu của từng người dùng.
                                        </p>
                                    </div>
                                    <div className={styles.project_footer}>
                                        <div className={styles.project_price}></div>
                                        <a className={styles.btn} href="/home/product">
                                            Xem chi tiết
                                            <i className="fa fa-long-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer_project}>
                        <div className={styles.text_center}>
                            Bạn muốn tìm hiểu thêm về chúng tôi, về các dự án chúng tôi đang nghiên cứu?
                            <a className={styles.text_style} href="/products">Tất cả sản phẩm</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.about_padding}>
                <div className={styles.container_about}>
                    <div className={styles.row_about}>
                        <div className={styles.about_column_left}>
                            <div className={styles.about_img}>
                                <span>
                                    <img src={require("../../assets/img/home/9.png")} alt="about" />
                                </span>
                            </div>
                        </div>
                        <div className={styles.about_column_right}>
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
                            <a className={styles.footer_content} href="/contact">Liên hệ</a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}
