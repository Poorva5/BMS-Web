import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Select, MenuItem } from "@mui/material";
import { FlexC } from "../home/StyledHome";
import { StyledModalTitle, StyledModalButtons, StyledTextField } from "./StyledModal";
import { textColor } from "../../common/colors";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "1px solid #272727",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};

const UpdatePackageModal = ({
  open,
  handleClose,
  width = 400,
  height = "auto",
  createMode,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [accessType, setAccessType] = useState("ADMIN");

  const handleChange = (event) => {
    setAccessType(event.target.value);
  };

  const handleSave = () => {
    handleClose(); 
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...style, width, height }}>
        <FlexC>
          <StyledModalTitle>
            {createMode ? "Create Team Member" : "Edit Team Member Details"}
          </StyledModalTitle>
          <div>Name</div>
          <StyledTextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div>Email</div>
          <StyledTextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div>Role</div>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={accessType}
            size="small"
            onChange={handleChange}
          >
            <MenuItem value="ADMIN">ADMIN</MenuItem>
            <MenuItem value="MANAGER">MANAGER</MenuItem>
          </Select>
          <StyledModalButtons onClick={handleSave}>
            {createMode ? "Create" : "Save"}
          </StyledModalButtons>
        </FlexC>
      </Box>
    </Modal>
  );
};

export default UpdatePackageModal;
