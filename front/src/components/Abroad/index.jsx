import styles from './index.module.scss'
import React from 'react'
import macar from '../../images/macar.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Abroad = () => {
    return (
        <div>
            <div className={styles.abroad}>
                <div className="container">
                    <h1>Xaricdə Təhsil</h1>
                    <div className={styles.dd}> <span className={styles.cspan}>
                        <span></span>
                    </span></div>

                </div>
            </div>
            <div className={`${styles.parent} container`}>
                <div className={styles.div1}>
                    <div class={`${styles.itemcard} overflow-hidden`}>
                        <div class={styles.desc}>
                            <div class={`${styles.card} text-center overflow-hidden`}>
                                <div class={styles.img}>
                                    <img src={macar} alt="" />
                                </div>
                                <div class={styles.text}>
                                    <span><LocationOnIcon />MACARISTANDA TƏHSİL</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.div2}>  <div class={`${styles.itemcard} overflow-hidden`}>
                    <div class={styles.desc}>
                        <div class={`${styles.card} text-center overflow-hidden`}>
                            <div class={styles.img}>
                                <img src={macar} alt="" />
                            </div>
                            <div class={styles.text}>
                                <span><LocationOnIcon />MACARISTANDA TƏHSİL</span>
                            </div>
                        </div>
                    </div>
                </div></div>
                <div className={styles.div3}>  <div class={`${styles.itemcard} overflow-hidden`}>
                    <div class={styles.desc}>
                        <div class={`${styles.card} text-center overflow-hidden`}>
                            <div class={styles.img}>
                                <img src={macar} alt="" />
                            </div>
                            <div class={styles.text}>
                                <span><LocationOnIcon />MACARISTANDA TƏHSİL</span>
                            </div>
                        </div>
                    </div>
                </div></div>
                <div className={styles.div4}>  <div class={`${styles.itemcard} overflow-hidden`}>
                    <div class={styles.desc}>
                        <div class={`${styles.card} text-center overflow-hidden`}>
                            <div class={styles.img}>
                                <img src={macar} alt="" />
                            </div>
                            <div class={styles.text}>
                                <span><LocationOnIcon />MACARISTANDA TƏHSİL</span>
                            </div>
                        </div>
                    </div>
                </div></div>
                <div className={styles.div5}>  <div class={`${styles.itemcard} overflow-hidden`}>
                    <div class={styles.desc}>
                        <div class={`${styles.card} text-center overflow-hidden`}>
                            <div class={styles.img}>
                                <img src={macar} alt="" />
                            </div>
                            <div class={styles.text}>
                                <span><LocationOnIcon />MACARISTANDA TƏHSİL</span>
                            </div>
                        </div>
                    </div>
                </div></div>
            </div>
        </div>
    )
}

export default Abroad
