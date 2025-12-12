import ProgressBar from "./ProgressBar";
import Fundamentals from "./Fundamentals";
import OurTeam from "./OurTeam";
import Contacts from "./Contacts";
import { Box, Container } from "@mui/material";

export default function AboutUs() {
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
}
