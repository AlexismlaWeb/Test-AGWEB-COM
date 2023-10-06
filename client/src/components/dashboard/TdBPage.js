import React, { useEffect, useState } from "react";
import { LoremIpsum } from "react-lorem-ipsum";

import "../../App.css";

import { Typography, Grid } from "@mui/material";

function TdBPage(props) {
  const [userInfo, setUserInfo] = useState([]);
  const data = [
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra accumsan eros at pharetra. Mauris porta sollicitudin neque, non ornare nibh faucibus in. Suspendisse viverra vel dolor vel vestibulum. Pellentesque mattis lacinia aliquam. Maecenas vehicula facilisis augue et dapibus. Aenean quam erat, vestibulum a aliquam vel, blandit ac metus. Vivamus auctor lacus lacus, in semper turpis auctor vel. Donec lacinia tempus lectus, a lobortis nunc dictum et.",
      date: "27 mars 2023",
      auteur: "Lorem ipsum dolor sit amet",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra accumsan eros at pharetra. Mauris porta sollicitudin neque, non ornare nibh faucibus in. Suspendisse viverra vel dolor vel vestibulum. Pellentesque mattis lacinia aliquam. Maecenas vehicula facilisis augue et dapibus. Aenean quam erat, vestibulum a aliquam vel, blandit ac metus. Vivamus auctor lacus lacus, in semper turpis auctor vel. Donec lacinia tempus lectus, a lobortis nunc dictum et.",
      date: "27 mars 2023",
      auteur: "Lorem ipsum dolor sit amet",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra accumsan eros at pharetra. Mauris porta sollicitudin neque, non ornare nibh faucibus in. Suspendisse viverra vel dolor vel vestibulum. Pellentesque mattis lacinia aliquam. Maecenas vehicula facilisis augue et dapibus. Aenean quam erat, vestibulum a aliquam vel, blandit ac metus. Vivamus auctor lacus lacus, in semper turpis auctor vel. Donec lacinia tempus lectus, a lobortis nunc dictum et.",
      date: "27 mars 2023",
      auteur: "Lorem ipsum dolor sit amet",
    },
  ];

  useEffect(() => {
    if (props.userInfos) setUserInfo(props.userInfos);
  }, []);

  const mapData = data.map((element, index) => {
    return (
      <Grid
        key={index}
        className="box_shadow"
        backgroundColor={"white"}
        width={"100%"}
        height={"30vh"}
        flexDirection={"column"}
        marginBottom={"2%"}
      >
        <div style={{ fontSize: "small", width: "90%" }}>
          <h5 style={{ color: "#6db040" }}>{element.title}</h5>
          <div>
            <p>{element.body}</p>
          </div>
          <div>
            <p style={{ fontStyle: "italic" }}>{element.auteur}</p>
          </div>
          <div>
            <p style={{ opacity: "0.5" }}>{element.date}</p>
          </div>
        </div>
      </Grid>
    );
  });

  return (
    <Grid
      width={"80vw"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"100vh"}
      flexDirection={"column"}
    >
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
                {userInfo !== "pas de token" ? userInfo.username : null}
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
                Lorem ipsum
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
          <Grid>{mapData}</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default TdBPage;
