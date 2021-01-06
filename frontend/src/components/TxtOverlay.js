import React from 'react';

const TxtOverlay = ({ b, type, x, y, el }) => {
  const pos = {
    left:
      b && type === 'archIcon'
        ? x - 50
        : b && type === 'tabIcon'
        ? x + 20
        : b && type === 'wikiDescIcon'
        ? x + 12
        : b && type === 'wikiTxtInfo'
        ? x + 12
        : b && type === 'wikiIconDmgMech'
        ? x + 12
        : b && type === 'wikiRSIcon'
        ? x - 50
        : '-10000px',
    top:
      b && type === 'archIcon'
        ? y + 30
        : b && type === 'tabIcon'
        ? y - 10
        : b && type === 'wikiDescIcon'
        ? y - 35
        : b && type === 'wikiTxtInfo'
        ? y - 35
        : b && type === 'wikiIconDmgMech'
        ? y - 35
        : b && type === 'wikiRSIcon'
        ? y - 45
        : '-10000px',
  };

  const txtOverlayStyles = {
    left: pos.left,
    top: pos.top,
    visibility: b ? 'visible' : 'hidden',
    position: 'fixed', // ? absolute or fixed
    pointerEvents: 'none',
    zIndex: '9999',
    background: '#fff',
    color: '$444',
    border: '1px solid #eee',
    borderTop: '3px solid #444',
    borderBottom: '3px solid #444',
    minWidth: '110px',
    minHeight: '36px',
    padding: '2px 6px',
    textAlign: 'center',
  };

  return <div style={txtOverlayStyles}>{el}</div>;
};

TxtOverlay.defaultProps = { tx: -50, ty: -50 };

export default TxtOverlay;
