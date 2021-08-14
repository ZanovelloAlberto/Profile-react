import React,{ createContext, useContext, useEffect } from "react"







export const fetchTasks = async () => {
  console.log("code not reached");
  const res = await fetch('https://api.github.com/users/ZanovelloAlberto/repos')
  const data = await res.json()
  console.log(data);

  return data
  
  
}


export const dataRepos = createContext(fetchTasks())
