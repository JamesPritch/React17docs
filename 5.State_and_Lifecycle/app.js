// 5.0 Motivation
// Current method of an updating component
function Clock (props) {
  return (
    <div>
      <h1> Hello World </h1>
      <p> Good morning, the time is {props.time.toLocaleTimeString()}. </p>
    </div>
  )
}

function tick () {
  const element = (
    <Clock time={new Date()} />
  );
  ReactDOM.render(
    element,
    document.getElementById("root")
  );
}

setInterval(tick(), 1000);

// Ideally want

ReactDOM.render(
  <Clock />,
  document.getElementById("root")
);
