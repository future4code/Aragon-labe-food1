import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/urls";
import axios from "axios";
import { BASE_URL } from "../constantes/url";

const useRequestData = (path, state) => {
  const [data, setData] = useState(state);

  const getData = () => {
    axios
      .get(`${BASE_URL}/${path}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    getData();
  }, [path]);

  return [data, getData];
};

export default useRequestData;
