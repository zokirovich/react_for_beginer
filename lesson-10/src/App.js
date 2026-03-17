import { useState } from 'react'
import './App.css'

function App() {

  const [name, setName] = useState('Shokir')

  // console.log(date)
  
  const handleClick = () => {
   setName('Farrux')
   
  }
  return (
    <div className="App">
      <h2>My name is {name}</h2>
      <button onClick={handleClick}>Click me</button>

    </div>
  );
}

export default App;
