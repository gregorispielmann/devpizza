import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  position: relative;

  margin: 20px 0;
`;

interface IStep {
  $step: boolean;
}

export const Step = styled.div<IStep>`
  width: 50px;
  height: 50px;
  border-radius: 50px;

  border: 4px solid #00a84f;
  background: ${props => (props.$step ? '#00a84f' : '#fff')};

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 20px;

  &:last-child {
    margin-right: 0px;
  }

  font-size: 1.5rem;
  color: ${props => (props.$step ? '#fff' : '#00a84f')};
  font-weight: bold;
`;

export const StepContainer = styled.div`
  display: block;
`;

interface IStepBar {
  $step: boolean;
}

export const StepBar = styled.div<IStepBar>`
  height: 15px;
  width: 100px;
  margin: 0 5px;
  z-index: -10;
  position: absolute;
  top: 18px;

  border: 4px solid #00a84f;
  background: ${props => (props.$step ? '#00a84f' : '#fff')};
`;
