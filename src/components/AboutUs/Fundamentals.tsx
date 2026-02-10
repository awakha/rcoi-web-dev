import { Box, Typography } from '@mui/material';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded';

// Интерфейс для данных карточки
interface PrincipleCard {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function Fundamentals() {
  // Статичные данные
  const principleCards: PrincipleCard[] = [
    {
      id: 1,
      title: 'Профессионализм',
      description:
        'Наша команда - это высококвалифицированные специалисты, строго следующие регламенту. Мы гарантируем безупречное качество обработки данных благодаря непрерывному совершенствованию навыков.',
      icon: <WorkspacePremiumOutlinedIcon sx={{ fontSize: 44 }} />,
    },
    {
      id: 2,
      title: 'Открытость',
      description:
        'Наша деятельность строго регламентирована и прозрачна. Мы гарантируем объективность и достоверность экзаменационных результатов для всех участников процесса.',
      icon: <VisibilityOutlinedIcon sx={{ fontSize: 44 }} />,
    },
    {
      id: 3,
      title: 'Ответственность',
      description:
        'Мы осознаем высокую социальную значимость своей работы. Результаты ЕГЭ — это наша прямая ответственность перед каждым выпускником, и мы обеспечиваем максимальную точность на всех этапах.',
      icon: <AssignmentTurnedInIcon sx={{ fontSize: 44 }} />,
    },
    {
      id: 4,
      title: 'Взаимодействие',
      description:
        'Эффективная работа — результат слаженного сотрудничества с образовательными организациями и органами управления. Мы выстраиваем четкое взаимодействие на всех этапах экзаменационной кампании.',
      icon: <HandshakeRoundedIcon sx={{ fontSize: 44 }} />,
    },
  ];

  return (
    <Box sx={{ display: 'flex', pb: 10 }}>
      <Box sx={{ display: 'flex', justifyContent: 'end', width: '1000px' }}>
        <Typography fontSize="40px" fontWeight="bold" width="500px">
          Ключевые принципы работы
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          flexDirection: 'row',
          gap: '40px',
        }}>
        {principleCards.map((card) => (
          <Box key={card.id} maxWidth="340px" maxHeight="200px">
            {card.icon}
            <Typography variant="h6" fontWeight="bold">
              {card.title}
            </Typography>
            <Typography variant="subtitle2">{card.description}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
