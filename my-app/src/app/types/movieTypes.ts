export interface Owner {
    id?: string; 
    _id?: string; 
    username: string 
}

export interface MovieData {
    name: string;
    director: string;
    year: number;
    topCast: string[];
    moviePoster: string;
    movieImages: { movieImage: string, _id?:string }[];
    description: string;
    genres: string[];
    movieTrailer: string;
    _id?: string;
    owner?: Owner;
    __v?: number;
}