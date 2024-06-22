import { styled } from "@mui/material";

export const StyledEditIconWrapper = styled("div")(
  ({ backgroundColor = "#51AECC" }) => ({
    padding: "5px",
    backgroundColor: backgroundColor,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px 2px",
    cursor: 'pointer'
  })
);