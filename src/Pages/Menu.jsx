import { useNavigate } from "react-router-dom";

import Button from "../Components/Button";
import titleLogo from "../img/title-math.svg";
import startButton from "../img/start-button.svg"

export default function Menu() {
  const navigate = useNavigate();

  const startGame = () => navigate("/game");
  const moreCredits = () => navigate("/credits");
  const moreAbout = () => navigate("/more-about-math-anxiety");

  return (
    <>
      <section>
        <img src={ titleLogo } class="fill-transparent" alt="we hate simple math"/>
      </section>
      <section>
        <div>
          <p>quick question: what's 7 times 9?</p>
          <p>did you freaked out? well, that might be math anxiety.</p>
        </div>
        <div>
          <p>math hurts people's brain.</p>
          <p>math hurts mine, and I'm talking about simple math here.</p>
        </div>
        <div>
          <p>so, I made this site to basically torture myself, and hopefully not be as scared while resolving some mental math.</p>
          <p>wanna join me?</p>
        </div>
      </section>
      <section>
        <div>
          <Button
            title={ 'start game' }
            image={ startButton }
            functionGame={ startGame }
          />
        </div>
        <div>
          <Button
            title={ 'more about math anxiety' }
            functionGame={ moreAbout }
          />
          <Button
            title={ 'credits' }
            functionGame={ moreCredits }
          />
        </div>
      </section>
      <footer>
        <p>by <a href="https://github.com/itscacauinpt/" target="_blank" rel="noreferrer">@itscacauinpt</a></p>
      </footer>
    </>
  )
}
