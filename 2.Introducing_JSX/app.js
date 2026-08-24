function formatName(user){
  return user.firstName + " " + user.lastName
};

function getGreeting(user){
  if (user){
    return <p>Hello, {formatName(user)}</p>
  }
  return <p>Hello, stranger</p>
};

const user = {
  firstName: "Joe",
  lastName: "Bloggs"
};

const element = (
  <>
    <h1>Hello, world</h1>
    {getGreeting(user)}
    <a href="https://www.reactjs.org">Link to React</a>
    <img src={user.avatarUrl}></img>
    <img src={user.avatarUrl}/>
  </>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
