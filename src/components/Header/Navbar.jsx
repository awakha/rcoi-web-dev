import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const menuItems = [
  { name: "Главная", path: "/" },
  { name: "Новости", path: "/news" },
  { name: "Документы", path: "/documents" },
  { name: "ГИА-9", path: "/gia9" },
  { name: "ГИА-11", path: "/gia11" },
  { name: "О нас", path: "/about" },
  { name: "Контакты", path: "/contacts" },
];
function Navbar() {
  return (
    <nav>
      <ul>
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navbar;
