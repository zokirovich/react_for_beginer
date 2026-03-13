import './App.css'

function App() {

let name  = 'Shokir'

const handClick = () => {
  name = 'Abdulloh'
  console.log(name)

}  
  return (
    <div className="App">
     <h1>My name is {name}</h1>
     <button onClick={handClick}>Click me</button>
    </div>
  );
}

export default App;
