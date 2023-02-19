export default function Button({ title, functionGame, image }) {
  return(
    <button
      type="button"
      onClick={ () => functionGame() }
    >
      {
        image ? <img src={image} className="fill-transparent w-[65%] ml-5" alt={title} />
          : <p className="m-2 underline underline-offset-2">{title}</p>
      }
    </button>
  )
}