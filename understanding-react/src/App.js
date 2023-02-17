import logo from './logo.svg';
import './App.css';

const [fisrtCity, second] = ["Tokyo", "Tahoe City", "New York"]

console.log(fisrtCity)
console.log(second)

function App({library}) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Learning {library}</h1>
      </header>
    </div>
  );
}

export default App;
