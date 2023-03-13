import "./App.css";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Switch from "./Switch";
import { UserProvider, useUser } from "./UserContext";


const LoggedInUser = () => {
  const user = useUser();
  return (
    <p>Hello <span className="Username">{user.email}</span></p>
  )
}

const Title = ({ children }) => {
  const { theme } = useTheme();
  return (
    <h2
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </h2>
  );
};

const Paragraph = ({ children }) => {
  const { theme } = useTheme();
  return (<div>
    <p
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </p>
  </div>
  );
};

const Content = () => {
  const user = useUser();
  return (
    <div>
      <Paragraph>
        We are a pizza loving family. And for years, I searched and searched and
        searched for the perfect pizza dough recipe. I tried dozens, or more.
        And while some were good, none of them were that recipe that would
        make me stop trying all of the others.
        <p>Written by {user.name}</p>
      </Paragraph>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <Switch />
      <Title>Little Lemon 🍕</Title>
      <LoggedInUser/>
      
    </header>
  );
};

const Page = () => {
  return (
    <div className="Page">
      <Title>When it comes to dough</Title>
      <Content />
    </div>
  );
};

function App() {
  const { theme } = useTheme();
  return (
    <div
      className="App"
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
      }}
    >
      <Header />
      <Page />
    </div>
  );
}

function Root() {
  return (
      <ThemeProvider>
        <UserProvider><App /></UserProvider>
      </ThemeProvider>
  );
}

export default Root;
