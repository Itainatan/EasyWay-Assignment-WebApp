import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

type FormValues = {
  search: string;
};

const useHome = () => {
  const [history, setHistory] = useState<any[]>([]);
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchHistory = async () => {
      const { data } = await axios.get(`http://localhost:8000/get-history`);

      setHistory(data.data);
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
        cities.map(async (city) => {
          const cityData = await axios.get(
            `http://localhost:8000/get-weather/${city}`
          );
          return cityData.data;
        })
      );

      setHistory([...history, ...data].slice(-10));
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
