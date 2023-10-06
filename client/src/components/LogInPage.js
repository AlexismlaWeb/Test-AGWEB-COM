import React, { useState } from "react";
import "../App.css";
import { Navigate, Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import {
  InputLabel,
  Input,
  Container,
  Typography,
  Button,
} from "@mui/material";

function LogInPage() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [error, setError] = useState([]);

  const handleSubmit = async () => {
    const data = await fetch("/users/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `emailFromFront=${formData.email}&passwordFromFront=${formData.password}&usernameFromFront=${formData.username}`,
    });

    const body = await data.json();

    if (body.result) {
      setFormData({ email: "", username: "", password: "" });
      <Navigate to="/home" state={body.token} />;
    } else {
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
          S'inscrire
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
              Adresse mail
            </InputLabel>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input_form"
              placeholder="jean-test@gmail.com"
            />
          </Grid>
          <Grid item className="input_container">
            <InputLabel htmlFor="username" className="input_label">
              Identifiant
            </InputLabel>
            <Input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="maried..."
              className="input_form"
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
              S'inscrire
            </Button>
            <Link to="/">
              <p style={{ fontSize: "10px" }}>Déjà un compte ?</p>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LogInPage;
