import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 30px;

  input {
    border: none;
    width: 100%;
    background: transparent;

    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    outline: none;

    padding: 20px;
    color: #fff;
    font-size: 18px;

    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: rgba(255, 255, 255, 0.5);
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: rgba(255, 255, 255, 0.5);
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;
