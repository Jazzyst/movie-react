export class MoviesListView {
  constructor(list) {
    this.list = list;
  }

  getMovieId(id) {
    return this.list.find(movie => id === movie.id)
  }
}