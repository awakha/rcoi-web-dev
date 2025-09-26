import { CssBaseline, Box, Container } from '@mui/material';
import {} from '@mui/icons-material';
import ProgressBar from './ProgressBar';
import Fundamentals from './Fundamentals';
import OurTeam from './OurTeam';
import Maps from './Maps';

export default function AboutUs() {
  return (
    <>
      <CssBaseline />
      {
        <Box component="section">
          <Container maxWidth="lg">
            <ProgressBar />
            <Fundamentals />
            <OurTeam />
            <Maps />
          </Container>
        </Box>
      }
    </>
  );
}
