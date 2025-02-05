import React, { useRef, useState } from "react";
import { Container } from "./style";
import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link, Span, Wrapper } from "../register/style";
import GenericButton from "../../components/Generic/button";
import { useForm } from "react-hook-form";
import Title from "../../components/Generic/title";
import LoadingBtn from "../../components/loading";
import { toast, ToastContainer } from "react-toastify";

const VerifyPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const verifyHandler = (formData) => {
    setIsLoading(true);
    axios
      .post("https://cars-1-pku7.onrender.com/verify", formData)
      .then((res) => {
        console.log("Success:", res);
        navigate("/");
      })
      .catch((err) => {
        console.error("API Error:", err);
        setIsLoading(false);
        toast.error("Something went wrong", {
          autoClose: 1500,
          position: "top-center",
        });
      });
  };

  return (
    <form onSubmit={handleSubmit(verifyHandler)}>
      <Container>
        <Title size={50} mb={50}>Verification page</Title>
        <FormControl
          sx={{ m: 1, width: "350px", height: 65 }}
          variant="outlined"
          size="small"
        >
          <InputLabel id="email-label">Email</InputLabel>
          <OutlinedInput
            id="email-label"
            labelId="email-label"
            label="Email"
            type="email"
            size="small"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <Title mt={8} size={12} color="red">
              {errors.email.message}
            </Title>
          )}
        </FormControl>

        <FormControl
          sx={{ m: 1, width: "350px", height: 65 }}
          variant="outlined"
          size="small"
        >
          <InputLabel id="code-label">Code</InputLabel>
          <OutlinedInput
            labelId="code-label"
            id="code-label"
            label="Code"
            type="number"
            size="small"
            {...register("code", { required: "Code is reqiured" })}
          />
          {errors.code && (
            <Title mt={8} size={12} color="red">
              {errors.code.message}
            </Title>
          )}
        </FormControl>

        <Wrapper>
          {isLoading ? (
            <LoadingBtn />
          ) : (
            <GenericButton width={350} type="submit">
              Verify
            </GenericButton>
          )}
        </Wrapper>
        <ToastContainer />
      </Container>
    </form>
  );
};

export default VerifyPage;
