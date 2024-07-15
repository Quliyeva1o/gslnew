import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { EffectFade, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './index.module.scss';
import xaricdeTehsil from '../../images/xaricdeTEHSIL.jpg'
import sat from '../../images/sat.jpg'
import gsl from '../../images/gslcenter.jpg'
import 'swiper/css/effect-fade';


SwiperCore.use([Autoplay], [Navigation], [EffectFade]);

const Slider = () => {
    return (
        <div>
            <Swiper
                loop={true}
                modules={[EffectFade]}
                effect={'fade'}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }} className={styles.mySwiper}>
                <SwiperSlide className={styles.slide}>
                    <div className={styles.owl}>
                        <div className={styles.item}>
                            <div className={styles.sliderImg} style={{ backgroundImage: `url(${gsl})`, backgroundPosition: "center" }}></div>
                            <div className={styles.text}>
                                <div className="container">
                                    <div className="col-md-12">
                                        <div >
                                            <h1>KONSALTİNQ</h1>
                                            <p className="banner-desc">Tədris proqramı və xaricdə təhsil üzrə konsaltinq xidmətlərimiz tamamilə ödənişsizdir. <br />
                                                Ödənişsiz konsaltinq xidməti üçün ofisimizlə əlaqə saxlayıb, qeydiyyatdan keçə bilərsiniz.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <div className={styles.owl}>
                        <div className={styles.item}>
                            <div className={styles.sliderImg} style={{ backgroundImage: `url(${xaricdeTehsil})` }}></div>
                            <div className={styles.text}>
                                <div className="container">
                                    <div className="col-md-12">
                                        <div >
                                            <h1>XARİCDƏ TƏHSİL</h1>
                                            <p className="banner-desc">Xaricdə təhsil mütəxəssislərimiz istədiyiniz sahə üzrə təhsil ala biləcəyiniz mümkün olan ən yaxşı universitetdə təhsil aldığınızdan əmin olurlar.  <br />

                                                Xaricdə təhsil xidməti üçün ofisimizlə əlaqə saxlayıb, qeydiyyatdan keçə bilərsiniz.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <div className={styles.owl}>
                        <div className={styles.item}>
                            <div className={styles.sliderImg} style={{ backgroundImage: `url(${sat})` }}></div>
                            <div className={`${styles.text} container`}>
                                <div className="container">
                                    <div className="col-md-12">
                                        <div >
                                            <h1>XARİCİ DİL KURSLARI</h1>
                                            <p className="banner-desc">STAR Collegesdə xüsusilə ingilis dili olmaqla, digər xarici dillər və IELTS, SAT, TOEFL və digər bu kimi beynəlxalq proqramlara hazırlıq keçirik. <br />

                                                Hər bir tələbənin inişafına peşəkar pedaqoji heyət tərəfindən nəzarət edilir.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Slider;
