import { Box } from "@mui/material";
import headerBg from "../../assets/images/header-bg.png";
import Navbar from "./Navbar";

import logo from "../../assets/images/logo.svg";

function Header() {
  return (
    <Box
      sx={{
        height: 650,
        width: "100%",
        backgroundImage: `url(${headerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        pt: "20px",
        gap: "60px",
      }}
    >
      <Box
        component="img"
        src={logo}
        alt="Logo"
        sx={{ width: 120, height: "auto" }}
      />
      <Navbar />
    </Box>
  );
}

export default Header;
