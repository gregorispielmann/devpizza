import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  z-index: 5;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 114, 187, 0.95);
`;

export const BackgroundImage = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: var(--background-image);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: fixed;
  z-index: 0;
`;
