import moviesList from './data/movie-list.json'
import awards from './data/awards.json'
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
        oscar = {awards.oscar.map(s => s.toLocaleLowerCase()).includes(m.title.toLocaleLowerCase())}
        cannes = {awards.cannes.map(s => s.toLocaleLowerCase()).includes(m.title.toLocaleLowerCase())}
        berlin = {awards.berlin.map(s => s.toLocaleLowerCase()).includes(m.title.toLocaleLowerCase())}
        mostra = {awards.mostra.map(s => s.toLocaleLowerCase()).includes(m.title.toLocaleLowerCase())}
        cesar = {awards.cesar.map(s => s.toLocaleLowerCase()).includes(m.title.toLocaleLowerCase())}
        year = {m.year}
        runtime = {m.runtime}
        key={m.id}
      />
  )

  return (
    <>
      <div className="flex items-center justify-left w-full m-2 prose-xs text-gray-400 font-light"> {moviesList.length} films</div>
      <main className="prose prose-stone !max-w-none w-full mx-auto">
        {movies}
      </main>
    </>
  )
}

export default App
