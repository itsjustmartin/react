import logo from './logo.svg';
import './App.css';

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

function App() {
  return (
    <Bag children={<h3>Hello there</h3>} name="martin"></Bag>
  );
}

export default App;
