import React from 'react';
import { Container } from 'react-bootstrap';
import injectSheet from 'react-jss';

const styles = {
  container: {
    maxWidth: '1140px',
    paddingRight: '15px',
    paddingLeft: '15px',
    marginRight: 'auto',
    marginLeft: 'auto',

    '& $windowWrapper': {
      width: '55%',
      minHeight: '346px',
      border: '2px solid #333',
      margin: '0 auto',

      '& $windowHeader': {
        width: '100%',
        height: '35px',
        background: '#333',
        color: '#fff',
        margin: 0,
        paddingTop: '2px',
        letterSpacing: '2px',
      },

      '& $donationTitle, & $donationMessage': {
        textAlign: 'center',
        fontStyle: 'italic',
      },

      '& $donationTitle': {
        marginTop: '10px',
      },

      '& $donationMessage': {
        margin: '15px 110px 40px',
      },

      '& $formWrapper': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        '& $paypalLogo': {
          height: '40px',
        },

        '& $donateBtn': {
          height: '64px',
          transition: 'filter 0.3s ease',
          '&:hover': {
            filter: 'brightness(1.1)',
          },
        },
      },
    },
  },
  windowWrapper: {},
  windowHeader: {},
  donationTitle: {},
  donationMessage: {},
  formWrapper: {},
  paypalLogo: {},
  donateBtn: {},
};

const Donate = ({ classes }) => {
  return (
    <Container className={classes.container}>
      <h4 className='text-center py-2'>
        <i className='fas fa-quote-left fa-fw'></i> If you want to support the
        project you can do it right now
      </h4>
      <div className={classes.windowWrapper}>
        <h3 className={`${classes.windowHeader} text-center`}>DONATE</h3>
        <h4 className={classes.donationTitle}>Greetings</h4>
        <p className={classes.donationMessage}>
          "As you may know, building and deploying a web application like this
          one costs money. Donations are a solid way to help keep the site
          alive. If you wish to support, I made a paypal link for that"
          <br />
          "Thank you all in advance!"
        </p>
        <div className={classes.formWrapper}>
          <form
            action='https://www.paypal.com/donate'
            method='post'
            target='_top'
          >
            <input
              type='hidden'
              name='hosted_button_id'
              value='AGY8CDDPH3GKC'
            />
            <input
              type='image'
              src='https://elyondb.s3.us-east-2.amazonaws.com/images/etc/donateBtn.png'
              border='0'
              name='submit'
              title='PayPal - The safer, easier way to pay online!'
              alt='Donate with PayPal button'
              className={classes.donateBtn}
            />
            <img
              alt=''
              border='0'
              src='https://www.paypal.com/en_BR/i/scr/pixel.gif'
              width='1'
              height='1'
            />
          </form>
        </div>
      </div>
    </Container>
  );
};

export default injectSheet(styles)(Donate);
