import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import { S3_URL } from '../constants/awss3';

const styles = {
  footer: {
    width: '100%',
    padding: '50px 0 30px 0',
    margin: '45px 0 0 0',
    background: `url(${S3_URL}/etc/bg-reserve.jpg) bottom center no-repeat #333`,
  },
  footerRow: {
    maxWidth: '1140px',
    paddingRight: '15px',
    paddingLeft: '15px',
    flexWrap: 'nowrap',
  },

  footImgLinks: {
    width: '100%',
  },
  imgLink: {
    margin: '4px 12px',
  },
  colLinks: {
    color: '#b1b1b9',
    fontSize: '11px',
    letterSpacing: '1.3px',
    fontWeight: '800',
    lineHeight: '1.22',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    transition: '0.3s ease color',

    '&:hover': {
      color: '#fff',
    },
  },
  colSpan: {
    '&:hover': {
      color: '#b1b1b9',
    },
  },

  colLeft: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '&::before': {
      content: '""',
      position: 'absolute',
      top: '21px',
      left: '209px',
      width: '1px',
      height: '20px',
      background: '#8e8e8e',
    },
  },
  colMid: {
    display: 'grid',
    gridTemplateRows: 'repeat(2,1fr)',
    gridColumnGap: '62px',
    gridRowGap: '22px',
    gridAutoFlow: 'column',
    margin: '0 60px 0',

    '&::after': {
      content: '"Copyright © Kakao Games Corp. & KRAFTON Inc."',
      position: 'absolute',
      width: '100%',
      color: '#b1b1b9',
      top: '80px',
      left: 0,
      fontSize: '10px',
    },
  },
  colRight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  '@media screen and (max-width: 1200px)': {
    colLeft: {
      '&::before': {
        display: 'none',
      },
    },
    colMid: {
      '&::after': {
        top: '120px',
      },
    },
  },
};

const Footer = ({ classes }) => {
  return (
    <footer className={classes.footer}>
      <Container>
        <Row className={classes.footerRow}>
          <Col className={`${classes.colLeft} text-center mb-1`}>
            <div className={classes.footImgLinks}>
              <a
                className={classes.imgLink}
                href='https://www.kakaogamescorp.com'
              >
                <Image className='my-1' src={`${S3_URL}/etc/service-kg.png`} />
              </a>
              <a
                className={classes.imgLink}
                href='https://www.krafton.com/en/index.html'
              >
                <Image
                  className='my-1'
                  src={`${S3_URL}/etc/service-krafton.png`}
                />
              </a>
            </div>
          </Col>
          <Col className={`${classes.colMid} text-center mb-1`}>
            <div className={classes.wrapColMidLinks}>
              <Link className={classes.colLinks} to='/'>
                ELYONDB
              </Link>
            </div>
            <div className={classes.wrapColMidLinks}>
              <Link className={classes.colLinks} to='/editor'>
                EDITOR
              </Link>
            </div>
            <div className={classes.wrapColMidLinks}>
              <Link className={classes.colLinks} to='/credits'>
                CREDITS
              </Link>
            </div>
            <div className={classes.wrapColMidLinks}>
              <Link className={classes.colLinks} to='/logs'>
                LOGS
              </Link>
            </div>
          </Col>
          <Col className={`${classes.colRight} text-center mb-1`}>
            <span className={`${classes.colSpan} ${classes.colLinks} mr-1`}>
              DEVELOPER:
            </span>
            <a
              href='mailto:elyon.database@gmail.com'
              className={classes.colLinks}
            >
              JEAN MARQUES
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default injectSheet(styles)(Footer);
