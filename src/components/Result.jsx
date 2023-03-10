import React from 'react'
import '../CSS_files/result.css';
export default function Result({result}) {
  if(result){
    return (
        <>
        <div className="main-div">
           {result.map((ele)=>{
            // console.log(ele);
            return <div className='card'>
                <h3>{ele.Title}</h3>
                <img src={ele.Poster}/>
                <p>{ele.Year}</p>

            </div>
           })}
        </div>
        </>
      )
  }

}
