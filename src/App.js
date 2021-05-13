import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import HomeScreen from './Screen/HomeScreen'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProductDetails from './Screen/ProductDetails'
import CartScreen from './Screen/CartScreen'
import LoginScreen from './Screen/loginScreen'
import RegisterScreen from './Screen/RegisterScreen'
import ProfileScreen from './Screen/ProfileScreen'
import ShippingScreen from './Screen/shippingScreen'
import PaymentScreen from './Screen/paymentScreen'
import PlaceorderScreen from './Screen/placeorderScreen'
import OrderScreen from './Screen/orderScreen'
function App () {
  return (
    <div className='App'>
      <Router>
        <Header />
        <main>
          <Container>
            
            <Route path='/' exact component={HomeScreen} />
            <Route path='/products/:id' component={ProductDetails} />
            <Route  path="/cart/:id?" component={CartScreen} />
            <Route path='/login' component={LoginScreen} />
            <Route path="/register" component={RegisterScreen}/>
            <Route path="/profile" component={ProfileScreen}/>
            <Route path="/shipping" component={ShippingScreen}/>
            <Route path="/payment" component={PaymentScreen}/>
            <Route path="/placeorder" component={PlaceorderScreen}/>
            <Route path='/order/:id' component={OrderScreen} />

          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App
