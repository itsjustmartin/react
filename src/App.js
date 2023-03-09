import logo from './logo.svg';
import './App.css';
import MealsProvider from './provider/MealsProvider';
import MealsList from './components/MeatList';
import Counter from './components/Counter';
import Wallet from './components/Wallet';

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
    <Bag children={<h3>Hello there</h3>} name="martin">child</Bag>
    {/* <Avatar /> */}

    <Wallet/>

    <MealsProvider>
        <MealsList />
        <Counter />
    </MealsProvider>

    </div>
  );
}

export default App;
