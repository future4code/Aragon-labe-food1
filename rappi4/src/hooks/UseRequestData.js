import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, HEADERS } from "../constantes/url";

export const useRequestData = (path, state) => {
  const [data, setData] = useState(state);

  const getData = () => {
    axios
      .get(`${BASE_URL}${path}`, HEADERS)
      .then((res) => {
        alert("deu certo");
        setData(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    getData();
  }, [path]);

  return [data];
};
