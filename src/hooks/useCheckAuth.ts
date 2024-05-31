import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useNavigate } from "react-router-dom";

export const useCheckAuth = () => {
  const navigate = useNavigate();

  const { getItemFromLocalStorage } = useLocalStorage();

  useEffect(() => {
    const token = getItemFromLocalStorage("token");

    if (!token) {
      navigate("/auth");
    }
  }, []);
};
