import React from 'react';
import Popover, { ArrowContainer } from 'react-tiny-popover'
import styled from 'styled-components';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux'

import { saveTexts, getHotspotList } from '../../actions/hotspotActions'
import Title from '../elements/Title';
import Message from '../elements/Message';
import Input from '../elements/Input';

const BallonContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Helvetica;
  font-size: 18px;
  background-color: #fff;
  color: #a8aaad;
  box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.3);
  padding: 10px;
  border-radius: 5px;
  max-width: 500px;
  
`;
 
const SpotPopover = ({
  children,
  isPopoverOpen,
  outSideClick,
  title,
  message,
}) => {
  const dispatch = useDispatch()

  return (
    <Popover
      isOpen={isPopoverOpen}
      position={'bottom'}
      containerStyle={{ overflow: 'inherit' }}
      onClickOutside={outSideClick}
      content={({ position, targetRect, popoverRect }) => (
        <ArrowContainer
          position={position}
          targetRect={targetRect}
          popoverRect={popoverRect}
          arrowColor="white"
          arrowSize={10}
        >
          <BallonContainer>
            <Formik
              initialValues={{ title: '', message: '' }}
              onSubmit={values => {
                dispatch(saveTexts(values))
                dispatch(getHotspotList());
              }}
              
              render={({
                values,
                handleSubmit,
                handleChange,
              }) => (
                <form onSubmit={handleSubmit}>
                  {title
                    ? <Title>{title}</Title>
                    : (
                      <Input
                        name="title"
                        label="Title:"
                        onChange={handleChange}
                        value={values.title}
                      />
                    )}
                  {message
                    ? <Message>{message}</Message>
                    : (
                      <Input
                        name="message"
                        label="Message:"
                        onChange={handleChange}
                        value={values.message}
                      />
                    )}
                  {!(title && message) && <button type="submit">Save</button>}
                </form>
              )}
            />
          </BallonContainer>
        </ArrowContainer>
      )}
    >
      {children}
    </Popover>
  );
};

export default SpotPopover;
