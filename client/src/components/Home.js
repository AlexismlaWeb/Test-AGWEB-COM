import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import TdBPage from "./dashboard/TdBPage";
import MonComptePage from "./dashboard/MonComptePage";
import MesProjetsPage from "./dashboard/MesProjetsPage";
import "../App.css";

function HomePage() {
  const location = useLocation();
  const [userInfo, setUserInfo] = useState({});
  const [menuSelected, setMenuSelected] = useState("Tableau de bord");
  const navigate = useNavigate();
  useEffect(() => {
    if (location.state) {
      const profilInfoUser = async () => {
        const data = await fetch("/users/userInfoByToken/" + location.state);
        const body = await data.json();
        if (body.result) {
          setUserInfo(body);
        }
      };
      profilInfoUser();
    }
    if (!location.state) {
      navigate("/");
    }
  });

  const handleClick = (nameDiv) => {
    setMenuSelected(nameDiv);
  };

  const isSelected = (nameDiv) => {
    return menuSelected === nameDiv ? "selected" : "";
  };

  return (
    <Grid height={"100vh"} display={"flex"} flexDirection={"row"}>
      <Grid
        item
        xs={3}
        className="menu_left_side"
        width={"20vw"}
        height={"100vh"}
      >
        <Typography
          variant="h4"
          align="center"
          fontWeight={"800"}
          className="title_home"
        >
          NewProject
        </Typography>
        <Grid
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          flexDirection={"column"}
          width={"100%"}
          height={"30%"}
        >
          <Grid
            className={`menu_items ${isSelected("Tableau de bord")}`}
            onClick={() => {
              handleClick("Tableau de bord");
            }}
          >
            <h5>Tableau de bord</h5>
          </Grid>
          <Grid
            className={`menu_items ${isSelected("Mes projets")}`}
            onClick={() => {
              handleClick("Mes projets");
            }}
          >
            <h5>Mes projets</h5>
          </Grid>
          <Grid
            className={`menu_items ${isSelected("Mon compte")}`}
            onClick={() => {
              handleClick("Mon compte");
            }}
          >
            <h5>Mon compte</h5>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={9}>
        {menuSelected === "Tableau de bord" ? (
          <TdBPage
            userInfos={userInfo.result ? userInfo.userInfo : "pas de token"}
          />
        ) : null}{" "}
        {menuSelected === "Mon compte" ? (
          <MonComptePage
            userInfos={userInfo.result ? userInfo.userInfo : "pas de token"}
          />
        ) : null}
        {menuSelected === "Mes projets" ? (
          <MesProjetsPage
            userInfos={userInfo.result ? userInfo.userInfo : "pas de token"}
          />
        ) : null}
      </Grid>
    </Grid>
  );
}

export default HomePage;
