import React from 'react';

import Lottie from 'react-lottie';

import { Container } from './styles';
import animationData from '../../assets/animation/pizza.json';

const Loading: React.FC = () => {
  const options = {
    autoplay: true,
    loop: true,
    animationData,
  };

  return (
    <Container>
      <Lottie options={options} />
    </Container>
  );
};

export default Loading;
