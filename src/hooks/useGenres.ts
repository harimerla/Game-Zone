import genres from "../data/genres";

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

// const useGenres = ()=> useData<Genre>('/genres')
const useGenres = ()=>{return {data:genres, isLoading:false, error:null}}

export default useGenres;