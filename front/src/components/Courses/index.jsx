import React from 'react'
import styles from "./index.module.scss"
const Courses = () => {
    return (
        <>
            <div className={styles.courses}>
                <div className="container">
                    <h1> Kurslarımız </h1>
                   <div className={styles.dd}> <span className={styles.cspan}>
                        <span></span>
                    </span></div>
                    <p>Peşəkar Təlimçilərimiz vasitəsilə kurslarımızdan maksimum faydalanın.</p>
                    <div className={`${styles.cards} d-flex flex-wrap  `} >
                        <div className='col-lg-4 col-md-6 col-sm-12' ><div className={`${styles.card} ${styles.card1}`} >
                            <h5>Abituriyent hazırlığı</h5>
                        </div></div>
                        <div className='col-lg-4 col-md-6 col-sm-12'>  <div className={`${styles.card} ${styles.card2}`} >
                            <h5>Abituriyent hazırlığı</h5>

                        </div></div>
                        <div className='col-lg-4 col-md-6 col-sm-12' ><div className={`${styles.card} ${styles.card3}`} >
                            <h5>Abituriyent hazırlığı</h5>

                        </div></div>
                        <div className='col-lg-4 col-md-6 col-sm-12'>  <div className={`${styles.card} ${styles.card4}`} >
                            <h5>Abituriyent hazırlığı</h5>
                        </div></div>
                        <div className='col-lg-4 col-md-6 col-sm-12'>  <div className={`${styles.card} ${styles.card5}`} >
                            <h5>Abituriyent hazırlığı</h5>
                        </div></div>
                        <div className='col-lg-4 col-md-6 col-sm-12'>  <div className={`${styles.card} ${styles.card6}`} >
                            <h5>Abituriyent hazırlığı</h5>
                        </div></div>
                    </div>
                </div></div>
        </>
    )
}

export default Courses
