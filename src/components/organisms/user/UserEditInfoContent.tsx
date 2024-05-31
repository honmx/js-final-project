import { FC, useState } from "react";
import { UserType } from "../../../types/UserType";
import { Button, Stack, TextField, Typography } from "@mui/material";

interface Props {
  user: UserType;
  onFinishEdit: (
    name: string,
    lastname: string,
    email: string,
    avatar: string
  ) => void;
}

const UserEditInfoContent: FC<Props> = ({ user, onFinishEdit }) => {
  const [name, setName] = useState<string>(user.first_name);
  const [lastname, setLastname] = useState<string>(user.last_name);
  const [email, setEmail] = useState<string>(user.email);
  const [avatar, setAvatar] = useState<string>(user.avatar);

  const [error, setError] = useState<string>("");

  const handleSubmit = () => {
    if (!name || !email || !lastname || !avatar) {
      setError("Заполните все поля");
      return;
    }

    onFinishEdit(name, lastname, email, avatar);
  };

  return (
    <Stack direction="column" spacing={1}>
      <TextField value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField value={name} onChange={(e) => setName(e.target.value)} />
      <TextField
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
      />
      <TextField value={avatar} onChange={(e) => setAvatar(e.target.value)} />
      {error && <Typography>{error}</Typography>}
      <Button variant="contained" onClick={handleSubmit}>
        Подтвердить
      </Button>
    </Stack>
  );
};

export default UserEditInfoContent;
