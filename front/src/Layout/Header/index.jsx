import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import logo from '../../images/logo/logo.png';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { List, ListItem, ListItemText } from '@mui/material';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      const contactSectionposition = contactSection.offsetTop - 80;
      window.scrollTo({ top: contactSectionposition, behavior: 'smooth' });
    }
  };

  const scrollToExam = () => {
    const examSection = document.getElementById('exam-section');
    if (examSection) {
      const examSectionPosition = examSection.offsetTop - 80;
      window.scrollTo({ top: examSectionPosition, behavior: 'smooth' });
    }
  };

  const drawer = (
    <div className={styles.drawer}>
      <List>
        <ListItem button component={Link} to="/news">
          <ListItemText primary="Xəbərlər" />
        </ListItem>
        <ListItem button component={Link} to="/about">
          <ListItemText primary="Haqqımızda" />
        </ListItem>
        <ListItem button component={Link} to="/branches">
          <ListItemText primary="Filiallar" />
        </ListItem>
        <ListItem button onClick={scrollToExam}>
          <ListItemText primary="Imtahan Nəticəsinə Sürətli Bax" />
        </ListItem>
        <ListItem button component="a" href="https://netice.gsl.edu.az/" target="_blank" rel="noopener noreferrer">
          <ListItemText primary="İmtahan Nəticəsi" />
        </ListItem>
        <ListItem button >
          <ListItemText onClick={scrollToContact} primary="Bizimlə Əlaqə" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <div className={styles.headerMain}>
        <div className={styles.topBar}>
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-sm-4 col-7 d-flex align-items-center">
                <div className="topBarLeft d-flex">
                  <div className={styles.clearfix}>
                    <ul className={styles.socials}>
                      <li>
                        <Link to="#">
                          <FacebookIcon />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <LinkedInIcon />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <InstagramIcon />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <YouTubeIcon />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <WhatsAppIcon />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-sm-8 col-5 d-none d-lg-block">
                <div className="clearfix text-center">
                  <div className={`${styles.headerSearchLogo} d-none d-lg-block `}>
                    <Link to="#">
                      <img src={logo} alt="" className={styles.logoCustom} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
          {drawer}
        </Drawer>
      </div>

      <AppBar position="sticky" className={`${styles.head} `}>
        <Toolbar className={`${styles.header} container`} >
          <div className={styles.logodiv}>
            <Link to="/">gsl.edu.az</Link>
          </div>
          <div className="d-lg-flex d-md-none d-sm-none d-none">
            <Link to="/news"><span>Xəbərlər</span></Link>
            <Link to="/about"><span>Haqqımızda</span></Link>
            <Link to="/branches"><span>Filiallar</span></Link>
            <Link onClick={scrollToExam}><span>Imtahan Nəticəsinə Sürətli Bax</span></Link>
            <a href="https://netice.gsl.edu.az/" target="_blank" rel="noopener noreferrer"><span>İmtahan Nəticəsi</span></a>
            <Link onClick={scrollToContact}><span>Bizimlə Əlaqə</span></Link>
          </div>
          <IconButton edge="end" color="inherit" aria-label="menu" className="d-lg-none" onClick={handleDrawerToggle}>
            <MenuIcon className={styles.menuicon} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
