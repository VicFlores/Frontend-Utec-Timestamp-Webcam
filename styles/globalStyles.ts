import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: 23px;
  align-self: center;
  justify-self: center;
`;

export const Span = styled.span`
  font-size: 17px;
  align-self: center;
  justify-self: center;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  background-color: #ede4e0;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const WebcamContainer = styled.div`
  text-align: center;
  width: 640px;
  height: 488px;
  border: 2px solid #3c4048;
  align-self: center;
  justify-self: center;
`;

export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CanvasContainer = styled.canvas`
  position: absolute;
`;
