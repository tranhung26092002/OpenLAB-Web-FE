import React, { Fragment } from 'react';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import styles from './Contact.module.scss';

export interface Device {
    data: [];
}

const Contact = () => {
    return (
        <Fragment>
            <Header />
            <div className={styles.container}>
                <div className={styles.infor_tex}>
                    <h2>Liên Hệ OpenLAB</h2>
                    <p>Hãy liên hệ với chúng tôi bất cứ khi nào bạn cần. Chúng tôi sẽ phản hồi trong thời gian sớm nhất!</p>
                    <ul>
                        <li>
                            <div>
                                <i className="fa-solid fa-envelope"></i>
                                <a href="mailto:vanhung.tran@openlab.com.vn">vanhung.tran@openlab.com.vn</a>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <div>
                                <i className="fa-solid fa-phone"></i>
                                <a href="tel:+84856606961">(+84) 12 345 5679</a>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <div>
                                <i className="fa-solid fa-location-pin"></i>
                                <a href="">Tầng 8, tòa A2, Học viện Công nghệ Bưu chính Viễn thông, Văn Quán, Hà Đông, HN</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={styles.form}>
                    <div className={styles.basic_infor}>
                        <div className={styles.name}>
                            <input type="text" name="name" placeholder="Tên của bạn" className={styles.form_control} />
                        </div>
                        <div className={styles.email}>
                            <input type="email" name="email" placeholder="Địa chỉ email" className={styles.form_control} />
                        </div>
                        <div className={styles.phonenumber}>
                            <input type="text" name="phone" placeholder="Số điện thoại" className={styles.form_control} />
                        </div>
                    </div>
                    <div className={styles.chu_de}>
                        <input type="text" name="subject" placeholder="Chủ đề" className={styles.form_control1} />
                    </div>
                    <div className={styles.tin_nhan}>
                        <textarea name="message" required placeholder="Tin nhắn của bạn" className={styles.form_control}></textarea>
                    </div>
                    <div className={styles.send}>
                        <button type="submit" className={`${styles.btn} ${styles.form_control}`}>
                            <i className="fa-solid fa-paper-plane"></i>
                            <span>Gửi đi</span>
                            <i className={`fa-solid fa-arrow-right ${styles.arrow}`}></i>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default Contact;
