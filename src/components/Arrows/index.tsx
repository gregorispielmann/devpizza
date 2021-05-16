import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import Button from '../Button';

import { Container } from './styles';

interface IArrows {
  onBack?: () => void;
  onNext?: () => void;
  backUrl?: string;
  nextUrl?: string;
  disableNext?: boolean;
  disableBack?: boolean;
  finish?: boolean;
}

const Arrows: React.FC<IArrows> = ({
  backUrl,
  disableBack = false,
  onBack,
  nextUrl,
  disableNext = false,
  onNext,
  finish = false,
}) => {
  return (
    <Container>
      {backUrl && (
        <Link to={backUrl} onClick={e => disableBack && e.preventDefault()}>
          <Button color="transparent" onClick={onBack} disabled={disableBack}>
            <h3 style={{ marginRight: 10 }}>Voltar</h3>
            <BsArrowLeft size={40} />
          </Button>
        </Link>
      )}
      {nextUrl && (
        <Link
          to={nextUrl}
          onClick={e => (disableNext || finish) && e.preventDefault()}
        >
          <Button color="transparent" onClick={onNext} disabled={disableNext}>
            <BsArrowRight size={40} />
            <h3 style={{ marginLeft: 10 }}>Próximo</h3>
          </Button>
        </Link>
      )}
    </Container>
  );
};

export default Arrows;
