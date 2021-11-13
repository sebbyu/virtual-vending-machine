import '../scss/Item.scss';

export default function Item(props) {

  const handleClick = () => {
    console.log(`${props.name} - ${props.price}`);
  }

  return (
    <div className="component-item" onClick={handleClick}>
      <div className="component-item--image">
        <img src={props.image} alt="null" />
      </div>
      <div className="component-item--info">
        {props.quantity === 0 ? 
        <i style={{color: "red"}}>OUT OF STOCK</i> : 
        <div id="quantity_more_than_zero">
          <i>{props.name}</i>
          <i>{props.price}</i>
        </div>}
        
      </div>
    </div>
  )
}