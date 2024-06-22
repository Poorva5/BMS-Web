import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import { fetchBookings } from '../../store/slices/bookingSlice';

const BookingCard = styled (Card) (({theme}) => ({
  width: 300,
  boxShadow: 'none',
  borderRadius: '0px',
  border: '1px solid #e5ecf6',
  margin: theme.spacing (2), // Adjust margin as needed
  [theme.breakpoints.down ('sm')]: {
    width: '100%',
  },
}));

const BookingMedia = styled (CardMedia) ({
  height: 200,
  objectFit: 'cover', // Ensure the image covers the entire media area
});
const BookingContainer = styled ('div') ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  justifyContent: 'start',
});

const BookingContent = () => {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.booking.bookings)

  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch]);

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '30px'}}>
    <Box sx={{ marginTop: "20px", width: "100%" }}>
      <BookingContainer>
      {bookings.map((booking, index) => {
            const imageUrl = booking.hotel.images.length > 0 ? booking.hotel.images[0].image : 'https://via.placeholder.com/300x200';
            return (
              <BookingCard key={index}>
                <BookingMedia
                  component="img"
                  image={imageUrl}
                  alt={booking.hotel.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" >
                    {booking.hotel.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {booking.check_in_date} to {booking.check_out_date}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {booking.room_type.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ color: 'purple'}}>
                    {booking.cost}
                  </Typography>
                </CardContent>
              </BookingCard>
            );
          })}
      </BookingContainer>
    </Box>
    </div>
  );
};

export default BookingContent;
