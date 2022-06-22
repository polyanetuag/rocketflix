import "./styles.css";

export function MovieInfo() {
  return (
    <section className="ContentMovie">
      <div className="ImgMovie">
        <img src="/src/Assets/teste.png" alt="Poster do filme" />
        <p>IMDB: 7/10</p>
      </div>
      <div className="AboutMovie">
        <h3>Título do filme</h3>
        <p>Sinopse do filme</p>
      </div>
    </section>
  );
}
