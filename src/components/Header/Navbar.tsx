import { Box, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

interface MenuItem {
  name: string;
  path: string;
  exact?: boolean;
}

const menuItems: MenuItem[] = [
  { name: 'Главная', path: '/', exact: true },
  { name: 'Новости', path: '/news' },
  { name: 'Документы', path: '/documents' },
  { name: 'ГИА-9', path: '/gia9' },
  { name: 'ГИА-11', path: '/gia11' },
  { name: 'О нас', path: '/about' },
  { name: 'Контакты', path: '/contacts' },
];

interface NavbarProps {
  className?: string;
}

function Navbar({ className }: NavbarProps) {
  const linkStyle = {
    color: 'white',
    fontSize: '18px',
    fontWeight: 500,
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    '&:hover': {
      color: 'rgba(255, 255, 255, 0.8)',
    },
  } as const;

  return (
    <Box
      component="nav"
      className={className}
      sx={{
        display: 'flex',
        gap: '40px',
        listStyle: 'none',
        pt: 4.3,
        m: 0,
      }}>
      {menuItems.map((item) => (
        <MuiLink key={item.path} component={Link} to={item.path} underline="none" sx={linkStyle}>
          {item.name}
        </MuiLink>
      ))}
    </Box>
  );
}

export default Navbar;
