import styled from 'styled-components';

interface IButton {
  $color: string;
  $disabled: boolean;
}

export const Container = styled.button<IButton>`
  border: 0;
  border-radius: 5px;
  padding: 5px 20px;
  background-color: ${props => props.$color};

  cursor: ${props => (props.$disabled ? 'not-allowed' : 'pointer')};

  display: flex;
  flex-direction: row;
  align-items: center;

  text-decoration: none;
  color: #fff;

  h3 {
    opacity: 0;
    color: #fff;
    text-decoration: none;

    transition: opacity 0.2s ease-in-out;

    @media (max-width: 720px) {
      display: none;
    }
  }

  @media (min-width: 720px) {
    &:hover {
      text-decoration: none;

      h3 {
        opacity: 1;
        text-decoration: none;
      }
    }
  }
`;
