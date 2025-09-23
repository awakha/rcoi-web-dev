import { Box } from "@mui/material";
import headerBg from "../../assets/images/header-bg.png";
import Navbar from "./Navbar";
import About from "../../pages/About";
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
        alignItems: "flex-start", // по верхнему краю
        justifyContent: "center",
        pt: "20px", // небольшой верхний отступ, если нужно
        gap: "60px", // фиксированный промежуток между логотипом и Navbar
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
