import React from 'react';
import { Image } from 'react-bootstrap';
import { S3_URL } from '../constants/awss3';

const IconDmgTpOrMechanic = ({
  dmgtype,
  mechanics,
  handleOverlayOnEnter,
  handleOverlayOnLeave,
}) => {
  const iconDmgTpOrMechanicStyles = { height: '25px', borderRadius: '20%' };
  return (
    <>
      {dmgtype ? (
        <Image
          style={iconDmgTpOrMechanicStyles}
          src={`${S3_URL}/dmgtypes/${dmgtype}.png`}
          className='border border-dark'
          onMouseEnter={e =>
            handleOverlayOnEnter(e, dmgtype, 'wikiIconDmgMech')
          }
          onMouseLeave={handleOverlayOnLeave}
        />
      ) : (
        mechanics.map(mech => (
          <Image
            key={mech.property}
            style={iconDmgTpOrMechanicStyles}
            src={`${S3_URL}/mechanics/${mech.slug}.png`}
            className='border border-dark mr-1'
            onMouseEnter={e =>
              handleOverlayOnEnter(e, mech.property, 'wikiIconDmgMech')
            }
            onMouseLeave={handleOverlayOnLeave}
          />
        ))
      )}
    </>
  );
};

export default IconDmgTpOrMechanic;
