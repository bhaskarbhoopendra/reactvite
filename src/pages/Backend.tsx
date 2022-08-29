import axios from "axios";
import { useEffect, useState } from "react";

export function Backend() {
  const [data, setData] = useState("");
  const [blogGet, setBlogGet] = useState("");
  const API_URL = `http://localhost:5000`;

  const blogsFetchAPIFunc = () =>
    axios.get(`${API_URL}/blogs`).then((response) => {
      console.log({ response });
      setData(response.data);
    });

  const blogGetFetchAPIFunc = () => {
    axios.get(`${API_URL}/blogs/get`).then((response) => {
      console.log(response.data);
      setBlogGet(response.data);
    });
  };

  useEffect(() => {
    blogsFetchAPIFunc();
    blogGetFetchAPIFunc();
  }, []);

  return (
    <>
      <h1>{data}</h1>
      <h2>{blogGet}</h2>
    </>
  );
}
