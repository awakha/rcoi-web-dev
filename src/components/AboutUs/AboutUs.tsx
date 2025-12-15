import ProgressBar from "./ProgressBar.js";
import Fundamentals from "./Fundamentals.js";
import OurTeam from "./OurTeam.js";
import Contacts from "./Contacts.js";
import { Box, Container } from "@mui/material";

const AboutUs: React.FC = () => {
  return (
    <Box component="main">
      <Container maxWidth="xl">
        <ProgressBar />
        <Fundamentals />
        <OurTeam />
        <Contacts />
      </Container>
    </Box>
  );
};

export default AboutUs;
