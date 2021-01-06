export default {
  artContainer: {
    position: 'relative',
    width: '255px',
    margin: '4px',
    fontSize: '14px',
    cursor: 'pointer',
    background: '#333 linear-gradient(130deg, #262626 50%, #444 100%)',
    overflowY: 'auto',
    overflowX: 'hidden',
    border: '1px solid black',

    '&:hover': {
      background: '#333 linear-gradient(130deg, #444 50%, #555 100%)',
    },

    '& $artHeader': {
      padding: '6px 10px',
      position: 'relative',
      background: '#444',
      borderBottom: '1px solid #222',

      '& $artH4Title': {
        fontSize: '14px',
        fontWeight: '600',
        color: '#5efb26',
      },
    },

    '& $artBody': {
      padding: '2px 10px',
      height: '442px',
      position: 'relative',
      color: '#fff',

      '& i': {
        color: '#5efb26',
      },

      '& $artSpanProp': {
        color: '#5efb26',
      },

      '& $artStats': {
        margin: '6px 0',
      },

      '& $artDetails': {
        padding: 0,
        margin: '0 0 6px 0',
        listStyle: 'none',

        '& $artDtItem': {
          fontSize: '11px',
          padding: '2px 4px',
          borderBottom: '1px solid #fff',
        },
        '& li:first-child': {
          borderTop: '1px solid #fff',
        },
      },
    },
  },
  artHeader: {},
  artBody: {},
  artH4Title: {},
  artSpanProp: {},
  artStats: {},
  artDetails: {},
  artDtItem: {},
  artImgGif: {},
  artMechWrapper: {
    padding: '0.3rem 1.25rem',
    minHeight: '25px',
    border: '1px solid #fff',
    borderRadius: '2%',
  },
  checked: {
    color: '#000',
    background:
      '#333 linear-gradient(130deg, rgb(42, 38, 153) 50%, rgb(98, 94, 210) 100%)',

    '&::before': {
      // backgroundPositionX: '-265px',
      border: '1px solid #000',
    },

    '& $artHeader': {
      background:
        'linear-gradient(130deg, rgb(70, 76, 159) 50%, rgb(98, 94, 210) 100%)',
    },

    '&:hover': {
      background:
        '#333 linear-gradient(130deg, rgb(65, 61, 193) 50%, rgb(125, 122, 219) 100%)',
    },

    '& $artDtItem': {
      borderBottom: '1px solid #fff !important',
    },

    '& li:first-child': {
      borderTop: '1px solid #fff !important',
    },

    '& $artMechWrapper': {
      background: 'none',
      border: '1px solid #fff',
    },
  },

  artImgGifWrapper: {
    bottom: '0',
    margin: '4px 0',
    position: 'relative',
    height: '140px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '& $artImgGif': {
      height: '125px',
      border: '1px solid #000',
      display: 'block',
      position: 'absolute',
      bottom: 0,
    },
  },
};
