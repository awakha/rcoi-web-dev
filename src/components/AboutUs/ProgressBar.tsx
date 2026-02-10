import { CircularProgress, Box, Typography } from '@mui/material';

interface ProgressItem {
  id: number;
  value: number;
  label: string;
  valueText: string;
  color: string;
}

export default function ProgressBar() {
  const progressItems: ProgressItem[] = [
    {
      id: 1,
      value: 90,
      label: 'Лет работы',
      valueText: '16',
      color: '#5A87FC',
    },
    {
      id: 2,
      value: 75,
      label: 'Обработанных работ',
      valueText: '150000',
      color: '#F89828',
    },
    {
      id: 3,
      value: 85,
      label: 'ППЭ',
      valueText: '130',
      color: 'secondary',
    },
    {
      id: 4,
      value: 100,
      label: 'Выполнено КИМ в срок',
      valueText: '100%',
      color: '#03CEA4',
    },
  ];

  const getTextPosition = (valueText: string): { left: string } => {
    const length = valueText.length;
    if (length <= 2) return { left: '49%' };
    if (length <= 4) return { left: '49%' };
    return { left: '50%' };
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 20 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          mb: { xs: 5, md: 10 },
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        Наши достижения
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
          gap: { xs: 5, md: 10 },
          alignItems: 'center',
          justifyItems: 'center',
          maxWidth: '1200px',
          width: '100%',
        }}>
        {progressItems.map((item) => {
          const textPosition = getTextPosition(item.valueText);

          return (
            <Box
              key={item.id}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                textAlign: 'center',
                maxWidth: '200px',
              }}>
              {/* Контейнер для прогресс-бара */}
              <Box sx={{ position: 'relative', mb: 2 }}>
                <CircularProgress
                  enableTrackSlot
                  variant="determinate"
                  value={item.value}
                  thickness={1.8}
                  size={148}
                  sx={{
                    opacity: 0.75,
                    color: item.color,
                    ...(item.color === 'secondary' && {
                      color: 'secondary.main',
                    }),
                  }}
                />

                {/* Текст внутри круга */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '48%',
                    left: textPosition.left,
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                  }}>
                  <Typography fontSize="32px" fontWeight="bold" sx={{ lineHeight: 1 }}>
                    {item.valueText}
                  </Typography>
                </Box>
              </Box>

              {/* Подпись под кругом */}
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 'medium',
                  mb: 0.5,
                }}>
                {item.label}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
