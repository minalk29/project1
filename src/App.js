import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import ProductList from './Components/ProductList';
import LocalStorage from './Components/LocalStorage';
import Registration from './Components/Registration';
import Login from './Components/Login';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ViewProduct from './Components/ViewProduct';
import { ProductProvider } from './Components/userContext';
import Products from './ProductData';
import ViewCart from './Components/ViewCart';
import Profile from './Components/Profile';
import User from "./Components/User"
import EditProfile from './Components/EditProfile';


function App() {
  return (
   
    <div>
      {/* <User></User> */}
      {/* <ProductProvider>
        <ProductList data={Products}/>
      </ProductProvider> */}
     {/* <LocalStorage></LocalStorage> */}
     {/* <Registration></Registration> */}
     {/* <Login></Login> */}



     <Header />
     <Route path='/Login' component={Login}></Route>
     <Route path='/Signup' component={Registration}></Route>
      <Route path='/' exact component={ProductList}></Route>
     <Route path='/AfterLogin' exact component={ProductList}></Route>
     <Route path="/viewProduct/:id?" exact component={ViewProduct}></Route>
     <Route path="/Profile" exact component={Profile}></Route>
     <Route path="/EditProfile" exact component={EditProfile}></Route>
     <Route path="/Cart" exact component={ViewCart}></Route>
     <Footer />
    </div>
    
  );
}

export default App;
