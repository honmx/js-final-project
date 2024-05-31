import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { UserFilterType, setFilter } from "../../../store/slices/usersSlice";

interface Props {}

const UserFilters: FC<Props> = ({}) => {
  const dispatch = useAppDispatch();

  const activeFitler = useAppSelector((state) => state.users.filter);

  const handleFilterChange = (e: unknown, value: string) => {
    dispatch(setFilter(value as UserFilterType));
  };

  return (
    <RadioGroup value={activeFitler} onChange={handleFilterChange}>
      <FormControlLabel value="even" control={<Radio />} label="Четные id" />
      <FormControlLabel value="odd" control={<Radio />} label="Нечетные id" />
      <FormControlLabel value="all" control={<Radio />} label="Все id" />
    </RadioGroup>
  );
};

export default UserFilters;
