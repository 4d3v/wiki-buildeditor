import React from 'react';
import { Link } from 'react-router-dom';

const LinkBackBtn = ({ to }) => {
  return (
    <div className='wrapper'>
      <Link className='cta' to={to}>
        <span className='svg-span'>
          <svg
            width='66px'
            height='43px'
            viewBox='0 0 66 43'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g
              id='arrow'
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
            >
              <path
                className='three'
                d='M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z'
                fill='#FFFFFF'
              ></path>
            </g>
          </svg>
        </span>
        <span className='a-txt'>BACK</span>
      </Link>
    </div>
  );
};

export default LinkBackBtn;
