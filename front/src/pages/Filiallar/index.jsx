import React from 'react';
import styles from './index.module.scss';
import {Link} from 'react-router-dom'
const Filiallar = () => {
    return (

        <>

            <div className={styles.div} style={{
                backgroundImage: ' url("https://star.edu.az/assets/images/banners/background.webp") '
            }}>

                <div className={styles.bannerimg}>
                    <div className="header-text mb-0">
                        <div className="container">
                            <div className="text-center text-white">
                                <h1>Filiallarımız</h1>
                                <ol>
                                    <li><Link to="/">Ana Səhifə</Link></li>
                                    <li aria-current="page">/ Filiallarımız</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className={styles.container}>
                <h2>Filiallarımız</h2>

                {/* GSL Tədris mərkəzi */}
                <div className={styles.itemm}>
                    <h3>GSL Tədris mərkəzi</h3>
                    <p>Həzi Aslanov m. 245 nömrəli məktəbin yaxınlığı</p>
                    <p>Əlaqə: 070 373 00 79</p>
                </div>

                {/* Kids Club by Gsl */}
                <div className={styles.itemm}>
                    <h3>Kids Club by Gsl</h3>
                    <p>Həzi Aslanov m. 245 nömrəli məktəbin yaxınlığı</p>
                    <p>Əlaqə: 050 456 69 69</p>
                </div>

                {/* GSL-3 */}
                <div className={styles.itemm}>
                    <h3>GSL-3</h3>
                    <p>Xalqlar dostluğu, 129 nömrəli məktəbin yanı</p>
                    <p>Əlaqə: 070 861 61 69</p>
                </div>

                {/* Həzi Aslanov filialı xidmətlər */}
                <div className={styles.itemm}>
                    <h3>Həzi Aslanov filialı xidmətlər</h3>
                    <ul>
                        <li>Bütün səviyyələr üzrə ingilis dili</li>
                        <li>İELTS</li>
                        <li>SAT</li>
                        <li>TOEFL</li>
                        <li>Rus dili</li>
                        <li>Alman dili</li>
                        <li>Fənn hazırlıqları</li>
                        <li>Buraxılış siniflər və abituriyent hazırlığı</li>
                        <li>Liseylərə hazırlıq</li>
                        <li>Türk və ingilis məktəblərinə hazırlıq</li>
                        <li>Rəsm</li>
                        <li>Kompüter və dizayn</li>
                        <li>Ev tapşırıqları və təkmilləşmə</li>
                        <li>Məntiq</li>
                        <li>Psixoloq xidmətləri</li>
                    </ul>
                </div>

                {/* Kids Club by Gsl xidmətlər */}
                <div className={styles.itemm}>
                    <h3>Kids Club by Gsl xidmətlər</h3>
                    <ul>
                        <li>2 yaşdan etibarən erkən inkişaf (azərbaycan, rus, ingilis dilli qruplarda)</li>
                        <li>Dil kursları</li>
                        <li>Montessori</li>
                        <li>Piano, şahmat</li>
                        <li>Məktəbəqədər</li>
                        <li>Dayə xidməti</li>
                        <li>Art</li>
                        <li>Psixoloq və loqoped xidmətləri</li>
                        <li>Tam və yarımgünlük bağça</li>
                    </ul>
                </div>

                {/* Xaricdə təhsil */}
                <div className={styles.itemm}>
                    <h3>Xaricdə təhsil</h3>
                    <ul>
                        <li>Avropa və Amerika universitetlərinə qəbulun təşkili</li>
                        <li>Sınaq imtahanları</li>
                        <li>Aylıq sınaq imtahanları</li>
                        <li>Olimpiadalar</li>
                        <li>Buraxılış və abituriyentlər üçün sınaqlar</li>
                    </ul>
                </div>
            </div></>
    );
};

export default Filiallar;
