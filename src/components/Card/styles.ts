import styled from 'styled-components';
import { TiStarburst } from 'react-icons/ti';

interface IContainer {
  $selected?: boolean;
}

export const Container = styled.div<IContainer>`
  margin: 10px 20px;

  width: 100%;
  max-width: 300px;

  background-color: #e8e7f0;

  padding: 20px;
  border-radius: 10px;

  position: relative;

  cursor: pointer;
  top: 0;

  transition: 0.2s;

  :hover {
    box-shadow: 0px 8px 12px 5px rgba(0, 0, 0, 0.2);
    top: -8px;
  }

  border: ${props => (props.$selected ? '5px solid #00a84f' : 0)};

  @media (max-width: 720px) {
    margin: 10px 0;
  }
`;

export const Badge = styled.div`
  position: absolute;
  top: -40px;
  right: -35px;

  div {
    top: 35px;
    left: 30px;
    position: absolute;
    z-index: 20;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
    line-height: 1rem;

    h5 {
      font-size: 1.2rem;
      color: #fff;
    }
    p {
      font-size: 0.7rem;
    }

    @media (max-width: 720px) {
      top: 30px;
      left: 25px;
    }
  }
`;

export const Content = styled.div`
  font-weight: normal;

  h4 {
    border-top: 1px solid var(--blue);
    padding-top: 10px;
    margin-top: 5px;
    font-size: 1rem;
    color: var(--blue);
  }

  h5 {
    font-size: 1rem;
    color: var(--text-light) !important;
    text-transform: capitalize;
  }

  p {
    font-size: 0.8rem;
    font-weight: normal;
    color: var(--text-body) !important;
  }
`;

interface IImage {
  $image?: string;
}

export const Image = styled.div<IImage>`
  width: 100%;
  height: 100px;
  margin-bottom: 10px;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${props => props.$image});
`;

export const Icon = styled(TiStarburst)`
  font-size: 6rem;
  position: relative;
  color: #0098d0;
`;
