import '../scss/Button.scss'

export default function Button(props) {

  const handleClick = () => {
    console.log(props.text);
  }

  return (
    <div className="component-button">
      <button id="button" onClick={handleClick}>
        {props.text}
      </button>
    </div>
  )
}