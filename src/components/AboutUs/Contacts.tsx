import { Box, Typography, Divider } from "@mui/material";
import UpdateRoundedIcon from "@mui/icons-material/UpdateRounded";
import ContactsRoundedIcon from "@mui/icons-material/ContactsRounded";
import PushPinRoundedIcon from "@mui/icons-material/PushPinRounded";
function Contacts() {
  return (
    <>
      <Divider
        sx={{
          backgroundColor: "rgba(255,255,255,0.3)",
          width: "80%",
          mx: "auto",
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          py: 8,
        }}
      >
        <Box>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A16f3b5975ca7cc8b63f79c0f6f9acadcb4e2a7df49c47ad07a23717245c7b932&amp;source=constructor"
            width="500"
            height="400"
          ></iframe>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 9,
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <PushPinRoundedIcon sx={{ fontSize: 60 }} />
            <Box>
              <Typography variant="h5">Местоположение</Typography>
              <Typography variant="subtitle1">
                г. Грозный, ул. Хаджиханова 7Б
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <UpdateRoundedIcon sx={{ fontSize: 60 }} />
            <Box>
              <Typography variant="h5">Рабочее время</Typography>
              <Typography variant="subtitle1">
                Работаем ПН-ПТ с 9:00 до 18:00
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <ContactsRoundedIcon sx={{ fontSize: 60 }} />
            <Box>
              <Typography variant="h5">Контакты</Typography>
              <Typography variant="subtitle1">+0(000)000-00-00</Typography>
              <Typography variant="subtitle1">RCOI_Groz@mail.ru</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Contacts;
