import React from 'react';
import styled from 'styled-components';
import { newHotspot } from '../../actions/hotspotActions';
import { useSelector, useDispatch } from 'react-redux'

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

const HotspotsContainer = ({ hotspotList }) => (
  <>
    {hotspotList.map(hotspot => {
      const { positY, positX } = hotspot;
      return (
        <Spot
          key={hotspot.name}
          verticalPosit={positY}
          horizontalPosit={positX}
        />
      )
    })}
  </>
)

const hotspotCapture = (event, toggleCapture, dispatch, hotspotList) => {
  event.preventDefault();  
  dispatch(newHotspot(event, hotspotList));
  toggleCapture()
}

const Capture = ({ show, children, onCapture }) => {
const hotspotList = useSelector(state => state.hotspots);
const dispatch = useDispatch();


  return (
    <>
      {show 
      ? (
        <CaptureOverlay show={show} onClick={e => hotspotCapture(e, onCapture, dispatch, hotspotList)}>
          <HotspotsContainer hotspotList={hotspotList} />
          {children}
        </CaptureOverlay>
      )
      : (
        <div>
          <HotspotsContainer hotspotList={hotspotList} />
          {children}
        </div>
      )}
    </>
  );
}

export default Capture;