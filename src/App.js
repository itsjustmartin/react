import logo from './logo.svg';
import './App.css';
import MealsProvider from './provider/MealsProvider';
import MealsList from './components/MeatList';
import Counter from './components/Counter';
import Wallet from './components/Wallet';
import {Routes , Route ,Link} from "react-router-dom";

function Bag(props) {
  const bag = {
      padding: "20px",
      border: "1px solid gray",
      background: "#fff",
      margin: "20px 0"
  }
  return (
      <div style={bag}> hi
          {props.children}
          {props.name}
      </div>
  )
}

function Avatar(props){
  const userLogo =<img alt="alt text" src={logo} />
  return userLogo;
}

function App() {
  return (<div>
    <nav>
      <Link to="/" className='nav-item' >HomePage</Link>
      <Link to="/avatar" className='nav-item' >Avatar</Link>
      <Link to="/wallet" className='nav-item' >Wallet</Link>
      <Link to="/mealsMenu" className='nav-item' >Meals Menu</Link>
    </nav>
    <Routes>
      <Route path='/' element={<Bag children={<h3>Hello there</h3>} name="martin">child</Bag>}></Route>
      <Route path='/avatar' element={<Avatar />}></Route>
      <Route path='/wallet' element={<Wallet/>}></Route>
      <Route path='/mealsMenu' element={
        <MealsProvider>
          <MealsList />
          <Counter />
        </MealsProvider>
      }></Route>
    </Routes>
  </div>);
};

export default App;
