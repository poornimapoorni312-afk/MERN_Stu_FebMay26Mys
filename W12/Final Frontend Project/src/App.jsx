import './App.css'
import MovieCard from './components/MovieCard';

function App() {
  

  return (
    <>
      <MovieCard 
      title="Inception"
      genre="Sci-Fi"
      rating={4.8}
      duration="2h 28m"
      poster="https://picsum.photos/200/300?1" 
      />,
      <MovieCard 
      title="Avatar"
      genre="Sci-Fi"
      rating={4.8}
      duration="2h 28m"
      poster="https://picsum.photos/200/300?1" 
      />,
      <MovieCard 
      title="FightClub"
      genre="Sci-Fi"
      rating={4.8}
      duration="2h 28m"
      poster="https://picsum.photos/200/300?1" 
      />
    </>

  )
}

export default App


