import { styled } from "@mui/material";
import { textColor } from "../../common/colors";

export const StyledAppLogo = styled("div")(() => ({
  fontSize: "30px",
  color: textColor.fonts,
  padding: "20px",
  fontWeight: 500,
}));

export const StyledLogoutButton = styled("div")(() => ({
  fontSize: "20px",
  color: textColor.fonts,
  padding: "100px 30px",
  fontWeight: 500,
}));



export const NavWrapper = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  padding: "30px 30px 30px 30px",
  marginTop: "-20px",
  boxShadow: "none",
  width: "100%",
  background: textColor.lightGrey,
}));

export const NavHeading = styled("div")(() => ({
  color: textColor.black,
  fontSize: "24px",
  fontWeight: 600,
}));

export const StyledHomeCardWrapper = styled("div")(() => ({
  display: "flex",
  width: "100%",
  padding: "30px 30px",
  justifyContent: "space-between",
}));

export const CardWrapper = styled("div")(({ backgroundColor="#e85c53"}) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 25px",
  border: "1px solid #DFE0EB",
  borderRadius: "0px",
  margin: "0px 20px",
  width: '180px',
  backgroundColor: backgroundColor
}));

export const StyledCardImage = styled("img")(() => ({
  height: "57px",
  width: "60px",
}));

export const StyledCardName = styled("div")(() => ({
  fontSize: "15px",
  color: textColor.white,
  fontWeight: 700,
  paddingTop: '10px'
}));

export const StyledCardValue = styled("div")(() => ({
  fontSize: "26px",
  color: textColor.white,
  fontWeight: 700,
}));


export const AvatarWrapper = styled("div")(() => ({
  marginLeft: '950px',
  cursor: 'pointer'
}));

export const StyledGraphContainer = styled("div")(() => ({
  border: "1px solid #DFE0EB",
  borderRadius: "8px",
  padding: "30px",
  margin: "30px -10px 50px 50px",
}));

export const StyledGraphTitle = styled("div")(() => ({
  fontSize: "18px",
  color: textColor.greyBlack,
  fontWeight: 700,
}));

export const StyledGraphDateTime = styled("div")(
  ({ paddingBottom = "50px" }) => ({
    fontSize: "12px",
    color: textColor.lightGrey,
    fontWeight: 400,
    paddingTop: "8px",
    paddingBottom: paddingBottom,
  })
);

export const StyledRecordCardWrapper = styled("div")(() => ({
  border: "1px solid #DFE0EB",
  padding: "30px",
  borderRadius: "8px",
  margin: "30px 50px",
  width: "400px",
}));

export const FlexSB = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const FlexC = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const VDButton = styled("div")(() => ({
  color: "#AF8473",
  fontSize: "14px",
  fontWeight: 600,
}));

export const StyledRecordKey = styled("div")(() => ({
  color: textColor.greyBlack,
  fontSize: "14px",
  fontWeight: 600,
  cursor: "pointer",
}));

export const StyledRecordValue = styled("div")(() => ({
  color: textColor.lightGrey,
  fontSize: "14px",
  fontWeight: 600,
}));

export const StyledHeading = styled("div")(() => ({
  display: "flex",
  justifyContent: "start",
  fontSize: "20px",
  paddingLeft: "35px",
  fontWeight: 500,
}));

export const StyledAddButton = styled("div")(() => ({
  display: 'flex',
  justifyContent: 'end',
  fontSize: '18px',
  fontWeight: 400,
  cursor: 'pointer',
  border: '1px solid #000000',
  padding: '5px 10px',
  borderRadius: '70px'

}));
