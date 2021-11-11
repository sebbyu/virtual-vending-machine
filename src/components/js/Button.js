import '../scss/Button.scss'

export default function Button(props) {

  return (
    <div className="component-button">
      <button id="button">
        {props.text}
      </button>
    </div>
  )
}