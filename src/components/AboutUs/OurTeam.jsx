import { Box, Typography } from '@mui/material';
import Boss from '../../assets/images/ourteam/Aidmar.jpg';
import Husein from '../../assets/images/ourteam/Husein.jpg';
import Zelem from '../../assets/images/ourteam/Zelem.jpg';
import Khava from '../../assets/images/ourteam/Khava.jpg';

export default function OurTeam() {
  return (
    <Box sx={{ py: 10, display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
      <Typography variant="h3">Наша команда</Typography>
      <Box sx={{ pt: 8, display: 'flex', justifyContent: 'space-evenly', gap: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            maxWidth: '285px',
            alignItems: 'center',
            justifyContent: 'start',
          }}>
          <Box component="img" src={Boss} borderRadius="4px" width="100%" height="300px"></Box>
          <Typography variant="h6" fontWeight="bold">
            Бено Эйдмар
          </Typography>
          <Typography variant="subtitle1">Директор</Typography>
          <Typography variant="body2">
            Руководит стратегическим развитием и обеспечивает эффективную работу организации.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            maxWidth: '285px',
            alignItems: 'center',
            justifyContent: 'start',
          }}>
          <Box component="img" src={Husein} borderRadius="4px" width="100%" height="300px"></Box>
          <Typography variant="h6" fontWeight="bold">
            Сулейманов Хусейн
          </Typography>
          <Typography variant="subtitle1">Начальник аналитического отдела</Typography>
          <Typography variant="body2">
            Организует аналитическую работу и отвечает за обработку и анализ данных ГИА.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            maxWidth: '285px',
            alignItems: 'center',
            justifyContent: 'start',
          }}>
          <Box component="img" src={Zelem} borderRadius="4px" width="100%" height="300px"></Box>
          <Typography variant="h6" fontWeight="bold">
            Идрисов Зелемхан
          </Typography>
          <Typography variant="subtitle1">Тимлид</Typography>
          <Typography variant="body2">
            Формально не в штате, но навсегда в сердцах команды.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            maxWidth: '285px',
            alignItems: 'center',
            justifyContent: 'start',
          }}>
          <Box component="img" src={Khava} borderRadius="4px" width="100%" height="300px"></Box>
          <Typography variant="h6" fontWeight="bold">
            Пагалова Хава
          </Typography>
          <Typography variant="subtitle1">
            Главный специалист по аналитике и фронтенд-разработке.
          </Typography>
          <Typography variant="body2">
            Решает сложные задачи и делает так, что всё работает гладко
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
