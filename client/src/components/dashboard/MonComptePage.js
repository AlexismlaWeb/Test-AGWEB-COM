import React, { useEffect, useState } from "react";
import { LoremIpsum } from "react-lorem-ipsum";

import "../../App.css";

import { Typography, Grid } from "@mui/material";

function MonComptePage(props) {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    if (props.userInfos) setUserInfo(props.userInfos);
  }, []);

  return (
    <Grid
      width={"80vw"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-evenly"}
      height={"100vh"}
      flexDirection={"column"}
    >
      <h2>MON COMPTE</h2>
      <Grid
        container
        width={"90%"}
        height={"50%"}
        justifyContent={"space-between"}
        marginBlock={"2%"}
      >
        <Grid
          width={"60%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Grid className="box_shadow" flexDirection={"column"} height={"45%"}>
            <div>
              <Typography>Bienvenue</Typography>
            </div>
            <div>
              <Typography color={"#6db040"} fontWeight={"900"}>
                {userInfo && userInfo.username ? userInfo.username : null}
              </Typography>
            </div>
          </Grid>
          <Grid
            container
            width={"100%"}
            height={"45%"}
            justifyContent={"space-between"}
          >
            <Grid item className="box_shadow" width={"45%"}>
              <Typography color={"#6db040"} fontWeight={"900"}>
                {userInfo && userInfo.username
                  ? userInfo.username
                  : "Lorem ipsum"}
              </Typography>
            </Grid>
            <Grid item className="box_shadow" width={"45%"}>
              <Typography color={"#6db040"} fontWeight={"900"}>
                Lorem ipsum
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid width={"35%"} height={"100%"} className="box_shadow_green">
          <Typography color={"white"} fontWeight={"900"} fontSize={"1.5rem"}>
            Lorem ipsum
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default MonComptePage;
