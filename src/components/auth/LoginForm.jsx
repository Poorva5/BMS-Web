import React from 'react';
import { StyledFormContainer, StyledSpaceBetween } from "./StyledAuth";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import {
  StyledFormGroup,
  StyledHeading,
  StyledLabel,
  StyledAsterisk,
  StyledButton,
  StyleSubHeading,
} from "./StyledAuth";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from '../../store/slices/authSlice';

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().min(8).max(14).required(),
});

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(login(data, navigate));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        height: "100vh",
        background:
          "linear-gradient(345deg, rgba(255,102,102,1) 0%, rgba(255,153,153,1) 50%, rgba(255,204,204,1) 100%)",
      }}
    >
      <StyledFormContainer>
        <div>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <StyledHeading>Intrepid</StyledHeading>
            <StyleSubHeading>Admin Login</StyleSubHeading>

            <StyledFormGroup>
              <StyledLabel htmlFor="username">
              Username <StyledAsterisk className="text-alert">*</StyledAsterisk>
              </StyledLabel>
              <Controller
                name="username"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    type="text"
                    fullWidth
                    {...field}
                    placeholder={"Enter Username here"}
                    size="small"
                    error={!!errors.username}
                    helperText={errors.username ? errors.username?.message : ""}
                    value={field.value}
                    sx={{
                      "& legend": { display: "none" },
                      "& fieldset": { top: 0 },
                    }}
                  />
                )}
              />
            </StyledFormGroup>
            <StyledFormGroup>
              <StyledSpaceBetween>
                <StyledLabel htmlFor="password">
                  Password{" "}
                  <StyledAsterisk className="text-alert">*</StyledAsterisk>
                </StyledLabel>
              </StyledSpaceBetween>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    type="password"
                    fullWidth
                    {...field}
                    placeholder={"Enter password here"}
                    size="small"
                    error={!!errors.password}
                    helperText={errors.password ? errors.password?.message : ""}
                    value={field.value}
                    sx={{
                      "& legend": { display: "none" },
                      "& fieldset": { top: 0 },
                    }}
                  />
                )}
              />
            </StyledFormGroup>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <StyledButton type="submit">Submit</StyledButton>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "20px 0px",
                  cursor: "pointer",
                }}
              >
                Forgot your password ?
              </div>
            </div>
          </form>
        </div>
      </StyledFormContainer>
    </div>
  );
};

export default LoginForm;
