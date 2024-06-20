import { styled } from "@mui/material";

export const StyledFormGroup = styled("div")`
  width: 350px;
  margin: 0px auto 20px auto;
  text-align: left;
`;

export const StyledLabel = styled("label")`
  font-weight: 300 !important;
  font-size: 14px;
  line-height: 21px;
  color: #2d2d2d;
`;

export const StyledHeading = styled("div")(() => ({
  fontWeight: 600,
  fontSize: "40px",
  lineHeight: "48px",
  color: "#fd2828",
  paddingBottom: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const StyleSubHeading = styled("div")(() => ({
  fontWeight: 400,
  fontSize: "20px",
  color: "#2D2D2D",
  margin: "10px 0px 20px 0px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const StyledSubHeading = styled("p")(({ theme, color = "#6065D8" }) => ({
  fontWeight: 300,
  fontSize: "12px",
  marginBottom: "25px",
  lineHeight: "18px",
  color: "#2D2D2D",
}));

export const StyledAsterisk = styled("span")`
  font-size: 12px;
  color: red;
`;

export const StyledButton = styled("button")(
  ({ theme, color = "#fd2828", width = 350, height = 45 }) => ({
    backgroundColor: color,
    width: width,
    height: height,
    borderRadius: "8px",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
    color: "#ffffff",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
    textTransform: 'uppercase'
  })
);

export const StyledCancelButton = styled("button")(
  ({ theme, color = "white", width = "100%", height = 45 }) => ({
    backgroundColor: color,
    width: width,
    height: height,
    borderRadius: "8px",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
    color: "red",
    cursor: "pointer",
    marginTop: "10px",
    border: "1px solid red",
  })
);

export const StyledSubmitBtn = styled("button")(
  ({ theme, color = "#6065D8", width = 400 }) => ({
    backgroundColor: color,
    width: width,
    height: 50,
    borderRadius: "8px",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
    color: "#FFFFFF",
    border: "none",
    cursor: "pointer",
    marginTop: "50px",
    background: "#6065D8",
    alignSelf: "center",
  })
);

export const StyledFormContainer = styled("div")(() => ({
    background: "#ffffff",
    boxShadow: "0px 0px 50px 1px rgba(0, 0, 0, 0.15)",
    borderRadius: "20px",
    margin: "10px auto",
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px 100px'
}));

export const StyledSpaceBetween = styled("div")(
  ({ theme, color = "#6065D8" }) => ({
    justifyContent: "space-between",
    display: "flex",
  })
);
