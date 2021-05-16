import React from 'react';
import { SiGithub } from 'react-icons/si';
import { Container, Button } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Button
        onClick={() =>
          window.open('https://github.com/gregorispielmann', '_blank')
        }
      >
        <SiGithub size={40} />
      </Button>
    </Container>
  );
};
export default Footer;
