import React, { useEffect, useState } from "react";
import { LoremIpsum } from "react-lorem-ipsum";

import "../../App.css";

import { Typography, Grid } from "@mui/material";

function MesProjetsPage(props) {
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
      <h2>MES PROJETS</h2>
      <Grid
        width={"90%"}
        minHeight={"60%"}
        className="box_shadow_body"
        display={"flex"}
        justifyContent={"center"}
      >
        <Grid width={"90%"} height={"auto"}>
          <LoremIpsum
            p={1}
            avgSentencesPerParagraph={1}
            avgWordsPerSentence={4}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
export default MesProjetsPage;
