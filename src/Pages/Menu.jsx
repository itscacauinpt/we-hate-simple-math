import Button from "../Components/Button";

export default function Menu() {
  function startGame() {
    console.log('clica');
  }

  return (
    <>
      <header>
        <img src="../title-math.svg" alt="we hate simple math"/>
      </header>
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
        </div>
      </section>
      <section>
        <Button
          title={ 'start game' }
          image={ '../start-button.svg' }
          startGame={ startGame }
        />
      </section>
    </>
  )
}
