import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

type FormValues = {
  search: string;
};

const useLogin = () => {
  const [history, setHistory] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onClickCity = useCallback(() => {}, []);

  const { handleSubmit, getValues } = useForm<FormValues>();

  const onSubmit = useCallback(() => {
    setIsLoading(true);
    const { search } = getValues();

    axios.post(``);
  }, []);

  return {
    onClickCity,
    onSubmit: handleSubmit(onSubmit),
    isLoading,
  };
};

export default useLogin;
