// 4.2
function Welcome(props){
  return <h1>Hello, {props.name}</h1>
};

const element = <Welcome name="James" />;

ReactDOM.render(
  element,
  document.getElementById('root')
);

// 4.3
function Welcome(props) {
  return(
  <h1>Hello, {props.name}</h1>
  )
}

function App() {
  return(
    <div>
      <Welcome name="James" />
      <Welcome name="Rob" />
      <Welcome name="Michael" />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
