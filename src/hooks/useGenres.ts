import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";

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

const useGenres = ()=> useData<Genre>('/genres')

export default useGenres;