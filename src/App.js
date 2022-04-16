import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let person={
    name:"Anik Kumar Das",
    Age: 25
  }
  let style = {
    color:"red",
    backgroundColor:"yellow"
  }
  const names=["Anik kumar das","Sagar kumar das","Jhinuk Rani das","Ananna Rani das"];
  
  const products =[
    {pname:"Photoshop", price:"$99.99"},
    {pname:"Illlustrator",price:"$69.99"}
  ];


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
<<<<<<< HEAD
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <p>My name is : {person.name +". My job is "+person.job}</p>
        <h1>This is ANIK kumar Das</h1>
        <h2>Now to began react coding</h2>
=======
        <Counter></Counter>

        <Users></Users>

        <h1>I'm coming to learn React</h1>
        <h2 style={style} >{person.name +", "+"Age is: "+person.Age}</h2>
        <p>This is Anik kumar das Prince</p>
        
        <ul>
          <li>{names[0]}</li>
          <li>{names[1]}</li>
          <li>{names[2]}</li>
        </ul>
        

        <Person name={names[0]} work="need to do learn React Javascript for next 20th april need to submit a news static site"></Person>
        <Person name={names[2]} work="need to go for forien student trip for master degree"></Person>
        <Person name={names[1]} work="need to be a very good housewife and mother"></Person>
        <Person name={names[3]} work="need to be a physician in physics"></Person>
        
>>>>>>> c37a9bb42cecfc3f6671cf5117bc05c4f96fc5bc
      </header>
    </div>
  ); 
}

function Counter(){
  const [count, setCount] = useState(0);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count +1 )}>Increse</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [] )

  return(
    <div>
      <h3>Dynamic Users: </h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle={
    color:"red",
    border:"1px solid gray",
    margin:"2px",
    borderRadius:"5px",
    height:"220px",
    width:"280px",
    float:"left"
  }
  const {name,price}= props.product;
  return(
    <div style={productStyle}>
      <h4>{name}</h4>
      <h2></h2>
      <button>Buy Now</button>
    </div>
  )
}


function Person(props){
  const personStyle={
    border:"2px solid green",
    margin:"10px",
    width:"60%"
  }
  return (
    <div style={personStyle}>
      <h1 style={{color:"red"}}>My name is: {props.name}</h1>
      <h2 style={{color:"orange"}}>My work is : {props.work}</h2>
    </div>
  );
}

export default App;
