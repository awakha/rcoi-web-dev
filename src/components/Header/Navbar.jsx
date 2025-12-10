import { Box, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

const menuItems = [
  { name: 'Главная', path: '/' },
  // { name: "Новости", path: "/news" },
  { name: 'Документы', path: '/documents' },
  { name: 'ГИА-9', path: '/gia9' },
  { name: 'ГИА-11', path: '/gia11' },
  { name: 'О нас', path: '/about' },
  { name: 'Контакты', path: '/contacts' },
];

function Navbar() {
  return (
    <Box
      component="nav"
      sx={{
        display: 'flex',
        gap: '40px',
        listStyle: 'none',
        pt: 4.3,
        m: 0,
      }}>
      {menuItems.map((item) => (
        <MuiLink
          key={item.path}
          component={Link}
          to={item.path}
          underline="none"
          color="white"
          sx={{ fontSize: '18px', fontWeight: 500 }}>
          {item.name}
        </MuiLink>
      ))}
    </Box>
  );
}

export default Navbar;
