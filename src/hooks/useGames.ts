import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatform";
import { GameQuery } from "../App";

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

const useGames = (gameQuery: GameQuery)=>useData<Game>('/games', 
    {params:{genres:gameQuery.genre?.id, parent_platforms:gameQuery.platform?.id, ordering:gameQuery.sortOrder, search: gameQuery.search}},
     [gameQuery]);

export default useGames;