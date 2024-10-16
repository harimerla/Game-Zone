import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform{
    id: number,
    name: string,
    slug: string
}

export interface Genre {
    id: number;
    name: string;
    image_background: string
  }
  
  interface FetchGenreResponse {
    count: number;
    results: Genre[];
  }

const useGenres = ()=>{
    const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGenreResponse>("/genres", {signal: controller.signal})
      .then((res) => {
        console.log(res.data);
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false)});
    return ()=>{controller.abort()}
  },[]);
  return {genres, error, isLoading}
}

export default useGenres;