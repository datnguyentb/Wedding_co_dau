import React from 'react';
import classNames from 'classnames/bind';
import styles from './VenueSection.module.scss';
import Line from '../../components/Line';

const cx = classNames.bind(styles);

export const VenueSection = () => {
    return (
        <>
            <section className={cx('venue-section', 'scroll-reveal')}>
                <div className={cx('venue-card')}>
                    {/* Header: Tiêu đề + Icon bản đồ bên phải */}
                    <div className={cx('venue-header')}>
                        <h2 className={cx('script-title')}>Địa Điểm Tổ Chức 🗺️</h2>
                    </div>

                    {/* Tên địa điểm chữ viết tay uốn lượn */}
                    <p className={cx('venue-address')}>Tổ 13, phường Trà Lý, tỉnh Hưng Yên</p>

                    {/* Bản đồ Embed */}
                    <div className={cx('map-container')}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d934.4017905297352!2d106.36913074714379!3d20.481321908912626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135fabb61431c1f%3A0xfc99c3e1b1c743a3!2zTmjDoCBIw6BuZyBRdWFuZyBLaOG6o2k!5e0!3m2!1svi!2s!4v1788807445789!5m2!1svi!2s"
                            width="100%"
                            height="260"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>

                    <div className={cx('map-btn-box')}>
                        <a
                            href="https://maps.app.goo.gl/kCW8f9CEEXJfQ82Y9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cx('open-map-btn')}
                        >
                            📍 Xem chỉ đường trên Google Maps
                        </a>
                    </div>

                    {/* Vết khuyết hình tròn ở mép dưới */}
                    <div className={cx('notch-bottom')}></div>
                </div>
            </section>

            <Line type="notch" />
        </>
    );
};
