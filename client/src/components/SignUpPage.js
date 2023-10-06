import React, { useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import {
  InputLabel,
  Input,
  Container,
  Typography,
  Button,
} from "@mui/material";

function SignUpPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [error, setError] = useState([]);

  const handleSubmit = async () => {
    const data = await fetch("/users/sign-in", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `emailOrUsernameFromFront=${formData.email}&passwordFromFront=${formData.password}`,
    });

    const body = await data.json();

    if (body.result) {
      setFormData({ email: "", username: "", password: "" });
      navigate("/home", { state: body.token });
    } else if (body.error.length > 0) {
      setError(body.error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Container>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        height={"100vh"}
      >
        <Typography variant="h4" align="center" className="main_tittle">
          Se connecter
        </Typography>
        <Grid
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Grid item className="input_container">
            <h5 style={{ color: "red" }}>
              {error.length > 0 ? error[0] : null}
            </h5>
            <InputLabel htmlFor="email" className="input_label">
              Identifiant ou adresse mail
            </InputLabel>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input_form"
              placeholder="maried..."
            />
          </Grid>
          <Grid item className="input_container">
            <InputLabel htmlFor="password" className="input_label">
              Mot de passe
            </InputLabel>
            <Input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="*********"
              className="input_form"
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              className="button"
              onClick={() => handleSubmit()}
            >
              Se connecter
            </Button>
            <Link to="/logIn">
              <p style={{ fontSize: "10px" }}>Pas de compte ?</p>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SignUpPage;
