import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function HotelsTable({hotels}) {
  const getRowStyle = (index) => {
    return index % 2 === 0 ? { backgroundColor: '#f5f9ff' } : { backgroundColor: '#fcfdff' };
  };

  return (
    <TableContainer
      component={Paper}
      sx={{boxShadow: 'none', border: '1px solid #f4f4f9'}}
    >
      <Table sx={{minWidth: 650, boxShadow: 'none'}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left" sx={{ borderBottom: 'none'}}>Hotel Name</TableCell>
            <TableCell align="left" sx={{ borderBottom: 'none'}}>Address</TableCell>
            <TableCell align="left" sx={{ borderBottom: 'none'}}>Phone</TableCell>
            <TableCell align="left" sx={{ borderBottom: 'none'}}>Email</TableCell>
            <TableCell align="left" sx={{ borderBottom: 'none'}}>Website</TableCell>
            <TableCell align="left" sx={{ borderBottom: 'none'}}>No. of Rooms</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {hotels.map ((hotel, index) => (
            <TableRow
              key={hotel.id}
              sx={{'&:last-child td, &:last-child th': {border: 0}, ...getRowStyle(index)}}
            >
              <TableCell sx={{ borderBottom: 'none'}}>
                <div style={{display: 'flex', padding: '0px 10px'}}>
                  <div>
                    {hotel.images.length > 0 &&
                      <img
                        src={hotel.images[0].image}
                        alt={hotel.name}
                        style={{width: '60px', height: '60px'}}
                      />}
                  </div>
                  <div style={{ padding: '0px 0px 0px 20px', fontSize: '15px', fontWeight: 500, letterSpacing: '0.5px'}}>
                    {hotel.name}
                  </div>
                </div>
              </TableCell>
              <TableCell sx={{ borderBottom: 'none'}}>{hotel.address}</TableCell>
              <TableCell sx={{ borderBottom: 'none'}}>{hotel.phone}</TableCell>
              <TableCell sx={{ borderBottom: 'none'}}>{hotel.email}</TableCell>
              <TableCell sx={{ borderBottom: 'none'}}>{hotel.website}</TableCell>
              <TableCell sx={{ borderBottom: 'none'}}>{hotel.number_of_rooms}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
