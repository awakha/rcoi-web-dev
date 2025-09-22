import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function AuthButton() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined">Войти</Button>
      <Button variant="contained">Зарегистрироваться</Button>
    </Stack>
  );
}
export default AuthButton;
