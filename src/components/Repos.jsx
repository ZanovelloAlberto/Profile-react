import React, { useEffect, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { getTTFB } from 'web-vitals'
import { dataRepos, fetchTasks } from "../Github/fetchRepo"
const Repos = () => {
  const gitReposit = fetchTasks()
  const [state, setState] = useState([])

  useEffect(() => {
    gitReposit.then((v) => setState(v))
    return () => {
      // cleanup
    }
  }, [])
  // console.log(state);
  // console.log(typeof(state));
  
  

  return (
    <div className="w3-container w3-card w3-white w3-margin-bottom">
      <h2 className="w3-text-grey w3-padding-16"><i
        className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Repositories</h2>
      <div className="w3-container">
        { state ? state.map((data,i)=>(<RepoFrame key={i} data={data}/>)): console.log("fail load git")}
      </div>
      <br />
    </div>
  )
}
export default Repos

function RepoFrame({data}) {
  // const divclick=()=>{location.href = "https://www.google.com/"}
  
  return ( 
            
  
  <div className="w3-container" >
    <hr/>
  <h5 className="w3-opacity" ><a href={data.html_url}>{data.name}</a></h5>
  <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>{data.created_at}</h6>
  <a>{data.description}</a>
  
  </div>

  )
}
