import { FC, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useRegisterMutation } from "../../services";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useAppDispatch } from "../../store";
import { setUser } from "../../store/slices/usersSlice";
import { useNavigate } from "react-router-dom";

interface Props {}

const AuthPageView: FC<Props> = ({}) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");

  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const [register] = useRegisterMutation();

  const { setItemToLocalStorage } = useLocalStorage();

  const handleRegisterClick = async () => {
    if (!name || !email || !password || !avatar) {
      setError("Заполните все поля");
      return;
    }

    try {
      const result = await register({ name, email, password, avatar }).unwrap();

      setItemToLocalStorage("token", result.token);
      setItemToLocalStorage("name", name);
      setItemToLocalStorage("email", email);
      setItemToLocalStorage("password", password);
      setItemToLocalStorage("avatar", avatar);

      dispatch(setUser({ name, email, password, avatar }));

      navigate("/");
    } catch (error: any) {
      setError(error.data.error);
    }
  };

  return (
    <Box
      sx={{
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      <Stack direction="column" spacing={3}>
        <Typography sx={{ fontSize: 30, fontWeight: 600, color: "#999" }}>
          Регистрация
        </Typography>
        <Stack direction="column" spacing={1}>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Имя"
          />
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Пароль"
          />
          <TextField
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            placeholder="Ссылка на аватар"
          />
        </Stack>
        {error && <Typography color="#BB0000">{error}</Typography>}
        <Button variant="contained" size="large" onClick={handleRegisterClick}>
          Зарегистрироваться
        </Button>
      </Stack>
    </Box>
  );
};

export default AuthPageView;
