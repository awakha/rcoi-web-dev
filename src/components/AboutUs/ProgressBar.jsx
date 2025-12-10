import { CssBaseline, CircularProgress, Box, Typography, Container } from '@mui/material';
export default function ProgressBar() {
  return (
    <Box
      sx={{
        py: 20,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
        <CircularProgress
          enableTrackSlot
          variant="determinate"
          value={90}
          thickness={1.8}
          size="148px"
          sx={{ opacity: 0.75, mb: 2, color: '#5A87FC' }}
        />
        <Typography sx={{ fontSize: 14 }}>Лет работы</Typography>
        <Box sx={{ display: 'inline', position: 'absolute', top: 50, left: 54 }}>
          <Typography fontSize="32px" fontWeight="bold">
            16
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
        <CircularProgress
          enableTrackSlot
          variant="determinate"
          value={75}
          thickness={1.8}
          size="148px"
          sx={{ opacity: 0.75, mb: 2, color: '#F89828' }}
        />
        <Typography sx={{ fontSize: 14 }}>Обработанных работ</Typography>
        <Box sx={{ display: 'inline', position: 'absolute', top: 50, left: 20 }}>
          <Typography fontSize="32px" fontWeight="bold">
            150000
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
        <CircularProgress
          enableTrackSlot
          variant="determinate"
          value={85}
          thickness={1.8}
          color="secondary"
          size="148px"
          sx={{ opacity: 0.7, mb: 2 }}
        />
        <Typography sx={{ fontSize: 14 }}>ППЭ</Typography>
        <Box sx={{ display: 'inline', position: 'absolute', top: 50, left: 45 }}>
          <Typography fontSize="32px" fontWeight="bold">
            130
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
        <CircularProgress
          label="hi"
          enableTrackSlot
          variant="determinate"
          value={100}
          thickness={1.8}
          size="148px"
          sx={{ opacity: 0.75, mb: 2, color: '#03CEA4' }}
        />
        <Typography sx={{ fontSize: 14 }}>Выполнено КИМ в срок</Typography>
        <Box sx={{ display: 'inline', position: 'absolute', top: 50, left: 40 }}>
          <Typography fontSize="32px" fontWeight="bold">
            100%
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
