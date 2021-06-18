import React from 'react';
import styled, { keyframes } from 'styled-components';

const BounceAnimation = keyframes`
    0% { margin-bottom: 0; }
    50% { margin-bottom: 15px }
    100% { margin-bottom: 0 }
`;
const DotWrapper = styled.div`
  position: fix;
  display: flex;
  align-items: flex-end;
`;
const Dot = styled.div`
  background-color: black;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  /* Animation */
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${(props: { delay: string }) => props.delay};
`;
const FixedWrapper = styled.div`
  position: fixed;
  width: 95vw;
  height: 100%;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackgroundWrapper = styled.div`
  height: 100%;
  width: 95vw;
  background: black;
  opacity: 0.3;
  position: fixed;
`;

const TextWrapper = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: black;
`;

const LoadingDots = () => {
  return (
    <FixedWrapper>
      <BackgroundWrapper />
      <TextWrapper>Loading</TextWrapper>
      <DotWrapper>
        <Dot delay="0s" />
        <Dot delay=".1s" />
        <Dot delay=".2s" />
      </DotWrapper>
    </FixedWrapper>
  );
};
export default LoadingDots;
