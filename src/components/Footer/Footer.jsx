import { CssBaseline, Box, Container, Grid, Typography, Link, Divider } from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import Logo from '../../assets/images/logo.svg';

export default function Footer() {
  const hoverLink = {
    color: 'inherit',
    transition: 'all .2s',
    '&:hover': {
      color: 'gray',
      transition: 'all .2',
    },
  };

  return (
    <>
      <CssBaseline />
      {
        <Box component="footer" sx={{ color: 'white', backgroundColor: '#1E212C', py: 8 }}>
          <Container maxWidth="lg">
            <Grid container spacing={4} xs={12} md={4}>
              <Grid size={{ xs: 12, md: 6 }} sx={{ mb: 3 }}>
                <Link component="img" src={Logo} sx={{ width: 140 }}></Link>
                <Typography sx={{ fontSize: 12, width: 270 }} variant="subtitle1">
                  Обработка ОГЭ и ЕГЭ: сканирование бланков ответов, распознавание информации,
                  ведение региональных баз данных об участниках и результатах экзаменов.
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <Typography variant="h5" sx={{ fontSize: 26, mb: 1 }}>
                  Компания
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: 60 }}>
                  <Link href="#" underline="none" fontWeight="bold" mb={1} sx={hoverLink}>
                    О нас
                  </Link>{' '}
                  <Link href="#" underline="none" fontWeight="bold" mb={1} sx={hoverLink}>
                    Политика
                  </Link>{' '}
                  <Link href="#" underline="none" fontWeight="bold" mb={1} sx={hoverLink}>
                    Условия
                  </Link>{' '}
                  <Link href="#" underline="none" fontWeight="bold" mb={1} sx={hoverLink}>
                    Конфиденциальность
                  </Link>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 3 }}>
                <Typography variant="h5" sx={{ fontSize: 26, mb: 1 }}>
                  Контакты
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Phone sx={{ width: 19, mr: 1 }} />
                  <Typography variant="body2">+0(000)000-00-00</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Email sx={{ width: 19, mr: 1 }} />
                  <Link variant="body2" underline="none" href="#" sx={hoverLink}>
                    RCOI_Groz@mail.ru
                  </Link>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationOn sx={{ width: 19, mr: 1 }} />
                  <Typography variant="body2">г. Грозный, ул. Хаджиханова 7Б</Typography>
                </Box>
              </Grid>
            </Grid>
            <Divider sx={{ my: 3, backgroundColor: 'rgba(255,255,255,0.3)' }} />

            <Typography variant="body2">
              {new Date().getFullYear()} © РЦОИ. Все права защищены.
            </Typography>
          </Container>
        </Box>
      }
    </>
  );
}
