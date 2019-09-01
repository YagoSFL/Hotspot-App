import React from 'react';
import styled from 'styled-components';

import Spot from './Spot';

const CaptureOverlay = styled.div`
  width: 100%;
  height: 100%:
  background-color: transparent;
  ${({ show }) => show && `
    li:hover, button:hover, hr:hover, img:hover, a:hover {
      border: 1px solid red;
      background-color: red;
      opacity: 0.3;
      cursor: pointer;
    }
  `}
`;

let spotX = null;
let spotY = null;

const hotspotCapture = (event, callback) => {
  spotX = event.clientX;
  spotY = event.clientY;
  callback()
}

const Capture = ({ show, children, onCapture }) => (
  <>
    {show 
    ? (
      <CaptureOverlay show={show} onClick={e => hotspotCapture(e, onCapture)}>
        {children}
      </CaptureOverlay>
    )
    : (
      <div>
        <Spot verticalPosit={spotY} horizontalPosit={spotX} />
        {children}
      </div>
    )}
  </>
);

export default Capture;