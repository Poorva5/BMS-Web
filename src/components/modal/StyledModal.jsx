import { styled } from "@mui/material";
import { textColor } from "../../common/colors";
import TextField from "@mui/material/TextField";

export const StyledModalTitle = styled("div")(() => ({
  fontSize: "20px",
  fontWeight: 600,
  color: textColor.blackLight,
  padding: "20px 0px",
}));

export const StyledModalButtons = styled("div")(
  ({ backgroundColor = textColor.lightBrown }) => ({
    border: "1px solid #272727",
    borderRadius: "70px",
    padding: "10px 50px",
    backgroundColor: backgroundColor,
    cursor: 'pointer',
    margin: "20px 0px",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  })
);

export const StyledTextField = styled(TextField)(() => ({
    width: "400px",
    margin: "5px 0px 20px 0px",
  }));