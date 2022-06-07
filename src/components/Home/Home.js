import React from "react";
import { Box, Button } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <Button
        size="large"
        variant="contained"
        onClick={() =>
          (window.location.href =
            "https://www.linkedin.com/in/arshia-kolachaei-sabet-507776227/")
        }
      >
        LinkedIn
      </Button>
    </Box>
  );
};

export default Home;
