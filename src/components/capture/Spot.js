import React, { useState } from 'react';
import styled from 'styled-components';

import { updateSpots} from '../../actions/hotspotActions';
import SpotPopover from './Popover';

const SpotContainer = styled.div`
  position: absolute;
  top: ${({ verticalPosit }) => `${verticalPosit}px`};
  left: ${({ horizontalPosit }) => `${horizontalPosit}px`};
  display: ${({ verticalPosit, horizontalPosit }) => verticalPosit && horizontalPosit ? 'flex' : 'none'};
`;

const Circle = styled.div`
  position: relative;
  background-color: #FFF; 
  border: 1px solid red;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  opacity: 0.8;
`
const Pin = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
  background-color: red;
  border-radius: 50%;
  width: 80%;
  height: 80%;
  opacity: 0.8;
`;

const Spot = ({
  verticalPosit,
  horizontalPosit,
  spotIndex,
  hotspotList,
  title,
  message,
  opened,
 }) => {
  const [isOpen, setOpen] = useState(opened || false);
  const updateOpenedState = () => {
    if (!hotspotList[spotIndex].title && !hotspotList[spotIndex].message) return setOpen(false);
    const updatedState = Object.assign(
      {...hotspotList[spotIndex]}, 
      { openedPopover: false });
    setOpen(false);
    updateSpots(updatedState, spotIndex);
  };
  return (
    <SpotPopover
      isPopoverOpen={isOpen}
      outSideClick={() => updateOpenedState()}
      title={title}
      message={message}
    >
      <SpotContainer
        verticalPosit={verticalPosit}
        horizontalPosit={horizontalPosit}
        onClick={() => setOpen(!isOpen)}
      >
        <Circle>
          <Pin />
        </Circle>
      </SpotContainer>
    </SpotPopover>
  );
};

export default Spot;