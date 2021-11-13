import '../scss/VendingMachine.scss';
// components
import Item from './Item';
import Logo from './Logo';
// assets
import { dummy_data } from './../../assets/dummy_data.js';

export default function VendingMachine(props) {

  const displayItems = () => {
    return (
      dummy_data.map((x, i) => {
        return (
          <>
            <Item name={x.name} price={`$${x.price}`} 
              quantity={x.quantity} image={x.image}
              category={x.category}/>
          </>
        )
      })
    )
  }

  return (
    <div className="component-vendingmachine">
      <div className="component-vendingmachine--itembox">
        {displayItems()}
      </div>
      <div className="component-vendingmachine--messagebox">
        <div className="component-vendingmachine--messagebox--money">
          <span id="logo">
            <Logo logoName="dollar"/>
            <p>$0</p>
          </span>
          <span id="logo">
            <Logo logoName="wallet"/>
            <p>$0</p>
          </span>
        </div>
        <div className="component-vendingmachine--messagebox--message">
          <span id="logo">
            <Logo logoName="text"/>
          </span>
        </div>
        <div className="component-vendingmachine--messagebox--items">
          <span id="logo">
            <Logo logoName="cart"/>
          </span>
          <i>empty</i>
        </div>
      </div>
    </div>
  )
}