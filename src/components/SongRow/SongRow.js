import React from "react";
import { Avatar, Box, Typography, Grid, Skeleton } from "@mui/material";
import { formatTime } from "../../utils/functions";
import { connect } from "react-redux";
import { playSpecifiedSong } from "../../store/actions/index";

const SongRow = ({
  images,
  title,
  artist,
  album,
  duration,
  i,
  loading,
  spotifyApi,
  contextUri,
  position,
  playSpecifiedSong,
}) => {
  const image = images?.length > 0 ? images[0] : null;

  const onRowClick = async () => {
    const song = {
      context_uri: contextUri,
      offset: { position },
      position_ms: 0,
      title,
      image: image ? image : {},
      artist,
      duration,
      position,
    };
    await playSpecifiedSong(spotifyApi, song);
  };

  return (
    <Grid
      container
      px={2}
      py={1}
      sx={{
        width: "100%",
        color: "text.secondary",
        fontSize: 14,
        cursor: "pointer",
        "&:hover": { bgcolor: "#F0790030" },
      }}
      onClick={async () => await onRowClick()}
    >
      <Grid
        item
        sx={{ width: 35, display: "flex", alignItems: "center", fontSize: 16 }}
      >
        {i + 1}
      </Grid>
      <Grid
        item
        sx={{ flex: 1, display: "flex", alignItems: "center", gap: 2 }}
      >
        {loading ? (
          <Skeleton variant="rectangular" width={40} height={40} />
        ) : (
          <Avatar src={image?.url} alt={title} variant="square" />
        )}
        <Box ml={1}>
          <Typography sx={{ fontSize: 16, color: "text.primary" }}>
            {loading ? (
              <Skeleton variant="text" width={130} height={24} />
            ) : (
              title
            )}
          </Typography>
          <Typography sx={{ fontSize: 12, color: "text.secondary" }}>
            {loading ? (
              <Skeleton variant="text" width={50} height={18} />
            ) : (
              artist
            )}
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={3}
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
        }}
      >
        {loading ? <Skeleton variant="text" width={50} height={14} /> : album}
      </Grid>
      <Grid
        item
        xs={3}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        {loading ? (
          <Skeleton variant="text" width={50} height={14} />
        ) : (
          formatTime(duration)
        )}
      </Grid>
    </Grid>
  );
};

const mapDispatch = (dispatch) => {
  return {
    playSpecifiedSong: (api, song) => dispatch(playSpecifiedSong(api, song)),
  };
};

export default connect(null, mapDispatch)(SongRow);
