import logo from './logo.svg';
import './App.css';
import car from './car.png';
function App() {

  let fullName = "akash";

  const onChangeHandler=()=>{
       fullName = 'sathish';
       console.log(fullName);
  }

  return (
    <div>
      <img style={{width:'150px'}} src={car}/>
     <h1>{fullName}</h1>
     <button onClick={onChangeHandler}>ADD</button>
    </div>
   
  );
}

export default App;
