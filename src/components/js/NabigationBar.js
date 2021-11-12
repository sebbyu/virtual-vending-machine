import '../scss/NavigationBar.scss';
// components
import Button from './Button';

export default function NavigationBar(props) {
  return (
    <div className="component-navigationbar">
      <div className="component-navigationbar--buttons">
        <Button text="Home" />
        <Button text="My Account" />
        <Button text="Product List" />
      </div>
      <div></div>
      <div className="component-navigationbar--logins">
        <Button text="Login" />
        <Button text="Cart" />
      </div>
    </div>
  )
}