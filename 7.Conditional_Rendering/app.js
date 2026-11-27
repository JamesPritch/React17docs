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
