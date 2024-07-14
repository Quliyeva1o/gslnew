import { Outlet, useLocation } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import ScrollIco from "../Layout/ScrollIco";
import { useEffect, useState } from "react";
import styles from './index.module.scss';

const RootPage = () => {
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, [location]); 

    return (
        <>
            {loading ? (
                <span className={styles.loader}></span>
            ) : (
                <>
                    <Header />
                    <Outlet />
                    <Footer />
                    <ScrollIco />
                </>
            )}
        </>
    );
};

export default RootPage;
