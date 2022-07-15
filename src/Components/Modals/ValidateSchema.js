import * as Yup from 'yup';

const errorText = {
  title: 'Title is not allowed to be empty',
  releaseDate: 'Release Date is not allowed to be empty',
  posterPath: 'Poster Path is not allowed to be empty',
  overview: 'Overview is not allowed to be empty',
  rating: 'Overview is not allowed to be empty',
  emptyGenres: 'Select at least one genre to proceed',
  runtime: 'Runtime is a number value'
}

const title = Yup.string().required(errorText.title);
const release_date = Yup.string().required(errorText.releaseDate);
const poster_path = Yup.string().required(errorText.posterPath);
const overview = Yup.string().required(errorText.overview);
const vote_average = Yup.number().required(errorText.rating);
const genres = Yup.array().required(errorText.emptyGenres);
const runtime = Yup.number().required(errorText.runtime);


export const ValidateSchema = Yup.object().shape({
  title,
  release_date,
  poster_path,
  overview,
  vote_average,
  genres,
  runtime
})
