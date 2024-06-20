import React, { useEffect } from "react";
import {
  StyledHomeCardWrapper,
  CardWrapper,
  StyledCardImage,
  StyledCardName,
  StyledCardValue,
} from "./StyledHome";


const HomeCards = () => {

  return (
    <StyledHomeCardWrapper>
      <CardWrapper>
        <div>
          <StyledCardValue>100</StyledCardValue>
          <StyledCardName>New Bookings</StyledCardName>
        </div>
      </CardWrapper>

      <CardWrapper backgroundColor="#539fe7">
        <div>
          <StyledCardValue>200</StyledCardValue>
          <StyledCardName>Happy Users</StyledCardName>
        </div>
      </CardWrapper>

      <CardWrapper backgroundColor="#6854e6">
        <div>
          <StyledCardValue>300</StyledCardValue>
          <StyledCardName>Employees</StyledCardName>
        </div>
      </CardWrapper>

      <CardWrapper backgroundColor="#3cc88d">
        <div>
          <StyledCardValue>400</StyledCardValue>
          <StyledCardName>Hotels Listed</StyledCardName>
        </div>
      </CardWrapper>
    </StyledHomeCardWrapper>
  );
};

export default HomeCards;
