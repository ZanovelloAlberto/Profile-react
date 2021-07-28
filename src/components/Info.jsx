import React, { Component } from 'react'
import bigData from "./../index.js"
export default class Info extends Component {
 
  render() {
    var SData = (styl, text) =>{
      return {styl,text}
    }
    var Data = [
      SData("fa-briefcase","Software Developer"),
      SData("fa-home","Loria, Italy"),
      SData("fa-envelope","zanovello2002@gmail.com"),
      // SData("fa-phone","s")
    ]
    return (
      <div>
        
        {Data.map((data,i)=>(<InfoPar key={i} styl={data.styl} text={data.text}/>))}


      </div>
    )
  }
}
function InfoPar(data,i){
  var dstyle = "fa fa-fw w3-margin-right w3-large w3-text-teal "
  var styl = data.styl
  var text = data.text
  return(
    <div>
      <p><i key={i} className={dstyle + styl}></i>{text}</p>
    </div>
  )
}
