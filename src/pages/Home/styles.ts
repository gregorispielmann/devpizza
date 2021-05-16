import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 50px;
  position: absolute;
  z-index: 10;

  height: 100vh;
  width: 100vw;

  background: transparent;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    color: var(--orange);
  }
  p {
    color: #fff;
  }

  @media (max-width: 720px) {
    padding: 10px 20px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 30px;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;
