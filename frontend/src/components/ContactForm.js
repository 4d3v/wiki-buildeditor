import React, { useState } from 'react';
import injectSheet from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';
import { reportBug } from '../actions/reportBugActions';
import SubmitClickBtn from './SubmitClickBtn';
import Loader from './Loader';
import Message from './Message';

const styles = {
  overlay: {
    position: 'fixed',
    top: '50%',
    left: 0,
    right: 0,
    bottom: 0,
    transform: 'translateY(-50%)',
    zIndex: '9999',
    height: '100vh',
    width: '100vw',
    background: 'rgba(0, 0, 0, 0.1)',
  },
  formWrapper: {
    width: '570px',
    border: '1px solid black',
    zIndex: '10000',
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    left: '0',
    right: '0',
    textAlign: 'center',
    top: '50%',
    transform: 'translateY(-50%)',
    background: '#fff',

    '& $contactForm': {
      padding: '0 5%',
      marginTop: '20px',
      width: '100%',

      '& input, & textarea, & select': {
        border: '1px solid #808080',
        background: '#fdfdfa',
        fontSize: '12px',
        padding: '10px 0',
        float: 'left',
        marginBottom: '8px',
        paddingLeft: '3%',
        width: '49.2%',
      },

      '& textarea, & select, & $inputLink': {
        paddingLeft: '3%',
        width: '99.9%',
      },

      '& select': {
        color: 'grey',
      },

      '& textarea': {
        height: '125px',
      },

      '& $inputLink': {
        marginBottom: '18px',
      },

      '& $btnSendWrapper': {
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '15px',
      },
    },
  },

  contactForm: {},
  btnSendWrapper: {},
  inputLink: {},
  headerTitle: {
    color: '#fff',
    width: '100%',
    height: '40px',
    padding: '2px 30px',
    display: 'block',
    fontSize: '20px',
    lineHeight: '30px',
    background: '#333',
    margin: 0,
  },
  xClose: {
    color: '#fff',
    display: 'block',
    height: '19px',
    width: '19px',
    position: 'absolute',
    top: '7px',
    right: '7px',
    cursor: 'pointer',
    textAlign: 'center',

    '&:hover': {
      color: 'rgb(1, 244, 41)',
    },
  },
};

const ContactForm = ({ classes, handleFormOverlay, closeFormOverlay }) => {
  const [bugData, setBugData] = useState({
    name: '',
    email: '',
    errorType: '',
    message: '',
    buildEditorLink: '',
  });
  const dispatch = useDispatch();
  const reportBugRes = useSelector(state => state.reportBugRes);
  const { loading, err, bugReportResDt } = reportBugRes;

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(reportBug(bugData));
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setBugData(st => ({
      ...st,
      [name]: value,
    }));
  };

  const handleSelect = e => {
    const { value } = e.target;
    setBugData(st => ({
      ...st,
      errorType: value,
    }));
  };

  if (bugReportResDt && bugReportResDt.status === 'success') {
    setTimeout(() => {
      closeFormOverlay();
    }, 1200);
  }

  return (
    <div
      data-o_o='1'
      onClick={e => handleFormOverlay(e)}
      className={classes.overlay}
    >
      <div className={classes.formWrapper}>
        <h5 className={classes.headerTitle}>Send Bug Report</h5>
        <i
          data-formxclose='1'
          className={`${classes.xClose} fas fa-times fa-lg`}
        ></i>
        <form id='bug-report-form' className={classes.contactForm}>
          <input
            className='mr-2'
            type='text'
            placeholder='NAME'
            name='name'
            value={bugData.name}
            onChange={handleChange}
          />
          <input
            type='email'
            name='email'
            placeholder='EMAIL'
            aria-describedby='emailHelp'
            value={bugData.email}
            onChange={handleChange}
          />
          <select value={bugData.errorType} onChange={handleSelect}>
            <option value=''>
              {'>>'} CHOOSE THE TYPE OF ERROR {'<<'}
            </option>
            <option value='Typo or wrong translation'>
              TYPO, WRONG TRANSLATION
            </option>
            <option value='Invalid item information'>
              INVALID ITEM INFORMATION
            </option>
            <option value='Incorrect data value'>
              INCORRECT DATA VALUE OR CALCULATION OF DATA
            </option>
            <option value='other'>OTHER</option>
          </select>
          <textarea
            placeholder='LEAVE A MESSAGE'
            name='message'
            value={bugData.message}
            onChange={handleChange}
          ></textarea>
          <input
            className={classes.inputLink}
            name='buildEditorLink'
            type='text'
            placeholder='LINK WITH BUILD EDITOR ERROR (OPTIONAL)'
            value={bugData.buildEditorLink}
            onChange={handleChange}
          />
          <div className={classes.btnSendWrapper}>
            <SubmitClickBtn val='Send' fn={handleSubmit} disabled={loading} />
          </div>
        </form>
        {bugReportResDt && (
          <Message variant='success'>{bugReportResDt.data.msg}</Message>
        )}
        {err && <Message variant='danger'>{err}</Message>}
        {loading && <Loader customPosForm={true} />}
      </div>
    </div>
  );
};

export default injectSheet(styles)(ContactForm);
