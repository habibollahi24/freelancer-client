import { useNavigate } from "react-router-dom";

export const useOnBack = () => {
  const navigate = useNavigate();

  return () => navigate(-1);
};
