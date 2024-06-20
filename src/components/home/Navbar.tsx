import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";
import { NavWrapper, NavHeading, AvatarWrapper } from "./StyledHome";

const getInitials = (name) => {
  const nameArray = name.split(" ");
  if (nameArray.length === 1) return nameArray[0][0];
  return `${nameArray[0][0]}${nameArray[1][0]}`;
};

const Navbar = () => {

  return (
    <div>
      <NavWrapper>
        <NavHeading>Admin, Dashboard</NavHeading>
        <AvatarWrapper>
         <Avatar/>
        </AvatarWrapper>
      </NavWrapper>
    </div>
  );
};

export default Navbar;
