import styled from 'styled-components';

export const Container = styled.div`
  overflow-y: auto;

  padding: 20px 50px;
  position: absolute;
  z-index: 10;

  width: 100vw;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1,
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

interface IRow {
  $background?: boolean;
}

export const Row = styled.div<IRow>`
  display: flex;
  flex-direction: row;
  margin: 10px 0;

  height: 100%;

  align-items: flex-start;
  line-height: 1.5rem;

  h3 {
    margin: 0 20px 0 0;
  }

  @media (max-width: 720px) {
    flex-direction: column;
  }

  ${props =>
    props.$background &&
    `
      background: #e8e7f0;
      border-radius: 5px;
      padding: 20px;
  `}
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: var(--text-body);
    display: flex;
    flex-direction: column;
  }

  b {
    text-transform: capitalize;
  }
`;
