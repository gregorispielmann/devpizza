import React from 'react';
import { useData } from '../../hooks/Data';
import { formatMoney } from '../../utils';

import { Logo as LogoContainer, PizzaIcon, Row, Points } from './styles';

const Logo: React.FC = () => {
  const { data } = useData();

  return (
    <Row>
      <LogoContainer>
        <PizzaIcon />
        <div>
          <h1>Dev Pizza</h1>
          <p>é pizza, sim.</p>
        </div>
      </LogoContainer>

      <Points>
        {data?.name && <h2>Olá {data?.name?.split(' ')[0]}!</h2>}
        <h3>DevPoints</h3>
        <h5>{data?.points} pontos</h5>
        {data?.total > 0 && <h5>Total {formatMoney(data?.total)}</h5>}
      </Points>
    </Row>
  );
};

export default Logo;
