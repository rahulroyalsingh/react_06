import logo from './logo.svg';
import './App.css';

function App() {
function mango()
{ 
  alert("function called");
}

 return (
    <div className="App">
      <h1>Greetings</h1>
     <button onClick={mango()}>Click on</button>
    </div>
  );
}

export default App;
