import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchStats } from "../../store/slices/bookingSlice";
import {
  StyledHomeCardWrapper,
  CardWrapper,
  StyledCardImage,
  StyledCardName,
  StyledCardValue,
} from "./StyledHome";


const HomeCards = () => {
  const dispatch = useDispatch();
  const stats = useSelector((state)  => state.booking.stats)

  useEffect(() => {
    dispatch(fetchStats());
  }, [dispatch]);

  return (
    <StyledHomeCardWrapper>
      <CardWrapper>
        <div>
          <StyledCardValue>{stats.new_bookings_under_2_days}</StyledCardValue>
          <StyledCardName>New Bookings</StyledCardName>
        </div>
      </CardWrapper>

      <CardWrapper backgroundColor="#539fe7">
        <div>
          <StyledCardValue>{stats.total_users}</StyledCardValue>
          <StyledCardName>Happy Users</StyledCardName>
        </div>
      </CardWrapper>

      <CardWrapper backgroundColor="#6854e6">
        <div>
          <StyledCardValue>{stats.total_employees}</StyledCardValue>
          <StyledCardName>Employees</StyledCardName>
        </div>
      </CardWrapper>

      <CardWrapper backgroundColor="#3cc88d">
        <div>
          <StyledCardValue>{stats.total_hotels}</StyledCardValue>
          <StyledCardName>Hotels Listed</StyledCardName>
        </div>
      </CardWrapper>
    </StyledHomeCardWrapper>
  );
};

export default HomeCards;
