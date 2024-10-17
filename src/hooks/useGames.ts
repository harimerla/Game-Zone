import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatform";

// export interface Platform{
//     id: number,
//     name: string,
//     slug: string
// }

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

const useGames = (selectedGenres: Genre | null, selectedPlatform: Platform|null)=>useData<Game>('/games', 
    {params:{genres:selectedGenres?.id, parent_platforms:selectedPlatform?.id}},
     [selectedGenres?.id, selectedPlatform?.id]);

export default useGames;