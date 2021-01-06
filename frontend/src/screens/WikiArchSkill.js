import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listArchSkillsDetails } from '../actions/archSkillsActions';
import IconDmgTpOrMechanic from '../components/IconDmgTpOrMechanic';
import Loader from '../components/Loader';
import Message from '../components/Message';
import WikiNavigationCard from '../components/WikiNavigationCard';
import NotFound from './NotFound';
import Desc from '../components/Desc';
import initialStates from '../utils/initialStates';
import { S3_URL } from '../constants/awss3';

const WikiArchSkill = ({ match }) => {
  const dispatch = useDispatch(),
    // TODO Change to archSkillsDetails? Check later
    archSkillsList = useSelector(state => state.archSkillsDetails),
    [iconTxtOverlay, setIconTxtOverlay] = useState(
      initialStates.iconTxtOverlay
    );

  const { loading, err, archetype } = archSkillsList;

  useEffect(() => {
    dispatch(listArchSkillsDetails(match.params.archetype));
  }, [dispatch, match]);

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

  const wikiArchSkilltheadStyles = { backgroundColor: '#e3cdff' },
    wikiArchSkillTdStyles = { margin: '0 auto' };

  return (
    <>
      {loading ? (
        <Loader />
      ) : err ? (
        err.error.statusCode === 404 ? (
          <NotFound prev='/wiki' />
        ) : (
          <Message variant='danger' children={err.message} />
        )
      ) : (
        archetype.data && (
          <Container>
            <Row>
              <Col xs={12} md={8}>
                <h1 className='font-weight-bold'>{archetype.data.name}</h1>
                <p>{archetype.data.description}</p>
              </Col>
              <Col xs={8} sm={4}>
                <WikiNavigationCard />
              </Col>
            </Row>
            <Row>
              <h2>Skills</h2>
              <Table responsive striped hover>
                <thead style={wikiArchSkilltheadStyles}>
                  <tr>
                    <th>&nbsp;&nbsp;&nbsp;#</th>
                    <th>Name</th>
                    {[
                      ['fab', 'fa-digital-ocean fa-lg', 'Damage Type'],
                      ['fas', 'fa-bahai fa-lg', 'DPS'],
                      ['fas', 'fa-sync-alt fa-lg', 'Cooldown'],
                      ['fas', 'fa-bong fa-lg', 'Resource'],
                      ['fas', 'fa-bullseye fa-lg', 'Range'],
                    ].map(icon => (
                      <th key={icon[1]} className='text-center'>
                        <i
                          className={`${icon[0]} ${icon[1]}`}
                          onMouseEnter={e =>
                            handleOverlayOnEnter(e, icon[2], 'wikiDescIcon')
                          }
                          onMouseLeave={handleOverlayOnLeave}
                        ></i>
                      </th>
                    ))}
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {archetype.data.skills.map(skill => (
                    <tr key={skill.slug}>
                      <td>
                        <Image
                          src={`${S3_URL}/skills/${archetype.data.slug}/skills/${skill.slug}-icon.png`}
                          height='28px'
                          width='28px'
                        />
                      </td>
                      <td>
                        <Link to={`/wiki/skills/${skill.slug}`}>
                          {skill.name}
                        </Link>
                      </td>
                      <td className='text-center'>
                        <IconDmgTpOrMechanic
                          handleOverlayOnEnter={handleOverlayOnEnter}
                          handleOverlayOnLeave={handleOverlayOnLeave}
                          dmgtype={skill.dmgtype}
                          style={wikiArchSkillTdStyles}
                        />
                      </td>
                      <td className='text-center'>
                        {skill.dps.map((el, i) => {
                          if (el < 0) return ` ~ ${Math.abs(el)}`;
                          return `${
                            i < skill.dps.length - 1 && skill.dps[i + 1] >= 0
                              ? el + ' / '
                              : el
                          }`;
                        })}
                      </td>
                      <td className='text-center'>{skill.cooldown}</td>
                      <td className='text-center'>{skill.resource}</td>
                      <td className='text-center'>{skill.range}</td>
                      <td>{skill.description}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Desc
                b={iconTxtOverlay.isHovered}
                type={iconTxtOverlay.type}
                el={iconTxtOverlay.curData}
              />
            </Row>
          </Container>
        )
      )}
    </>
  );
};

export default WikiArchSkill;
