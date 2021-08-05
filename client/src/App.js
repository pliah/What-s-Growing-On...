import Header from './components/Header/Header';
import DeliveryDetails from './components/DeliveryDetails/DeliveryDetails';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import NavLinks from './components/NavLinks/NavLinks';
import Home from './components/Home/Home';
import Error from './components/Error/Error';
import { useStateValue } from './components/StateProvider/StateProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GiftCard from './components/GiftCard/GiftCard';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';
import Login from './components/Login/Login'
import Recommendation from './components/Recommendation/Recommendation';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ShowDetails from './components/Product/ShowDetails';
import Enter from './components/Login/AdminEnterPage';
import NewAdmin from './components/Login/NewAdmin';
import AdminRecommendation from './components/Login/AdminRecommendation'
function App() {
  const [ dispatch] = useStateValue()
  const [basket] =useStateValue()
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/details">
            <NavLinks />
            <ShowDetails />
          </Route>
          <Route path="/checkout">
            <NavLinks />
            <Checkout />
          </Route>
          <Route path="/delivery">
            <NavLinks />
            <DeliveryDetails />
          </Route>
          <Route path="/recommend">
            <NavLinks />
            <Recommendation />
            <Footer />
          </Route>
          <Route path="/shop">
            <NavLinks />
            <Header />
            <Footer />
          </Route>
          <Route path="/gift">
            <NavLinks />
             <GiftCard />
             <Footer />
          </Route>
          <Route path="/about">
            <NavLinks />
            <About />
            <Footer />
          </Route>
          <Route path="/contact">
            <NavLinks />
            <ContactUs/>
            <Footer />
          </Route>
          <Route path="/admin">
             <NavLinks />
             <Login />
          </Route>
          <Route path="/newAdmin">
             <NavLinks />
             <NewAdmin />
          </Route>
          <Route path="/AdminEnterPage">
             <NavLinks />
             <Enter />
          </Route>
          <Route path="/newRecommendation">
            <NavLinks />
            <AdminRecommendation/>
          </Route>
          <Route exact path="/">
              <NavLinks />
              <Home />
          </Route>
          <Route component={Error}>
          </Route> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
