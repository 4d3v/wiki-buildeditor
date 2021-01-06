import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { listRunestones } from '../actions/archSkillsActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import RenderTableRowData from '../components/RenderTableRowData';
import WikiNavigationCard from '../components/WikiNavigationCard';
import initialStates from '../utils/initialStates';
import Desc from '../components/Desc';

const WikiRunestone = () => {
  const dispatch = useDispatch();

  const runestonesList = useSelector(state => state.runestonesList),
    [iconTxtOverlay, setIconTxtOverlay] = useState(
      initialStates.iconTxtOverlay
    );

  const runes = {
      onslaught: [],
      control: [],
      destiny: [],
      support: [],
      defense: [],
      awakening: [],
      void: [],
    },
    { loading, err, runestones } = runestonesList;

  const populateRunestones = runestonesData => {
    runestonesData.forEach(rt => {
      runes[rt.group].push(rt);
    });
  };

  useEffect(() => {
    dispatch(listRunestones());
  }, [dispatch]);

  const handleOverlayOnEnter = (e, el, type) => {
    setIconTxtOverlay({
      isHovered: true,
      type,
      curData: el,
    });
  };
  const handleOverlayOnLeave = () => {
    setIconTxtOverlay({
      isHovered: false,
      type: '',
      curData: {},
    });
  };

  const runestoneTypeStyles = {
    border: 'none',
    backgroundColor: '#f2e0e0',
    padding: '0.5rem',
  };

  if (runestones.data) populateRunestones(runestones.data);

  const wikiRunestonesTheadStyles = { backgroundColor: '#e3cdff' };
  const renderWikiRunestonesTrStyles = bgColor => {
    return {
      ...runestoneTypeStyles,
      backgroundColor: bgColor,
    };
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : err ? (
        <Message variant='danger' children={err.message} />
      ) : (
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <h1 className='font-weight-bold'>Runestones</h1>
              <p>
                Icons for the third (except awakening) tier are missing. Also I
                don't know how many rune tiers are currently present in the
                game.
              </p>
              <p>
                Once a runestone is slotted into an equipment, the player
                receives an{' '}
                <span
                  className='text-info'
                  data-val='We don\t have that info yet'
                  onMouseEnter={e =>
                    handleOverlayOnEnter(e, e.target.dataset.val, 'wikiTxtInfo')
                  }
                  onMouseLeave={handleOverlayOnLeave}
                >
                  unknown{' '}
                </span>
                amount of runetraits points for the rune group. Those points can
                be used to unlock rune traits extending the player's build.
              </p>
              <p>
                Any rune can have 1 of 4 parameters to them to strengthen your
                character. Those are Health, Artifact Power, Accuracy and
                Evasion.
              </p>
              <p>
                Void type runes gives{' '}
                <span
                  className='text-info'
                  data-val='eg. A void rune can contain health and evasion as stats'
                  onMouseEnter={e =>
                    handleOverlayOnEnter(e, e.target.dataset.val, 'wikiTxtInfo')
                  }
                  onMouseLeave={handleOverlayOnLeave}
                >
                  2 parameters{' '}
                </span>
                and can be inserted into any equipment{' '}
                <span
                  className='text-info'
                  data-val='onslaught, control, destiny, support, defense, awakening'
                  onMouseEnter={e =>
                    handleOverlayOnEnter(e, e.target.dataset.val, 'wikiTxtInfo')
                  }
                  onMouseLeave={handleOverlayOnLeave}
                >
                  group{' '}
                </span>
                but doesn't give the player any runetrait point.
              </p>
            </Col>
            <Col xs={8} sm={4}>
              <WikiNavigationCard />
            </Col>
          </Row>
          <div className='my-2'>
            <Table responsive hover>
              <thead style={wikiRunestonesTheadStyles}>
                <tr>
                  <th>&nbsp;&nbsp;&nbsp;#</th>
                  <th>Description</th>
                  <th>tier</th>
                </tr>
              </thead>
              {[
                ['onslaught', '#e0e8f2'],
                ['control', '#ffd6bd'],
                ['destiny', '#f2ede0'],
                ['support', '#c9eac0'],
                ['defense', '#e0e8f2'],
                ['awakening', '#c9c0ea'],
                ['void', '#f0f0f0'],
              ].map((el, i) => {
                return (
                  <Fragment key={`${el[0]}-${i + 1}`}>
                    <thead>
                      <tr style={renderWikiRunestonesTrStyles(el[1])}>
                        <th>{el[0].toUpperCase()}</th>
                        <th>
                          {el[0] !== 'void'
                            ? `Unlocks traits of group ${el[0]}`
                            : `Gives two parameters but does not unlock any trait`}
                        </th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {runestones.data && (
                        <RenderTableRowData dataArr={runes[el[0]]} />
                      )}
                    </tbody>
                  </Fragment>
                );
              })}
            </Table>
            <Desc
              b={iconTxtOverlay.isHovered}
              type={iconTxtOverlay.type}
              el={iconTxtOverlay.curData}
            />
          </div>
        </Container>
      )}
    </>
  );
};

export default WikiRunestone;
