import "./App.css";

const Button = ({ type, children, ...buttonProps }) => {
  const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";
  return (
    <button className={`Button ${className}`} {...buttonProps}>
      {children}
    </button>
  );
};

const LoginButton =({type , children ,...buttonProps}) => {
  return(
    <Button type="secondary" {...buttonProps} onClick={()=>{alert("Logging in !")}}>
      {children}
    </Button>
  )
}

const LoginButton2 =({type , children ,...buttonProps}) => {
  return(
    <Button type="secondary" onClick={()=>{alert("Logging in !")}} {...buttonProps} >
      {children}
    </Button>
  )
}

function App (){
  return (
    <div className="App" >
      <header className="Header">Little Lemon</header>
      <Button type="primary" onClick={()=>{alert("Signing up !")}} > sign up</Button>
      {/* try the over ride which one will done */}
      <LoginButton type="secondary" onClick={()=>{alert("Signing up !")}}>Log in "overwrite not allowed"</LoginButton>
      <LoginButton2 type="secondary" onClick={()=>{alert("Signing up !")}}>Log in "overwrite will done"</LoginButton2>
      
    </div>
  )
}
export default App;
