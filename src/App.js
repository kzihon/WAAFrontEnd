import logo from './logo.svg';
import './App.css';
import Posts from './posts/Posts';
import { useState } from 'react';
import Dashboard from './components/ dashboard/ Dashboard';

function App() {
 const [counter, setCounter] = useState(0);
    
  const counterHandler =()=>{
    setCounter(counter + 1);
    
  }
  return (
    <div className="App">
      <h1>Welcome To WAA_Labs</h1>
     <Dashboard/>
      {/* <Posts counterHandler = {counterHandler}/> */}
      <label>{counter}</label>
      
      <button onClick = {counterHandler}>{counter}</button>
    </div>
  );
}

export default App;
