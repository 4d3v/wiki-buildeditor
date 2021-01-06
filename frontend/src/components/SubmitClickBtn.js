import React from 'react';

const submitClickBtn = ({ val, fn, disabled }) => {
  return (
    <div className='wrapper'>
      <button className='cta cta-next' onClick={fn} disabled={disabled}>
        <span className='a-txt a-next text-uppercase'>{val}</span>
        <span className='svg-span a-next svg-next'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
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
                d='M16 7.328v-3.328l8 8-8 8v-3.328l-16-4.672z'
                fill='#FFFFFF'
              />
            </g>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default submitClickBtn;
