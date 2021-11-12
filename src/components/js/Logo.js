import '../scss/Logo.scss';
// helper
import { map } from '../../helpers/logoName';

export default function Logo(props) {

  const handleClick = () => {
    console.log(props.logoName);
  }

  return (
    <div className="component-logo">
      <i id="logo" className={map.get(props.logoName)}
        onClick={handleClick}
        style={{fontSize: props.fontSize}}></i>
    </div>
  )
}