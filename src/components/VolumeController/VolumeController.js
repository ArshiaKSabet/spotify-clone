import React, { useState } from "react";
import { VolumeDown, VolumeUp, VolumeOff } from "@mui/icons-material";
import { Grid, Stack, Slider } from "@mui/material";

const VolumeController = ({ sliderStyle, spotifyApi }) => {
  const defaultVolume = 40; // deafault value
  const [volume, setVolume] = useState(defaultVolume);

  const handleVolumeChange = async (e, v) => {
    try {
      await spotifyApi.setVolume(v);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Grid
      item
      xs={3}
      sx={{
        display: { xs: "none", md: "flex" },
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
        sx={{ width: 150, color: "text.secondary" }}
      >
        {volume === 0 ? (
          <VolumeOff />
        ) : volume < 50 ? (
          <VolumeDown />
        ) : (
          <VolumeUp />
        )}
        <Slider
          min={0}
          max={100}
          step={1}
          value={volume}
          sx={sliderStyle}
          onChange={(e, v) => setVolume(v)}
          onChangeCommitted={async (e, v) => handleVolumeChange(e, v)}
        />
      </Stack>
    </Grid>
  );
};

export default VolumeController;
