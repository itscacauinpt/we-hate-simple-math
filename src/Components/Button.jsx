export default function Button({ title, startGame, image }) {
  return(
    <button
      onClick={ () => startGame() }
    >
      <img src={image} alt={title} />
    </button>
  )
}