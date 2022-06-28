import { Button } from "../../components/Button";
import { Head } from "../../components/Head";

import "./styles.css";

function NotFound() {
  return (
    <>
    <Head />
    <section className="ContentNotFound">
      <div className="ImgNotFound">
        <img
          src="src/Assets/codeDay.jpeg"
          alt="Computador com código na tela"
        />
      </div>
      <div className="CodeDay">
        <p>Ops, hoje não é dia de assistir filme.</p>
        <span>Bora codar! 🚀</span>
        <Button />
      </div>
    </section>
    </>
  );
}

export default NotFound;
