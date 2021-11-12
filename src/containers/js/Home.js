import '../scss/Home.scss';
// Components
import Header from '../../components/js/Header'
import NavigationBar from '../../components/js/NabigationBar';
import VendingMachine from '../../components/js/VendingMachine';

export default function Home(props) {
  return (
    <div className="container-home">
      <Header />
      <NavigationBar />
      <VendingMachine />
    </div>
  )
}