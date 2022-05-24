import React, { useState } from "react";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ListIcon from "@mui/icons-material/List";
import { useNavigate } from "react-router-dom";

const MobileNav = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const styledNav = { color: "text.secondary" };

  return (
    <Box sx={{ display: { xs: "block", md: "none" } }}>
      <BottomNavigation
        sx={{ bgcolor: "background.paper" }}
        showLabels
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
      >
        <BottomNavigationAction
          sx={styledNav}
          label="Home"
          icon={<HomeIcon />}
          onClick={() => {
            navigate("/");
          }}
        />
        <BottomNavigationAction
          sx={styledNav}
          label="Sök"
          icon={<SearchIcon />}
          onClick={() => {
            navigate("/search");
          }}
        />
        <BottomNavigationAction
          sx={styledNav}
          lavel="Ditt Bibliotek"
          icon={<ListIcon />}
          onClick={() => {
            navigate("/library");
          }}
        />
      </BottomNavigation>
    </Box>
  );
};

export default MobileNav;
