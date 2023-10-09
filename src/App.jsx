import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './MovieCard'

function App() {

  const [movieName, setMovieName] = useState('')
  const [rating, setRating] = useState('')
  const [description, setDescription] = useState('')

  const [films, setFilms] = useState([
    {
      name: 'Привет',
      rating: '3.6',
      description: 'sdiughkvhreukhrjh'
    },
    {
      name: 'eroijeroi',
      rating: '3.ceijfneui6',
      description: 'wiofnlweuicjweiucnweiou'
    }
  ])

  return (
    <>
      <header>
        <div id='logo'>
          <h1 id='kino'>КИНО</h1>
          <h1 id='online'>ОНЛАЙН</h1>
        </div>
        <div id='buttons'>
          <button id='vhod'>ВОЙТИ</button>
          <button id='createa_acc'>СОЗДАТЬ<br />АККАУНТ</button>
        </div>
      </header>
      <div id='from'>
        <input value={movieName} onChange={(e) => {
          setMovieName(e.target.value)
        }} type="text" placeholder='Название фильма' />
        <input value={rating} onChange={(e) => [
          setRating(e.target.value)
        ]} type="text" placeholder='Оценка фильма' />
        <input value={description} onChange={(e) => {
          setDescription(e.target.value)
        }} type="text" placeholder='Описание фильма' />
        <button onClick={() => {
          if (movieName === '' || rating === '' || description === '') return
          setFilms((prev) => {
            return prev.concat({
              name: movieName,
              rating: rating,
              description: description
            })
          })
        }}>Добавить</button>
      </div>
      <main>
        <div id='titile'>
          <h3 id='novinki'>НОВИНКИ</h3>
          <div id='divider' />
        </div>
        <div className="movies">
          {
            films.map((item) => {
              return <MovieCard name={item.name} rating={item.rating} decription={item.description} />
            })
          }
        </div>
      </main>
    </>
  )
}

export default App
