import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

type FormValues = {
  search: string;
};

const useHome = () => {
  const [history, setHistory] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchHistory = async () => {
      const { data } = await axios.get(`http://localhost:8000/get-history`);
      setHistory(data.data);
      console.log(data.data)
    };

    fetchHistory();
  }, []);

  const onClickCity = useCallback(() => {}, []);

  const { handleSubmit, getValues, register } = useForm<FormValues>();

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      const { search } = getValues();

      const cities = search.split(",");

      const data: any = await Promise.all(
        cities.map((city) =>
          axios.get(`http://localhost:8000/get-weather/${city}`)
        )
      );

      setHistory([...data, ...history]);
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }, [history]);

  return {
    onClickCity,
    onSubmit: handleSubmit(onSubmit),
    isLoading,
    register,
    data,
    history,
    setData,
  };
};

export default useHome;
