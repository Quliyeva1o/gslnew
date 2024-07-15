import styles from './index.module.scss'
import React from 'react'
import kanada from '../../images/kanada.jpg'
import macar from '../../images/macar.jpg'
import germany from '../../images/germany.jpg'
import turkey from '../../images/turkey.jpg'
import america from '../../images/america.jpg'
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
                                <img src={kanada} alt="" />
                            </div>
                            <div class={styles.text}>
                                <span><LocationOnIcon /> KANADADA TƏHSİL</span>
                            </div>
                        </div>
                    </div>
                </div></div>
                <div className={styles.div3}>  <div class={`${styles.itemcard} overflow-hidden`}>
                    <div class={styles.desc}>
                        <div class={`${styles.card} text-center overflow-hidden`}>
                            <div class={styles.img}>
                                <img src={germany} alt="" />
                            </div>
                            <div class={styles.text}>
                                <span><LocationOnIcon />ALMANİYADA TƏHSİL</span>
                            </div>
                        </div>
                    </div>
                </div></div>
                <div className={styles.div4}>  <div class={`${styles.itemcard} overflow-hidden`}>
                    <div class={styles.desc}>
                        <div class={`${styles.card} text-center overflow-hidden`}>
                            <div class={styles.img}>
                                <img src={america} alt="" />
                            </div>
                            <div class={styles.text}>
                                <span><LocationOnIcon />AMERIKADA TƏHSİL</span>
                            </div>
                        </div>
                    </div>
                </div></div>
                <div className={styles.div5}>  <div class={`${styles.itemcard} overflow-hidden`}>
                    <div class={styles.desc}>
                        <div class={`${styles.card} text-center overflow-hidden`}>
                            <div class={styles.img}>
                                <img src={turkey} alt="" />
                            </div>
                            <div class={styles.text}>
                                <span><LocationOnIcon />TÜRKİYƏDƏ TƏHSİL</span>
                            </div>
                        </div>
                    </div>
                </div></div>
            </div>
        </div>
    )
}

export default Abroad
