import styled from 'styled-components';
import { IoPizzaOutline } from 'react-icons/io5';

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  color: #fff;

  div {
    line-height: 1.7rem;
    flex-direction: column;

    h1 {
      font-size: 1.5rem;
    }

    p {
      color: var(--orange);
      font-weight: bold;
    }
  }
`;

export const PizzaIcon = styled(IoPizzaOutline)`
  font-size: 3.5rem;
  color: var(--orange);
  margin-right: 0.5rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
`;

export const Points = styled.div`
  align-items: center;
  justify-content: flex-end;
  text-align: right;

  h2 {
    color: white;
  }

  h5 {
    font-size: 1rem;
    color: #fff;
  }
`;
