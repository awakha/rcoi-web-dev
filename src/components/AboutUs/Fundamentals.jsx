import { Box, Typography } from '@mui/material';

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';

export default function Fundamentals() {
  return (
    <>
      {' '}
      <Box sx={{ display: 'flex', pb: 10 }}>
        <Box>
          <Typography fontSize="40px" fontWeight="bold" width="420px">
            Ключевые принципы работы
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            gap: '40px',
          }}>
          <Box maxWidth="340px" maxHeight="200px">
            <WorkspacePremiumOutlinedIcon sx={{ fontSize: 44 }} />
            <Typography variant="h6" fontWeight="bold">
              Профессионализм
            </Typography>
            <Typography variant="subtitle2">
              Наша команда - это высококвалифицированные специалисты, строго следующие регламенту.
              Мы гарантируем безупречное качество обработки данных благодаря непрерывному
              совершенствованию навыков.
            </Typography>
          </Box>

          <Box maxWidth="340px" maxHeight="200px">
            <VisibilityOutlinedIcon sx={{ fontSize: 44 }} />
            <Typography variant="h6" fontWeight="bold">
              Открытость
            </Typography>
            <Typography variant="subtitle2">
              Наша деятельность строго регламентирована и прозрачна. Мы гарантируем объективность и
              достоверность экзаменационных результатов для всех участников процесса.
            </Typography>
          </Box>

          <Box maxWidth="340px" maxHeight="200px">
            <AssignmentTurnedInIcon sx={{ fontSize: 44 }} />
            <Typography variant="h6" fontWeight="bold">
              Ответственность
            </Typography>
            <Typography variant="subtitle2">
              Мы осознаем высокую социальную значимость своей работы. Результаты ЕГЭ — это наша
              прямая ответственность перед каждым выпускником, и мы обеспечиваем максимальную
              точность на всех этапах.
            </Typography>
          </Box>

          <Box maxWidth="340px" maxHeight="200px">
            <HandshakeRoundedIcon sx={{ fontSize: 44 }} />
            <Typography variant="h6" fontWeight="bold">
              Взаимодействие
            </Typography>
            <Typography variant="subtitle2">
              Эффективная работа — результат слаженного сотрудничества с образовательными
              организациями и органами управления. Мы выстраиваем четкое взаимодействие на всех
              этапах экзаменационной кампании.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
