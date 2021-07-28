import React, { Component, useContext } from 'react'
import Info from './Info'
import Skills from './Skills'

export default class SideBar extends Component {
  render() {
    const list = [
      { type:"golang", pcent:32},
      { type:"javascript", pcent:78},
      { type:"java", pcent:60}
    ]

    console.log(list);
    return (

      <div className="w3-third">
        <div className="w3-white w3-text-grey w3-card-4">
          <div className="w3-display-container">
            <img src="https://raw.githubusercontent.com/ZanovelloAlberto/ZanovelloAlberto/main/pic/beach.png" style={{ width: "100%" }} alt="Avatar" />
            <div className="w3-display-bottomleft w3-container w3-text-white">
              <h2>Alberto</h2>
            </div>
          </div>
          <div className="w3-container">
            <Info />
            <br />
            <Skills />
            <br />

            <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
              {list.map((data,i) =>  (<LengFrame key={i} data={data} />) )}

            <br />
          </div>
        </div>


      </div>
    )
  }
}

const LengFrame = ({data}) => {

  // const type
  // const pcent
  console.log(data);
  return (
    <div> <p>{data.type}</p>
      <div className="w3-light-grey w3-round-xlarge">
        <div className="w3-round-xlarge w3-teal" style={{ height: "24px", width: data.pcent + "%" }}></div>
      </div>
    </div>
  )

}
