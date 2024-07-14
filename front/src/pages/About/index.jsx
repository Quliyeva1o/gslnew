import React from 'react'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import logo from '../../images/logo/logo.png'
const About = () => {
    return (
     <>
        <div className={styles.div} style={{
            backgroundImage:' url("https://star.edu.az/assets/images/banners/background.webp") '
        }}>

                <div className={styles.bannerimg}>
                    <div className="header-text mb-0">
                        <div className="container">
                            <div className="text-center text-white">
                                <h1>Haqqımızda</h1>
                                <ol>
                                    <li><Link to="/">Ana Səhifə</Link></li>
                                    <li aria-current="page">/ Haqqımızda</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
        </div >
        <div>
        <section className={`${styles.sptb} bg-white `}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-9 col-sm-9">
            <div className="text-justify">
              <h2 className="mb-4 font-weight-semibold"><b>“STAR Colleges” MMC</b></h2>
              <p><strong>“STAR Colleges” MMC 2021-ci ildə təsis edilmiş top reytinqli universitetlərə hazırlıq mərkəzidir. Şirkətimiz yeni olsa da, kollektivimiz 10 ildən uzun müddətlə təhsil sferasında ixtisaslaşmış müəllim və idarə heyətindən ibarətdir.&nbsp;</strong></p>

              <p>Missiyamız gələcəyimiz olan gənclərə parlaq gələcək təmin etmək, bunun üçün də ilk növbədə onlara keyfiyyətli təhsil bəxş etməkdir. Gənclərimizin yüksək keyfiyyətli təhsil alaraq xaricdə daha əsaslı təhsil alması üçün əlimizdən gələn dəstəyi göstəririk.</p>

              <p>STAR Colleges olaraq əsasən xarici universitetlərə hazırlıq üzrə ixtisaslaşmışıq. Tələbələrimiz STAR-ın peşəkar müəllim heyəti ilə beynəlxalq proqramlara hazırlaşıb, yüksək nəticə əldə edirlər və daha sonra universitetlərə müraciət mərhələsi başlayır. Hansı ki, bu mərhələdə xaricdə təhsil üzrə mütəxəssislərimiz hər addımda sizə dəstək olurlar.</p>

              <p>STAR Colleges hal-hazırda iki filial ilə fəaliyyət göstərir:</p>

              <ol>
                <li>Port Baku filialı (Üzeyir Hacıbəyov&nbsp;57)</li>
                <li>Port Baku filialı 2 (Kövkəb Səfərəliyeva küçəsi,&nbsp;12a-12h)</li>
                <li>Statistika filialı (Məhəmməd Naxçıvani 1)</li>
                <li>Statistika filialı 2 (Bəsti Bağırova 2)</li>
              </ol>

              <p>Hər iki filialımızda tədris mühiti və infrastrukturu yüksək standartlara cavab verəcək şəkildə yenidən qurulmuşdur. Belə ki, kursumuzun daxilində tələbələrin həm öyrəndikləri proqramı hər tərəfli mənimsəmələri üçün, həm də istirahət edə bilmələri üçün guşələr nəzərdə tutulmuşdur.&nbsp;</p>

              <p>Mərkəzlərimizdə əsas dərs otaqlarından əlavə olaraq yer alır:</p>

              <ul>
                <li>İmtahan otaqları</li>
                <li>Praktika otaqları</li>
                <li>Danışıq otaqları</li>
                <li>Kitabxana</li>
                <li>Kino zal</li>
                <li>Bufet</li>
              </ul>

              <p>Belə ki, tələbələrimiz əsas dərslərdə qrammatikanı öyrəndikdən sonra imtahan otaqlarında biliklərini möhkəmlədir, danışıq otaqlarında öyrəndiklərini tətbiq edir və danışıq qabiliyətini inkişaf etdirir, kino zalda ingilis dilində filmlər izləyərək (nəzarət altında olmaqla) dinləmə bacarıqlarını inkişaf etdirirlər. Bundan əlavə olaraq tələbələr, asudə vaxtlarını kitabxanada xarici dildə ədəbiyyatlarla mütaliə edərək keçirirlər.&nbsp;</p>

              <p>STAR Colleges olaraq tələbələrin öyrəndiklərini tətbiq etməkləri üçün danışıq dərslərinin nə dərəcə əhəmiyyətli olduğunu bildiyimiz üçün hər filialımızda ayrıca 2 danışıq otaqları yaratmışıq. Hansı ki, tələbə bu otaqlarda hər gün danışıq dərslərinə qoşulur və öyrəndiklərini tətbiq etmə fürsəti əldə edir.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-3 col-sm-3">
            <div className="text-justify">
              <img src={logo} alt="STAR COLLEGES" />
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
        </>
    )
}

export default About
