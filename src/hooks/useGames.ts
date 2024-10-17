import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData, { Genre } from "./useData";

export interface Platform{
    id: number,
    name: string,
    slug: string
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
  }
  
  interface FetchGameResponse {
    count: number;
    results: Game[];
  }

const useGames = (selectedGenres: Genre | null)=>useData<Game>('/games', {params:{genres:selectedGenres?.id}}, [selectedGenres?.id]);

export default useGames;