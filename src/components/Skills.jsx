import React, { Component, useContext } from 'react'

export default class Skills extends Component {
 
  render() {
    var SData = (name, percentage) =>{
      return {name,percentage}
    }
    var mySkill = [
      {
        name:"uno",
        percentage:33
      },
      {
        name:"due",
        percentage:89
      },
      {
        name:"tre",
        percentage:66
      }
      
    ]
    return (
      <div>
         <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Percentuali</b></p>
          {mySkill.map((data,i)=>(<Skill key={i} data={data}/>))}
          
      </div>
    )
  }


}
function Skill({data}) {
  // console.log("dio cane", data);
  
  return (<div>
    <p>{data.name}</p>
        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:data.percentage + "%"}}>{data.percentage}%</div>
        </div>
  </div>);
}

