import { Home } from '../Home';
import { MovieInfo } from '../MovieInfo';
import './styles.css';

export function Head() {
  return (
    <section className="Head">
      <img className="" src="src/Assets/shuffle.svg" alt="Ícone de aleatório" />
      <h1>Não sabe o que assistir?</h1>
      {/* <Home /> */}
      <MovieInfo />
      
    </section>
  );
}
