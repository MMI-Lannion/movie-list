import moviesList from './data/movie-list.json'
import Movie from './components/Movie.jsx'
import './App.css'


function App() {

  let movies = moviesList.map(
    m =>
      <Movie
        warning = {m.warning}
        title = {m.title}
        plot = {m.plot}
        orig_title = {m.orig_title}
        poster = {m.poster}
        director = {m.director}
        oscar = {m.oscar}
        cannes = {m.cannes}
        year = {m.year}
        runtime = {m.runtime}
        key={m.id}
      />
  )

  return (
    <main className="prose prose-stone !max-w-none w-full mx-auto">
      {movies}
    </main>
  )
}

export default App
