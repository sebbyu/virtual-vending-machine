import '../scss/VendingMachine.scss';
// components
import Item from './Item';
import Logo from './Logo';

export default function VendingMachine(props) {
  return (
    <div className="component-vendingmachine">
      <div className="component-vendingmachine--itembox">
        <Item name="test" price="5"/>
        <Item name="test" price="5"/>
        <Item name="test" price="5"/>
        <Item name="test" price="5"/>
        <Item name="test" price="5"/>
        <Item name="test" price="5"/>
        <Item name="test" price="5"/>
        <Item name="test" price="5"/>
        <Item name="test" price="5"/>
      </div>
      <div className="component-vendingmachine--messagebox">
        <div className="component-vendingmachine--messagebox--money">
          <span id="logo">
            <Logo logoName="dollar"/>
          </span>
          <p>$0</p>
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