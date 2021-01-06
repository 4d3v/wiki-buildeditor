import React from 'react';
import InjectSheet from 'react-jss';
import { S3_URL } from '../constants/awss3';
import useMousePosition from '../hooks/useMousePosition';
import useWindowSize from '../hooks/useWindowSize';
import IconDmgTpOrMechanic from './IconDmgTpOrMechanic';
import TxtOverlay from './TxtOverlay';

const styles = {
  dmgTypeIcon: {
    position: 'absolute',
    top: '5px',
    right: '5px',
    borderRadius: '20%',
    height: '30px',
    width: '30px',
    background: props =>
      `url(${S3_URL}/dmgtypes/${props.el.dmgtype}.png) center center no-repeat`,
  },
  skStat: {
    fontSize: '12px',
    margin: '2px',
  },
  imgGif: {
    height: '140px',
    border: '1px solid #333',
    borderRadius: '2%',
    display: 'block',
    margin: '4px auto',
  },
  mechWrapper: {
    padding: '0 6px 2px ',

    minHeight: '16px',
    border: '1px solid #fff',
    borderRadius: '2%',
  },
  spanCateg: {
    color: '#5efb26',
  },
};

const Desc = ({ b, type, el, classes }) => {
  const { x, y } = useMousePosition();
  const { width } = useWindowSize();

  const skillIconInlineStyle = {
    left:
      b && width / 2 + 10 > x
        ? x + 20
        : b && width / 2 + 10 <= x
        ? x - 315
        : '-10000px',
    top: b ? y - 200 : '-10000px',
    visibility: b ? 'visible' : 'hidden',
    position: 'fixed', // ? absolute or fixed
    pointerEvents: 'none',
    zIndex: '1000',
    background: '#333',
    color: '#fff',
    border: '1px solid #000',
    width: '300px',
    // height: '340px',
    padding: '2px 6px',
    boxShadow:
      'rgba(255, 255, 255, 0.5) -1px -1px 3px, rgba(255, 255, 255, 0.5) 1px -1px 3px, rgba(0, 0, 0, 0.4) 2px 2px 3px',
  };

  const runetraitIconInlineStyle = {
    left:
      b && width / 2 + 10 > x
        ? x + 20
        : b && width / 2 + 10 <= x
        ? x - 315
        : '-10000px',
    top: b ? y - 290 : '-10000px',
    visibility: b ? 'visible' : 'hidden',
    position: 'fixed', // ? absolute or fixed
    pointerEvents: 'none',
    zIndex: '1000',
    background: '#333',
    color: '#fff',
    border: '1px solid #000',
    width: '300px',
    // height: '340px',
    padding: '2px 6px',
    boxShadow:
      'rgba(255, 255, 255, 0.5) -1px -1px 3px, rgba(255, 255, 255, 0.5) 1px -1px 3px, rgba(0, 0, 0, 0.4) 2px 2px 3px',
  };

  const sephirotIconInlineStyle = {
    left:
      b && width / 2 + 10 > x
        ? x + 20
        : b && width / 2 + 10 <= x
        ? x - 315
        : '-10000px',
    top: b ? y - 100 : '-10000px',
    visibility: b ? 'visible' : 'hidden',
    position: 'fixed', // ? absolute or fixed
    pointerEvents: 'none',
    zIndex: '1000',
    background: '#333',
    color: '#fff',
    border: '1px solid #000',
    width: '300px',
    // height: '340px',
    padding: '2px 6px',
    boxShadow:
      'rgba(255, 255, 255, 0.5) -1px -1px 3px, rgba(255, 255, 255, 0.5) 1px -1px 3px, rgba(0, 0, 0, 0.4) 2px 2px 3px',
  };

  const renderDps = arr => {
    let res = arr[0],
      n = arr.length;
    if (n <= 1) return res;

    for (let i = 1; i < n; ++i) {
      if (arr[i] < 0) {
        if (i < n - 1) res = res + ` ~ ${Math.abs(arr[i])} / `;
        else res = res + ` ~ ${Math.abs(arr[i])}`;
      } else {
        if (i < n - 1) res = res + ' / ' + arr[i] + ' / ';
        else res += arr[i];
      }
    }

    return res;
  };

  if (b && el.slug && type === 'skillIcon')
    return (
      <div style={skillIconInlineStyle}>
        <h3 className={classes.spanCateg}>{el.name}</h3>
        <span className={classes.dmgTypeIcon}></span>
        <p className={classes.skStat}>{el.description}</p>
        <p className={classes.skStat}>
          <span className={classes.spanCateg}>Dps: </span>
          {renderDps(el.dps)}
        </p>
        <p className={classes.skStat}>
          <span className={classes.spanCateg}>Range: </span>
          {el.range}
        </p>
        <p className={classes.skStat}>
          <span className={classes.spanCateg}>Cooldown: </span>
          {el.cooldown}
        </p>
        <p className={classes.skStat}>
          <span className={classes.spanCateg}>Resource: </span>
          {el.resource < 0
            ? `Consumes ${Math.abs(el.resource)}`
            : el.resource > 1
            ? `Recharges ${Math.abs(el.resource)}`
            : el.resource}
        </p>
        {/* <p className={classes.skStat}>
          <span className={classes.spanCateg}>AOE: </span>
          {el.aoe}
        </p>
        <p className={classes.skStat}>
          <span className={classes.spanCateg}>Usage: </span>
          {el.usage}
        </p> */}
        <p className={`${classes.skStat} ${classes.spanCateg}`}>Mechanics:</p>
        <div className={classes.mechWrapper}>
          <IconDmgTpOrMechanic mechanics={el.mechanics} />
        </div>
        <img
          src={`${S3_URL}/skills/${
            el.archetype ? el.archetype.slug : 'misc'
          }/skills/${el.slug}.gif`}
          alt={el.name}
          className={classes.imgGif}
        />
      </div>
    );

  if (b && type === 'runetraitIcon')
    return (
      <div style={runetraitIconInlineStyle}>
        <h3 className={classes.spanCateg}>{el.name}</h3>
        <p className={classes.skStat}>
          <span className={classes.spanCateg}>Description: </span>
          {el.description}
        </p>
        <p className={`${classes.skStat} ${classes.spanCateg}`}>Mechanics:</p>
        <div className={classes.mechWrapper}>
          <IconDmgTpOrMechanic mechanics={el.mechanics} />
        </div>
        <img
          src={`${S3_URL}/runetraits/gifs/${el.slug}.gif`}
          alt={el.name}
          className={classes.imgGif}
        />
      </div>
    );

  if (b && type === 'sephirotIcon')
    return (
      <div style={sephirotIconInlineStyle}>
        <h2>
          <span className={classes.spanCateg}>[{el.beid}]</span> {el.name}
        </h2>
        <p className={classes.skStat}>
          <span className={classes.spanCateg}>Branch:</span> {el.branch}
        </p>
        <p className={classes.skStat}>
          <span className={classes.spanCateg}>Details:</span> {el.details}
        </p>
        <p className={classes.skStat}>
          <span className={classes.spanCateg}>Talent Points:</span>{' '}
          {el.talentPoints}
        </p>
        <img
          src={`${S3_URL}/sephirots/gifs/${el.slug}.gif`}
          alt={el.name}
          className={classes.imgGif}
        />
      </div>
    );

  if (b && type === 'archIcon')
    return <TxtOverlay b={b} type={type} x={x} y={y} el={el} />;

  if (b && type === 'tabIcon')
    return <TxtOverlay b={b} type={type} x={x} y={y} el={el} />;

  if (b && type === 'wikiDescIcon')
    return <TxtOverlay b={b} type={type} x={x} y={y} el={el} />;

  if (b && type === 'wikiTxtInfo')
    return <TxtOverlay b={b} type={type} x={x} y={y} el={el} />;

  if (b && type === 'wikiIconDmgMech')
    return <TxtOverlay b={b} type={type} x={x} y={y} el={el} />;

  if (b && type === 'wikiRSIcon')
    return <TxtOverlay b={b} type={type} x={x} y={y} el={el} />;

  return <div></div>;
};

Desc.defaultProps = { tx: 7, ty: 12 };

export default InjectSheet(styles)(Desc);
