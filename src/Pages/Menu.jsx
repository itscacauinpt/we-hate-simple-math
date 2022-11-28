import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import Button from "../Components/Button";
import titleLogo from "../img/title-math.svg";
import startButton from "../img/start-button.svg"

export default function Menu() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const startGame = () => navigate("/game");
  const moreCredits = () => navigate("/credits");
  const moreAbout = () => navigate("/more-about-math-anxiety");

  useEffect(() => { if (titleLogo && startButton) setLoading(true) }, [loading]);

  return (
    <>
    {
      loading ?
      <section class="text-center min-w-[50%]">
      <section class="justify-self-auto w-[50%] ml-[25%]">
        <img src={ titleLogo } class="fill-transparent p-10 max-w-2xl" alt="we hate simple math"/>
      </section>
      <section class="flex flex-col font-poppins font-light mb-10">
        <div class="mb-2">
          <p>quick question: what's 7 times 9?</p>
          <p>did you freaked out? well, that might be math anxiety.</p>
        </div>
        <div class="mb-2">
          <p>simple answer? math hurts people's brain.</p>
          <p>math hurts mine, and I'm talking about simple math here.</p>
        </div>
        <div class="mb-2">
          <p>so, I made this site to basically torture myself, and hopefully not be as scared while resolving some mental math.</p>
          <p>wanna join me?</p>
        </div>
      </section>
      <section class="flex justify-center flex-col mb-8">
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
        </div>
        <div>
          <Button
            title={ 'credits' }
            functionGame={ moreCredits }
          />
        </div>
      </section>
      <footer class="min-w-[50%]">
        <p>by
          <a
            class="underline underline-offset-2"
            href="https://github.com/itscacauinpt/"
            target="_blank"
            rel="noreferrer"
          >
            @itscacauinpt
          </a>
        </p>
      </footer>
      </section>
      :
      <div>
        <p>Loading...</p>
      </div>
    }
    </>
  )
}
