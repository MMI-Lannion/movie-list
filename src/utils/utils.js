import {writeFile, readFile } from 'fs/promises';

const movies = JSON.parse(
  await readFile(
    new URL('../data/movies.json', import.meta.url)
  )
).movies;


movies.sort((a, b) => a.title.localeCompare(b.title));

const TMDB_API_KEY = "35f04d0642755d00ee9150514b791d7d"
const TMDB_IMAGES_URL = "https://image.tmdb.org/t/p/w185"


let moviesList = []

for (let { title, warning, date, keep_title } of movies) {
  console.log(title)

  let res = await searchTMDB(title, date)

  if(keep_title)
    res["title"] = title
  res["warning"] = warning

  moviesList.push(res)
}

let json = JSON.stringify(moviesList);

await writeFile('../data/movie-list.json', json, 'utf8');


/* 
async function getAwardWinnerList(listID) {

  let url = `https://api.themoviedb.org/3/list/${listID}?language=fr&page=1&api_key=${TMDB_API_KEY}`

  const pageNb = await fetch(url)
    .then(res => res.json())
    .then(json => json.total_pages)

  let list = []

  for (let i = 1; i < pageNb; i++) {
    let url = `https://api.themoviedb.org/3/list/${listID}?language=fr&page=${i}&api_key=${TMDB_API_KEY}`
  
    list.push(... await fetch(url)
      .then(res => res.json())
      .then(json => json.items.map(m => m.original_title)))
  }

  return list

} */

async function searchTMDB(title, date) {

  let dateQuery = ""
  if(date !== "")
    dateQuery = `year=${date}`

  const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${title}&${dateQuery}&language=fr&page=1&api_key=${TMDB_API_KEY}`)
    .then(response => response.json())
    .then(jsonData => jsonData.results[0])

  const runtime = await fetch(`https://api.themoviedb.org/3/movie/${res.id}?api_key=${TMDB_API_KEY}`)
    .then(response => response.json())
    .then(jsonData => jsonData.runtime)

  const directors = await fetch(`https://api.themoviedb.org/3/movie/${res.id}/credits?api_key=${TMDB_API_KEY}`)
    .then(response => response.json())
    .then(jsonData => jsonData.crew.filter(({ job }) => job === 'Director'))

  return {
    "id" : res.id,
    "title": res.title,
    "plot": res.overview,
    "orig_title": res.original_title,
    "poster": TMDB_IMAGES_URL + res.poster_path,
    "director": directors.map(d => d.name).join(", "),
    "oscar" : OSCAR_WINNERS.includes(res.original_title),
    "cannes" : CANNES_WINNERS.includes(res.original_title),
    "year": res.release_date.substring(0, 4),
    "runtime" : runtime
  }

}
