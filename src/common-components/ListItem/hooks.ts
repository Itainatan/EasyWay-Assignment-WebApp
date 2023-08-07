import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useListItem() {
  const navigate = useNavigate();
  const [isLoadingLogout, setIsLoadingLogout] = useState(false);

  const onClickLogOut = () => {
    setIsLoadingLogout(true);

    setTimeout(() => {
      navigate("/login");
      setIsLoadingLogout(false);
    }, 3000);
  };

  return {
    isLoadingLogout,
    onClickLogOut,
  };
}
