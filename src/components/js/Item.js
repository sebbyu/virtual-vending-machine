import '../scss/Item.scss';

export default function Item(props) {

  const handleClick = () => {
    console.log(`${props.name} - ${props.price}`);
  }

  return (
    <div className="component-item" onClick={handleClick}>
      <div className="component-item--image">
        <p>test image</p>
      </div>
      <div className="component-item--info">
        <i>{props.name}</i>
        <i>{props.price}</i>
      </div>
    </div>
  )
}