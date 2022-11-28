export default function SimpleButton({ title, functionGame, classStyle }) {
  return(
    <button
      class={ classStyle }
      onClick={ () => functionGame() }
    >
      {title}
    </button>
  )
}