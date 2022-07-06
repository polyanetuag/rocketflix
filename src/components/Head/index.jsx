import { NavLink } from "react-router-dom";
import "./styles.css";

export function Head() {
  return (
    <section className="Head">
      <NavLink to="/">
        <img
          className=""
          src="public/assets/shuffle.svg"
          alt="Ícone de aleatório"
        />
      </NavLink>
      <h1>Não sabe o que assistir?</h1>
    </section>
  );
}
