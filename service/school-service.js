import * as schoolRepository from "./persistency/school-repository";

let schoolDatabase = [
  {
    id: 10002,
    name: "Die Hard",
    year: 1999,
  },
];

export async function createMovie(pschool) {
  return await schoolRepository.create(pschool);
}

export async function deleteMovie(pId) {
  return await schoolRepository.remove(pId);
}

export async function getAllMovies() {
  return await schoolRepository.getAll();
}

export async function getMovieById(pId) {
  let school = await schoolRepository.findById(pId);
  return school;
}

export async function updateMovie(pId, pUpdatedschool) {
  let movie = await schoolRepository.updateMovie(pId, pUpdatedschool);
  return movie;
}

//let newMovie = JSON.parse(JSON.stringify(movie))
//Object.assign({}, movie)
