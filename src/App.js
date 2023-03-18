import "./App.css";
import { useEffect, useState } from "react";

const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  return render({ mousePosition });
};

const PanelMouseLogger = () => {
  return (
    <div className="BasicTracker">
      <p>Mouse position:</p>
      <MousePosition
        render={({ mousePosition }) => (
          <div className="Row">
            <span>x: {mousePosition.x}</span>
            <span>y: {mousePosition.y}</span>
          </div>
        )}
      />
    </div>
  );
};

const PointMouseLogger = () => {
  return (
    <MousePosition
      render={({ mousePosition }) => (
        <p>
          ({mousePosition.x}, {mousePosition.y})
        </p>
      )}
    />
  );
};

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍕</header>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}

export default App;


// Higher-order components (HOCs) and render props are both patterns used in React to achieve similar goals, such as code reuse and separation of concerns. However, there are some key differences between the two:

// HOCs modify the original implementation of the component, whereas the Render Props pattern doesn’t. HOCs wrap the original component and return a new enhanced component, whereas render props pass the new functionality as a function that is called from the original component.
// They inject the new props in the component to be enhanced in a different way. HOCs add new props to the original component by wrapping it in a new component, whereas render props pass the new functionality as a function that is called from the original component.
// Render props provide the new data as a function parameter, whereas components wrapped with an HOC get the new data as a new prop. With render props, the new functionality is passed down as a function that receives the new data as a parameter, whereas with HOCs, the new data is added as a new prop to the wrapped component.