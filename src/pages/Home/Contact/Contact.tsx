import React, { Fragment } from 'react';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import styles from './Contact.module.scss';
import OpenStreetMap from './OpenStreetMap/OpenStreetMap';  // Đường dẫn tới component OpenStreetMap

export interface Device {
    data: [];
}

const Contact = () => {
    return (
        <Fragment>
            <Header />
            <div className={styles.mapContainer}>
                <OpenStreetMap />
            </div>

            <div className={styles.container}>
                <div className={styles.infor_tex}>
                    <h2>Liên Hệ OpenLAB</h2>
                    <p>Hãy liên hệ với chúng tôi bất cứ khi nào bạn cần. Chúng tôi sẽ phản hồi trong thời gian sớm nhất!</p>
                    <ul>
                        <li>
                            <div>
                                <i className="fa-solid fa-envelope"></i>
                                <a href="mailto:openlab.user@gmail.com">openlab.user@gmail.com</a>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <div>
                                <i className="fa-solid fa-phone"></i>
                                <a href="tel:+84865746698">(+84) 865 746 698</a>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <div>
                                <i className="fa-solid fa-location-pin"></i>
                                <a
                                    href="https://www.google.com/maps/place/68+Ng%C3%B5+6+Ao+Sen,+P.+M%E1%BB%99+Lao,+H%C3%A0+%C4%90%C3%B4ng,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@20.9820423,105.7848074,17z/data=!3m1!4b1!4m5!3m4!1s0x3135accc2899c203:0x1ddb7fee1ea1e809!8m2!3d20.9820423!4d105.7873823?entry=ttu"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    68A/6 Ao Sen, Hà Đông, Hà Nội
                                </a>                            </div>
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
