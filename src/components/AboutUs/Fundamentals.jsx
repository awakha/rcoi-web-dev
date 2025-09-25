import { CssBaseline, Box, Typography, Container } from '@mui/material';
import {
  ThumbUpSharpIcon,
  AssignmentTurnedInSharpIcon,
  HandshakeSharp,
  WorkspacePremiumSharp,
} from '@mui/icons-material';

function Fundamentals() {
  return (
    <>
      <CssBaseline />
      {
        <Container maxWidth="lg">
          <Box display="flex">
            <Box width="340">
              <Typography fontSize="46px" fontWeight="bold">
                Ключевые принципы нашей работы
              </Typography>
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Acf919885372685d3ab5a95d9ddd4f6acc3a38dc3dbb4e54722ba187c6d774038&amp;source=constructor"
                width="821"
                height="572"
                frameborder="0"></iframe>
            </Box>
            <Box>
              <Box>dadadada</Box>
              <Box></Box>
            </Box>
          </Box>
        </Container>
      }
    </>
  );
}

export default Fundamentals;
