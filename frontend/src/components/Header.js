import React from 'react';
import { Navbar, Container, Image } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import injectSheet from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';
import { S3_URL } from '../constants/awss3';

const styles = {
  header: {
    '&::after': {
      display: ' block',
      content: ' ""',
      width: ' 100%',
      minWidth: ' 1000px',
      height: ' 20px',
      margin: ' -4px 0 0 0',
      position: ' relative',
      background: `url(${S3_URL}/etc/header-bar.png) 0 -20px repeat-x`,
      border: ' none',
      boxSizing: ' border-box',
    },
  },
  menu: {
    width: '100%',
    background: `url(${S3_URL}/etc/header-banner.jpg)center center no-repeat`,
    height: '100px',
    color: '#fff',
  },
  navbarContainer: {
    height: '82px',
  },
  navbar: {
    height: '100px',
    border: 'none',
  },
  navbarLinkWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
  nav: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  navUl: {
    display: 'flex',
    width: '100%',
    margin: 0,
    padding: 0,
  },
  navUlTp: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navUlBt: {
    height: '64px',
    alignItems: 'end',
    justifyContent: 'center',
  },
  navLiTp: {
    listStyle: 'none',
    color: '#fff',
    margin: '5px 20px',
    // padding: '0 20px',
    // borderLeft: '1px solid #fff',
  },
  navLiBt: {
    listStyle: 'none',
    color: '#fff',
    margin: '10px 20px',
  },
  navLinkTp: {
    color: '#fff',
    fontSize: '14px',
    letterSpacing: '1px',
    transition: '0.3s ease color',

    '&:hover': {
      color: '#01f429',
    },
  },
  bugReportLink: {
    marginLeft: '16px',
  },
  navLinkBt: {
    color: '#fff',
    fontSize: '26px',
    letterSpacing: '2px',
    textShadow: '2px 2px 1px rgba(0, 0, 0, 0.8)',
    transition: '0.3s ease color',

    '&:hover': {
      color: '#01f429',
    },
  },
  linkImg: {
    position: 'absolute',
    top: '2px',
    left: '6px',
  },

  aside: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
};

const Header = ({ classes, handleFormOverlay }) => {
  const dispatch = useDispatch(),
    userLogin = useSelector(state => state.userLogin),
    { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  const activeStyleColor = { color: '#01f429' };

  return (
    <header className={classes.header}>
      <section className={classes.menu}>
        <Navbar variant='dark' expand='lg' className={classes.navbar}>
          <Container className={classes.navbarContainer}>
            {/* <LinkContainer to='/'>
              <Navbar.Brand>ELYONDB</Navbar.Brand>
            </LinkContainer> */}
            <div className={classes.navbarLinkWrapper}>
              <ul className={`${classes.navUl} ${classes.navUlTp}`}>
                <li className={`${classes.navLiTp} border-0`}>
                  <Link to='/faq' className={classes.navLinkTp}>
                    FAQ
                  </Link>
                </li>
                <li className={classes.navLiTp}>
                  <Link
                    to='#'
                    data-o_o='1'
                    onClick={e => handleFormOverlay(e)}
                    className={`${classes.navLinkTp} ${classes.bugReportLink}`}
                  >
                    BUG REPORT
                  </Link>
                </li>
                <li className={classes.navLiTp}>
                  <Link to='/donate' data-o_o='1' className={classes.navLinkTp}>
                    DONATE
                  </Link>
                </li>
                {/* <li className={classes.navLiTp}>
                    <Link
                      to='https://discord.com/invite/8JcDMvS'
                      className={classes.navLinkTp}
                    >
                      ELYON DISCORD
                    </Link>
                  </li> */}
                {/* <li className={classes.navLiTp}>
                    <Link
                      to='https://discord.com/invite/8JcDMvS'
                      className={classes.navLinkTp}
                    >
                      ETC
                    </Link>
                  </li> */}
              </ul>
              <Link to='/'>
                <Image
                  src={`${S3_URL}/etc/elyon-logo.png`}
                  className={classes.linkImg}
                />
              </Link>
              <ul className={`${classes.navUl} ${classes.navUlBt}`}>
                <li className={classes.navLiBt}>
                  <NavLink
                    to='/'
                    exact
                    activeStyle={activeStyleColor}
                    className={classes.navLinkBt}
                  >
                    HOME
                  </NavLink>
                </li>
                <li className={classes.navLiBt}>
                  <NavLink
                    to='/wiki'
                    exact
                    activeStyle={activeStyleColor}
                    className={classes.navLinkBt}
                  >
                    WIKI
                  </NavLink>
                </li>
                <li className={classes.navLiBt}>
                  <NavLink
                    to='/editor'
                    exact
                    activeStyle={activeStyleColor}
                    className={classes.navLinkBt}
                  >
                    EDITOR
                  </NavLink>
                </li>
              </ul>
              <aside className={classes.aside}>
                <span>VERSION 1.0.0</span>
              </aside>
            </div>
          </Container>

          {/*** TEMP  ***/}
          {userInfo && (
            <>
              <span className='mr-1'>{userInfo.data.user.name}</span>
              <span onClick={logoutHandler}>Logout</span>
            </>
          )}
        </Navbar>
      </section>
    </header>
  );
};

export default injectSheet(styles)(Header);
