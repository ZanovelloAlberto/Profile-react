import { Component } from 'react'
import { useContext } from 'react';
import Footer from './Footer'
import SideBar from './SideBar'
import { useState, useEffect } from 'react'
import  { dataRepos }  from "../Github/fetchRepo"
import Repos from './Repos';
import React,{ createContext } from 'react'
import { GetRepo } from '../Github/fetchRepo';
import { fetchTasks } from '../Github/fetchRepo';


const MainPage = () => {


  
  
  // const [state, setState] = useState([])
  // useContext(dataRepos).then((v) => setState(v))



  return (
    <div className="w3-content w3-margin-top">
      <div className="w3-row-padding">
        <SideBar></SideBar>

        <div className="w3-twothird">
          
            <Repos/>
            {/* {state} */}
        </div>
        
      </div>
      <Footer/>
    </div>

  )
}

export default MainPage

