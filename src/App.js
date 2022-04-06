import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name:"Anik",
    job: "Engneer"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <p>My name is : {person.name +". My job is "+person.job}</p>
        <h1>This is ANIK kumar Das</h1>
      </header>
    </div>
  );
}

export default App;
