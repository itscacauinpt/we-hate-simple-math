export default function Button({ title, functionGame, image }) {
  return(
    <button
      type="button"
      onClick={ () => functionGame() }
    >
      {
        image ? <img src={image} class="fill-transparent" alt={title} /> : <p>{title}</p>
      }
    </button>
  )
}