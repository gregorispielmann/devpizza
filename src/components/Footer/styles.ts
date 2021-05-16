import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 720px) {
    display: none;
  }

  position: fixed;

  width: 40px;
  height: 40px;

  bottom: 10px;
  right: 10px;

  color: #fff;

  z-index: 100;

  font-size: 0.8rem !important;
`;

export const Button = styled.div`
  cursor: pointer;

  svg {
    transition: 0.8s;
  }

  :hover {
    svg {
      color: #000;
    }
  }
`;
