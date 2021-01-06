import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { compressString } from '../utils/helperFns';
import { S3_URL } from '../constants/awss3';

const RenderTableRowData = ({ dataArr, strType }) => {
  const mech = strType === 'mechanics';
  const runetrait = strType === 'runetraits',
    runetraitTableBG = {
      onslaught: '#fff5f5',
      control: '#fff2ea',
      destiny: '#fff8ea',
      support: '#f9ffef',
      defense: '#efffff',
      awakening: '#f9efff',
    };
  const seph = strType === 'sephirots',
    sephTableBG = {
      hunt: 'rgba(255,169, 59, 0.14)',
      mind: 'rgba(191, 51, 255, 0.11)',
      cunning: 'rgba(255, 239, 0, 0.15)',
    };

  const renderStyle = dtGroupBranch => {
    return {
      backgroundColor:
        (runetrait && runetraitTableBG[dtGroupBranch]) ||
        (seph && sephTableBG[dtGroupBranch]),
    };
  };

  const tdImgStyles = { height: '25px', borderRadius: '20%' };

  return dataArr.map(data => (
    <tr
      key={data.slug}
      style={renderStyle(data.group ? data.group : data.branch)}
    >
      <td>
        {mech ? (
          <Image
            style={tdImgStyles}
            src={`${S3_URL}/mechanics/${data.slug}.png`}
            className='border border-dark mr-1'
          />
        ) : runetrait ? (
          <Image
            width='28px'
            height='28px'
            src={`${S3_URL}/runetraits/${data.slug}-icon.png`}
          />
        ) : seph ? (
          <Image src={`${S3_URL}/sephirots/${data.slug}-icon.png`} />
        ) : (
          <Image
            src={`${S3_URL}/runestones/${data.slug}.png`}
            height='28px'
            width='28px'
          />
        )}
      </td>
      {mech ? (
        <>
          <td>{data.property}</td>
          <td>{data.propertyDescription}</td>
        </>
      ) : runetrait ? (
        <>
          <td>
            <Link to={`/wiki/runetraits/${data.slug}`}>{data.name}</Link>
          </td>
          <td>{data.categoryTier}</td>
          <td>{compressString(data.description, 16)}</td>
        </>
      ) : seph ? (
        <>
          <td>
            {data.branch} / {data.sephType}
          </td>
          <td>{data.name}</td>
          <td>{data.details}</td>
        </>
      ) : (
        <>
          <td>{`${
            data.tier === 1 ? 'Minor' : data.tier === 2 ? 'Medium' : 'Higher'
          } ${data.group} rune`}</td>
          <td>{data.tier}</td>
        </>
      )}
    </tr>
  ));
};

export default RenderTableRowData;
