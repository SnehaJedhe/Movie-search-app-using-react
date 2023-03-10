import React from 'react'
import '../CSS_files/search.css'
export default function Search({search,setSearch,btn,setBtn}) {
  return (
    <>
    <div className="header">
        <img src="https://th.bing.com/th/id/R.ad21fecf6dfaa4265bf0e870e55df7b1?rik=HODCvRDo70qLwQ&riu=http%3a%2f%2ffilmstarfacts.com%2fwp-content%2fuploads%2f2017%2f09%2fThe_Movies_Logo_-_Medium_Resolution_.jpg&ehk=2cR9bn6CrSItgpXCXZZlCaiChOq%2fY6uoRxn%2f9DxsftM%3d&risl=&pid=ImgRaw&r=0"/>
        <input type="text" value={search} placeholder="search here..." onChange={(e)=>{
            setSearch(e.target.value)
        }}></input>
        <button onClick={()=>{
          setBtn(search);  
        }}>Search</button>
    </div>
    </>
  )
}
