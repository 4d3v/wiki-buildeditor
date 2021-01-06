import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const WikiNavigationCard = () => {
  const cardStyles = { width: '22rem' };
  return (
    <Card style={cardStyles}>
      <Card.Body>
        <Card.Title>
          <Link to='/wiki'>Wiki</Link>
        </Card.Title>
        <Card.Subtitle className='mt-2 mb-1 text-muted'>Classes</Card.Subtitle>
        <Card.Text>
          {['warlord', 'elementalist', 'mystic', 'assassin', 'gunslinger'].map(
            el => (
              <Link
                key={el}
                className='ml-0 text-capitalize'
                to={`/wiki/${el}`}
              >
                {el !== 'gunslinger' ? `${el}, ` : el}
              </Link>
            )
          )}
        </Card.Text>
        <Card.Subtitle className='mt-2 mb-1 text-muted'>More</Card.Subtitle>
        <Card.Text>
          {['mechanics', 'runestones', 'runetraits', 'sephirots'].map(el => (
            <Link key={el} className='ml-0 text-capitalize' to={`/wiki/${el}`}>
              {el !== 'sephirots' ? `${el}, ` : el}
            </Link>
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WikiNavigationCard;
