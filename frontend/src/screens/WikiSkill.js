import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Card, ListGroup, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listArchSkillDetails } from '../actions/archSkillsActions';
import IconDmgTpOrMechanic from '../components/IconDmgTpOrMechanic';
import WikiNavigationCard from '../components/WikiNavigationCard';
import LinkBackBtn from '../components/LinkBackBtn';
import NotFound from './NotFound';
import Desc from '../components/Desc';
import initialStates from '../utils/initialStates';
import { S3_URL } from '../constants/awss3';

const WikiSkill = ({ history, match }) => {
  const dispatch = useDispatch();
  const archSkillDetails = useSelector(state => state.archSkillDetails),
    [iconTxtOverlay, setIconTxtOverlay] = useState(
      initialStates.iconTxtOverlay
    );

  const { loading, err, skill } = archSkillDetails;

  useEffect(() => {
    dispatch(listArchSkillDetails(match.params.skill));
  }, [dispatch, match]);

  const simpleRngKey = idx => `${Math.random() * 50}-${idx}`;
  const renderResource = () => {
    const { resource } = skill.data;
    if (resource < 0) return `Consumes ${Math.abs(resource)}`;
    if (resource > 0) return `Recharges ${Math.abs(resource)}`;
    return resource;
  };

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

  const WikiSkillLGIStyles = {
      background: '#fcfcfc',
      padding: '0.3rem 1.25rem',
    },
    wikiSkillLGIMechStyles = {
      background: '#fcfcfc',
      padding: '0.3rem 1.25rem',
    },
    wikiSkillCardSkillStyles = { width: '19rem', marginBottom: '1rem' },
    wikiSkillCardSkillHeaderStyles = { height: '2.2rem' },
    wikiSkillCardSkillIMGStyles = {
      position: 'absolute',
      top: '-6px',
      left: '4px',
    },
    wikiSkillCardArtsStyles = {
      width: '17rem',
      margin: '2px 2px',
    },
    wikiSkillLGIArtsStyles = { background: '#fafafa', fontSize: '13px' },
    wikiSkillLGIArtsMechStyles = {
      background: '#fcfcfc',
      padding: '0.3rem 1.25rem',
    };

  return (
    <>
      {loading ? (
        <Loader />
      ) : err ? (
        err.error.statusCode === 404 ? (
          <NotFound prev={`/wiki`} />
        ) : (
          <Message variant='danger' children={err.message} />
        )
      ) : (
        skill && (
          <Container>
            <Row>
              <Col xs={12} md={8}>
                <div className='d-flex align-items-center'>
                  <h1 className='mr-2 font-weight-bold'>{skill.data.name}</h1>
                  <IconDmgTpOrMechanic
                    handleOverlayOnEnter={handleOverlayOnEnter}
                    handleOverlayOnLeave={handleOverlayOnLeave}
                    dmgtype={skill.data.dmgtype}
                  />
                </div>
                <p>{skill.data.description}</p>
                <i className='fas fa-quote-left fa-fw'></i>&nbsp; Details
                <ListGroup variant='flush'>
                  {skill.data.details.map((dt, i) => (
                    <ListGroup.Item
                      key={simpleRngKey(i)}
                      style={WikiSkillLGIStyles}
                    >
                      {dt}
                    </ListGroup.Item>
                  ))}
                  <div className='mt-3'>
                    <i className='fas fa-quote-left fa-fw'></i>&nbsp;
                    <span className='mr-1'>Mechanics</span>
                    <ListGroup.Item style={wikiSkillLGIMechStyles}>
                      <IconDmgTpOrMechanic
                        handleOverlayOnEnter={handleOverlayOnEnter}
                        handleOverlayOnLeave={handleOverlayOnLeave}
                        mechanics={skill.data.mechanics}
                      />
                    </ListGroup.Item>
                  </div>
                  {[
                    ['', 'class'],
                    ['fas fa-bahai', 'dps'],
                    ['fas fa-sync-alt', 'cooldown'],
                    ['fas fa-bullseye', 'range'],
                    ['fas fa-bong', 'resource'],
                    ['fab fa-hornbill', 'aoe'],
                    ['fab fa-superpowers', 'type'],
                    ['fas fa-compress', 'usage'],
                  ].map((el, i) => {
                    if (el[1] === 'class')
                      return (
                        <div key={`${el[1]}-${i}}`} className='my-2'>
                          <Image
                            src={`${S3_URL}/archetypes/${skill.data.archetype.slug}-icon-dark.png`}
                            height='28px'
                            width='28px'
                            className='mr-2'
                          />
                          <Link to={`/wiki/${skill.data.archetype.slug}`}>
                            {skill.data.archetype.slug}
                          </Link>
                        </div>
                      );
                    return (
                      <div key={`${el[1]}-${i}}`} className='my-2'>
                        <i className={`${el[0]} fa-fw fa-lg mr-2`}></i>
                        <span>
                          {`${el[1]}: `}
                          {el[1] === 'dps'
                            ? skill.data.dps.map((sk, i) => {
                                if (sk < 0) {
                                  if (i < skill.data.dps.length - 1)
                                    return ` ~ ${Math.abs(sk)} / `;
                                  return ` ~ ${Math.abs(sk)}`;
                                }
                                return `${
                                  i < skill.data.dps.length - 1 &&
                                  skill.data.dps[i + 1] >= 0
                                    ? sk + ' / '
                                    : sk
                                }`;
                              })
                            : el[1] === 'resource'
                            ? renderResource()
                            : skill.data[el[1]]}
                        </span>
                      </div>
                    );
                  })}
                </ListGroup>
              </Col>
              <Col xs={8} sm={4}>
                <Card style={wikiSkillCardSkillStyles}>
                  <Card.Header style={wikiSkillCardSkillHeaderStyles}>
                    <Image
                      src={`${S3_URL}/skills/${skill.data.archetype.slug}/skills/${skill.data.slug}-icon.png`}
                      height='60px'
                      width='60px'
                      style={wikiSkillCardSkillIMGStyles}
                    />
                    <h4 className='text-right'>{skill.data.name}</h4>
                  </Card.Header>
                  <Card.Body className='pt-4'>
                    <Image
                      src={`${S3_URL}/skills/${skill.data.archetype.slug}/skills/${skill.data.slug}.gif`}
                      thumbnail
                    />
                  </Card.Body>
                </Card>
                <WikiNavigationCard />
              </Col>
            </Row>
            <Row className='pt-4'>
              <h3>Artifacts</h3>
            </Row>
            <Row className='justify-content-xl-center mb-2'>
              {skill.data.artifacts.map((art, i) => (
                <Card key={simpleRngKey(i)} style={wikiSkillCardArtsStyles}>
                  <Card.Img
                    variant='top'
                    src={`${S3_URL}/skills/${skill.data.archetype.slug}/artifacts/${skill.data.slug}-art${i}.gif`}
                  />
                  <Card.Body>
                    <div className='d-flex align-items-center'>
                      <h4 className='pr-2'>{art.name}</h4>
                      <IconDmgTpOrMechanic
                        handleOverlayOnEnter={handleOverlayOnEnter}
                        handleOverlayOnLeave={handleOverlayOnLeave}
                        dmgtype={art.dmgtype}
                      />
                    </div>
                    <Card.Text>
                      <i className='fas fa-life-ring'></i>&nbsp; Grade:{' '}
                      {art.grade}
                    </Card.Text>
                    <Card.Text>
                      <i className='fas fa-circle-notch'></i>&nbsp; Artifact
                      Power: {art.artifactPower}
                    </Card.Text>
                    <i className='fas fa-quote-left fa-fw'></i>&nbsp; Details
                    <ListGroup variant='flush'>
                      {art.details.map((dt, i) => (
                        <ListGroup.Item
                          key={simpleRngKey(i)}
                          style={wikiSkillLGIArtsStyles}
                        >
                          {dt}
                        </ListGroup.Item>
                      ))}
                      <div className='mt-3'>
                        <i className='fas fa-quote-left fa-fw'></i>&nbsp;
                        <span className='mr-1'>Mechanics</span>
                        <ListGroup.Item style={wikiSkillLGIArtsMechStyles}>
                          <IconDmgTpOrMechanic
                            handleOverlayOnEnter={handleOverlayOnEnter}
                            handleOverlayOnLeave={handleOverlayOnLeave}
                            mechanics={art.mechanics}
                          />
                        </ListGroup.Item>
                      </div>
                    </ListGroup>
                  </Card.Body>
                </Card>
              ))}
            </Row>
            <Desc
              b={iconTxtOverlay.isHovered}
              type={iconTxtOverlay.type}
              el={iconTxtOverlay.curData}
            />
            <LinkBackBtn to={`/wiki/${skill.data.archetype.slug}`} />
          </Container>
        )
      )}
    </>
  );
};

export default WikiSkill;
