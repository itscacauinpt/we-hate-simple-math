export default function SimpleButton({ title, functionGame, classStyle }) {
  return(
    <button
      className={ classStyle }
      onClick={ () => functionGame() }
    >
      {title}
    </button>
  )
}