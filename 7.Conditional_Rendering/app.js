// 7 Conditional Rendering
// 7.1 Motivation
function UserGreeting(props) {
  return <h1>Good day, user</h1>;
}
function GuestGreeting(props) {
  return <h1>Please sign up</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  <Greeting isLoggedIn={true} />,
  document.getElementById("root")
);

// 7.2 Element Variables
function UserGreeting(props) {
  return <h1>Good day, user</h1>;
}
function GuestGreeting(props) {
  return <h1>Please sign up</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  )
}
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  )
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};
  }
  handleLoginClick = () => {
    this.setState({isLoggedIn: true});
  }
  handleLogoutClick = () => {
    this.setState({isLoggedIn: false});
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn
    let button
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }
    return(
      <>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </>
    )
  }
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById("root")
);
