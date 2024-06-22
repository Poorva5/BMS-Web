import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StyledEditIconWrapper } from './StyledTable';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { textColor } from "../../common/colors";
import UpdatePackageModal from '../modal/UpdatePackageModal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPackageById } from '../../store/slices/packageSlice';

export default function PackagesTable({packages}) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedPackage, setSelectedPackage] = React.useState(null);
  const singlePackage = useSelector((state) => state.package.singlePackage);

  const openModal = (packageData) => {
    setSelectedPackage(packageData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPackage(null);
    setIsModalOpen(false);
  };

  const handleCellClick = (packageId) => {
    dispatch(fetchPackageById(packageId));
  };

  const getRowStyle = (index) => {
    return index % 2 === 0 ? { backgroundColor: '#f5f9ff' } : { backgroundColor: '#fcfdff' };
  };

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{boxShadow: 'none', border: '1px solid #f4f4f9'}}
      >
        <Table sx={{minWidth: 650, boxShadow: 'none'}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={{ borderBottom: 'none'}}>Package Name</TableCell>
              <TableCell align="left" sx={{ borderBottom: 'none'}}>Total Bookings</TableCell>
              <TableCell align="left" sx={{ borderBottom: 'none'}}>Duration</TableCell>
              <TableCell align="left" sx={{ borderBottom: 'none'}}>Price/head</TableCell>
              <TableCell align="left" sx={{ borderBottom: 'none'}}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {packages.map ((package_data, index) => (
              <TableRow
                key={package_data.id}
                sx={{'&:last-child td, &:last-child th': {border: 0}, ...getRowStyle(index)}}
                onClick={() => handleCellClick(package_data.id)}
              >
                <TableCell sx={{ borderBottom: 'none'}}>
                  <div style={{display: 'flex', padding: '0px 10px'}}>
                    <div>
                      {package_data.images.length > 0 &&
                        <img
                          src={package_data.images[0].image}
                          alt={package_data.name}
                          style={{width: '60px', height: '60px'}}
                        />}
                    </div>
                    <div style={{ padding: '0px 0px 0px 20px', fontSize: '15px', fontWeight: 500, letterSpacing: '0.5px'}}>
                      {package_data.name}
                    </div>
                  </div>
                </TableCell>
                <TableCell sx={{ borderBottom: 'none'}}>{package_data.total_bookings}</TableCell>
                <TableCell sx={{ borderBottom: 'none'}}>{package_data.duration}</TableCell>
                <TableCell sx={{ borderBottom: 'none'}}>{package_data.cost}</TableCell>
                <TableCell>
                  <div style={{ display: "flex" }}>
                      <StyledEditIconWrapper onClick={() => openModal(package_data)}>
                        <EditIcon
                          sx={{ color: textColor.white, fontSize: "15px" }}
                        />
                      </StyledEditIconWrapper>
                    <StyledEditIconWrapper backgroundColor="#D44242">
                      <DeleteIcon
                        sx={{ color: textColor.white, fontSize: "15px" }}
                      />
                    </StyledEditIconWrapper>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {selectedPackage && (
        <UpdatePackageModal
          open={isModalOpen}
          handleClose={closeModal}
          packageData={selectedPackage}
          createMode={false}
        />
      )}
    </>
  );
}
