import { Box, Typography, Link } from '@mui/material';
import { GitHub, WhatsApp, Instagram, Telegram } from '@mui/icons-material';

import Boss from '../../assets/images/ourteam/Aidmar.jpg';
import Husein from '../../assets/images/ourteam/Husein.jpg';
import Zelem from '../../assets/images/ourteam/Zelem.jpg';
import Khava from '../../assets/images/ourteam/Khava.jpg';

export default function OurTeam() {
  const cardsData = [
    {
      id: 1,
      imgUrl: Boss,
      fullName: 'Бено Эйдмар',
      rank: 'Директор',
      info: 'Руководит стратегическим развитием и обеспечивает эффективную работу организации.',
      git: false,
    },
    {
      id: 2,
      imgUrl: Husein,
      fullName: 'Сулейманов Хусейн',
      rank: 'Начальник аналитического отдела',
      info: 'Организует аналитическую работу и отвечает за обработку и анализ данных ГИА.',
      git: false,
    },
    {
      id: 3,
      imgUrl: Zelem,
      fullName: 'Идрисов Зелемхан',
      rank: 'Тимлид',
      info: 'Формально не в штате, но навсегда в сердцах команды.',
      git: true,
    },
    {
      id: 4,
      imgUrl: Khava,
      fullName: 'Пагалова Хава',
      rank: 'Главный специалист по аналитике и фронтенд-разработке',
      info: 'Решает сложные задачи и делает так, что всё работает гладко.',
      git: true,
    },
  ];

  return (
    <>
      <Typography variant="h3" sx={{ textAlign: 'center' }}>
        Наша команда
      </Typography>

      <Box sx={{ pt: 5, py: 10 }}>
        <Box
          sx={{
            width: 'auto',
            height: '400px',
            display: 'flex',
            gap: 2,
            alignItems: 'center',
            justifyContent: 'start',
          }}>
          {cardsData.map((item) => (
            <Box //cards
              key={item.id}
              sx={{
                width: '100%',
                height: '400px',
                position: 'relative',
                overflow: 'hidden',
                mb: 2,

                borderRadius: '15px',
                '&:hover > :nth-of-type(1)': {
                  right: 0,
                },
              }}>
              <Box
                component="img"
                src={item.imgUrl}
                sx={{
                  width: '100%',
                  height: '400px',
                  borderRadius: '20px',
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%,-50%)',
                  objectFit: 'cover',
                }}></Box>
              <Box //card body
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'start',
                  p: 3,
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  right: '-100%',
                  background: '#132a313d',
                  backdropFilter: 'blur(5px)',
                  borderRadius: '15px',
                  color: '#fff',
                  transition: '.5s',
                }}>
                <Typography variant="h6" fontWeight="bold">
                  {item.fullName}
                </Typography>
                <Typography variant="subtitle1" sx={{ py: 1 }}>
                  {item.rank}
                </Typography>
                <Typography variant="body2">{item.info}</Typography>

                <Box
                  sx={{
                    height: '250px',
                    display: 'flex',
                    alignItems: 'end',
                    gap: '5px',
                  }}>
                  <Link href="#" target="_blank">
                    <WhatsApp sx={{ color: '#fff', '&:hover': { color: 'green' } }} />
                  </Link>
                  <Link href="#" target="_blank">
                    <Instagram sx={{ color: '#fff', '&:hover': { color: '#E4405F' } }} />
                  </Link>
                  <Link href="#" target="_blank">
                    <Telegram sx={{ color: '#fff', '&:hover': { color: '#078dfaff' } }} />
                  </Link>
                  {item.git && (
                    <Link href="#" target="_blank">
                      <GitHub sx={{ color: '#fff', '&:hover': { color: 'gray' } }} />
                    </Link>
                  )}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
