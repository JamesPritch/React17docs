// 5.0 Motivation
// Current method of an updating component
function Clock (props) {
  return (
    <div>
      <h1> Hello World </h1>
      <p> Good morning, the time is {props.time.toLocaleTimeString()}. </p>
    </div>
  );
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


// 5.1 Converting a function into a class
// Function example
function Clock (props) {
  return (
    <div>
      <h1> Hello World </h1>
      <p> Good morning, the time is {props.date.toLocaleTimeString()}. </p>
    </div>
  );
}

// Class example
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1> Hello World </h1>
        <p> Good morning, the time is {this.props.date.toLocaleTimeString()}. </p>
      </div>
    );
  }
}

// Both run with
ReactDOM.render(
  <Clock date={new Date()} />,
  document.getElementById("root")
);


// 5.2 Adding local state to a class
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  render() {
    return (
      <div>
        <h1> Hello World </h1>
        <p> Good morning, the time is {this.state.date.toLocaleTimeString()}. </p>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById("root")
);







