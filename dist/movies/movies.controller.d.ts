import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';
export declare class MoviesController {
    readonly movieService: MoviesService;
    constructor(movieService: MoviesService);
    getAll(): Movie[];
    getOne(movieId: string): Movie;
    create(movieData: any): void;
    remove(movieId: string): boolean;
    patch(movieId: number, updateData: any): any;
}
