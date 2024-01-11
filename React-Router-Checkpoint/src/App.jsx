import { Route, } from 'react-router-dom';
import MovieList from './components/MovieList'
import './App.css'

function App() {

  return (
    <>
      <Route>
        <Route path="/" element={ <MovieList/>} />
      </Route>
    </>
  )
}

export default App
