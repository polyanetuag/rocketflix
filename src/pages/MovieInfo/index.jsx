import { useEffect, useState } from "react";
import { Head } from "../../components/Head";
import { Logo } from "../../components/Logo";

import "./styles.css";

function MovieInfo() {
  const [movie, setMovie] = useState();
  const randomNumber = Math.floor(Math.random() * 100);
  console.log("env", import.meta.env.VITE_BASE_URL);

  async function Movie() {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}${randomNumber}?${
        import.meta.env.VITE_API_KEY
      }&language=pt-BR`
    );
    const data = await response.json();
    setMovie(data);
  }

  useEffect(() => {
    Movie();
  }, []);

  console.log("movie", movie);

  const formatDate = (date) => {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    return year;
  };

  const round = (num) => {
    return Math.round(num * 10) / 10;
  };

  const formatMinutes = (minutes) => {
    const hour = Math.floor(minutes / 60);
    const minute = minutes % 60;
    return `${hour}h ${minute}min`;
  };

  return (
    <>
      <Head />
      {movie.title ? (
        <section className="ContentMovie">
          <div className="ContentImgMovie">
            {movie?.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                alt="Poster do filme"
              />
            ) : (
              <img
                src="public/assets/popcorn.jpeg"
                alt="Computador com código na tela"
              />
            )}
          </div>
          <div className="AboutMovie">
            <h3>{`${movie?.title} (${formatDate(movie?.release_date)})`}</h3>

            <p>
              {movie?.overview ? movie?.overview : "Descrição não informada."}
            </p>
            <p>
              Gênero:
              {movie?.genres?.map((genre) => (
                <span key={genre.id}>
                  <span>{genre.name}.</span>
                </span>
              ))}
            </p>

            <p>
              Avaliação do IMDB:
              <span>{`${round(movie?.vote_average).toFixed(1)}/10`}</span>
            </p>

            {movie?.runtime ? (
              <p>
                Duração: <span>{formatMinutes(movie?.runtime)}</span>
              </p>
            ) : (
              <p>
                Duração: <span>Não informado.</span>
              </p>
            )}

            {movie?.tagline ? (
              <p>
                Tagline: <span>{movie?.tagline}</span>
              </p>
            ) : (
              <p>
                Tagline: <span>Não informado.</span>
              </p>
            )}

            <button
              onClick={() => {
                Movie();
              }}
            >
              <Logo />
              Encontrar filme
            </button>
            <p>
              Clique em "Encontrar filme" que traremos informações de algum
              filme para você assistir hoje.
            </p>
          </div>
        </section>
      ) : (
        <section className="ContentCodeDay">
          <img src="/assets/codeDay.jpeg" alt="Computador com código na tela" />

          <div className="AboutCodeDay">
            <p>Ops, hoje não é dia de assistir filme.</p>
            <span>Bora codar! 🚀</span>

            <button
              onClick={() => {
                Movie();
              }}
            >
              <Logo />
              Encontrar filme
            </button>
            <p>
              Clique em "Encontrar filme" que traremos informações de algum
              filme para você assistir hoje.
            </p>
          </div>
        </section>
      )}
    </>
  );
}

export default MovieInfo;
