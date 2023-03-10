
import './App.css';
import { useEffect, useState } from 'react';
import Search from './components/Search';
import Result from './components/Result';

function App() {
  const[result,setResult]=useState([]);
  const[search,setSearch]=useState("");
  const[btn,setBtn]=useState("");
  useEffect(()=>{
      async function data(){
        const resp=await fetch(`https://www.omdbapi.com/?s=${btn}&apikey=799cdc89`)
        const resu=await resp.json();
        // console.log(resu);
        setResult(resu.Search)
      }
      data()
  },[btn])
  return (
    <div className="App">
      <Search 
      search={search}
      setSearch={setSearch}
     btn={btn}
     setBtn={setBtn}
      />

    <Result
    result={result}
    />
    </div>
  );
}

export default App;
