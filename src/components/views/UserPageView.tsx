import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useGetUserQuery } from "../../services";

import { UserEditInfoContent, UserInfoContent } from "../organisms/user";
import { UserType } from "../../types/UserType";

interface Props {}

const UserPageView: FC<Props> = ({}) => {
  const [queryParams] = useSearchParams();
  const id = Number(queryParams.get("id"));

  const [stateUser, setStateUser] = useState<UserType>({} as UserType);

  const navigate = useNavigate();

  const [isEditInfo, setIsEditInfo] = useState<boolean>(false);

  const { data, isLoading, isFetching } = useGetUserQuery({ id });

  useEffect(() => {
    if (!data?.data) {
      return;
    }

    setStateUser(data.data);
  }, [data]);

  const handleSwitchEditInfo = () => {
    setIsEditInfo((prev) => !prev);
  };

  const onFinishEdit = (
    name: string,
    lastname: string,
    email: string,
    avatar: string
  ) => {
    if (!data?.data) {
      return;
    }

    setStateUser({
      id: data?.data.id,
      first_name: name,
      last_name: lastname,
      email,
      avatar,
    });

    handleSwitchEditInfo();
  };

  if (isLoading || isFetching) {
    return <CircularProgress />;
  }

  const user = data?.data;

  if (!user) {
    return <Typography>No data</Typography>;
  }

  return (
    <Box sx={{ marginTop: 3, marginBottom: 3 }}>
      <Button
        variant="contained"
        size="medium"
        onClick={() => navigate(-1)}
        sx={{ marginBottom: 3 }}
      >
        Назад
      </Button>
      {!isEditInfo && (
        <UserInfoContent user={stateUser} handleEditInfo={handleSwitchEditInfo} />
      )}
      {isEditInfo && (
        <UserEditInfoContent user={stateUser} onFinishEdit={onFinishEdit} />
      )}
    </Box>
  );
};

export default UserPageView;
