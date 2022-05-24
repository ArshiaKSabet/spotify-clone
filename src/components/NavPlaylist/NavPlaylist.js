import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavPlaylist = ({ name, id }) => {
  const navigate = useNavigate();
  return (
    <Box
      onClick={() => {
        navigate(`/playlist/${id}`);
      }}
      px={3}
      py={1}
      sx={{
        color: "text.secondary",
        cursor: "pointer",
        fontSize: 14,
        "&:hover": { color: "text.primary" },
      }}
    >
      {name}
    </Box>
  );
};

export default NavPlaylist;
