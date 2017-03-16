namespace myapp.Services {

  export class MovieService {
    private MovieResource

    public saveMovie(movie) {
      return this.MovieResource.save(movie);
    }

    public getMovies() {
      return this.MovieResource.query();
    }

    public removeMovie(id) {
      return this.MovieResource.delete({id: id})
    }

    public constructor(
      public $resource
    ) {
      this.MovieResource = $resource('/api/movies/:id')
    }
  }
  angular.module('myapp').service('movieService', MovieService)
    }
