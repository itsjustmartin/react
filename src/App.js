import "./App.css";

import * as React from "react";

const Row = ({ children, spacing }) => {
  const childStyle = {
    marginLeft: `${spacing}px`,
  };
  return (
    <div className="Row">
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          style: {
            ...child.props.style,
            ...(index > 0 ? childStyle : {}),
          },
        });
      })}
    </div>
  );
};

function LiveOrders() {
  return (
    <div>
      <Row spacing={32} >
        <>pizza margrita</>
        <>2</>
        <>30$</>
        <>18:30</>
        <>John</>
      </Row>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <LiveOrders />
    </div>
  )
}
export default App;