import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
function WelcomeMessage(){ 
 return <p>Welcome!</p>
}
function App() {
  let message='Hello!'
    const [count,setCount]=useState(0)
    const [count2,setCount2]=useState(0)
     
      return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <p className="mt-10">
          You clicked {count} times
        </p>
        <p>
          You clicked {count2} times
        </p>
        <button className="mb-20" onClick={()=>setCount(count+1)}>Click me</button>
        <button onClick={()=>setCount(0)}>Zero me</button>
                <button onClick={()=>setCount2(count2+1)}>Click me</button>
        <button onClick={()=>setCount2(0)}>Zero me</button>
        </header>

      </div>
    )
  
}

export default App;
