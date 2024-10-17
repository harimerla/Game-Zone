import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
  
  interface FetchResponse<T> {
    count: number;
    results: T[];
  }

const useData = <T>(endPoint: string, requestConfig?: AxiosRequestConfig, deps?:any[])=>{
    const [items, setItems] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endPoint, {signal: controller.signal, ...requestConfig})
      .then((res) => {
        console.log(res.data);
        setItems(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false)});
    return ()=>{controller.abort()}
  },deps?[...deps]:[]);
  return {items, error, isLoading}
}

export default useData;