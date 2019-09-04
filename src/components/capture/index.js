import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux'

import Spot from './Spot';
import { getHotspotList } from '../../actions/hotspotActions';
import useFetch from '../../hooks/useFetch';

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

const updateSpotData = (hotspotList, texts, index) => {
  if (!hotspotList[index].title)  {
    const updatedMessage = hotspotList[index].message ? hotspotList[index].message : texts.message;
    const updatedTitle = Object.assign(
      {...hotspotList[index]},
      { title: texts.title, message: updatedMessage });
    const updatedData = Object.assign(
      [...hotspotList], {[index]:
        Object.assign({}, hotspotList[index], updatedTitle)})
    return window.localStorage.setItem('hotspots', JSON.stringify(updatedData));
  }
  if (!hotspotList[index].message) {
    const updatedTitle = hotspotList[index].title ? hotspotList[index].title : texts.title;
    const updatedMessage = Object.assign(
      {...hotspotList[index]}, 
      { title: updatedTitle, message: texts.message})
    const updatedData = Object.assign(
      [...hotspotList], {[index]:
        Object.assign({}, hotspotList[index], updatedMessage)})
    return window.localStorage.setItem('hotspots', JSON.stringify(updatedData));   
  }

  return null;
}

const Hotspots = ({ hotspotList }) => {
  const texts = useSelector(state => state.hotspots.text);
  return (
    <>
      {hotspotList.map((hotspot, index) => {
        const { positY, positX } = hotspot;
        updateSpotData(hotspotList, texts, index);
        
        return (
          <Spot
            key={hotspot.name}
            verticalPosit={positY}
            horizontalPosit={positX}
            title={hotspot.title}
            message={hotspot.message}
            spotIndex={index}
            hotspotList={hotspotList}
            opened={hotspot.openedPopover}
          />
        )
      })}
    </>
  );
} 

const hotspotCapture = (
  event,
  toggleCapture,
  dispatch,
  hotspotList,
) => {
  event.preventDefault();
  const data = {
    name: `Hotspot #${hotspotList.length + 1}`,
    positX: event.clientX,
    positY: event.clientY,
    title: null,
    message: null,
    openedPopover: true,
  };
  hotspotList.push(data);
  window.localStorage.setItem('hotspots', JSON.stringify(hotspotList));  
  dispatch(getHotspotList());
  toggleCapture()
}

const Capture = ({ show, children, onCapture, hotspotList }) => {
  const dispatch = useDispatch();
  useFetch(getHotspotList, dispatch);

  return (
    <>
      {show 
      ? (
        <CaptureOverlay show={show} onClick={e => hotspotCapture(e, onCapture, dispatch, hotspotList)}>
          <Hotspots hotspotList={hotspotList} />
          {children}
        </CaptureOverlay>
      )
      : (
        <div>
          <Hotspots hotspotList={hotspotList} />
          {children}
        </div>
      )}
    </>
  );
}

export default Capture;