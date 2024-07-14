import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup'; // Import CountUp component from react-countup
import styles from './index.module.scss';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import SchoolIcon from '@mui/icons-material/School';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PublicIcon from '@mui/icons-material/Public';
const CountSection = () => {
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector('section');
            if (section) {
                const sectionPosition = section.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                if (sectionPosition < screenPosition) {
                    setAnimated(true); // Set animated to true when section is in view
                    window.removeEventListener('scroll', handleScroll); // Remove event listener once animation starts
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section>
            <div className={`${styles.aboutt} cover-image sptb bg-background-color`} style={{ backgroundImage: `url('https://star.edu.az/assets/images/banners/banner5.jpg')`, backgroundPosition: 'center center' }}>
                <div className={`${styles.textt} mb-0 text-white info`}>
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-lg-3 col-md-6">
                                <div className="counter-status md-mb-0">
                                    <div className={styles.icon}>
                                       <Diversity2Icon/>
                                    </div>
                                    <h5>Tələbə Sayı</h5>
                                    <h2 className="counter mb-0">
                                        {animated ? <CountUp start={0} end={510} duration={2.5} />:<h2>510</h2>}
                                    </h2>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="counter-status status-1 md-mb-0">
                                    <div className={styles.icon}>
                                        <SchoolIcon/>
                                    </div>
                                    <h5>Məzun Sayı</h5>
                                    <h2 className="counter mb-0">
                                        {animated ? <CountUp start={0} end={160} duration={2.5} /> : <h2>160</h2>}
                                    </h2>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="counter-status status md-mb-0">
                                    <div className={styles.icon}>
                                       <PublicIcon/>
                                    </div>
                                    <h5>Ölkələr</h5>
                                    <h2 className="counter mb-0">
                                        {animated ? <CountUp start={0} end={12} duration={2.5} /> : <h2>12</h2>}
                                    </h2>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="counter-status status">
                                    <div className={styles.icon}>
                                        <NewspaperIcon/>
                                    </div>
                                    <h5>Kurs Sayı</h5>
                                    <h2 className="counter mb-0">
                                        {animated ? <CountUp start={0} end={9} duration={2.5} /> : <h2>9</h2>}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CountSection;
