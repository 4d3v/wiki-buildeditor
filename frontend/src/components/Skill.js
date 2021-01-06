import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
// import SkillDeck from './SkillDeck';
import SkillDesc from './SkillDesc';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = event => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return mousePosition;
};

const Skill = ({ el }) => {
  const [isSkillDescShown, setIsSkillDescShown] = useState(false);
  const { x, y } = useMousePosition();

  const handleMouseHover = () => {
    setIsSkillDescShown(!isSkillDescShown);
  };

  const skillImgStyles = { display: 'inline-block', margin: '1px 1px' };

  return (
    <>
      <Image
        src={el.image}
        alt={el.name}
        width='60px'
        height='60px'
        style={skillImgStyles}
        onMouseEnter={handleMouseHover}
        onMouseLeave={handleMouseHover}
      />
      {isSkillDescShown && <SkillDesc el={el} x={x} y={y} />}
    </>
  );
};

export default Skill;
