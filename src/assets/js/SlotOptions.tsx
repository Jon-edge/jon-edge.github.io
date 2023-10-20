import React from 'react';
import styled from 'styled-components';

const SlotOptions = () => {
  const SlotOptionsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
  `;

  const SlotOptionRadio = styled.input`
    display: none;
  `;

  const SlotOptionLabel = styled.label`
    display: inline-block;
    border: 2px;
    appearance: none;
    @include shadow('large') border-radius: 0.625rem;
    background-color: none;
    color: $color-button-text;
    padding: 1rem 0.625rem;
    font-size: 1.75rem;
    line-height: 1.75rem;
    font-weight: 700;
    font-family: inherit;
    text-decoration: none;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    outline: $color-button-default-background;
    
    &:hover {
      background-color: $color-button-default-hover-background;
    }

    &:checked {
      background-color: $color-button-default-background;
    }
  `;

  return (
    <SlotOptionsContainer>
      <SlotOptionRadio type="radio" id="option1" name="slotOption" value="radio_devqa" />
      <SlotOptionLabel htmlFor="option1">Dev/QA</SlotOptionLabel>

      <SlotOptionRadio type="radio" id="option2" name="slotOption" value="radio_ops" />
      <SlotOptionLabel htmlFor="option2">Ops</SlotOptionLabel>

      <SlotOptionRadio type="radio" id="option3" name="slotOption" value="radio_allcompany" />
      <SlotOptionLabel htmlFor="option3">All Company</SlotOptionLabel>
    </SlotOptionsContainer>
  );
};

export default SlotOptions;